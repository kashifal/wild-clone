<template>
  <div class="sm:p-20 p-4 bg-[#0A1C2D]">
    <h1>Test All components on this page</h1>
    <i>item : {{ count }}</i>
    <button @click="increaseValue" class="px-4 py-2 my-4 bg-red-500">
      Increase +
    </button>

    <button @click="showModal" class="px-4 py-2 my-4 bg-red-500">
      show modal {{ show }}
    </button>
    <h1 :class="[show ? 'block' : 'hidden']">
      Showing <button @click="showModal">close modal</button>
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const show = ref(false);

function increaseValue() {
  count.value = count.value + 1;
}

function showModal() {
  show.value = !show.value;
}
</script>
