<template>
    <div class="history">
        <span class="history-title">今天</span>
        <div class="history-item">
            <div class="history-item-text">这是第一条历史记录</div>
            <img class="dots-icon" src="@/assets/img/chat/dots.svg">
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
.history{
    width: 88%;
    margin: 30px auto;
}
.history-title{
    font-size: 14px;
    color: #000;
    font-weight: bold;
    margin: 5px;
}
.history-item{
    margin-top: 10px;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
}
.history-item:hover{
    background: #e8e8e8;
}
.history-item-text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.history-item .dots-icon {
    opacity: 0;
    transition: opacity 0.2s ease;
}

.history-item:hover .dots-icon {
    opacity: 1;
}
</style>
