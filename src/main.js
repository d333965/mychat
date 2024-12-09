import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
// 导入中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
const pinia = createPinia()

// 添加持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
  .use(router)
  .use(ElementPlus)
  .use(zhCn)
  .use(axios)

app.mount('#app')