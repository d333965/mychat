import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
  {
    path:"/chat",
    component: () => import("@/views/chat.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;