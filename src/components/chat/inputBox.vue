<template>
  <div class="input-box">
    <title1 v-if="!dialogueStore.isDialogue"/>
    <div class="frame-1">
    <div class="rectangle-1" :style="{ height: boxHeight + 'px' }">
      <textarea
        v-model="inputText"
        class="input-area"
        placeholder="输入内容进行提问..."
        @keydown="handleKeydown"
        @input="adjustHeight"
        ref="textareaRef"
      ></textarea>
      <div class="button-bar">
        <img class="clip" src="@/assets/img/chat/clip.svg" />
        <img 
          class="send" 
          src="@/assets/img/chat/send.svg" 
          :class="{ 'send-disabled': !inputText }"
          @click="sendMessage"
        />
      </div>
    </div>
 </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDialogueStore } from '@/stores/dialogueStore'
import title1 from "@/components/chat/title.vue";

const inputText = ref('')
const boxHeight = ref(109)
const lineHeight = 27
const maxLines = 8
const textareaRef = ref(null)
const dialogueStore = useDialogueStore()


const sendMessage = () => {
  if (!inputText.value) return
  dialogueStore.addDialogue(inputText.value, '你好，我是AI助手，有什么问题尽管问我吧！')
  inputText.value = ''
  boxHeight.value = 109
  dialogueStore.isDialogue = true
}

const handleKeydown = (event) => {
  if (event.key === 'Enter') {
    if (!event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
}

const adjustHeight = () => {
  const textarea = textareaRef.value
  textarea.style.height = 'auto'
  const scrollHeight = textarea.scrollHeight
  const minHeight = 45
  const maxHeight = lineHeight * maxLines - 40
  
  const newHeight = Math.min(Math.max(minHeight, scrollHeight), maxHeight)
  textarea.style.height = newHeight + 'px'
  boxHeight.value = newHeight + 65
  
  textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden'
}

onMounted(() => {
  adjustHeight()
})
</script>

<style scoped>
.input-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.frame-1 {
  min-height: 109px;
  position: relative;
}

.rectangle-1 {
  background: var(--gray1, #f3f3f3);
  border-radius: 20px;
  width: 737px;
  max-height: 240px;
  position: relative;
  left: calc(50% - 368.5px);
  transition: height 0.2s ease;
  display: flex;
  flex-direction: column;
  padding-bottom: 4px;
}

.input-area {
  width: calc(100% - 40px);
  min-height: 45px;
  max-height: 176px;
  margin: 18px 20px 0px 20px;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  color: #333;
  font-family: "RobotoMono-Regular", sans-serif;
  font-size: 18px;
  padding: 0;
  line-height: 1.5;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #bababa transparent;
}

.button-bar {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 8px 16px;
  margin-top: auto;
}

.clip {
  cursor: pointer;
  width: 28px;
  height: 28px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.send {
  cursor: pointer;
  width: 34px;
  height: 34px;
  opacity: 0.25;
  transition: opacity 0.2s ease;
}

.send-disabled {
  opacity: 0.15;
  cursor: default;
}

.send:not(.send-disabled) {
  opacity: 1;
}

.send:not(.send-disabled):hover {
  opacity: 0.6;
}

.input-area::placeholder {
  color: var(--gray2, #bababa);
}

</style>
