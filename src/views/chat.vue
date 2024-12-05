<template>
    <div class="contain">
        <edits class="edits"/>
        <avatar class="avatar"/>
        <inputBox 
            class="inputBox" 
            :style="{ top: dialogueStore.isDialogue ? '90%' : '50%' }"
        />
        <title1 class="title1" v-if="!dialogueStore.isDialogue"/>
        <div class="talkMessageBox">
            <talkMessage class="talkMessage"/>
        </div>
    </div>

</template>

<script setup>
import edits from '../components/chat/edits.vue';
import avatar from '../components/chat/avatar.vue';
import inputBox from '../components/chat/inputBox.vue';
import title1 from '../components/chat/title.vue';
import talkMessage from '../components/chat/talkMessage.vue';
import { useDialogueStore } from '@/stores/dialogueStore'

const dialogueStore = useDialogueStore()
</script>

<style scoped>
.contain{
    position: relative;
    height: 100vh;
    width: 100vw;
}
.edits {
    position: absolute;
    left: 20px;
}
.avatar {
    position: absolute;
    right: 50px;
    top: 15px;
}
.inputBox{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease;
}
.title1 {
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-40%, -50%);
}
.talkMessage{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
}
.talkMessageBox{
    width: 100%;
    height: 100%;
}
</style>