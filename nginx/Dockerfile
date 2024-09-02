# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 复制自定义的 Nginx 配置文件
COPY default.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]