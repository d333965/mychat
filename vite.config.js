import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '127.0.0.1', // 自定义主机名
    port: 9000, // 自定义端口
   // 检测到/api则代理到后端
    proxy: {
     '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
       }
     }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
});