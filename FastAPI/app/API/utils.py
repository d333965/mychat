from fastapi import HTTPException
import httpx
from fastapi.responses import StreamingResponse
import asyncio
import json
import os

async def process_request(request, config_key: str, retries: int = 5, delay: int = 2):
    # 获取config.json的路径
    config_path = os.path.join(os.path.dirname(__file__), '../json/config.json')

    # 读取并解析config.json
    with open(config_path, 'r') as config_file:
        config = json.load(config_file)

    # 获取具体的配置项
    base_url = config.get("BASE_URL")
    api_key = config.get(config_key)

    data = {
        "inputs": {},
        "query": request.query,
        "response_mode": "streaming",
        "conversation_id": request.conversation_id,
        "user": request.user,
        "files": request.files
    }

    # 参数校验
    if not request.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty.")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    async def event_generator():
        attempts = 0
        buffer = ""
        while attempts < retries:
            async with httpx.AsyncClient(timeout=10) as client:
                try:
                    async with client.stream("POST", f"{base_url}", headers=headers, json=data) as response:
                        if response.status_code != 200:
                            error_content = await response.aread()
                            raise HTTPException(status_code=response.status_code, detail=error_content.decode())

                        async for chunk in response.aiter_text():
                            buffer += chunk  # 将当前chunk数据加入缓冲区
                            events = buffer.split("\n")  # 分割缓冲区内容
                            buffer = events.pop()  # 保留最后一部分（可能是不完整的数据）

                            for event in events:
                                if event.startswith("data: "):
                                    json_data = event[6:].strip()
                                    if json_data:
                                        try:
                                            # 验证是否为有效的JSON
                                            yield f"data: {json_data}\n\n"
                                        except json.JSONDecodeError:
                                            print("JSON解码错误，数据不完整:", json_data)
                    return  # 成功后直接返回
                except httpx.HTTPStatusError as e:
                    raise HTTPException(status_code=e.response.status_code, detail=str(e))
                except (httpx.RequestError, httpx.ReadTimeout) as e:
                    attempts += 1
                    if attempts >= retries:
                        raise HTTPException(status_code=500, detail=f"Request failed after {retries} attempts: {str(e)}")
                    await asyncio.sleep(delay)  # 等待一段时间后重试
                except Exception as e:
                    raise HTTPException(status_code=500, detail=str(e))

    # 设置响应头
    response_headers = {
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no"
    }

    return StreamingResponse(event_generator(), media_type="text/event-stream", headers=response_headers)
