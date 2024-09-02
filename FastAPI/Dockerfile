# 使用官方的 Python 镜像作为基础镜像
FROM python:3.10-slim

# 设置工作目录
WORKDIR /app

# 复制 requirements.txt 并安装依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# 复制应用代码
COPY . .

# 暴露 8000 端口
EXPOSE 8000

# 启动 Uvicorn 服务器
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
