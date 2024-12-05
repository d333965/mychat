<template>
  <div class="frame-7">
    <img src="@/assets/img/home/logo.svg" class="logo" />
    <div class="title">{{ displayText }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fullText = "有什么可以帮忙的？";
const displayText = ref("");
const typeSpeed = 50; // 每个字符的打字速度(毫秒)

onMounted(() => {
  let currentIndex = 0;
  const typeTimer = setInterval(() => {
    if (currentIndex < fullText.length) {
      displayText.value += fullText[currentIndex];
      currentIndex++;
    } else {
      clearInterval(typeTimer);
    }
  }, typeSpeed);
});
</script>

<style>
.frame-7 {
  height: 53px;
  display: flex;
  align-items: center;
}
.title {
  color: #000000;
  font-family: "RobotoMono-Bold", sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-left: 10px;
}
.logo {
  width: 70px;
}
</style>
