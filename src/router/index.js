import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/test",
      name: "about",
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
