import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";
import Game from "@/pages/Game.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/game",
      name: "game",
      component: Game,
    },
  ],
});

export default router;
