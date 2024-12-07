<template>
    <div class="container">
        <Edits />
        <AI_Tool />
        <History />
    </div>
</template>

<script setup>
import Edits from './edits.vue';
import AI_Tool from './AI-Tool.vue';
import History from './history.vue';
</script>

<style scoped>
.container{
    width: 100%;
    height: 100vh;
    background: #f5f5f6;
}

</style>
