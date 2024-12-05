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
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.5 8.57125C2.5 6.96105 3.13965 5.41681 4.27823 4.27823C5.41681 3.13965 6.96105 2.5 8.57125 2.5H15C15.3315 2.5 15.6495 2.6317 15.8839 2.86612C16.1183 3.10054 16.25 3.41848 16.25 3.75C16.25 4.08152 16.1183 4.39946 15.8839 4.63388C15.6495 4.8683 15.3315 5 15 5H8.57125C7.6241 5 6.71573 5.37626 6.04599 6.04599C5.37626 6.71573 5 7.6241 5 8.57125V21.4287C5 22.3759 5.37626 23.2843 6.04599 23.954C6.71573 24.6237 7.6241 25 8.57125 25H21.4287C22.3759 25 23.2843 24.6237 23.954 23.954C24.6237 23.2843 25 22.3759 25 21.4287V15C25 14.6685 25.1317 14.3505 25.3661 14.1161C25.6005 13.8817 25.9185 13.75 26.25 13.75C26.5815 13.75 26.8995 13.8817 27.1339 14.1161C27.3683 14.3505 27.5 14.6685 27.5 15V21.4287C27.5 23.0389 26.8604 24.5832 25.7218 25.7218C24.5832 26.8604 23.0389 27.5 21.4287 27.5H8.57125C6.96105 27.5 5.41681 26.8604 4.27823 25.7218C3.13965 24.5832 2.5 23.0389 2.5 21.4287V8.57125Z"
          fill="#8C8C8C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9212 16.5238L16.165 18.1863L14.8737 16.045L17.63 14.3825L17.6337 14.38C17.7394 14.3164 17.8368 14.24 17.9237 14.1525L24.1862 7.85751C24.249 7.79426 24.3094 7.72881 24.3675 7.66126C24.7812 7.17876 25.3937 6.22376 24.6525 5.47876C24.0262 4.84876 23.1287 5.44376 22.5475 5.95501C22.3916 6.09246 22.2414 6.23633 22.0975 6.38626L22.055 6.42876L15.88 12.635C15.7334 12.7808 15.6185 12.9552 15.5425 13.1475L14.5125 15.7388C14.4929 15.7875 14.4893 15.8412 14.502 15.8922C14.5147 15.9431 14.5431 15.9888 14.5832 16.0227C14.6233 16.0566 14.6731 16.077 14.7255 16.081C14.7779 16.085 14.8289 16.0724 14.8737 16.045L16.165 18.1863C13.9087 19.5463 11.215 17.2613 12.19 14.8138L13.2212 12.2238C13.422 11.7176 13.724 11.2578 14.1087 10.8725L20.2825 4.66501L20.3187 4.62876C20.5025 4.44126 21.12 3.80876 21.8687 3.35376C22.2775 3.10751 22.93 2.78126 23.7362 2.71876C24.6612 2.64501 25.6487 2.93626 26.4237 3.71501C27.0169 4.30099 27.39 5.07356 27.48 5.90251C27.5419 6.54862 27.4431 7.20003 27.1925 7.79876C26.83 8.69501 26.225 9.35376 25.9587 9.62001L19.6962 15.915C19.4629 16.1492 19.2046 16.3521 18.9212 16.5238ZM24.4875 7.61626C24.4875 7.61626 24.4825 7.62001 24.4712 7.62376L24.4875 7.61626Z"
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
      <models class="models" v-show="showModels" />
    </div>
  </div>
</template>

<script setup>
import models from "./models.vue";
import { ref, onMounted, onUnmounted } from "vue";

const showModels = ref(false);

const toggleModels = (event) => {
  // 阻止事件冒泡，这样点击model-wrapper时不会触发document的点击事件
  event.stopPropagation();
  showModels.value = !showModels.value;
};

// 处理点击其他地方的函数
const handleClickOutside = (event) => {
  const modelWrapper = document.querySelector(".model-wrapper");
  // 如果点击的不是model-wrapper内的元素，则关闭models
  if (modelWrapper && !modelWrapper.contains(event.target)) {
    showModels.value = false;
  }
};

// 组件挂载时添加事件监听
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// 组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.models {
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

.sidebar-icon,
.new-icon {
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.sidebar-icon:hover,
.new-icon:hover {
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
  padding: 8px;
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
  content: "";
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
