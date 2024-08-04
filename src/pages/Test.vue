<template>
    /for test
</template>

<script setup>
import { ref } from "vue";
import SportsSidebar from "../components/SportsSidebar.vue";
import rightsidesports from "../components/rightsidesports.vue";
import SportCards from "../components/SportCards.vue";
import Footer from '../components/Footer.vue';
import BottomBar from '../components/BottomBar.vue';
const show = ref(false);

function modalFunc() {
    show.value = !show.value;
}
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