<template>
    <div class="tokenbar py-4 relative flex lg:flex-row flex-col md:items-left lg:items-center gap-4 lg:justify-between px-6 rounded-2xl overflow-hidden">
        <h1 class="text-white etxt-lg xl:text-xl z-40 font-semibold sm:text-left text-center">Want to play? Deposit now</h1>
        <div class="flex flex-wrap xl:gap-8 gap-4 z-40 justify-between items-center">
            <img src="../assets/bit1.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit2.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit3.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit4.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit5.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit6.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit7.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit-8.svg" alt="" class="w-8 h-8">
            <img src="../assets/bit9.svg" alt="" class="w-8 h-8">
        </div>
        <button class="font-semibold text-white text-[14px] w-full lg:w-fit z-40 bg-[#3FC02F] transition-all duration-300 hover:bg-opacity-[70%] px-4 py-[9px] rounded-[8px] ">Deposit</button>
        <div class="absolute z-20 -top-48 left-[50%]">
          <img src="../assets/oevrlay.svg" alt="" class="w-[239px] h-auto text-white fill-white">
        </div>
       </div>
</template>

<script setup>
</script>

<style>
.tokenbar{
  background: 
    linear-gradient(45deg, rgba(96, 202, 84, 0.2) 1.72%, transparent 26.54%),
    linear-gradient(45deg, hsla(0, 0%, 100%, 0.07), hsla(0, 0%, 100%, 0.07));
}
</style>