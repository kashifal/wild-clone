<template>
  <div><Logo /> <router-view></router-view></div>
</template>
<script setup>
import Logo from "@/components/Navbar.vue";
import { useSidebarStore } from "./store/sidebar";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const sidebar = useSidebarStore();
</script>
