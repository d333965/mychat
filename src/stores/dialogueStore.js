// @/stores/AIconfigStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const useDialogueStore = defineStore("dialogue", () => {
    // 是否进入历史对话
    const isHistoryDialogue = ref(false);
    // 是否在对话中
    const isDialogue = ref(false)
    // 使用数组存储多条对话记录
    const dialogueHistory = ref([]);

    // 存储所有保存的对话记录集合
    const savedDialogues = ref([]);

    // 添加新的 ref 来跟踪当前编辑的对话 ID
    const currentEditingId = ref(null);

    // 添加新对话
    const addDialogue = (userMessage, assistantMessage) => {
        dialogueHistory.value.push({
            user: userMessage,
            assistant: assistantMessage,
        });
    };

    // 保存当前对话记录
    const creatDialogue = (title) => {
        if (dialogueHistory.value.length > 0) {
            if (currentEditingId.value) {
                // 如果有正在编辑的对话，更新该对话
                const index = savedDialogues.value.findIndex(d => d.id === currentEditingId.value);
                if (index !== -1) {
                    savedDialogues.value[index] = {
                        ...savedDialogues.value[index],
                        title: title,
                        history: [...dialogueHistory.value],
                        updatedAt: new Date().toISOString()
                    };
                }
            } else {
                // 否则创建新对话
                savedDialogues.value.push({
                    id: Date.now(),
                    title: title,
                    history: [...dialogueHistory.value],
                    updatedAt: new Date().toISOString()
                });
            }
            
            // 根据更新时间对对话记录进行排序，最新的排在前面
            savedDialogues.value.sort((a, b) => {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            });
        }
        isDialogue.value = false;
        isHistoryDialogue.value = false;
        currentEditingId.value = null;  // 重置当前编辑的对话 ID
        dialogueHistory.value = [];
    };

    // 加载指定的历史对话
    const loadSavedDialogue = (id) => {
        // 处理未保存的新对话
        if (!currentEditingId.value && dialogueHistory.value.length > 0) {
            // 创建新对话
            savedDialogues.value.push({
                id: Date.now(),
                title: dialogueHistory.value[0].user, // 可以设置一个默认标题
                history: [...dialogueHistory.value],
                updatedAt: new Date().toISOString()
            });
            
            // 重新排序
            savedDialogues.value.sort((a, b) => {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            });
        }
        // 处理已有对话的更新
        else if (currentEditingId.value && dialogueHistory.value.length > 0) {
            const currentDialogue = savedDialogues.value.find(d => d.id === currentEditingId.value);
            if (currentDialogue) {
                const hasChanges = JSON.stringify(currentDialogue.history) !== JSON.stringify(dialogueHistory.value);
                
                if (hasChanges) {
                    const index = savedDialogues.value.findIndex(d => d.id === currentEditingId.value);
                    savedDialogues.value[index] = {
                        ...currentDialogue,
                        history: [...dialogueHistory.value],
                        updatedAt: new Date().toISOString()
                    };
                    
                    savedDialogues.value.sort((a, b) => {
                        return new Date(b.updatedAt) - new Date(a.updatedAt);
                    });
                }
            }
        }

        // 加载新的对话
        isDialogue.value = true;
        isHistoryDialogue.value = true;
        currentEditingId.value = id;
        const saved = savedDialogues.value.find(d => d.id === id);
        if (saved) {
            dialogueHistory.value = [...saved.history];
        }
    };

    // 删除保存的对话记录
    const deleteSavedDialogue = (id) => {
        savedDialogues.value = savedDialogues.value.filter(d => d.id !== id);
    };





    return {
        isDialogue,
        dialogueHistory,
        addDialogue,
        savedDialogues,
        creatDialogue,
        loadSavedDialogue,
        deleteSavedDialogue,
        isHistoryDialogue,
        currentEditingId,
    };
}, {
    persist: true
});