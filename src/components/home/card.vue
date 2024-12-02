<template>
  <div class="card-container">
    <!-- 敬请期待卡片 -->
    <div class="card card-small">
      <div class="card-content coming-soon">
        <div class="card-image">
          <!-- 图标占位 -->
        </div>
        <div class="card-title">敬请期待</div>
      </div>
    </div>

    <!-- AI生成PPT卡片 -->
    <div class="card card-medium">
      <div class="card-content">
        <div class="card-image">
          <!-- 图标占位 -->
        </div>
        <div class="card-title">AI生成PPT</div>
      </div>
    </div>

    <!-- AI聊天对话卡片 -->
    <div class="card card-large">
      <div class="card-content coming-main">
        <div class="card-image">
          <!-- 图标占位 -->
        </div>
        <div class="card-title">AI聊天对话</div>
      </div>
    </div>

    <!-- 第二个AI生成PPT卡片 -->
    <div class="card card-medium">
      <div class="card-content">
        <div class="card-image">
          <!-- 图标占位 -->
        </div>
        <div class="card-title">AI生成PPT</div>
      </div>
    </div>

    <!-- 第二个敬请期待卡片 -->
    <div class="card card-small">
      <div class="card-content coming-soon">
        <div class="card-image">
          <!-- 图标占位 -->
        </div>
        <div class="card-title">敬请期待</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 移除了cards数组，因为现在直接在模板中定义卡片
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  min-height: 400px;
}

.card {
  width: 200px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  box-shadow: 10px 20px 10px rgba(148, 127, 255, 0.3);
}

/* 定义三种不同高度的卡片 */
.card-small {
  height: 240px;
  transform: translateY(40px);
}

.card-medium {
  height: 280px;
  transform: translateY(20px);
}

.card-large {
  height: 320px;
  transform: translateY(0);
}

/* 悬停效果 */
.card:hover {
  transform: scale(1.1) translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

.coming-soon {
  background: #947fff;
  color: rgb(183, 183, 183);
}

.coming-main {
  background: #bd4bff;
  color: white;
}

.card-title {
  margin-top: 16px;
  font-size: 18px;
  line-height: 1.5;
  white-space: pre-line;
  position: absolute;
  top: 65%;
  text-align: center;
  width: 80%;
}

.card-image {
  position: absolute;
  width: 80%;
  height: 150px;
  background-color: #e7e7e7;
  top: 20px;
  border-radius: 16px;
}
</style>
