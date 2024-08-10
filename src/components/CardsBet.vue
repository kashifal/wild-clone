<template>
  <div class="" v-if="items?.length === 2">
    <div
      class="flex items-center justify-between rounded-t-md border-b border-[#283D4B] bg-[#1C2C3C] p-2"
    >
      <div class="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-[#B0B5BB]"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
            />
          </g>
        </svg>
        <p class="text-xs font-medium text-[#B0B5BB]">Japan,NPB</p>
      </div>
      <div
        class="flex sm:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-[400px] w-1/3 items-center justify-between gap-1 text-[#B0B5BB]"
      >
        <div class="2xl:flex 2xl:justify-between items-center 2xl:gap-28">
          <div class="md:flex hidden sm:w-[110px] w-[50px] justify-between 2xl:gap-24">
            <p class="text-sm">1</p>
            <p class="text-sm">2</p>
          </div>
          <div
            class="2xl:flex items-center justify-end gap-3 w-[155px] relative -left-10 hidden"
          >
            <p class="text-sm">Under</p>
            <p class="text-sm">Total</p>
            <p class="text-sm">Over</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 2xl:reative -left-96"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m17 14l-5-5l-5 5"
          />
        </svg>
      </div>
    </div>
    <div class="text-xs bg-[#1C2C3C] px-3 pt-3 pb-2 font-bold text-[#B0B5BB]">
      <div
        class="divide w-full flex-col items-center justify-between gap-3 flex md:flex-row"
      >
        <div class="sm:flex-row justify-between flex-col flex w-full gap-3">
          <p class="truncatex text-xs font-semibold truncate text-[#B0B5BB]">
            Inning 5
          </p>
          <div
            class="divide flex flex-row w-full justify-between gap-2 divide divide-x"
          >
            <div class="w-full">
              <div class="flex w-full items-center justify-between gap-2">
                <div class="flex items-center justify-between gap-2">
                  <img
                    src="../assets/jersy.png"
                    alt=""
                    class="h-[17px] w-[17px]"
                  />
                  <p class="truncate text-[#3FC02F]">Chunichi Dragons *</p>
                </div>
                <div class="flex items-center gap-3 truncate">
                  <p class="">0</p>
                  <p class="">3</p>
                </div>
              </div>
              <div class="flex w-full mt-1 items-center justify-between gap-2">
                <div class="flex items-center justify-between gap-2">
                  <img
                    src="../assets/jersey2.png"
                    alt=""
                    class="h-[17px] w-[17px]"
                  />
                  <p class="truncatetext-[#3FC02F]">Chunichi Dragons *</p>
                </div>
                <div class="flex items-center gap-3 truncate">
                  <p class="">0</p>
                  <p class="">1</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 pl-2">
              <div class="md:flex hidden flex-col">
                <p class="text-xs font-bold text-[#3FC02F]">1</p>
                <p class="text-xs font-bold text-[#3FC02F]">3</p>
              </div>
              <div class="md:hidden flex flex-col">
                <p class="text-xs font-bold text-[#77808A]">Set2</p>
                <router-link to="/sportsbet">
                  <div
                    class="flex md:hidden sm:justify-start justify-center items-center text-[#B0B5BB]"
                  >
                    <p class="text-xs font-bold text-[#B0B5BB]">17</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                      />
                    </svg>
                  </div>
                </router-link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#77808A]"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="sm:flex 2xl:w-1/2 w-full items-center gap-1 md:w-auto">
          <div class="flex w-full justify-between gap-[2px]">
            <button
              class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
            <button
              class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
          </div>
          <div
            class="border-l w-[170px] border-gray-400 pl-1 hidden 2xl:flex items-center"
          >
            <button
              class="flex w-1/3 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-6 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
            <button
              class="flex w-1/3 cursor-not-allowed justify-center gap-2 px-6 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
            <button
              class="flex w-1/3 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-6 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
          </div>
          <router-link to="/sportsbet">
            <div
              class="md:flex hidden sm:justify-start justify-center items-center text-[#B0B5BB]"
            >
              <p class="text-sm font-bold text-[#B0B5BB]">17</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="flex items-center cursor-pointer justify-center mx-auto text-[#B0B5BB] text-xs gap-1"
        @click="showDetails = !showDetails"
      >
        <p class="">{{ showDetails ? "Hide" : "Show" }} top markets</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="[showDetails ? 'rotate-[270deg]' : 'rotate-90']"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
          />
        </svg>
      </div>
    </div>
    <!-- Code Here -->
    <div
      :class="[
        showDetails
          ? 'rounded-b-md  bg-[#1C2C3C] p-4 mt-[2px]'
          : 'rounded-b-md  bg-[#1C2C3C] hidden p-4 mt-[2px]',
      ]"
    >
      <div class="">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Double Chance</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 rounded-t-md md:rounded-t-none md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">1X</p>
            <h6 class="text-white text-sm">1.75</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">12</p>
            <h6 class="text-white text-sm">1.23</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">X2</p>
            <h6 class="text-white text-sm">1.35</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Team 1 Total Goals</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex w-full md:w-1/2 cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Over (1.5)</p>
            <h6 class="text-white text-sm">1.79</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Under (0.5)</p>
            <h6 class="text-white text-sm">1.44</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Team 2 Total Goals</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Over (1.5)</p>
            <h6 class="text-white text-sm">1.09</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Under (0.5)</p>
            <h6 class="text-white text-sm">1.34</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Goals Handicap</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CSM Targu Jiu (+1.5)</p>
            <h6 class="text-white text-sm">1.32</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CS Vulturii Farcasesti (-1.5)</p>
            <h6 class="text-white text-sm">3.10</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Draw No Bet</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex w-full md:w-1/2 cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CSM Targu Jiu</p>
            <h6 class="text-white text-sm">1.52</h6>
          </button>
          <button
            class="flex w-full md:w-1/2 cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CS Vulturii Farcasesti</p>
            <h6 class="text-white text-sm">1.46</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Both Teams To Score</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Yes</p>
            <h6 class="text-white text-sm">1.99</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">No</p>
            <h6 class="text-white text-sm">1.64</h6>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="" v-if="items?.length === 3">
    <div
      class="flex items-center justify-between rounded-t-md border-b border-[#283D4B] bg-[#1C2C3C] p-2"
    >
      <div class="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-[#B0B5BB]"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
            />
          </g>
        </svg>
        <p class="text-xs font-medium text-[#B0B5BB]">Japan,NPB</p>
      </div>
      <div
        class="flex sm:w-1/3 md:w-[300px] lg:w-[300px] xl:w-[300px] 2xl:w-[400px] w-1/3 items-center justify-between gap-1 text-[#B0B5BB]"
      >
        <div class="2xl:flex 2xl:justify-between mx-auto items-center 2xl:gap-28">
          <div class="md:flex hidden sm:w-[110px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[150px] mx-auto w-[50px] justify-between 2xl:gap-14">
            <p class="text-sm">1</p>
            <p class="text-sm">X</p>
            <p class="text-sm">2</p>
          </div>
          <div
            class="2xl:flex items-center justify-end gap-3 2xl:gap-6 w-[155px] 2xl:w-[120px] relative -left-10 hidden"
          >
            <p class="text-sm">Under</p>
            <p class="text-sm">Total</p>
            <p class="text-sm">Over</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 2xl:reative -left-96"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m17 14l-5-5l-5 5"
          />
        </svg>
      </div>
    </div>
    <div class="text-xs bg-[#1C2C3C] px-3 pt-3 pb-2 font-bold text-[#B0B5BB]">
      <div
        class="divide w-full flex-col items-center justify-between gap-3 flex md:flex-row"
      >
        <div class="sm:flex-row justify-between flex-col flex w-full gap-3">
          <p class="truncatex text-xs font-semibold truncate text-[#B0B5BB]">
            Inning 5
          </p>
          <div
            class="divide flex flex-row w-full justify-between gap-2 divide divide-x"
          >
            <div class="w-full">
              <div class="flex w-full items-center justify-between gap-2">
                <div class="flex items-center justify-between gap-2">
                  <img
                    src="../assets/jersy.png"
                    alt=""
                    class="h-[17px] w-[17px]"
                  />
                  <p class="truncate text-[#3FC02F]">Chunichi Dragons *</p>
                </div>
                <div class="flex items-center gap-3 truncate">
                  <p class="">0</p>
                  <p class="">3</p>
                </div>
              </div>
              <div class="flex w-full mt-1 items-center justify-between gap-2">
                <div class="flex items-center justify-between gap-2">
                  <img
                    src="../assets/jersey2.png"
                    alt=""
                    class="h-[17px] w-[17px]"
                  />
                  <p class="truncatetext-[#3FC02F]">Chunichi Dragons *</p>
                </div>
                <div class="flex items-center gap-3 truncate">
                  <p class="">0</p>
                  <p class="">1</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 pl-2">
              <div class="md:flex hidden flex-col">
                <p class="text-xs font-bold text-[#3FC02F]">1</p>
                <p class="text-xs font-bold text-[#3FC02F]">3</p>
              </div>
              <div class="md:hidden flex flex-col">
                <p class="text-xs font-bold text-[#77808A]">Set2</p>
                <router-link to="/sportsbet">
                  <div
                    class="flex md:hidden sm:justify-start justify-center items-center text-[#B0B5BB]"
                  >
                    <p class="text-xs font-bold text-[#B0B5BB]">17</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                      />
                    </svg>
                  </div>
                </router-link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#77808A]"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="sm:flex 2xl:w-1/2 w-full items-center gap-1 md:w-auto">
          <div class="flex w-full justify-between gap-[2px]">
            <button
              class="flex w-1/2 xl:px-7 md:px-7 cursor-not-allowed justify-between 2xl:px-5 gap-2 rounded-l-md bg-[#273E50] px-2 sm:px-8 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm block 2xl:block md:hidden text-gray-400">1</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#526573]" width="1em" height="1em" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z" />
              </svg>
            </button>
            <button
            class="flex w-1/2 xl:px-7 md:px-7 cursor-not-allowed justify-between 2xl:px-5 gap-2 bg-[#273E50] px-2 sm:px-8 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm block 2xl:block md:hidden text-gray-400">X</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#526573]" width="1em" height="1em" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z" />
            </svg>
          </button>
            <button
              class="flex w-1/2 md:px-7 xl:px-7 cursor-not-allowed items-center justify-between 2xl:px-5 gap-2 rounded-r-md bg-[#273E50] px-2 sm:px-8 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm block 2xl:block md:hidden text-gray-400">2</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#526573]" width="1em" height="1em" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z" />
              </svg>
            </button>
          </div>
          <div
            class="border-l w-[170px] border-gray-400 pl-1 hidden 2xl:flex items-center"
          >
            <button
              class="flex w-1/3 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-6 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold  text-white">12.00</p>
             
            </button>
            <button
              class="flex w-1/3 cursor-not-allowed justify-center gap-2 px-6 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
            <button
              class="flex w-1/3 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-6 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
            >
              <p class="text-sm font-bold text-white">12.00</p>
            </button>
          </div>
          <router-link to="/sportsbet">
            <div
              class="md:flex hidden sm:justify-start justify-center items-center text-[#B0B5BB]"
            >
              <p class="text-sm font-bold text-[#B0B5BB]">17</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="flex items-center cursor-pointer justify-center mx-auto text-[#B0B5BB] text-xs gap-1"
        @click="showDetails = !showDetails"
      >
        <p class="">{{ showDetails ? "Hide" : "Show" }} top markets</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="[showDetails ? 'rotate-[270deg]' : 'rotate-90']"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
          />
        </svg>
      </div>
    </div>
    <!-- Code Here -->
    <div
      :class="[
        showDetails
          ? 'rounded-b-md  bg-[#1C2C3C] p-4 mt-[2px]'
          : 'rounded-b-md  bg-[#1C2C3C] hidden p-4 mt-[2px]',
      ]"
    >
      <div class="">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Double Chance</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 rounded-t-md md:rounded-t-none md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">1X</p>
            <h6 class="text-white text-sm">1.75</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">12</p>
            <h6 class="text-white text-sm">1.23</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">X2</p>
            <h6 class="text-white text-sm">1.35</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Team 1 Total Goals</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex w-full md:w-1/2 cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Over (1.5)</p>
            <h6 class="text-white text-sm">1.79</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Under (0.5)</p>
            <h6 class="text-white text-sm">1.44</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Team 2 Total Goals</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Over (1.5)</p>
            <h6 class="text-white text-sm">1.09</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Under (0.5)</p>
            <h6 class="text-white text-sm">1.34</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Goals Handicap</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CSM Targu Jiu (+1.5)</p>
            <h6 class="text-white text-sm">1.32</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CS Vulturii Farcasesti (-1.5)</p>
            <h6 class="text-white text-sm">3.10</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Draw No Bet</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex w-full md:w-1/2 cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CSM Targu Jiu</p>
            <h6 class="text-white text-sm">1.52</h6>
          </button>
          <button
            class="flex w-full md:w-1/2 cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">CS Vulturii Farcasesti</p>
            <h6 class="text-white text-sm">1.46</h6>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between px-3 gap-2">
          <h3 class="text-white font-semibold text-sm">Both Teams To Score</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#828B94]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
            />
          </svg>
        </div>
        <div
          class="flex md:flex-row flex-col w-full pt-3 justify-between gap-[2px]"
        >
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-t-none rounded-t-md md:rounded-bl-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">Yes</p>
            <h6 class="text-white text-sm">1.99</h6>
          </button>
          <button
            class="flex md:w-1/2 w-full cursor-not-allowed justify-between gap-2 md:rounded-b-none rounded-b-md md:rounded-br-md bg-[#273E50] px-4 py-3 text-center transition-all duration-500 hover:bg-opacity-50"
          >
            <p class="text-sm text-[#828B94]">No</p>
            <h6 class="text-white text-sm">1.64</h6>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const showDetails = ref(false);
defineProps({
  items: Object,
});
</script>
