<template>
  <div
    class="z-40 xl:block hidden overflow-hidden h-screen w-[20%] fixed right-0 top-16 bg-[#1C2C3C]"
  >
    <div class="relative h-full">
      <div
        class="flex border-b bg-[#273E50] border-[#415565] items-center h-12 justify-between"
      >
        <div
          class="flex px-6 cursor-pointer items-center hover:text-white text-[#526573] gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64zM7 21h10"
              />
              <rect width="20" height="14" x="2" y="3" rx="2" />
            </g>
          </svg>
          <p class="text-sm">Live</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer text-[#526573] hover:text-white w-6 h-6"
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
            d="m6 15l6-6l6 6"
          />
        </svg>

        <div
          class="flex px-6 border-b border-[#3FC02F] h-full cursor-pointer items-center text-white gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013H14.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-sm">Statistics</p>
        </div>
      </div>
      <div
        class="flex justify-between bg-[#273E50] divide divide-x divide-[#415565] px-2 items-center"
      >
        <div class="px-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-[#7D8B96] w-5 cursor-pointer h-5 hover:text-white"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z" />
            <path
              fill="currentColor"
              d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"
            />
          </svg>
        </div>
        <p class="truncate text-sm text-white py-2 px-2">
          Today matck is so important Today matck is so important
        </p>
        <div class="px-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-[#7D8B96] w-5 cursor-pointer h-5 hover:text-white"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <rect width="32" height="32" fill="none" />
            <path
              fill="currentColor"
              d="M28.586 13.314L30 11.9L20 2l-1.314 1.415l1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583L3.41 30l8.911-8.909L18 26.748l1.393-1.414l-1.716-1.716l9.724-11.49Z"
            />
          </svg>
        </div>
      </div>
      <div
        class="flex gap-3 border-b border-[#415565] items-center h-10 justify-center"
      >
        <div
          class="flex px-6 w-1/2 border-b justify-center border-[#3FC02F] h-full cursor-pointer items-center text-white gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M16.95 4a1 1 0 0 0-1.414-1.414l-3.89 3.889a.5.5 0 0 1-.707 0L8.464 4A1 1 0 1 0 7.05 5.414L8.636 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5.05zm-7.487 7.92a1.045 1.045 0 0 1 1.458-.842c.355.154 1.028.467 1.868.952s1.449.912 1.76 1.142a1.045 1.045 0 0 1 0 1.683c-.31.229-.914.652-1.76 1.14c-.847.49-1.515.8-1.868.954a1.045 1.045 0 0 1-1.458-.842a19 19 0 0 1-.109-2.094c0-.966.066-1.708.11-2.092"
              />
            </g>
          </svg>
        </div>
        <div
          class="flex px-6 w-1/2 hover:border-b border-[#3FC02F] text-[#77808A] hover:tex-white h-full justify-center cursor-pointer items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013H14.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="">
        <img
          src="../assets/bg.jpg"
          alt=""
          class="h-40 hover:scale-150 transition-all duration-500 object-cover w-full"
        />
      </div>
      <div
        class="flex items-center justify-center group text-[#77808A] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2 px-4 gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
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
        <p class="text-sm">Sports</p>
      </div>
      <!-- Div - Hidden and Show -->
      <div
        :class="[
          bottomBar && combo === true
            ? ' max-h-[80%]  sidebar shadow-2xl  rounded-t-3xl fixed bottom-[20%] right-0  bg-[#273E50]   overflow-y-auto z-50    w-[20%]'
            : bottomBar && combo === false
              ? 'min-h-[100%]  sidebar fixed shadow-2xl  bottom-0  right-0  bg-[#273E50]   overflow-y-auto z-50    w-[20%]'
              : 'h-[120px] sidebar overflow-auto shadow-2xl   bottom-[0%] bg-[#1C2C3C] absolute w-full',
        ]"
      >
        <div
          :class="[
            bottomBar
              ? ' h-[80%]  sidebar fixed bottom-[20%]  right-0 bg-[#273E50]/70 -z-10 overflow-y-auto w-[20%]'
              : 'h-[80%] sidebar  fixed hidden bottom-[20%]  right-0 bg-[#273E50]/40 -z-0 overflow-y-auto w-[20%]',
          ]"
        ></div>
        <div
          class="flex w-full border-b sticky top-0 z-50 bg-[#273E50] border-[#415565] items-center min-h-16 justify-between"
        >
          <div
            @click="combo = true"
            :class="[
              combo
                ? 'flex px-6 cursor-pointer items-center  text-white  gap-1'
                : 'flex px-6  cursor-pointer items-center hover:text-white text-[#526573] gap-1',
            ]"
          >
            <p class="text-sm uppercase font-bold">
              Combo
              <span class="px-2 ml-2 rounded-full py-0.5 bg-blue-400">{{
                bets.all_bets.length
              }}</span>
            </p>
          </div>

          <svg
            @click="bottomBar = !bottomBar"
            xmlns="http://www.w3.org/2000/svg"
            :class="[
              bottomBar
                ? 'rotate-180 cursor-pointer font-bold text-[#526573] hover:text-white w-6 h-6'
                : 'rotate-270 cursor-pointer font-bold   text-[#526573] hover:text-white w-6 h-6',
            ]"
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
              stroke-width="3"
              d="m6 15l6-6l6 6"
            />
          </svg>

          <div
            @click="combo = false"
            :class="[
              !combo
                ? 'flex px-6   cursor-pointer items-center  text-white  gap-1'
                : 'flex px-6 cursor-pointer items-center hover:text-white text-[#526573] gap-1',
            ]"
          >
            <p class="text-sm uppercase font-bold">My Bets</p>
          </div>
        </div>
        <div v-if="!combo" class="px-1 py-3 ml-2 w-full buttonsRightSide">
          <div
            class="flex p-1 w-full mx-auto justify-between whitespace-nowrap bg-[#2B4658] rounded-full"
          >
            <button
              class="px-[18px] w-1/3 text-sm bg-[#1C2C3C] rounded-full py-1.5 text-white font-semibold"
            >
              All
            </button>
            <button
              class="px-[18px] w-1/3 text-sm hover:bg-[#1C2C3C] rounded-full py-1.5 text-white font-semibold"
            >
              Opened
            </button>
            <button
              class="px-[18px] w-1/3 text-sm hover:bg-[#1C2C3C] rounded-full py-1.5 text-white font-semibold"
            >
              Setteled
            </button>
          </div>
        </div>
        <div
          v-else
          :class="[bottomBar ? 'px-2  bg-[#1C2C3C] z-50 ' : 'px-2.5 hidden']"
        >
          <div class="flex justify-between px-4 items-center gap-2">
            <div class="flex items-center gap-3">
              <label
                class="relative h-8 w-6 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                for="switchToggle"
                ><input
                  class="peer sr-only"
                  id="switchToggle"
                  type="checkbox"
                />
                <span
                  class="absolute inset-0 m-auto h-2.5 rounded-full bg-stone-600"
                >
                </span>
                <span
                  class="peer-che peer-checked:[&amp;_>_*]:scale-0 absolute inset-y-0 start-0 m-auto size-3.5 rounded-full bg-[#CFCFCF] transition-all peer-checked:start-4 peer-checked:bg-[#F44336]"
                >
                </span>
              </label>
              <p class="text-white/70 text-sm">Quik Bets</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-[#77808A] w-3.5 h-3.5"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <rect width="16" height="16" fill="none" />
                <path
                  fill="currentColor"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75M8 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                />
              </svg>
            </div>
            <div class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-[#77808A] w-3.5 h-3.5"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="currentColor"
                  d="M11.078 0c.294 0 .557.183.656.457l.706 1.957q.379.094.654.192q.3.107.78.33l1.644-.87a.7.7 0 0 1 .832.131l1.446 1.495c.192.199.246.49.138.744l-.771 1.807q.191.352.308.604q.126.273.312.76l1.797.77c.27.115.437.385.419.674l-.132 2.075a.69.69 0 0 1-.46.605l-1.702.605q-.073.352-.154.606a9 9 0 0 1-.298.774l.855 1.89a.68.68 0 0 1-.168.793l-1.626 1.452a.7.7 0 0 1-.796.096l-1.676-.888a7 7 0 0 1-.81.367l-.732.274l-.65 1.8a.7.7 0 0 1-.64.457L9.11 20a.7.7 0 0 1-.669-.447l-.766-2.027a15 15 0 0 1-.776-.29a10 10 0 0 1-.618-.293l-1.9.812a.7.7 0 0 1-.755-.133L2.22 16.303a.68.68 0 0 1-.155-.783l.817-1.78a10 10 0 0 1-.302-.644a14 14 0 0 1-.3-.811L.49 11.74a.69.69 0 0 1-.49-.683l.07-1.921a.69.69 0 0 1 .392-.594L2.34 7.64q.13-.478.23-.748a9 9 0 0 1 .314-.712L2.07 4.46a.68.68 0 0 1 .15-.79l1.404-1.326a.7.7 0 0 1 .75-.138l1.898.784q.314-.209.572-.344q.307-.162.824-.346l.66-1.841A.7.7 0 0 1 8.984 0zm-1.054 7.019c-1.667 0-3.018 1.335-3.018 2.983s1.351 2.984 3.018 2.984s3.017-1.336 3.017-2.984s-1.35-2.983-3.017-2.983"
                />
              </svg>
              <p class="text-white/70 text-sm">Setting</p>
            </div>
          </div>
          <div v-if="bets.all_bets.length <= 0" class="pt-3 pb-8">
            <p class="text-[#A9AFB5] text-sm text-center font-medium">
              To access a shared bet, enter the code provided
              {{ bets.all_bets.length }}
            </p>
            <div class="flex items-center gap-1 pt-3 justify-between">
              <input
                type="number"
                placeholder="Enter Code"
                class="placeholder:text-[#A9AFB5] w-44 focus:ring-[#2FC02F] ring-1 ring-white outline-none bg-[#1C2C3C] rounded py-1.5 px-2 text-white"
              />
              <button
                class="bg-[#3FC02F] cursor-not-allowed px-4 rounded-md w-1/3 text-white text-sm font-bold py-2 opacity-50 hover:opacity-40"
              >
                Submit
              </button>
            </div>
          </div>
          <div class="py-2 mt-auto bg-[#1C2C3C] px-2">
            <div
              v-if="bets.all_bets.length > 0"
              class="flex py-2 mt-auto justify-between gap-1 px-2 items-center"
            >
              <h4
                class="uppercase cursor-pointer text-white/50 text-xs hover:text-white"
              >
                Singles
              </h4>
              <h4 class="uppercase cursor-pointer text-xs text-white">Combo</h4>
              <h4
                class="uppercase cursor-pointer text-white/50 text-xs hover:text-white"
              >
                System
              </h4>
            </div>

            <div class="mt-auto sidebar flex flex-col gap-1">
              <div
                v-for="bet in bets.all_bets"
                :key="bet"
                class="bg-[#273E50] rounded-md p-3 border border-[#343A40]"
              >
                <div class="flex justify-between items-center gap-1">
                  <div class="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 text-[#F4D136]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <rect width="512" height="512" fill="none" />
                      <path
                        fill="currentColor"
                        d="M511.8 267.4c-26.1 8.7-53.4 13.8-81 15.1C440 177.2 399.3 78.3 327.6 10.1C434.1 41.1 512 139.5 512 256c0 3.8-.1 7.6-.2 11.4m-3.9 34.7c-5.8 32-17.6 62-34.2 88.7c-97.5 48.5-217.7 42.6-311.9-24.5c23.7-36.2 55.4-67.7 94.5-91.8c79.9 43.2 170.1 50.8 251.6 27.6m-236-55.5C269.4 155.7 230.8 73.9 170 14.9C196.8 5.2 225.8 0 256 0c2.7 0 5.3 0 7.9.1c90.8 60.2 145.7 167.2 134.7 282.3c-43.1-2.4-86.4-14.1-126.8-35.9zM138 28.8c20.6 18.3 38.7 39.4 53.7 62.6C95.9 136.1 30.6 220.8 7.3 316.9C2.5 297.4 0 277 0 256C0 157.2 56 71.5 138 28.8m69.6 90.5c19.5 38.6 31 81.9 32.3 127.7c-77.4 47.6-129 121.9-149.7 204c-24.2-20.6-44.6-45.6-59.8-73.8c6.7-108.7 71.9-209.9 177.1-257.9zM256 512c-50.7 0-98-14.7-137.8-40.2c5.6-27 14.8-53.1 27.4-77.7c86.6 60.5 192.5 74.7 287.4 46.9c-46 44-108.3 71-177 71"
                      />
                    </svg>
                    <h6 class="text-white truncate text-sm font-medium">
                      Match Winner ・ {{ bet.team }} (Wom)
                    </h6>
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="flex items-center -space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-[#3FC02F]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="m7 15l5-5l5 5z" />
                      </svg>
                      <p class="txt-xs font-medium text-white">
                        {{ bet.score }}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-white/80 cursor-pointer w-4 h-4"
                      width="1em"
                      @click="removeBetFunc(bet.id)"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <rect width="15" height="15" fill="none" />
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p class="text-white/80 text-sm">China (Wom) — Turkiye (Wom)</p>
              </div>

              <div
                v-if="bets.all_bets.length > 0"
                class="bg-[#273E50] mt-auto rounded-md p-3 border border-[#343A40]"
              >
                <div class="flex justify-between items-center gap-1">
                  <div class="flex items-center gap-1.5">
                    <h1 class="text-white font-medium">Trebles</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#77808A] w-3.5 h-3.5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <rect width="16" height="16" fill="none" />
                      <path
                        fill="currentColor"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75M8 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                      />
                    </svg>
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="flex items-center -space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-[#3FC02F]"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="m7 15l5-5l5 5z" />
                      </svg>
                      <p class="txt-xs font-medium text-white">12.92</p>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <input
                    type="number"
                    class="bg-[#1C2C3C] text-white px-2 py-1.5 rounded-md w-full mt-3"
                  />
                  <p class="text-white/80 mt-2">BTC</p>
                </div>
                <div class="grid grid-cols-4 gap-3 pt-4">
                  <div
                    class="text-white font-old text-xs px-2 py-2.5 hover:bg-opacity-10 cursor-pointer border border-[#343A40] hover:bg-[#3FC02F] text-center rounded-md"
                  >
                    0.0005
                  </div>
                  <div
                    class="text-white font-old text-xs px-2 py-2.5 hover:bg-opacity-10 cursor-pointer border border-[#343A40] hover:bg-[#3FC02F] text-center rounded-md"
                  >
                    0.0005
                  </div>
                  <div
                    class="text-white font-old text-xs px-2 py-2.5 hover:bg-opacity-10 cursor-pointer border border-[#343A40] hover:bg-[#3FC02F] text-center rounded-md"
                  >
                    0.0005
                  </div>
                  <div
                    class="text-white font-old text-xs px-2 py-2.5 hover:bg-opacity-10 cursor-pointer border border-[#343A40] hover:bg-[#3FC02F] text-center rounded-md"
                  >
                    0.0005
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="combo"
        :class="[
          bottomBar
            ? 'text-center  pt-5 bottom-10 w-full z-50 absolute'
            : 'text-center hidden pt-5 bottom-10 w-full z-50 absolute',
        ]"
      >
        <h5 class="text-white font-bold text-sm">Some odds have changed.</h5>
        <p class="text-white/80">Please review and accept changes</p>
        <div class="flex flex-wrap gap-2 justify-center items-center pt-4 px-3">
          <button
            class="bg-[#3FC02F] w-1/2 px-4 py-2.5 text-white font-bold text-sm rounded-md"
          >
            Accept changes
          </button>
          <div class="">
            <div
              @click="open"
              class="text-white h-10 flex items-center justify-center w-10 hover:bg-opacity-10 cursor-pointer border border-[#343A40] hover:bg-[#3FC02F] text-center rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M22 18.605a.75.75 0 0 1-.75.75h-5.1a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h7.74a2.93 2.93 0 0 1 5.66 0h5.1a.75.75 0 0 1 .75.75m0-13.21a.75.75 0 0 1-.75.75H18.8a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h10.39a2.93 2.93 0 0 1 5.66 0h2.45a.74.74 0 0 1 .75.75m0 6.6a.74.74 0 0 1-.75.75H9.55a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h1.14a2.93 2.93 0 0 1 5.66 0h11.7a.75.75 0 0 1 .75.75"
                />
              </svg>
            </div>
            <!--first code here-->
            <div
              @click="open"
              :class="[
                filters
                  ? 'block absolute w-full -top-[86px] left-0'
                  : 'hidden absolute w-full -top-[86px] left-0',
              ]"
            >
              <div class="bg-[#273E50] w-full left-0 p-3">
                <div class="flex items-center justify-between gap-2">
                  <h1 class="text-white font-bold">Odds changes</h1>
                  <div @click="open" class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-white/80 cursor-pointer w-4 h-4"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <rect width="15" height="15" fill="none"></rect>
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="flex flex-col gap-1 pt-5">
                  <div class="flex items-center gap-1.5">
                    <div class="flex justify-center items-center">
                      <label class="">
                        <input
                          value="wedding-gift"
                          class="peer rounded-full w-full bg-transparent cursor-pointer hidden after:opacity-100"
                          checked="checked"
                          name="filters"
                          type="radio"
                        />
                        <span
                          class="inline-block w-3.5 h-3.5 border-2 border-[#3FC02F] relative cursor-pointer after:content-[''] after:absolute after:top-2/4 rounded-full after:rounded-full after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[8px] after:h-[8px] after:bg-[#3FC02F] after:opacity-0 peer-checked:after:opacity-100"
                        ></span>
                      </label>
                    </div>

                    <p class="text-white text-sm font-bold">Do not accept</p>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <div class="flex justify-center items-center">
                      <label class="">
                        <input
                          value="wedding-gift"
                          class="peer rounded-full bg-transparent cursor-pointer hidden after:opacity-100"
                          name="filters"
                          type="radio"
                        />
                        <span
                          class="inline-block w-3.5 h-3.5 border-2 border-[#71808C] hover:border-[#3FC02F] relative cursor-pointer after:content-[''] after:absolute after:top-2/4 rounded-full after:rounded-full after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[8px] after:h-[8px] after:bg-[#3FC02F] after:opacity-0 peer-checked:after:opacity-100"
                        ></span>
                      </label>
                    </div>
                    <p class="text-[#71808C] font-medium text-sm">
                      Accept higher odds
                    </p>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <div class="flex justify-center items-center">
                      <label class="">
                        <input
                          value="wedding-gift"
                          class="peer rounded-full bg-transparent cursor-pointer hidden after:opacity-100"
                          name="filters"
                          type="radio"
                        />
                        <span
                          class="inline-block w-3.5 h-3.5 border-2 border-[#71808C] hover:border-[#3FC02F] relative cursor-pointer after:content-[''] after:absolute after:top-2/4 rounded-full after:rounded-full after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[8px] after:h-[8px] after:bg-[#3FC02F] after:opacity-0 peer-checked:after:opacity-100"
                        ></span>
                      </label>
                    </div>
                    <p class="text-[#71808C] font-medium text-sm">
                      Do not accept
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-white h-10 flex items-center justify-center w-10 hover:bg-opacity-10 cursor-pointer border border-[#343A40] hover:bg-[#3FC02F] text-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <rect width="1024" height="1024" fill="none" />
              <path
                fill="currentColor"
                d="M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128zM192 512V128.064h640V512z"
              />
            </svg>
          </div>
        </div>
        <button
          class="hover:bg-[#3FC02F] flex items-center justify-center gap-1 mt-6 w-full hover:bg-opacity-10 px-4 py-2.5 text-white font-bold text-sm rounded-md"
        >
          Share Bet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBetStore } from "../store/bets";
import { ref } from "vue";
const bets = useBetStore();
const bottomBar = ref(true);
const removeFunc = (id) => {};

const filters = ref(false);
function open() {
  filters.value = !filters.value;
}

const combo = ref(true);

const removeBetFunc = (id) => {
  bets.removeBet(id);
};
</script>

<style>
.sidebar {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.sidebar::-webkit-scrollbar {
  width: 2px; /* Width of the scrollbar */
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.sidebar::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}

.buttonsRightSide {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.buttonsRightSide::-webkit-scrollbar {
  height: 2px; /* Width of the scrollbar */
}

.buttonsRightSide::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.buttonsRightSide::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>
