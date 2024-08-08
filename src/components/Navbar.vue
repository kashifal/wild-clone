<template>
  <div
    class="py-3 z-40 sticky shdow-md top-0 h-16 px-5 sm:px-3 bg-[#263747] w-full"
  >
    <div class="h-full flex items-center justify-between mx-auto">
      <div class="flex items-center gap-2.5">
        <button
          @click="SidebarModal"
          class="relative sm:h-8 w-4 h-4 flex xl:hidden sm:w-8 hover:bg-green-500 hover:bg-opacity-20 rounded-lg transition-all duration-400 items-center justify-center"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sm:w-6 text-gray-400 sm:h-6"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <rect width="15" height="15" fill="none" />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <router-link class="fonnt-bold flex md:hidden" to="/">
          <img src="../assets/logo.svg" alt="" class="w-32 h-auto" />
        </router-link>
        <div class="md:flex hidden -space-x-2 items-center">
          <button
            v-if="sidebar.casino === 'Casino'"
            @click="sidebarFunc"
            class="relative h-8 w-8 hover:bg-green-500 hover:bg-opacity-20 rounded-lg transition-all duration-400 hidden md:flex items-center justify-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
                class="w-6 h-6 text-white"
              >
                <path
                  fill="currentColor"
                  d="M7 22h13v-2H7zm0-5h10v-2H7zm0-7v2h13v-2zm18 9.59L21.42 16 25 12.41 23.59 11l-5 5 5 5z"
                ></path>
              </svg>
            </span>
          </button>
          <div class="">
            <router-link class="fonnt-bold" to="/">
              <img
                src="../assets/logo.svg"
                alt=""
                :class="[
                  router.currentRoute.value.fullPath !== '/inplay'
                    ? 'h-auto w-32 ml-3'
                    : 'h-auto w-32 ml-0',
                ]"
              />
            </router-link>
          </div>
        </div>
        <div
          class="bg-[#192C3D] p-1 md:flex hidden gap-2 items-center rounded-lg"
        >
          <router-link @click="casinoFunc('Casino')" to="/">
            <div
              :class="[
                sidebar.casino === 'Casino'
                  ? 'flex items-center pl-2 pr-2.5 py-[6px] bg-white bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1'
                  : 'flex items-center pl-2 pr-2.5 py-[6px] hover:bg-white hover:bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1',
              ]"
            >
              <img
                src="../assets/casino.svg"
                alt=""
                class="w-[18px] h-[18px]"
              />
              <h1 class="text-sm text-white font-semibold">Casino</h1>
            </div>
          </router-link>

          <router-link @click="casinoFunc('Sports')" to="/inplay">
            <div
              :class="[
                sidebar.casino === 'Sports'
                  ? 'flex items-center pl-2 pr-2.5 py-[6px]  bg-white  bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1'
                  : 'flex items-center pl-2 pr-2.5 py-[6px] hover:bg-white hover:bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1',
              ]"
            >
              <img
                src="../assets/Sports.svg"
                alt=""
                class="w-[18px] h-[18px]"
              />
              <h1 class="text-sm text-white font-semibold">Sports</h1>
            </div>
          </router-link>
        </div>
        <div>
          <div class="md:flex hidden lg:hidden"
          @click="SearchModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-5 cursor-pointer text-white"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            @click="SearchModal"
            class="relative cursor-pointer hidden lg:flex items-center"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for Game & Providers"
              class="block w-[310px] cursor-pointer rounded-[8px] border-0 bg-[#2F3F4E] py-[8px] pl-12 placeholder:text-[#CFD2D5] shadow-sm ring-1 ring-inset ring-gray-600 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="absolute left-3">
              <span class="border-r flex pr-3 border-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="size-4 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd
                class="inline-flex items-center rounded px-1 font-sans text-[14px] text-[#A2A9B0]"
                >Ctrl+K</kbd
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-[2px] sm:gap-2 items-center">
        <button
          @click="modalOpen"
          class="font-semibold text-white truncate text-[14px] hover:bg-white transition-all duration-300 hover:bg-opacity-[7%] px-2 py-1.5 sm:px-5 sm:py-2.5 rounded-[8px]"
        >
          Log In
        </button>
        <button
          @click="modalSignup"
          class="font-semibold text-white truncate text-[14px] bg-[#0C49BE] transition-all duration-300 hover:bg-opacity-[70%] px-2 py-1.5 sm:px-5 sm:py-2.5 rounded-[8px]"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>

  <div class="">
    <div
      @click="modalOpen"
      :class="[
        show
          ? 'h-[100vh] block z-50 w-screen bg-[#0A1C2D] fixed top-0 left-0'
          : 'h-[100vh] hidden z-50 w-screen bg-[#0A1C2D] fixed top-0 left-0',
      ]"
    ></div>

    <div
      :class="[
        show
          ? 'h-[92%] block z-50 overflow-y-auto  md:px-0 px-6  rounded-lg fixed inset-0 m-auto'
          : 'h-[92%] hidden z-50 overflow-y-auto  md:px-0 px-6 rounded-lg fixed inset-0 m-auto',
      ]"
    >
      <div class="bg-[#0D2133] rounded-2xl p-6 max-w-3xl relative mx-auto">
        <button @click="modalOpen" class="">
          <div
            class="w-8 h-8 absolute right-5 top-3 rounded-lg hover:bg-white hover:bg-opacity-[7%] flex items-center cursor-pointer justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
              width="1em"
              height="1em"
              viewBox="0 0 21 21"
            >
              <rect width="21" height="21" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.5 15.5l-10-10zm0-10l-10 10"
              />
            </svg>
          </div>
        </button>
        <h1 class="text-white text-2xl text-center font-bold">Log In</h1>
        <div class="grid grid-cols-2 gap-2 pt-10">
          <button
            class="flex items-center gap-1 hover:bg-opacity-[7%] transition-all duration-100 justify-center text-white p-2.5 rounded-[8px] bg-white bg-opacity-[4%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              class="h-4 w-4"
            >
              <g clip-path="url(#google_svg__a)">
                <path
                  fill="#fff"
                  d="M15.844 8.184c0-.544-.044-1.09-.138-1.625H8.16v3.08h4.321a3.7 3.7 0 0 1-1.599 2.431v2h2.578c1.514-1.394 2.384-3.452 2.384-5.886"
                ></path>
                <path
                  fill="#34A853"
                  d="M8.16 16c2.158 0 3.977-.708 5.303-1.93l-2.578-2c-.717.488-1.643.765-2.722.765-2.087 0-3.857-1.408-4.492-3.301h-2.66v2.06A8 8 0 0 0 8.16 16"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M3.668 9.534a4.8 4.8 0 0 1 0-3.063V4.41H1.011a8 8 0 0 0 0 7.184z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M8.16 3.166a4.35 4.35 0 0 1 3.069 1.2l2.284-2.284A7.7 7.7 0 0 0 8.16 0 8 8 0 0 0 1.011 4.41l2.657 2.06C4.3 4.575 6.073 3.167 8.16 3.167"
                ></path>
              </g>
              <defs>
                <clipPath id="google_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs></svg
            ><span class="text-sm font-semibold">Google</span>
          </button>

          <button
            class="flex hover:bg-opacity-[7%] transition-all duration-100 items-center gap-1 justify-center text-white p-2.5 rounded-[8px] bg-white bg-opacity-[4%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              class="h-4 w-4"
            >
              <g clip-path="url(#telegram_svg__a)">
                <path
                  fill="url(#telegram_svg__b)"
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M3.621 7.916a381 381 0 0 1 4.666-2.01c2.221-.924 2.683-1.085 2.984-1.09a.53.53 0 0 1 .31.093c.08.066.103.154.114.217.01.062.024.204.013.315-.12 1.265-.641 4.334-.906 5.751-.112.6-.333.8-.547.82-.465.043-.817-.307-1.267-.602-.704-.461-1.102-.748-1.786-1.199-.79-.52-.277-.806.173-1.274.117-.122 2.164-1.984 2.204-2.153.005-.021.01-.1-.037-.141-.047-.042-.116-.028-.166-.017q-.105.025-3.374 2.23-.48.33-.868.321c-.285-.006-.835-.161-1.243-.294-.501-.163-.9-.249-.865-.525q.027-.217.595-.442"
                  clip-rule="evenodd"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="telegram_svg__b"
                  x1="8"
                  x2="8"
                  y1="0"
                  y2="15.881"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AABEE"></stop>
                  <stop offset="1" stop-color="#229ED9"></stop>
                </linearGradient>
                <clipPath id="telegram_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <span class="text-sm font-semibold">Telegram</span>
          </button>
        </div>
        <div
          class="relative my-4 text-white flex w-full items-center justify-center md:my-7"
        >
          <div class="absolute inset-0 flex items-center">
            <div class="border-[#122537] w-full border-t-2"></div>
          </div>
          <div class="bg-[#1E3040] relative px-4">OR</div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="">
            <label for="email" class="text-white text-sm font-semibold"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="text-white border-[#213344] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#BEC3C7] bg-[#162A3B] px-4"
            />
          </div>
          <div class="pt-4">
            <label for="password" class="text-white text-sm font-semibold"
              >Password</label
            >
            <div class="relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="text-white border-[#213344] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#BEC3C7] bg-[#162A3B] px-4"
              />
              <div
                class="w-8 h-8 absolute right-3 top-[13px] rounded-lg hover:bg-white hover:bg-opacity-[7%] flex items-center cursor-pointer justify-center"
              >
                <svg
                  viewBox="0 0 26 22"
                  class="w-5 h-5 text-[#BEC3C7]"
                  fill="#BEC3C7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 4.125C8.41669 4.125 4.50252 6.97583 2.91669 11C4.50252 15.0242 8.41669 17.875 13 17.875C17.5834 17.875 21.4975 15.0242 23.0834 11C21.4975 6.97583 17.5834 4.125 13 4.125ZM13 15.5833C10.47 15.5833 8.41669 13.53 8.41669 11C8.41669 8.47 10.47 6.41667 13 6.41667C15.53 6.41667 17.5834 8.47 17.5834 11C17.5834 13.53 15.53 15.5833 13 15.5833ZM13 8.25C11.4784 8.25 10.25 9.47833 10.25 11C10.25 12.5217 11.4784 13.75 13 13.75C14.5217 13.75 15.75 12.5217 15.75 11C15.75 9.47833 14.5217 8.25 13 8.25Z"
                  ></path>
                </svg>
              </div>
            </div>
            <a href="#" class="text-sm hover:underline font-bold text-[#0C49BE]"
              >Forget Password</a
            >
          </div>
        </div>
        <button
          class="bg-[#0C49BE] py-3 hover:bg-opacity-90 transition-all duration-100 mt-6 rounded-lg px-4 w-full text-center text-sm font-bold text-white"
        >
          Log In
        </button>
        <div
          class="flex items-center justify-center flex-wrap text-center mt-4 gap-1"
        >
          <p class="text-white/80 text-sm">Don't have an account?</p>
          <a href="#" class="text-sm hover:underline font-bold text-[#0C49BE]"
            >Sign up</a
          >
        </div>
      </div>
      <Contact class="fixed bottom-10 right-12 z-40" />
    </div>
  </div>

  <div class="">
    <div
      @click="modalSignup"
      :class="[
        ShowSignup
          ? 'h-[100vh] block z-50 w-screen bg-[#0A1C2D] fixed top-0 left-0'
          : 'h-[100vh] hidden z-50 w-screen bg-[#0A1C2D] fixed top-0 left-0',
      ]"
    ></div>

    <div
      :class="[
        ShowSignup
          ? 'h-[92%] overflow-y-auto block z-50 md:px-0 px-6  rounded-lg fixed inset-0 m-auto'
          : 'h-[92%] hidden z-50 overflow-y-auto  md:px-0 px-6 rounded-lg fixed inset-0 m-auto',
      ]"
    >
      <div class="bg-[#0D2133] rounded-2xl p-6 max-w-3xl relative mx-auto">
        <button @click="modalSignup" class="">
          <div
            class="w-8 h-8 absolute right-5 top-3 rounded-lg hover:bg-white hover:bg-opacity-[7%] flex items-center cursor-pointer justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
              width="1em"
              height="1em"
              viewBox="0 0 21 21"
            >
              <rect width="21" height="21" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.5 15.5l-10-10zm0-10l-10 10"
              />
            </svg>
          </div>
        </button>
        <h1 class="text-white text-2xl text-center font-bold">Sign Up</h1>
        <div class="grid grid-cols-2 gap-2 pt-10">
          <button
            class="flex items-center gap-1 hover:bg-opacity-[7%] transition-all duration-100 justify-center text-white p-2.5 rounded-[8px] bg-white bg-opacity-[4%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              class="h-4 w-4"
            >
              <g clip-path="url(#google_svg__a)">
                <path
                  fill="#fff"
                  d="M15.844 8.184c0-.544-.044-1.09-.138-1.625H8.16v3.08h4.321a3.7 3.7 0 0 1-1.599 2.431v2h2.578c1.514-1.394 2.384-3.452 2.384-5.886"
                ></path>
                <path
                  fill="#34A853"
                  d="M8.16 16c2.158 0 3.977-.708 5.303-1.93l-2.578-2c-.717.488-1.643.765-2.722.765-2.087 0-3.857-1.408-4.492-3.301h-2.66v2.06A8 8 0 0 0 8.16 16"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M3.668 9.534a4.8 4.8 0 0 1 0-3.063V4.41H1.011a8 8 0 0 0 0 7.184z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M8.16 3.166a4.35 4.35 0 0 1 3.069 1.2l2.284-2.284A7.7 7.7 0 0 0 8.16 0 8 8 0 0 0 1.011 4.41l2.657 2.06C4.3 4.575 6.073 3.167 8.16 3.167"
                ></path>
              </g>
              <defs>
                <clipPath id="google_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs></svg
            ><span class="text-sm font-semibold">Google</span>
          </button>

          <button
            class="flex hover:bg-opacity-[7%] transition-all duration-100 items-center gap-1 justify-center text-white p-2.5 rounded-[8px] bg-white bg-opacity-[4%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              class="h-4 w-4"
            >
              <g clip-path="url(#telegram_svg__a)">
                <path
                  fill="url(#telegram_svg__b)"
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M3.621 7.916a381 381 0 0 1 4.666-2.01c2.221-.924 2.683-1.085 2.984-1.09a.53.53 0 0 1 .31.093c.08.066.103.154.114.217.01.062.024.204.013.315-.12 1.265-.641 4.334-.906 5.751-.112.6-.333.8-.547.82-.465.043-.817-.307-1.267-.602-.704-.461-1.102-.748-1.786-1.199-.79-.52-.277-.806.173-1.274.117-.122 2.164-1.984 2.204-2.153.005-.021.01-.1-.037-.141-.047-.042-.116-.028-.166-.017q-.105.025-3.374 2.23-.48.33-.868.321c-.285-.006-.835-.161-1.243-.294-.501-.163-.9-.249-.865-.525q.027-.217.595-.442"
                  clip-rule="evenodd"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="telegram_svg__b"
                  x1="8"
                  x2="8"
                  y1="0"
                  y2="15.881"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AABEE"></stop>
                  <stop offset="1" stop-color="#229ED9"></stop>
                </linearGradient>
                <clipPath id="telegram_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <span class="text-sm font-semibold">Telegram</span>
          </button>
        </div>
        <div
          class="relative my-4 text-white flex w-full items-center justify-center md:my-7"
        >
          <div class="absolute inset-0 flex items-center">
            <div class="border-[#122537] w-full border-t-2"></div>
          </div>
          <div class="bg-[#1E3040] relative px-4">OR</div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="">
            <label for="email" class="text-white text-sm font-semibold"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="text-white border-[#213344] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#BEC3C7] bg-[#162A3B] px-4"
            />
          </div>
          <div class="pt-4">
            <label for="password" class="text-white text-sm font-semibold"
              >Password</label
            >
            <div class="relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="text-white border-[#213344] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#BEC3C7] bg-[#162A3B] px-4"
              />
              <div
                class="w-8 h-8 absolute right-3 top-[13px] rounded-lg hover:bg-white hover:bg-opacity-[7%] flex items-center cursor-pointer justify-center"
              >
                <svg
                  viewBox="0 0 26 22"
                  class="w-5 h-5 text-[#BEC3C7]"
                  fill="#BEC3C7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 4.125C8.41669 4.125 4.50252 6.97583 2.91669 11C4.50252 15.0242 8.41669 17.875 13 17.875C17.5834 17.875 21.4975 15.0242 23.0834 11C21.4975 6.97583 17.5834 4.125 13 4.125ZM13 15.5833C10.47 15.5833 8.41669 13.53 8.41669 11C8.41669 8.47 10.47 6.41667 13 6.41667C15.53 6.41667 17.5834 8.47 17.5834 11C17.5834 13.53 15.53 15.5833 13 15.5833ZM13 8.25C11.4784 8.25 10.25 9.47833 10.25 11C10.25 12.5217 11.4784 13.75 13 13.75C14.5217 13.75 15.75 12.5217 15.75 11C15.75 9.47833 14.5217 8.25 13 8.25Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="grid grid-cols-4 pt-2 gap-3">
              <div class="h-1 w-full bg-[#192C3D] rounded-full"></div>
              <div class="h-1 w-full bg-[#192C3D] rounded-full"></div>
              <div class="h-1 w-full bg-[#192C3D] rounded-full"></div>
              <div class="h-1 w-full bg-[#192C3D] rounded-full"></div>
            </div>
          </div>
        </div>
        <div class="flex py-4 flex-wrap itemsc-enter gap-3">
          <div class="flex justify-center items-center">
            <label class="container">
              <input
                value="check"
                class="peer cursor-pointer hidden after:opacity-100"
                type="checkbox"
              />
              <span
                class="inline-block w-4 h-4 border border-[#233545] rounded relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-[#0C49BE] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"
              ></span>
            </label>
          </div>
          <h3 class="text-white font-semibold text-sm">
            Agree th the
            <a
              href="#"
              class="underline transition-all duration-100 hover:text-[#0C49BE]"
              >Terms</a
            >
            &
            <a
              href="#"
              class="underline transition-all duration-100 hover:text-[#0C49BE]"
              >Privacy Policy</a
            >
          </h3>
        </div>
        <button
          class="bg-[#0C49BE] py-3 hover:bg-opacity-90 text-center transition-all duration-100 rounded-lg px-4 w-full text-sm font-bold text-white"
        >
          Log In
        </button>
        <div class="flex items-center flex-wrap mt-4 gap-1">
          <p class="text-white/80 text-sm">Already have an account?</p>
          <a href="#" class="text-sm hover:underline font-bold text-[#0C49BE]"
            >Log In</a
          >
        </div>
      </div>
      <Contact class="fixed bottom-10 right-12 z-40" />
    </div>
  </div>

  <div class="">
    <div
      @click="SearchModal"
      :class="[
        ModalSearch
          ? 'h-[100vh] block z-50 w-screen bg-black/80 fixed top-0 left-0'
          : 'h-[100vh] hidden z-50 w-screen bg-black/80 fixed top-0 left-0',
      ]"
    ></div>

    <div
      :class="[
        ModalSearch
          ? 'h-[82%]  overflow-y-auto block z-50 md:px-0 px-6  rounded-lg fixed inset-0  m-auto'
          : 'h-[82%]  hidden z-50 overflow-y-auto  md:px-0 px-6 rounded-lg fixed inset-0 m-auto',
      ]"
    >
      <div class="bg-[#263747] rounded-2xl p-3 sm:p-5 mx-auto max-w-xl">
        <div class="flex justify-between items-center gap-3">
          <div class="flex p-1 gap-1 bg-[#192C3D] rounded-full">
            <button
              class="px-3 text-sm bg-white bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold"
            >
              Game
            </button>
            <button
              class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold"
            >
              Providers
            </button>
          </div>
          <button @click="SearchModal" class="">
            <div
              class="w-8 h-8 rounded-lg hover:bg-white hover:bg-opacity-[7%] flex items-center cursor-pointer justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-white"
                width="1em"
                height="1em"
                viewBox="0 0 21 21"
              >
                <rect width="21" height="21" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.5 15.5l-10-10zm0-10l-10 10"
                />
              </svg>
            </div>
          </button>
        </div>
        <div class="relative mt-5 cursor-pointer flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for Games"
            class="block cursor-pointer sm:placeholder:text-[16px] placeholder:text-xs w-full placeholder:truncate rounded-[8px] border-0 bg-[#2F3F4E] py-[8px] pl-12 placeholder:text-[#CFD2D5] shadow-sm ring-1 ring-inset ring-gray-600 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div class="absolute left-3">
            <span class="border-r flex pr-3 border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <div
              class="w-8 h-8 absolute right-2 top-1 rounded-lg hover:bg-white hover:bg-opacity-[7%] flex items-center cursor-pointer justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-white"
                width="1em"
                height="1em"
                viewBox="0 0 21 21"
              >
                <rect width="21" height="21" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.5 15.5l-10-10zm0-10l-10 10"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="relative text-white z-40 pt-3">
          <h1 class="text-white pb-3">Popular Searches</h1>
          <div class="flex flex-col gap-1">
            <div
              class="hover:bg-white px-4 py-2 cursor-pointer transition-all duration-700 group rounded-xl hover:bg-opacity-[7%] flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <img
                  src="../assets/truegame.webp"
                  alt=""
                  class="w-8 h-auto rounded-lg"
                />
                <div class="">
                  <h5 class="text-white text-sm font-semibold">
                    Stampade Gold
                  </h5>
                  <p class="text-white/80 text-xs">Bsg</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 text-[#0C49BE] group-hover:block hidden transition-all duration-700 h-auto"
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
                  stroke-width="2"
                  d="m10 17l5-5m0 0l-5-5"
                />
              </svg>
            </div>
            <div
              class="hover:bg-white px-4 py-2 cursor-pointer transition-all duration-700 group rounded-xl hover:bg-opacity-[7%] flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <img
                  src="../assets/truegame.webp"
                  alt=""
                  class="w-8 h-auto rounded-lg"
                />
                <div class="">
                  <h5 class="text-white text-sm font-semibold">
                    Stampade Gold
                  </h5>
                  <p class="text-white/80 text-xs">Bsg</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 text-[#0C49BE] group-hover:block hidden transition-all duration-700 h-auto"
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
                  stroke-width="2"
                  d="m10 17l5-5m0 0l-5-5"
                />
              </svg>
            </div>
            <div
              class="hover:bg-white px-4 py-2 cursor-pointer transition-all duration-700 group rounded-xl hover:bg-opacity-[7%] flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <img
                  src="../assets/truegame.webp"
                  alt=""
                  class="w-8 h-auto rounded-lg"
                />
                <div class="">
                  <h5 class="text-white text-sm font-semibold">
                    Stampade Gold
                  </h5>
                  <p class="text-white/80 text-xs">Bsg</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 text-[#0C49BE] group-hover:block hidden transition-all duration-700 h-auto"
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
                  stroke-width="2"
                  d="m10 17l5-5m0 0l-5-5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="">
    <div
      @click="SidebarModal"
      :class="[
        Visible
          ? 'h-[100vh] block z-50 w-screen bg-black/60 fixed top-0 left-0'
          : 'h-[100vh] hidden z-50 w-screen bg-black/60 fixed top-0 left-0',
      ]"
    ></div>

    <div
      :class="[
        Visible
          ? 'h-[100%]  block z-50 md:px-0 translate-x-0 duration-1000 rounded-lg fixed left-0 top-0'
          : 'h-[100%] hidden z-50 md:px-0 -translate-x-80 duration-1000 rounded-lg left-0 fixed top-0',
      ]"
    >
      <div
        class="relative h-screen SportsSidebar bg-[#1C2C3C] max-w-1/2 sm:max-w-[325px]"
      >
        <router-link to="/sports">
          <img
            src="../assets/logo.svg"
            alt=""
            class="w-36 h-auto mx-auto mb-5 mt-10"
          />
        </router-link>
        <div class="flex flex-col py-5">
          <div
            class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
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
                fill-rule="evenodd"
                d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
              />
            </svg>
            <p class="text-white">Search</p>
          </div>
          <router-link to="/sports">
            <div
              class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#77808A]"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <rect width="16" height="16" fill="none" />
                <path
                  fill="currentColor"
                  d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"
                />
              </svg>
              <p class="text-white">Sports</p>
            </div>
          </router-link>
          <router-link to="/inplay">
            <div
              class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#0C49BE]"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M6.343 4.938a1 1 0 0 1 0 1.415a8.003 8.003 0 0 0 0 11.317a1 1 0 1 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.146a1 1 0 0 1 1.414 0m12.732 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.415-1.414a8.003 8.003 0 0 0 0-11.317a1 1 0 0 1 1.415-1.415M9.31 7.812a1 1 0 0 1 0 1.414a3.92 3.92 0 0 0 0 5.544a1 1 0 1 1-1.415 1.414a5.92 5.92 0 0 1 0-8.372a1 1 0 0 1 1.415 0m6.958 0a5.92 5.92 0 0 1 0 8.372a1 1 0 0 1-1.414-1.414a3.92 3.92 0 0 0 0-5.544a1 1 0 0 1 1.414-1.414m-4.186 2.77a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
                />
              </svg>
              <p class="text-white font-semibold">
                In-Play <span class="text-gray-500 pl-1 font-medium">75</span>
              </p>
            </div>
          </router-link>

          <router-link to="/esports">
            <div
              class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#77808A]"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <rect width="20" height="20" fill="none" />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M19.444 9.361c-.882-4.926-2.854-6.379-3.903-6.379c-1.637 0-2.057 1.217-5.541 1.258c-3.484-.041-3.904-1.258-5.541-1.258c-1.049 0-3.022 1.453-3.904 6.379c-.503 2.812-1.049 7.01.252 7.514c1.619.627 2.168-.941 3.946-2.266C6.558 13.266 7.424 12.95 10 12.95s3.442.316 5.247 1.659c1.778 1.324 2.327 2.893 3.946 2.266c1.301-.504.755-4.701.251-7.514M6 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m7 0a1 1 0 1 1 0-2a1 1 0 1 1 0 2m2-2a1 1 0 1 1 0-2a1 1 0 1 1 0 2"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-white">Esports</p>
            </div>
          </router-link>
          <router-link to="/poromoSport">
            <div
              class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#77808A]"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <rect width="16" height="16" fill="none" />
                <path
                  fill="currentColor"
                  d="M3 2.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"
                />
              </svg>
              <p class="text-white">Promotions</p>
            </div>
          </router-link>
          <router-link to="/schedule">
            <div
              class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
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
                  d="m15.3 16.7l1.4-1.4l-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20"
                />
              </svg>
              <p class="text-white">Schedule</p>
            </div>
          </router-link>
          <router-link to="/results">
            <div
              class="flex items-center cursor-pointer transition-all duration-500 hover:bg-[#214058] py-2.5 px-4 gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#77808A]"
                width="20"
                height="20"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  fill="currentColor"
                  d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m0 48h32a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 64H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m94.55-40.71L180.69 158l5.44 22a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L160 172.54l-20.22 11.91a4 4 0 0 1-5.91-4.41l5.44-22l-17.86-14.75a4 4 0 0 1 2.24-7.07l23.58-1.82l9.06-21a4 4 0 0 1 7.34 0l9.06 21l23.58 1.82a4 4 0 0 1 2.24 7.07"
                />
              </svg>
              <p class="text-white">Results</p>
            </div>
          </router-link>
        </div>
        <div class="px-3">
          <div class="border-t border-[#384654] py-5">
            <div class="relative">
              <select
                name="regions"
                id="regions"
                class="block w-full appearance-none text-ellipsis rounded-md border border-[#293947] bg-[#1C2C3C] py-2 pl-4 pr-20 text-sm text-white"
              >
                <option value="">Europian</option>
                <option value="A-Z">Asia</option>
                <option value="nov">South America</option>
                <option value="popu">Africa</option></select
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                class="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-white fill-white/80"
              >
                <path
                  d="M4.47 6.97a.75.75 0 0 1 1.06 0L10 11.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06Z"
                ></path>
              </svg>
              <div class="font-bold text-white absolute top-1.5 right-8">
                1.95
              </div>
            </div>
          </div>

          <div
            class="bg-[#233342] py-1 justify-between grid grid-cols-2 gap-2 px-3 w-full items-center rounded-lg"
          >
            <router-link to="/">
              <div
                class="flex items-center px-4 py-2 w-full justify-between hover:bg-white hover:bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-[#77808A]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 50"
                >
                  <rect width="50" height="50" fill="none"></rect>
                  <path
                    fill="currentColor"
                    d="M49 10.489c.604-.457 1-1.173 1-1.989a2.5 2.5 0 1 0-5 0a2.49 2.49 0 0 0 1 1.989V26h-9v8h10v-.297A3.99 3.99 0 0 0 49.5 30c0-.691-.191-1.332-.5-1.899zM6 17c1.021 0 1.73.172 3 0c0 0-4.016 2.666-4.016 6H10s.006-5.554 3-9l-1-1s-2 1-4 0c0 0-2 0-4 1v-1H3v6h1s0-2 2-2m14 0c1.021 0 1.73.172 3 0c0 0-4.016 2.666-4.016 6H24s.006-5.554 3-9l-1-1s-2 1-4 0c0 0-2 0-4 1v-1h-1v6h1s0-2 2-2M38 7V5H25.88c-.456-2.002-2.239-3.5-4.38-3.5S17.576 2.998 17.12 5H5v2H0v41h44V7zm-22 4h12v14H16zM2 11h12v14H2zm36 32H5v-7h33zm4-18H30V11h12zm-8-8c1.021 0 1.73.172 3 0c0 0-4.016 2.666-4.016 6H38s.006-5.554 3-9l-1-1s-2 1-4 0c0 0-2 0-4 1v-1h-1v6h1s0-2 2-2"
                  ></path>
                </svg>

                <h1 class="text-white font-semibold">Casino</h1>
              </div>
            </router-link>
            <router-link to="/inplay">
              <div
                class="flex items-center px-4 py-2 w-full justify-between hover:bg-white hover:bg-opacity-[7%] rounded-[8px] cursor-pointer transition-all duration-300 gap-1"
              >
                <img
                  src="../assets/Sports.svg"
                  alt=""
                  class="w-[22px] h-[22px]"
                />
                <h1 class="text-white font-semibold">Sports</h1>
              </div>
            </router-link>
          </div>
        </div>

        <div
          class="hover:bg-[#1C2C3C] cursor-pointer hover:text-white text-[#77808A] z-20 hover:shadow-2xl hover:border-t gap-3 group border-[#384654] py-4 mt-4 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <rect width="16" height="16" fill="none" />
            <path
              fill="currentColor"
              d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
            />
            <path
              fill="currentColor"
              d="M8 4.5c-1.11 0-2 .89-2 2h1c0-.55.45-1 1-1s1 .45 1 1c0 1-1.5.88-1.5 2.5h1c0-1.12 1.5-1.25 1.5-2.5c0-1.11-.89-2-2-2"
            />
            <circle cx="8" cy="11" r=".62" fill="currentColor" />
            <circle cx="6.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="8" cy="9" r=".5" fill="currentColor" />
          </svg>
          <p class="font-semibold text-lg">Support</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Contact from "../components/Contact.vue";
import { useSidebarStore } from "../store/sidebar";
import { useRouter } from "vue-router";

const router = useRouter();

const sidebar = useSidebarStore();
import { ref } from "vue";
const a = 10;
const b = 10;

console.log("====================================");
console.log(router.currentRoute.value.fullPath);
console.log("====================================");

const show = ref(false);
function modalOpen() {
  show.value = !show.value;
}

const Visible = ref(false);
function SidebarModal() {
  Visible.value = !Visible.value;
}

const ShowSignup = ref(false);
function modalSignup() {
  ShowSignup.value = !ShowSignup.value;
}

const ModalSearch = ref(false);
function SearchModal() {
  ModalSearch.value = !ModalSearch.value;
}

const sidebarFunc = () => {
  sidebar.setSidebar();
};

const casinoFunc = (i) => {
  sidebar.setCasino(i);
};
</script>

<style>
.SportsSidebar {
  overflow-y: auto;
}
/* Custom scrollbar styles */
.SportsSidebar::-webkit-scrollbar {
  width: 2px; /* Width of the scrollbar */
}

.SportsSidebar::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.SportsSidebar::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>
