<template>
    <img :src="avatar" class="avatar">
</template>

<script setup>
import avatar from '@/assets/img/chat/avatar.svg';
</script>

<style scoped>
.avatar {
    width: 34px;
    height: 34px;
}
</style>