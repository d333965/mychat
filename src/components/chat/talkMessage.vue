<template>
  <div style="width: 50%;">
  <div class="container" v-for="message in dialogueStore.dialogueHistory" :key="message.id">
  <!-- 用户消息 -->
  <div class="user-message">
    <div class="frame">
      <div class="user-text" style="white-space: pre-wrap;">{{ message.user }}</div>
    </div>  
    
  </div>
  <!-- 助手消息 -->
  <div class="assitant-message">
    <img :src="modelAvatars[chatConfigStore.model]" class="assitant-img">
    <div class="message-content">
      <div class="assitant-text">
        {{ message.assistant }}
      </div>
      <svg class="copy" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 15H18.6C19.93 15 21 13.93 21 12.6V5.4C21 4.07 19.93 3 18.6 3H11.4C10.07 3 9 4.07 9 5.4V6M12.6 9H5.4C4.76348 9 4.15303 9.25286 3.70294 9.70294C3.25286 10.153 3 10.7635 3 11.4V18.6C3 19.2365 3.25286 19.847 3.70294 20.2971C4.15303 20.7471 4.76348 21 5.4 21H12.6C13.2365 21 13.847 20.7471 14.2971 20.2971C14.7471 19.847 15 19.2365 15 18.6V11.4C15 11.0848 14.9379 10.7727 14.8173 10.4816C14.6967 10.1904 14.5199 9.9258 14.2971 9.70294C14.0742 9.48008 13.8096 9.3033 13.5184 9.18269C13.2273 9.06208 12.9152 9 12.6 9Z"
          stroke="#BABABA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
  </div>
</div>
</template>

<script setup>
import { useDialogueStore } from "@/stores/dialogueStore";
import { useChatConfigStore } from "@/stores/chatConfigStore";
import gpt4Avatar from '@/assets/img/chat/ChatGPT4.svg'
import miniAvatar from '@/assets/img/chat/o1-mini.svg'
import claudeAvatar from '@/assets/img/chat/claude.svg'

const dialogueStore = useDialogueStore();
const chatConfigStore = useChatConfigStore();
const modelAvatars = {
  ChatGPT4: gpt4Avatar,
  'o1-mini': miniAvatar,
  'Claude-3-5-sonnet': claudeAvatar
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 子元素按列排列 */
  gap: 20px; /* 添加间距 */
}


.user-message {
  max-width: 70%;
  height: auto;
  margin-top: 20px;
  align-self: flex-end;
}

.frame {
  background: var(--gray1, #f3f3f3);
  border-radius: 20px;
  padding: 10px 20px;
  width: auto;
  height: auto;
  left: 0px;
  top: 0px;
}

.user-text {
  color: #000000;
  text-align: left;
  font-family: var(---font-family, "Inter-Regular", sans-serif);
  font-size: var(---font-size, 18px);
  font-weight: var(---font-weight, 400);
  word-wrap: break-word;
  word-break: break-word;
}

.assitant-message {
  height: auto;
  margin-top: 20px;
  display: flex;
  gap: 9px;
}

.message-content {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-top: 6px;
}

.assitant-img {
  width: 36px;
  height: 36px;
}

.assitant-text {
  color: #000000;
  text-align: left;
  font-family: var(---font-family, "Inter-Regular", sans-serif);
  font-size: var(---font-size, 18px);
  font-weight: var(---font-weight, 400);
  word-wrap: break-word;
  word-break: break-word;
}

.copy {
  width: 24px;
  height: 24px; 
  cursor: pointer;
  margin-top: 10px;
}

</style>