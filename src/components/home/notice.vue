<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.el-carousel__item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.el-carousel__item:nth-child(2n) {
  background: linear-gradient(
    94.15deg,
    rgba(227, 55, 236, 0.477) 0%,
    rgb(222, 165, 252) 34.525007009506226%,
    rgb(176, 158, 255) 100%
  );
}

.el-carousel__item:nth-child(2n + 1) {
  background: linear-gradient(
    94.15deg,
    rgba(178, 80, 239, 0.477) 0%,
    rgb(235, 177, 255) 34.525007009506226%,
    rgb(198, 145, 255) 100%
  );
}
</style>
