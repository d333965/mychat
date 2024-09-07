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
    file_path = os.path.join(os.path.dirname(__file__), "../json/GPTs.json")
    
    try:
        # 打开并读取JSON文件
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        # 返回JSON内容
        return JSONResponse(content=data)
    except Exception as e:
        # 如果发生错误，返回错误信息
        return JSONResponse(content={"error": str(e)}, status_code=500)

# AI绘图
@router.get("/Draw/")
async def get_Draw():
    # 定义文件路径
    file_path = os.path.join(os.path.dirname(__file__), "../json/Draw.json")
    
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
def generate_routes(json_file):
    file_path = os.path.join(os.path.dirname(__file__), f"../json/{json_file}")
    with open(file_path, 'r', encoding='utf-8') as file:
        items = json.load(file)

    first_base_url = items[0]['base_url']

    for item in items:
        url = item['url'].strip('/')
        base_url = item['base_url'] if item['base_url'] else first_base_url
        api_key = item['api_key']
        
        def create_route(url, base_url, api_key):
            @router.post(f"/{url}/")
            async def dynamic_route(request: MessageRequest):
                return await process_request(request, base_url, api_key)
            return dynamic_route

        router.route(f"/{url}/", methods=["POST"])(create_route(url, base_url, api_key))

# 为GPTs.json和Draw.json生成路由
generate_routes("GPTs.json")
generate_routes("Draw.json")

