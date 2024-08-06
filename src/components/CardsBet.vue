<template>
    <div class="text-xs rounded-b-md bg-[#1C2C3C] px-3 pt-3 pb-2 font-bold text-[#B0B5BB]">
        <div class="divide w-full flex-col items-center justify-between gap-3  flex md:flex-row">
          <div class="sm:flex-row flex-col flex w-full gap-3">
            <p class="truncatex text-xs font-semibold text-[#B0B5BB]">Inning 5</p>
            <div class="divide flex sm:flex-row flex-col sm:divide-y-0 w-full justify-between gap-2 divide-y sm:divide-x">
              <div class="w-full">
                <div class="flex w-full items-center justify-between gap-2">
                  <div class="flex items-center justify-between gap-2">
                    <img src="../assets/dragon.png" alt="" class="h-[18px] w-[18px]" />
                    <p class="truncate text-[#0C49BE]">Chunichi Dragons *</p>
                  </div>
                  <div class="flex items-center gap-3 truncate">
                    <p class="">0</p>
                    <p class="">0</p>
                    <p class="">0</p>
                    <p class="">1</p>
                    <p class="">0</p>
                    <p class="">0</p>
                  </div>
                </div>
                <div class="flex w-full items-center justify-between gap-2">
                  <div class="flex items-center justify-between gap-2">
                    <img src="../assets/boy.png" alt="" class="h-[18px] w-[18px]" />
                    <p class="truncatetext-[#0C49BE]">Chunichi Dragons *</p>
                  </div>
                  <div class="flex items-center gap-3 truncate">
                    <p class="">0</p>
                    <p class="">0</p>
                    <p class="">0</p>
                    <p class="">1</p>
                    <p class="">0</p>
                    <p class="">0</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 pl-2">
                <div class="flex flex-col">
                  <p class="text-xs font-bold text-[#0C49BE]">1</p>
                  <p class="text-xs font-bold text-[#0C49BE]">3</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#77808A]" width="1em" height="1em" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none" />
                  <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="sm:flex  w-full items-center gap-3 md:w-auto">
            <div class="flex w-full justify-between gap-[2px]">
              <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                <p class="text-sm font-bold text-white">12.00</p>
              </button>
              <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                <p class="text-sm font-bold text-white">12.00</p>
              </button>
            </div>
            <router-link
            to="/sportsbet"
            >
            <div class="flex sm:justify-start justify-center items-center text-[#B0B5BB]">
              <p class="text-sm font-bold text-[#B0B5BB]">17</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
              </svg>
            </div>
        </router-link>
          </div>
          
        </div>
        <div class="flex items-center cursor-pointer   justify-center mx-auto text-[#B0B5BB] text-xs gap-1">
          <p class="">Show top markets</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="rotate-90" width="1em" height="1em" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
          </svg>
        </div>
      </div>
</template>

<script setup></script>