from fastapi import APIRouter
from pydantic import BaseModel
from app.API.utils import process_request
from fastapi.responses import JSONResponse
import json
import os

router = APIRouter()

class MessageRequest(BaseModel):
    query: str
    conversation_id: str = ""
    user: str = "default_user"
    files: list = []

# 查询GPTs
@router.get("/GPTs/")
async def get_gpts():
    # 定义文件路径
    file_path = os.path.join(os.path.dirname(__file__), "../json/GTPs.json")
    
    try:
        # 打开并读取JSON文件
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        # 返回JSON内容
        return JSONResponse(content=data)
    except Exception as e:
        # 如果发生错误，返回错误信息
        return JSONResponse(content={"error": str(e)}, status_code=500)

# 动态生成路由
file_path = os.path.join(os.path.dirname(__file__), "../json/GTPs.json")
with open(file_path, 'r', encoding='utf-8') as file:
    gtps = json.load(file)

for gtp in gtps:
    url = gtp['url'].strip('/')

    # 使用闭包确保每个路由函数中的`mode`参数是独立的
    def create_route(mode):
        @router.post(f"/{mode}/")
        async def dynamic_route(request: MessageRequest):
            return await process_request(request, mode)
        return dynamic_route

    # 动态创建并注册路由
    create_route(url)


