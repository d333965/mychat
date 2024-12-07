<template>
  <div class="models-container">
    <div 
      v-for="model in modelList" 
      :key="model.id"
      class="model-card"
      :class="{ active: chatConfigStore.model === model.id }"
      @click="selectModel(model.id)"
    >
      <img :src="modelAvatars[model.id]" class="avatar">
      <div class="model-info">
        <div class="model-name">{{ model.name }}</div>
        <div class="model-desc">{{ model.description }}</div>
      </div>
      <div class="check-icon" v-if="chatConfigStore.model === model.id">
        <svg viewBox="0 0 24 24" class="check">
          <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入所有模型头像
import gpt4Avatar from '@/assets/img/chat/ChatGPT4.svg'
import miniAvatar from '@/assets/img/chat/o1-mini.svg'
import claudeAvatar from '@/assets/img/chat/claude.svg'

import { useChatConfigStore } from '@/stores/chatConfigStore'

const chatConfigStore = useChatConfigStore()

const modelAvatars = {
  ChatGPT4: gpt4Avatar,
  'o1-mini': miniAvatar,
  'Claude-3-5-sonnet': claudeAvatar
}


const modelList = [
  {
    id: 'ChatGPT4',
    name: 'ChatGPT4',
    description: '适用于日常聊天任务'
  },
  {
    id: 'o1-mini',
    name: 'o1-mini',
    description: 'openAI的深度思考模型'
  },
  {
    id: 'Claude-3-5-sonnet',
    name: 'Claude-3-5-sonnet',
    description: '适用于代码的编写任务'
  }
]

const selectModel = (modelId) => {
  chatConfigStore.setModel(modelId)
}
</script>

<style scoped>
.avatar{
  width: 40px;
  margin-right: 15px;
}

.models-container {
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 270px;
}

.model-card {
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 8px;
  position: relative;
}

.model-card:hover {
  background: #f5f5f5;
}

.model-card.active {
  background: #f5f5f5;
}

.model-avatar {
  margin-right: 12px;
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e0e0;
}

.model-info {
  flex: 1;
}

.model-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.model-desc {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.check-icon {
  width: 24px;
  height: 24px;
  color: #1a73e8;
}

.check {
  width: 100%;
  height: 100%;
}
</style>
