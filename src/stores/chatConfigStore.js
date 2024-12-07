// @/stores/AIconfigStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatConfigStore = defineStore("chatConfig", () => {
    const isSidebar = ref(false)
    const model = ref("ChatGPT4")
    
    const setModel = (value) => {
        model.value = value
    }

    return {
        isSidebar,
        model,
        setModel,
    };
});