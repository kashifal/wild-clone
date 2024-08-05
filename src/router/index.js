import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";
import Game from "@/pages/Game.vue";
import Slot from "@/pages/Slot.vue";
import LiveCasino from "@/pages/Live Casino.vue";
import Promotion from '@/pages/Promotion.vue';
import TableGAmes from "../pages/TableGAmes.vue";
import Tournament from "../pages/Tournament.vue";
import VipClub from "../pages/VipClub.vue";
import Challenge from '../pages/Challenge.vue';
import Live from '../pages/Live.vue';
import Sports from "../pages/Sports.vue";
import Esports from "../pages/Esports.vue";
import PromotionsSport from "../pages/PromotionsSport.vue";
import Schedule from "../pages/Schedule.vue";
import Result from '../pages/Results.vue';
import Football from "../pages/Football.vue";
import Dashboard from "../pages/Dashboard.vue";
import InPlay from "../pages/In-play.vue";

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
    {
      path: "/vipclub",
      name: "vipclub",
      component: VipClub,
    },
    {
      path: "/live",
      name: "live",
      component: Live,
    },
    {
      path: "/sports",
      name: "sport",
      component: Sports,
    },
    {
      path: "/esports",
      name: "esport",
      component: Esports,
    },
    {
      path: "/poromoSport",
      name: "promoSport",
      component: PromotionsSport,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: Schedule,
    },
    {
      path: "/results",
      name: "results",
      component: Result,
    },
    {
      path: "/football", 
      name: "football",
      component: Football,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/inplay",
      name: "inplay",
      component: InPlay,
    },
  ],
});

export default router;
