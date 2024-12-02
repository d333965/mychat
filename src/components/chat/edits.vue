<template>
  <div class="header-container">
    <!-- 侧边栏图标和提示文字容器 -->
    <div class="sidebar-container">
      <svg
        class="sidebar-icon"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.875 3.75V26.25M6.25 8.75H7.5M6.25 12.5H7.5M2.5 15C2.5 10.3875 2.5 8.0825 3.5175 6.44875C3.884 5.85441 4.35143 5.3286 4.89875 4.895C6.35 3.75 8.4 3.75 12.5 3.75H17.5C21.6 3.75 23.6488 3.75 25.1013 4.895C25.6388 5.3175 26.1063 5.84375 26.4825 6.44875C27.5 8.0825 27.5 10.3875 27.5 15C27.5 19.6125 27.5 21.9175 26.4825 23.5512C26.116 24.1456 25.6486 24.6714 25.1013 25.105C23.65 26.25 21.6 26.25 17.5 26.25H12.5C8.4 26.25 6.35125 26.25 4.89875 25.105C4.35143 24.6714 3.884 24.1456 3.5175 23.5512C2.5 21.9175 2.5 19.6125 2.5 15Z"
          stroke="#8C8C8C"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="tooltip">打开边栏</div>
    </div>

    <!-- 新建图标和提示文字容器 -->
    <div class="new-chat-container">
      <svg
        class="new-icon"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.416687 6.28553C0.416687 4.72901 1.03501 3.23624 2.13564 2.13561C3.23627 1.03498 4.72904 0.416656 6.28556 0.416656H12.5C12.8205 0.416656 13.1278 0.543963 13.3544 0.770569C13.581 0.997176 13.7084 1.30452 13.7084 1.62499C13.7084 1.94546 13.581 2.2528 13.3544 2.47941C13.1278 2.70602 12.8205 2.83332 12.5 2.83332H6.28556C5.36998 2.83332 4.4919 3.19704 3.84448 3.84445C3.19707 4.49187 2.83335 5.36995 2.83335 6.28553V18.7144C2.83335 19.63 3.19707 20.5081 3.84448 21.1555C4.4919 21.8029 5.36998 22.1667 6.28556 22.1667H18.7145C19.6301 22.1667 20.5081 21.8029 21.1556 21.1555C21.803 20.5081 22.1667 19.63 22.1667 18.7144V12.5C22.1667 12.1795 22.294 11.8722 22.5206 11.6456C22.7472 11.419 23.0545 11.2917 23.375 11.2917C23.6955 11.2917 24.0028 11.419 24.2294 11.6456C24.456 11.8722 24.5834 12.1795 24.5834 12.5V18.7144C24.5834 20.271 23.965 21.7637 22.8644 22.8644C21.7638 23.965 20.271 24.5833 18.7145 24.5833H6.28556C4.72904 24.5833 3.23627 23.965 2.13564 22.8644C1.03501 21.7637 0.416687 20.271 0.416687 18.7144V6.28553Z"
          fill="#8C8C8C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.2905 13.9729L13.6262 15.58L12.378 13.5102L15.0423 11.9031L15.046 11.9007C15.1481 11.8392 15.2422 11.7653 15.3263 11.6807L21.38 5.59557C21.4407 5.53444 21.4991 5.47116 21.5552 5.40587C21.9552 4.93945 22.5473 4.01628 21.8307 3.29612C21.2254 2.68712 20.3578 3.26228 19.7959 3.75649C19.6452 3.88936 19.5001 4.02844 19.3609 4.17337L19.3198 4.21445L13.3507 10.2138C13.2089 10.3547 13.0979 10.5234 13.0244 10.7092L12.0287 13.2141C12.0099 13.2612 12.0063 13.3131 12.0186 13.3624C12.0309 13.4117 12.0583 13.4558 12.0971 13.4886C12.1359 13.5214 12.184 13.5411 12.2347 13.545C12.2853 13.5488 12.3346 13.5366 12.378 13.5102L13.6262 15.58C11.4451 16.8947 8.84116 14.6859 9.78366 12.3199L10.7805 9.81628C10.9746 9.32703 11.2666 8.88255 11.6385 8.51007L17.6064 2.50949L17.6415 2.47445C17.8191 2.2932 18.416 1.68178 19.1398 1.24195C19.5349 1.00391 20.1657 0.688533 20.945 0.628116C21.8392 0.556824 22.7938 0.838366 23.543 1.59116C24.1164 2.15761 24.477 2.90443 24.564 3.70574C24.6239 4.33032 24.5284 4.96001 24.2861 5.53878C23.9357 6.40516 23.3508 7.04195 23.0935 7.29932L17.0397 13.3845C16.8141 13.6109 16.5644 13.807 16.2905 13.9729ZM21.6712 5.36237C21.6712 5.36237 21.6664 5.36599 21.6555 5.36962L21.6712 5.36237Z"
          fill="#8C8C8C"
        />
      </svg>
      <div class="tooltip">新聊天</div>
    </div>

    <!-- 将model和箭头包裹在一起 -->
       <!-- 模型选择 -->
    <div class="model-wrapper" @click="toggleModels">
      <div class="model">model</div>
      <svg
        class="down-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 10.207L11.854 6.354L11.147 5.646L8 8.793L4.854 5.646L4.146 6.354L8 10.207Z"
          fill="#BABABA"
        />
      </svg>
      <models class="models" v-show="showModels"/>
    </div>
  </div>



</template>

<script setup>
import models from "./models.vue"
import { ref, onMounted, onUnmounted } from 'vue'

const showModels = ref(false)

const toggleModels = (event) => {
  // 阻止事件冒泡，这样点击model-wrapper时不会触发document的点击事件
  event.stopPropagation()
  showModels.value = !showModels.value
}

// 处理点击其他地方的函数
const handleClickOutside = (event) => {
  const modelWrapper = document.querySelector('.model-wrapper')
  // 如果点击的不是model-wrapper内的元素，则关闭models
  if (modelWrapper && !modelWrapper.contains(event.target)) {
    showModels.value = false
  }
}

// 组件挂载时添加事件监听
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// 组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.models{
  position: absolute;
  top: 36px;
  z-index: 1000;
}

.frame-2 {
  width: 62px;
  height: 40px;
  position: relative;
}
.rectangle-3 {
  background: var(--black, #000000);
  border-radius: 10px;
  width: 62px;
  height: 28px;
  position: absolute;
  left: 0px;
  top: 12px;
}
.play-arrow-filled {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 6px;
  top: 24px;
  transform: translate(0px, -24px);
  overflow: visible;
}
.Tips {
  color: #ffffff;
  text-align: left;
  font-family: "RobotoMono-Bold", sans-serif;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  left: 7px;
  top: 18px;
}

.header-container {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #fff;
}

.sidebar-icon, .new-icon {
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.sidebar-icon:hover, .new-icon:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.model {
  color: var(--gray4, #5d5d5d);
  font-family: "RobotoMono-Bold", sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

.down-icon {
  cursor: pointer;
  margin-top: 6px;
}

/* model和down-icon作为一个整体添加hover效果 */
.model-wrapper {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  position: relative;
}

.model-wrapper:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.sidebar-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #000000;
  color: #ffffff;
  padding: 8px 8px;
  border-radius: 10px;
  font-family: "RobotoMono-Bold", sans-serif;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  margin-top: 8px;
}

.sidebar-container:hover .tooltip,
.new-chat-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

/* 添加一个小三角形 */
.tooltip::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #000000;
}

/* 为新建图标容器添加相同的样式 */
.new-chat-container {
  position: relative;
  display: inline-block;
}
</style>
  