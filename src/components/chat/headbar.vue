<template>
  <div class="header">
  <!-- 左侧 -->
  <div class="header-left">
    <!-- 侧边栏图标和提示文字容器 -->
    <div class="sidebar-container" @click="chatConfigStore.isSidebar = true" v-if="!chatConfigStore.isSidebar">
      <img src="@/assets/img/chat/sidebar.svg" class="sidebar-icon">
      <div class="tooltip">侧边栏</div>
    </div>

    <!-- 新建图标和提示文字容器 -->
    <div class="new-chat-container"  v-if="!chatConfigStore.isSidebar" @click="dialogueStore.creatDialogue(dialogueStore.dialogueHistory[0].user)">
      <img src="@/assets/img/chat/newCreat.svg" class="new-icon">

      <div class="tooltip">新聊天</div>
    </div>

    <!-- 将model和箭头包裹在一起 -->
    <!-- 模型选择 -->
    <div class="model-wrapper" @click="toggleModels">
      <div class="model">{{chatConfigStore.model}}</div>
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
  <!-- 右侧 -->
  <div class="header-right">
    <img src="@/assets/img/chat/avatar.svg" class="avatar">
  </div>
</div>
</template>

<script setup>
import models from "./models.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useChatConfigStore } from '@/stores/chatConfigStore';
import { useDialogueStore } from '@/stores/dialogueStore';
const chatConfigStore = useChatConfigStore();
const dialogueStore = useDialogueStore();

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
.header{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header-left{
  display: flex;
  align-items: center;
}
.header-right{
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.avatar {
    width: 34px;
    height: 34px;
}
.models {
  position: absolute;
  top: 40px;
  z-index: 100;
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

.header-left {
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
/* 添加小三角形 */
.tooltip::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 6px 6px 6px;
  border-style: solid;
  border-color: transparent transparent #000000 transparent;
}

/* 为新建图标容器添加相同的样式 */
.new-chat-container {
  position: relative;
  display: inline-block;
}
</style>
