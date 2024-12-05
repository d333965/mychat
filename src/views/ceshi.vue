<template>
  <div class="contain">
    <edits class="edits" />
    <div class="talkMessageBox">
        <talkMessage class="talkMessage" v-if="dialogueStore.isDialogue" />
      <div class="titleInputBox" :class="{ 'move-to-bottom': dialogueStore.isDialogue }">
        <title1 class="title1" v-if="!dialogueStore.isDialogue" />
        <inputBox
          class="inputBox"
        />
      </div>
    </div>
    <div class="avatarBox">
      <avatar class="avatar" />
    </div>
  </div>
</template>

<script setup>
import edits from "../components/chat/edits.vue";
import avatar from "../components/chat/avatar.vue";
import inputBox from "../components/chat/inputBox.vue";
import title1 from "../components/chat/title.vue";
import talkMessage from "../components/chat/talkMessage.vue";
import { useDialogueStore } from "@/stores/dialogueStore";

const dialogueStore = useDialogueStore();
</script>

<style scoped>
.contain {
  display: flex;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
}
.edits {
  flex: 1;
}
.talkMessageBox {
  flex: 2;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box; /* 解决宽度超出的问题 */
  display: flex;
  flex-direction: column;
}
.talkMessage {
  flex: 4;
  width: 100%;
  height: 60px;
}
.titleInputBox {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease-in-out; /* 添加过渡动画 */
}
.move-to-bottom {
  justify-content: flex-end;
  padding-bottom: 20px;
}
.avatarBox {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 60px 0 0;
}
.inputBox {
  margin-top: 20px;
}


</style>
