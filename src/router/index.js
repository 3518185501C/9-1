import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import WareHouse from "@/views/WareHouse.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/WareHouse.vue"),
    },
    {
      path: "/ware",
      name: "ware",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
