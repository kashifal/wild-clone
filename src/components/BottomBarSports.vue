<template>
  <div class="z-20">
    <div
      class="fixed xl:hidden z-20 inset-x-0 bottom-0 flex w-full justify-between bg-[#263747] px-4 py-2.5 shadow"
      style="z-index: 999"
    >
      <div class="group">
        <router-link
          to="/sports"
          role="button"
          class="text-text-subdued relative flex items-center max-w-[3.75rem] flex-1 cursor-pointer flex-col text-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
          >
            <img src="../assets/Sports.svg" alt="" class="w-[18px] h-[18px]" />
          </span>
          <span class="z-10 group-active:scale-95 text-[#3FC02F] font-medium"
            >Sports</span
          ></router-link
        >
      </div>
      <div class="group">
        <router-link
          to="/inplay"
          role="button"
          class="text-text-subdued text-center relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
          >
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
                d="m10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88M21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99L8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"
              />
            </svg> </span
          ><span class="z-10 group-active:scale-95 -ml-2"
            >Live</span
          ></router-link
        >
      </div>

      <div class="group" @click="SidemodalFunc">
        <router-link
          to=""
          role="button"
          class="text-text-subdued relative flex max-w-[3.75rem] flex-1 cursor-pointer text-[#BBC0C5] hover:text-white flex-col items-center justify-center p-0 px-2 text-xs font-medium"
          ><span class="h-7 w-7 overflow-visible fill-current"
            ><div
              class="ring-[#263747] text-lg text-white fonr-semibold group-active:[&amp;>svg]:scale-95 absolute -top-6 left-1/2 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full ring-8"
              style="
                background: linear-gradient(
                  325deg,
                  rgb(0, 195, 122) 4.24%,
                  rgb(39, 216, 74) 116.92%
                );
              "
            >
              {{ bets.all_bets.length }}
            </div></span
          ><span class="z-10 group-active:scale-95 -ml-2"
            >Bet Slip</span
          ></router-link
        >
      </div>

      <div class="group">
        <router-link
          to="/poromoSport"
          role="button"
          class="text-text-subdued relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#77808A]"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <rect width="16" height="16" fill="none"></rect>
              <path
                fill="currentColor"
                d="M3 2.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"
              ></path></svg></span
          ><span class="z-10 group-active:scale-95 -ml-2"
            >Promo</span
          ></router-link
        >
      </div>

      <div class="group">
        <router-link
          to="/"
          @click="casinoFunc"
          role="button"
          class="relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#77808A]"
              width="1em"
              height="1em"
              viewBox="0 0 50 50"
            >
              <rect width="50" height="50" fill="none" />
              <path
                fill="currentColor"
                d="M49 10.489c.604-.457 1-1.173 1-1.989a2.5 2.5 0 1 0-5 0a2.49 2.49 0 0 0 1 1.989V26h-9v8h10v-.297A3.99 3.99 0 0 0 49.5 30c0-.691-.191-1.332-.5-1.899zM6 17c1.021 0 1.73.172 3 0c0 0-4.016 2.666-4.016 6H10s.006-5.554 3-9l-1-1s-2 1-4 0c0 0-2 0-4 1v-1H3v6h1s0-2 2-2m14 0c1.021 0 1.73.172 3 0c0 0-4.016 2.666-4.016 6H24s.006-5.554 3-9l-1-1s-2 1-4 0c0 0-2 0-4 1v-1h-1v6h1s0-2 2-2M38 7V5H25.88c-.456-2.002-2.239-3.5-4.38-3.5S17.576 2.998 17.12 5H5v2H0v41h44V7zm-22 4h12v14H16zM2 11h12v14H2zm36 32H5v-7h33zm4-18H30V11h12zm-8-8c1.021 0 1.73.172 3 0c0 0-4.016 2.666-4.016 6H38s.006-5.554 3-9l-1-1s-2 1-4 0c0 0-2 0-4 1v-1h-1v6h1s0-2 2-2"
              />
            </svg>
          </span>
          <span class="z-10 group-active:scale-95 -ml-2"
            >Casino</span
          ></router-link
        >
      </div>
    </div>
  </div>

  <div class="">
    <div
      @click="SidemodalFunc"
      :class="[
        HIDE
          ? 'h-[100vh] block z-50 w-screen   bg-black/80 fixed top-0 left-0'
          : 'h-[100vh]  z-50 w-screen hidden  bg-black/80 fixed top-0 left-0',
      ]"
    ></div>

    <div
      :class="[
        HIDE
          ? 'h-[90%] w-[100%] overflow-y-auto sidebarer z-50 lg:hidden block top-6  fixed  inset-0 '
          : 'h-[90%] w-[100%]  z-50 overflow-y-auto sidebarer hidden md:px-0 px-6 top-6 fixed inset-0 m-auto ',
      ]"
    >
      <div
        :class="[
          bottomBar && combo === true
            ? ' max-h-[90%]  sidebar shadow-3xl rounded-t-3xl  fixed bottom-[0%] left-0  bg-[#273E50]   overflow-y-auto z-50    w-full'
            : bottomBar && combo === false
              ? 'min-h-[100%]  sidebar fixed shadow-3xl bottom-0  right-0  bg-[#273E50]   overflow-y-auto z-50    w-full'
              : 'hidden sidebar overflow-auto shadow-3xl bottom-[0%] bg-[#1C2C3C] absolute w-full',
        ]"
      >
        <div
          :class="[
            bottomBar
              ? ' h-[80%]  sidebar fixed left-0 bg-[#273E50]/70 rounded-t-3xl -z-10 overflow-y-auto w-full'
              : 'h-[80%] sidebar  fixed hidden bottom-[20%] right-0 bg-[#273E50]/40 -z-0 overflow-y-auto w-full',
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
            @click="setHideFunc"
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
          :class="[
            bottomBar ? ' bg-[#1C2C3C] pb-20 pt-6 z-50 ' : 'px-2.5 hidden',
          ]"
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
          <!--conditions prob-->
          <div v-if="bets.all_bets.length <= 0" class="pt-3 px-2 pb-8">
            <p class="text-[#A9AFB5] text-sm text-center font-medium">
              To access a shared bet, enter the code provided
              {{ bets.all_bets.length }}
            </p>
            <div class="flex items-center px-2 gap-2 pt-3 justify-between">
              <input
                type="number"
                placeholder="Enter Code"
                class="placeholder:text-[#A9AFB5] w-full focus:ring-[#2FC02F] ring-1 ring-white outline-none bg-[#1C2C3C] rounded py-1.5 px-2 text-white"
              />
              <button
                class="bg-[#3FC02F] cursor-not-allowed px-4 rounded-md w-1/1 text-white text-sm font-bold py-2.5 opacity-50 hover:opacity-40"
              >
                Submit
              </button>
            </div>
          </div>
          <div class="py-2 mt-auto bg-[#1C2C3C] px-4">
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
          <div
            v-if="combo && bets.all_bets.length > 0"
            :class="[
              bottomBar
                ? 'text-center relative pt-5 bottom-0 w-full z-20 '
                : 'text-center  pt-5 bottom-10 w-full z-20 ',
            ]"
          >
            <h5 class="text-white font-bold text-sm">
              Some odds have changed.
            </h5>
            <p class="text-white/80">Please review and accept changes</p>
            <div
              class="flex flex-wrap gap-2 justify-center items-center pt-4 px-3"
            >
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
                              class="peer rounded-full bg-transparent cursor-pointer hidden after:opacity-100"
                              checked="checked"
                              name="filters"
                              type="radio"
                            />
                            <span
                              class="inline-block w-3.5 h-3.5 border-2 border-[#3FC02F] relative cursor-pointer after:content-[''] after:absolute after:top-2/4 rounded-full after:rounded-full after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[8px] after:h-[8px] after:bg-[#3FC02F] after:opacity-0 peer-checked:after:opacity-100"
                            ></span>
                          </label>
                        </div>

                        <p class="text-white text-sm font-bold">
                          Do not accept
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
                        <p class="text-white font-medium text-sm">
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
                        <p class="text-white font-medium text-sm">
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBetStore } from "../store/bets";
import { useSidebarStore } from "../store/sidebar";
const sidebar = useSidebarStore();
const HIDE = ref(false);

const combo = ref(true);

const bets = useBetStore();

const removeFunc = (id) => {
  bets.removeBet(id);
};

const casinoFunc = () => {
  sidebar.setCasino("Casino");
};
const bottomBar = ref(false);

const filters = ref(false);
function open() {
  filters.value = !filters.value;
}
function SidemodalFunc() {
  HIDE.value = !HIDE.value;
  bottomBar.value = !bottomBar.value;
  console.log(HIDE.value, bottomBar.value);
}
const removeBetFunc = (id) => {
  bets.removeBet(id);
};

const setHideFunc = () => {
  bottomBar.value = !bottomBar.value;
  HIDE.value = !HIDE.value;

  console.log("====================================");
  console.log(bottomBar.value, HIDE.value);
  console.log("====================================");
};
</script>

<style>
.sidebarer {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.sidebarer::-webkit-scrollbar {
  width: 2px; /* Width of the scrollbar */
}

.sidebarer::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.sidebarer::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>
