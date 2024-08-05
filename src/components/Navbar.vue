<template>
  <div
    class="py-3 z-40 sticky shdow-md top-0 h-16 px-5 sm:px-3 bg-[#263747] w-full"
  >
    <div class="h-full flex items-center justify-between mx-auto">
      <div class="flex items-center gap-2.5">
        <router-link class="fonnt-bold flex md:hidden" to="/">
          <img src="../assets/logo.svg" alt="" class="w-32 h-auto" />
        </router-link>
        <div class="md:flex hidden -space-x-2 items-center">
          <button
            class="relative h-8 w-8 hover:bg-green-500 hover:bg-opacity-20 rounded-lg transition-all duration-400 hidden md:flex items-center justify-center"
          >
            <span v-if="sidebar.casino" @click="sidebarFunc">
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
          <router-link @click="casinoFunc" to="/">
            <div
              :class="[
                sidebar.casino
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
          <router-link @click="casinoFunc" to="/inplay">
            <div
              :class="[
                !sidebar.casino
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
          <div class="md:flex hidden lg:hidden">
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
      <div class="flex gap-2 items-center">
        <button
          @click="modalOpen"
          class="font-semibold text-white text-[14px] hover:bg-white transition-all duration-300 hover:bg-opacity-[7%] px-5 py-2.5 rounded-[8px]"
        >
          Log In
        </button>
        <button
          @click="modalSignup"
          class="font-semibold text-white text-[14px] bg-[#0C49BE] transition-all duration-300 hover:bg-opacity-[70%] px-[18px] py-2.5 rounded-[8px]"
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

const ShowSignup = ref(false);
function modalSignup() {
  ShowSignup.value = !ShowSignup.value;
}

const sidebarFunc = () => {
  sidebar.setSidebar();
};

const casinoFunc = () => {
  sidebar.setCasino();
};
</script>
