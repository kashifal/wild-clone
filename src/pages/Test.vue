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
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
function modalFunc() {
  show.value = !show.value;
}
</script>
