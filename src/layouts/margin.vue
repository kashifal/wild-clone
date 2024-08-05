<template>
  <div
    :class="[
      sidebar.open
        ? 'lg:pl-64 bg-[#0A1C2D] mx-auto z-20'
        : 'lg:pl-16 bg-[#0A1C2D] mx-auto z-20 ',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { useSidebarStore } from "../store/sidebar";
const sidebar = useSidebarStore();
</script>
