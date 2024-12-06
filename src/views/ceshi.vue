<template>
  <div class="container">
    <div class="header"><headbar /></div>
    <div class="main" v-if="dialogueStore.isDialogue"><talkMessage/></div>
    <div class="footer" :class="{'move-center': !dialogueStore.isDialogue}"><inputBox/></div>
  </div>
</template>

<script setup>
import headbar from "../components/chat/headbar.vue";
import inputBox from "../components/chat/inputBox.vue";

import talkMessage from "../components/chat/talkMessage.vue";
import { useDialogueStore } from "@/stores/dialogueStore";

const dialogueStore = useDialogueStore();
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.header{
  height: 60px;
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
