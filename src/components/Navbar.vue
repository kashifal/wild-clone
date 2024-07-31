<template>
  <div class="py-3 h-16 px-3 bg-[#263747] w-full">
    <div
      class="max-w-[1600px] h-full flex items-center justify-between mx-auto"
    >
      <div class="flex items-center gap-2.5">
        <router-link class="fonnt-bold flex md:hidden" to="/">
          <img src="../assets/responsive logo.svg" alt="" class="h-[34px] w-[27px] object-cover">
        </router-link>
        <div class="md:flex hidden -space-x-2 items-center">
        <button class="relative h-8 w-8 hover:bg-green-500 hover:bg-opacity-20 rounded-lg transition-all duration-400 hidden md:flex items-center justify-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="w-6 h-6 text-white"><path fill="currentColor" d="M7 22h13v-2H7zm0-5h10v-2H7zm0-7v2h13v-2zm18 9.59L21.42 16 25 12.41 23.59 11l-5 5 5 5z"></path>
            </svg>
          </span>
        </button>
        <div class="">
          <router-link class="fonnt-bold" to="/">
            <img src="../assets/logo.png" alt="" class="h-[50px] w-[130px] object-cover">
          </router-link>
        </div>
      </div>
      <div class="bg-[#192C3D] p-1 md:flex hidden gap-2 items-center rounded-lg  ">
        <div class="flex items-center pl-2 pr-2.5 py-[6px] hover:bg-white hover:bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1">
          <img src="../assets/casino.svg" alt="" class="w-[18px] h-[18px]">
          <h1 class="text-sm text-white font-semibold">Casino</h1>
        </div>
        <div class="flex items-center pl-2 pr-2.5 py-[6px] hover:bg-white hover:bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1">
          <img src="../assets/Sports.svg" alt="" class="w-[18px] h-[18px]">
          <h1 class="text-sm text-white font-semibold">Casino</h1>
        </div>
      </div>
        <div>
          <div class="md:flex hidden lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5 cursor-pointer text-white">
              <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="relative cursor-pointer hidden lg:flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for Game & Providers"
              class="block w-[310px] cursor-pointer rounded-[8px] border-0 bg-[#2F3F4E] py-[8px] pl-12 placeholder:text-[#CFD2D5] shadow-sm ring-1 ring-inset ring-gray-600 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="absolute left-3">
              <span class="border-r flex pr-3 border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 text-white">
                  <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>
            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd
                class="inline-flex items-center rounded px-1  font-sans text-[14px] text-[#A2A9B0]"
                >Ctrl+K</kbd
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <button class="font-semibold text-white text-[14px] hover:bg-white transition-all duration-300 hover:bg-opacity-[7%] px-5 py-2.5 rounded-[8px] ">Log In</button>
        <button class="font-semibold text-white text-[14px] bg-[#52C644] transition-all duration-300 hover:bg-opacity-[70%] px-[18px] py-2.5 rounded-[8px] ">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const a = 10;
const b = 10;
</script>
