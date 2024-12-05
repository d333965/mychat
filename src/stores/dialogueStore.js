// @/stores/AIconfigStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDialogueStore = defineStore("dialogue", () => {
    const isDialogue = ref(false)
    // 使用数组存储多条对话记录
    const dialogueHistory = ref([]);

    // 添加新对话
    const addDialogue = (userMessage, assistantMessage) => {
        dialogueHistory.value.push({
            user: userMessage,
            assistant: assistantMessage,
        });
    };

    // 重置对话历史
    const resetDialogue = () => {
        dialogueHistory.value = [];
    };


    return {
        isDialogue,
        dialogueHistory,
        addDialogue,
        resetDialogue,
    };
});