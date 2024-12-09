<template>
  <div class = "page">
    <div class="sidebar" :class="{ 'sidebar-open': chatConfigStore.isSidebar }">
      <sidebar />
    </div>

    <div class="container">
      <div class="header"><headbar /></div>
      <div class="main" v-if="dialogueStore.isDialogue"><talkMessage/></div>
      <div class="footer" :class="{'move-center': !dialogueStore.isDialogue}"><inputBox/></div>
    </div>
  </div>
</template>

<script setup>
import headbar from "../components/chat/headbar.vue";
import inputBox from "../components/chat/inputBox.vue";
import talkMessage from "../components/chat/talkMessage.vue";
import sidebar from "../components/chat/sidebar/sidebar.vue";
import { useDialogueStore } from "@/stores/dialogueStore";
import { useChatConfigStore } from "@/stores/chatConfigStore";
import { onMounted, onBeforeUnmount } from "vue";

const dialogueStore = useDialogueStore();
const chatConfigStore = useChatConfigStore();

// 添加页面刷新前的处理函数
const handleBeforeUnload = (e) => {
  if (dialogueStore.dialogueHistory.length > 0) {
    const defaultTitle = dialogueStore.dialogueHistory[0]?.user || '未命名对话';
    dialogueStore.creatDialogue(defaultTitle);
  }
};

// 添加事件监听
onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload);
});

// 清理事件监听
onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
});
</script>

<style scoped>
.page{
  display: flex;
}
.sidebar {
  width: 0;
  height: 100vh;
  background: #b3b3b3;
  transition: width 0.3s ease;
  overflow: hidden;
  position: relative;
}

.sidebar-open {
  width: 300px;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.header{
  height: 60px;
  z-index: 100;
}
.main{
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.move-center{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* 自定义滚动条样式 */
.main::-webkit-scrollbar {
  width: 6px;  /* 滚动条宽度 */
}

.main::-webkit-scrollbar-track {
  background: #f1f1f1;  /* 滚动条轨道背景色 */
  border-radius: 3px;
}

.main::-webkit-scrollbar-thumb {
  background: #888;  /* 滚动条滑块颜色 */
  border-radius: 3px;
}

.main::-webkit-scrollbar-thumb:hover {
  background: #555;  /* 鼠标悬停时滑块颜色 */
}
</style>
