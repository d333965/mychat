<template>
    <div class="frame-7">
  <div class="div">{{ displayText }}</div>

    <img src="@/assets/img/home/logo.svg" class="logo">

</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'


const fullText = '有什么可以帮忙的？'
const displayText = ref('')
const typeSpeed =50 // 每个字符的打字速度(毫秒)

onMounted(() => {
  let currentIndex = 0
  const typeTimer = setInterval(() => {
    if (currentIndex < fullText.length) {
      displayText.value += fullText[currentIndex]
      currentIndex++
    } else {
      clearInterval(typeTimer)
    }
  }, typeSpeed)
})
</script>

<style>
.frame-7,
.frame-7 * {
  box-sizing: border-box;
}
.frame-7 {
  height: 53px;
  position: relative;
}
.div {
  color: #000000;
  text-align: left;
  font-family: "RobotoMono-Bold", sans-serif;
  font-size: 40px;
  font-weight: 700;
  left: 56px;
  top: 0px;
}
.logo{
  width: 70px;
  position: absolute;
  left: -80px;
  top: -5px;
}

</style>