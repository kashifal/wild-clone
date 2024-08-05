<template>
  <div class=" ">
    <button
      @click="modalFunc"
      class="px-4 py-2 bg-blue-700 m-3 rounded-full text-white"
    >
      Open Modal
    </button>
    <!-- overlay -->
    <div
      @click="modalFunc"
      :class="[
        show
          ? 'h-screen block z-50 w-screen bg-black/50 fixed top-0 left-0'
          : 'h-screen hidden z-50 w-screen bg-black/50 fixed top-0 left-0',
      ]"
    ></div>

    <!-- modal -->
    <div
      :class="[
        show
          ? 'h-[40%] block z-50 w-[40%] bg-white rounded-lg fixed inset-0 m-auto'
          : 'h-[40%] hidden z-50 w-[40%] bg-white rounded-lg fixed inset-0 m-auto',
      ]"
    >
      <button
        @click="modalFunc"
        class="px-4 py-2 bg-blue-700 m-3 rounded-full text-white"
      >
        Close Modal
      </button>
    </div>

    <p v-for="(num, index) in names" :key="num">
      <span :class="[index === 1 ? 'font-bold' : '']"
        >{{ num }},{{ index }}</span
      >
    </p>
  </div>
  /for test
</template>

<script setup>
import { ref } from "vue";
import SportsSidebar from "../components/SportsSidebar.vue";
import rightsidesports from "../components/rightsidesports.vue";
import SportCards from "../components/SportCards.vue";
import Footer from "../components/Footer.vue";
import BottomBar from "../components/BottomBar.vue";
const show = ref(false);

function modalFunc() {
  show.value = !show.value;
}

const names = ["ali", "kashif"];
</script>

<style>
.boxscr {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.boxscr::-webkit-scrollbar {
  height: 2px; /* Width of the scrollbar */
}

.boxscr::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.boxscr::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>
