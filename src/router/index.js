import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";
import Game from "@/pages/Game.vue";
import Slot from "@/pages/Slot.vue";
import LiveCasino from "@/pages/Live Casino.vue";
import Promotion from '@/pages/Promotion.vue';
import TableGAmes from "../pages/TableGAmes.vue";
import Tournament from "../pages/Tournament.vue";
import Challenge from '../pages/Challenge.vue';

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
    {
      path: "/slot",
      name: "slot",
      component: Slot,
    },
    {
      path: "/livecasino",
      name: "livecasino",
      component: LiveCasino,
    },
    {
      path: "/tablegames",
      name: "tablegames",
      component: TableGAmes,
    },
    {
      path: "/promotion",
      name: "promotion",
      component: Promotion,
    },
    {
      path: "/tournament",
      name: "tournament",
      component: Tournament,
    },
    {
      path: "/challenge",
      name: "challenge",
      component: Challenge,
    },
  ],
});

export default router;
