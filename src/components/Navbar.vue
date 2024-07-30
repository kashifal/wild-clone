<template>
  <div class="h-20 bg-gray-500 w-full">
    <div
      class="max-w-[1600px] bg-red-400 h-full flex items-center justify-between mx-auto"
    >
      <div class="flex items-center gap-3">
        <div class="">
          <router-link class="fonnt-bold" to="/">Logo</router-link>
        </div>
        <div>
          <div class="relative flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd
                class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400"
                >⌘K</kbd
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const a = 10;
const b = 10;
</script>
