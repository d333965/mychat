<template>
    <div class="edit">
        <div class="icon-wrapper" @click="chatConfigStore.isSidebar = false">
            <img src="@/assets/img/chat/sidebar.svg">
            <div class="tooltip">侧边栏</div>
        </div>
        <div class="icon-wrapper">
            <img src="@/assets/img/chat/newCreat.svg">
            <div class="tooltip">新聊天</div>
        </div>
    </div>
</template>

<script setup>
import { useChatConfigStore } from '@/stores/chatConfigStore';

const chatConfigStore = useChatConfigStore();
</script>

<style scoped>
.edit {
    display: flex;
    justify-content: space-between;
    margin: 15px 20px;
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

.icon-wrapper {
    position: relative;
    cursor: pointer;
}

.icon-wrapper:hover .tooltip {
    opacity: 1;
    visibility: visible;
}
</style>
