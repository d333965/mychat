<template>
  <div class="container2">
  <div class="container">
    <logo_title/>
    <img src="@/assets/img/home/avatar2.svg" class="avatar">
  </div>
  <notice class="notice"/>
  <cards class="cards" />
</div>
</template>

<script setup>
import logo_title from '@/components/home/logo_title.vue';
import notice from '@/components/home/notice.vue';
import cards from '../components/home/cards.vue';
</script>

<style>
.container2{
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(250, 245, 255, 1) 0%,
    rgba(242, 234, 255, 1) 50%,
    rgba(235, 225, 255, 1) 100%
  );
  position: relative;
}

.cards{
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  margin-top: 10px;
}
.container {
  display: flex;
  justify-content: center;
  position: relative;
}

.avatar{
    width: 45px;
    right: 20%;
    top: 40px;
    position: absolute;
}

.notice{
  width: 60%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

</style>