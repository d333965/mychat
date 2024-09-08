# 使用 Node.js 镜像来构建 Vue 应用
FROM node:14 as build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY vue3/package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件并构建应用
COPY vue3 .
RUN npm run build

# 生产阶段
FROM nginx:alpine as production-stage

# 从构建阶段复制构建后的文件并复制到 Nginx 目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]