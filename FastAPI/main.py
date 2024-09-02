# main.py
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.API.API import router as chat_router


app = FastAPI()

# 注册路由
app.include_router(chat_router, prefix="/api")
# 挂载静态文件路径，'img'目录可以通过 '/img' URL 访问
app.mount("/api/img", StaticFiles(directory="app/img"), name="img")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有方法，包括 POST 和 OPTIONS
    allow_headers=["*"],  # 允许所有头部
)


if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
