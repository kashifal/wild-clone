<template>
  <div class="z-50">
    <div
      class="fixed lg:hidden z-20 inset-x-0 bottom-0 flex w-full justify-between rounded-t-2xl bg-[#263747] px-4 py-2.5 shadow"
      style="z-index: 999"
    >
      <div class="group" @click="modalFunc">
        <router-link
          to=""
          role="button"
          class="text-text-subdued relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="current"
            >
              <path
                fill="#0B2233"
                d="M13 17H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m6-8H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1"
              ></path>
              <path
                fill="current"
                fill-opacity="0.9"
                d="M13 17H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m6-8H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1"
              ></path></svg></span
          ><span class="z-10 group-active:scale-95">Menu</span></router-link
        >
      </div>
      <div class="group">
        <router-link
          to="/livecasino"
          role="button"
          class="text-text-subdued relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="current"
            >
              <g clip-path="url(#casino_svg__a)">
                <path
                  fill="#0B2233"
                  d="M17.02 7.078v11.858c0 1.14-.922 2.064-2.063 2.064H5.975a2.063 2.063 0 0 1-2.064-2.064V7.068c.06-1.857 2.574-3.876 6.562-3.876 3.973.004 6.489 2.03 6.548 3.886m-2.332 10.956-1.623-1.683a.53.53 0 0 0-.378-.16H8.231c-.144 0-.28.059-.378.16L6.23 18.034c-.077.08-.02.217.091.217h8.276a.129.129 0 0 0 .09-.217m.266-9.728a.39.39 0 0 0-.389-.388H6.367a.39.39 0 0 0-.389.388v4.747a.39.39 0 0 0 .389.388h8.195a.39.39 0 0 0 .388-.388V8.306z"
                ></path>
                <path
                  fill="current"
                  fill-opacity="0.9"
                  d="M17.02 7.078v11.858c0 1.14-.922 2.064-2.063 2.064H5.975a2.063 2.063 0 0 1-2.064-2.064V7.068c.06-1.857 2.574-3.876 6.562-3.876 3.973.004 6.489 2.03 6.548 3.886m-2.332 10.956-1.623-1.683a.53.53 0 0 0-.378-.16H8.231c-.144 0-.28.059-.378.16L6.23 18.034c-.077.08-.02.217.091.217h8.276a.129.129 0 0 0 .09-.217m.266-9.728a.39.39 0 0 0-.389-.388H6.367a.39.39 0 0 0-.389.388v4.747a.39.39 0 0 0 .389.388h8.195a.39.39 0 0 0 .388-.388V8.306z"
                ></path>
                <path
                  fill="#0B2233"
                  d="M19.338 6.66a1.206 1.206 0 1 1 1.537 1.159l-.998 3.384v2.45h.346c.177 0 .323.145.323.323v1.898a.324.324 0 0 1-.323.323h-2.221v-2.544h.648v-2.457c0-.11.017-.223.049-.33l.991-3.354a1.2 1.2 0 0 1-.352-.852"
                ></path>
                <path
                  fill="current"
                  fill-opacity="0.9"
                  d="M19.338 6.66a1.206 1.206 0 1 1 1.537 1.159l-.998 3.384v2.45h.346c.177 0 .323.145.323.323v1.898a.324.324 0 0 1-.323.323h-2.221v-2.544h.648v-2.457c0-.11.017-.223.049-.33l.991-3.354a1.2 1.2 0 0 1-.352-.852"
                ></path>
                <path fill="#0B2233" d="M7.33 8.9h1.598v3.525H7.33z"></path>
                <path
                  fill="current"
                  fill-opacity="0.9"
                  d="M7.33 8.9h1.598v3.525H7.33z"
                ></path>
                <path fill="#0B2233" d="M9.698 8.9h1.598v3.525H9.698z"></path>
                <path
                  fill="current"
                  fill-opacity="0.9"
                  d="M9.698 8.9h1.598v3.525H9.698z"
                ></path>
                <path fill="#0B2233" d="M12.066 8.9h1.598v3.525h-1.598z"></path>
                <path
                  fill="current"
                  fill-opacity="0.9"
                  d="M12.066 8.9h1.598v3.525h-1.598z"
                ></path>
              </g>
              <defs>
                <clipPath id="casino_svg__a">
                  <path fill="current" d="M3.75 3h18v18h-18z"></path>
                </clipPath>
              </defs></svg></span
          ><span class="z-10 group-active:scale-95">Casino</span></router-link
        >
      </div>

      <div class="group">
        <router-link
          to="/game"
          role="button"
          class="text-text-subdued relative flex max-w-[3.75rem] flex-1 cursor-pointer text-[#BBC0C5] hover:text-white flex-col items-center justify-center p-0 px-2 text-xs font-medium"
          ><span class="h-7 w-7 overflow-visible fill-current"
            ><div
              class="ring-[#263747] group-active:[&amp;>svg]:scale-95 absolute -top-6 left-1/2 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full ring-8"
              style="
                background: linear-gradient(
                  325deg,
                  rgb(0, 195, 122) 4.24%,
                  rgb(39, 216, 74) 116.92%
                );
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M13.5 10h-8a3.5 3.5 0 1 1 0-7H20a1 1 0 1 1 0 2H5.5a1.5 1.5 0 1 0 0 3h8z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M4 6.5V12H2V6.5z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  d="M19 21H5c-.943 0-1.414 0-1.707-.293S3 19.943 3 19V9h16c.943 0 1.414 0 1.707.293S21 10.057 21 11v1h-3a3 3 0 1 0 0 6h3v1c0 .943 0 1.414-.293 1.707S19.943 21 19 21"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M22 17v2.054c0 .425 0 .837-.046 1.177-.051.383-.177.82-.54 1.183s-.8.489-1.184.54c-.34.046-.751.046-1.176.046H4.946c-.424 0-.837 0-1.177-.046-.383-.051-.82-.177-1.183-.54s-.489-.8-.54-1.184C2 19.89 2 19.48 2 19.055V8h17.054c.425 0 .837 0 1.177.046.383.051.82.177 1.183.54s.489.8.54 1.183c.046.34.046.752.046 1.177V13h-4a2 2 0 1 0 0 4zM3 19c0 .943 0 1.414.293 1.707S4.057 21 5 21h14c.943 0 1.414 0 1.707-.293S21 19.943 21 19v-1h-3a3 3 0 0 1 0-6h3v-1c0-.943 0-1.414-.293-1.707S19.943 9 19 9H3z"
                  clip-rule="evenodd"
                ></path>
              </svg></div></span
          ><span
            class="group-hover:text-text-default z-10 group-active:scale-95"
            >Wallet</span
          ></router-link
        >
      </div>

      <div class="group">
        <router-link
          to="/slot"
          role="button"
          class="text-text-subdued relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="current"
            >
              <path
                fill="#0B2233"
                d="M19.947 4.312c-2.18-2.273-8.651-1.701-12.92 2.568-4.269 4.268-4.6 10.962-2.576 12.886 2.21 2.1 8.618 1.693 12.887-2.576s4.89-10.495 2.609-12.878m-4.13 5.37-1 1 .542.542a.883.883 0 0 1-.622 1.508.88.88 0 0 1-.622-.26l-.542-.542-1.45 1.45.568.563a.883.883 0 0 1-1.244 1.252l-.576-.568-.987.988a.88.88 0 0 1-.622.26.86.86 0 0 1-.622-.26.883.883 0 0 1 0-1.248l.984-.983-.56-.555a.883.883 0 0 1 1.244-1.252l.563.559 1.454-1.454-.559-.559a.882.882 0 0 1 1.248-1.248l.56.56.999-1a.883.883 0 0 1 1.248 0c.34.344.34.902-.004 1.247"
              ></path>
              <path
                fill="current"
                fill-opacity="0.9"
                d="M19.947 4.312c-2.18-2.273-8.651-1.701-12.92 2.568-4.269 4.268-4.6 10.962-2.576 12.886 2.21 2.1 8.618 1.693 12.887-2.576s4.89-10.495 2.609-12.878m-4.13 5.37-1 1 .542.542a.883.883 0 0 1-.622 1.508.88.88 0 0 1-.622-.26l-.542-.542-1.45 1.45.568.563a.883.883 0 0 1-1.244 1.252l-.576-.568-.987.988a.88.88 0 0 1-.622.26.86.86 0 0 1-.622-.26.883.883 0 0 1 0-1.248l.984-.983-.56-.555a.883.883 0 0 1 1.244-1.252l.563.559 1.454-1.454-.559-.559a.882.882 0 0 1 1.248-1.248l.56.56.999-1a.883.883 0 0 1 1.248 0c.34.344.34.902-.004 1.247"
              ></path></svg></span
          ><span class="z-10 group-active:scale-95">Sports</span></router-link
        >
      </div>

      <div class="group" @click="SearchModal">
        <router-link
          to=""
          role="button"
          class="relative flex max-w-[3.75rem] flex-1 cursor-pointer flex-col items-center justify-center p-0 px-2 text-xs font-medium text-[#BBC0C5] hover:text-white"
          ><span
            class="h-7 w-7 overflow-visible fill-current group-active:scale-95"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              class="stroke-[#BBC0C5] group-hover:stroke-white"
              height="24"
              fill="current"
            >
              <path
                fill="current"
                fill-rule="evenodd"
                d="M11.5 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-12a5 5 0 0 0-5 5 1 1 0 1 0 2 0 3 3 0 0 1 3-3 1 1 0 1 0 0-2"
                clip-rule="evenodd"
              ></path>
              <path
                stroke="current"
                stroke-linecap="round"
                stroke-opacity="0.75"
                stroke-width="2"
                d="m20.5 20-2-2"
              ></path></svg
          ></span>
          <span class="z-10 group-active:scale-95">Search</span></router-link
        >
      </div>
    </div>
  </div>

  <div class="">
    <!-- overlay -->
    <div
      @click="modalFunc"
      :class="[
        show
          ? 'h-[100vh] block z-50 w-screen bg-black/50 fixed top-0 left-0'
          : 'h-[100vh] hidden z-50 w-screen bg-black/50 fixed top-0 left-0',
      ]"
    ></div>

    <!-- modal -->
    <div
      :class="[
        show
          ? 'h-[40%] block z-50 md:px-0 px-6  rounded-lg fixed inset-0 m-auto'
          : 'h-[40%] hidden z-50 md:px-0 px-6 rounded-lg fixed inset-0 m-auto',
      ]"
    >
      <div class="z-40 h-screen w-full fixed left-0 top-0 bg-[#192C3D]">
        <div class="flex justify-between pl-4 my-4">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="" class="w-32 h-auto" />
          </router-link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-8 text-white"
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
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-1 p-3">
          <div
            class="min-h-10 rounded-md element cursor-pointer w-full flex py-1 px-1.5 gap-1.5 items-center"
          >
            <div class="relative h-5 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="animate-spin inset-0"
              >
                <path
                  fill="#FAF321"
                  d="M12 22.953c6.14 0 11.118-4.978 11.118-11.119C23.118 5.694 18.14.716 12 .716S.88 5.694.88 11.834 5.86 22.954 12 22.954"
                ></path>
                <path
                  fill="#EFB73A"
                  d="M12.375 2.703v-.131c-.131 0-.244-.019-.375-.019s-.244 0-.375.019v.131c.131 0 .244-.019.375-.019s.262 0 .375.02"
                ></path>
                <path
                  fill="#254460"
                  d="M12 22.11c5.674 0 10.275-4.6 10.275-10.276C22.275 6.16 17.675 1.56 12 1.56S1.725 6.16 1.725 11.834 6.325 22.11 12 22.11"
                ></path>
                <path
                  fill="#C84363"
                  d="M5.287 5.628a9 9 0 0 0-2.4 5.813h8.231z"
                ></path>
                <path
                  fill="#F44D64"
                  d="M3.806 11.46h7.293L5.943 6.302a8.17 8.17 0 0 0-2.137 5.156"
                ></path>
                <path
                  fill="#00B556"
                  d="M2.868 12.21a9.2 9.2 0 0 0 2.363 5.774l5.83-5.775z"
                ></path>
                <path
                  fill="#42EA99"
                  d="m5.906 17.328 5.175-5.119H3.806a8.22 8.22 0 0 0 2.1 5.12"
                ></path>
                <path
                  fill="#C84363"
                  d="M5.774 18.51a9.15 9.15 0 0 0 5.85 2.456v-8.25z"
                ></path>
                <path
                  fill="#F44D64"
                  d="M11.624 20.028v-7.312l-5.193 5.137a8.24 8.24 0 0 0 5.193 2.175"
                ></path>
                <path
                  fill="#F76C0D"
                  d="M12.375 20.966a9.15 9.15 0 0 0 5.813-2.4l-5.813-5.813z"
                ></path>
                <path
                  fill="#F9A30B"
                  d="m17.531 17.89-5.156-5.156v7.294a8.17 8.17 0 0 0 5.156-2.137"
                ></path>
                <path
                  fill="#C84363"
                  d="m12.918 12.21 5.813 5.812a9 9 0 0 0 2.4-5.813z"
                ></path>
                <path
                  fill="#F44D64"
                  d="M18.074 17.366a8.17 8.17 0 0 0 2.138-5.157h-7.294z"
                ></path>
                <path
                  fill="#C232E5"
                  d="M21.13 11.46a9.13 9.13 0 0 0-2.38-5.794l-5.85 5.793z"
                ></path>
                <path
                  fill="#F748D7"
                  d="M12.9 11.46h7.312a8.24 8.24 0 0 0-2.119-5.138z"
                ></path>
                <path
                  fill="#0045AA"
                  d="M18.225 5.122a9.14 9.14 0 0 0-5.831-2.438v8.213z"
                ></path>
                <path
                  fill="#1C6FD1"
                  d="M12.375 3.622v7.275l5.175-5.119a8.2 8.2 0 0 0-5.175-2.156"
                ></path>
                <path
                  fill="#603AB7"
                  d="M11.625 2.703a9.15 9.15 0 0 0-5.812 2.4l5.812 5.813z"
                ></path>
                <path
                  fill="#7E42D3"
                  d="m6.469 5.76 5.156 5.156V3.622a8.25 8.25 0 0 0-5.156 2.137"
                ></path>
                <path
                  fill="#254460"
                  d="M12 16.4a4.566 4.566 0 1 0 0-9.131 4.566 4.566 0 0 0 0 9.13"
                ></path>
                <path
                  fill="#FAF321"
                  d="M11.999 15.199a3.364 3.364 0 1 0 0-6.729 3.364 3.364 0 0 0 0 6.728"
                ></path>
                <path
                  fill="#C84363"
                  d="M12.092 13.288a.2.2 0 0 0-.186 0l-1.192.632a.2.2 0 0 1-.291-.21l.228-1.334a.2.2 0 0 0-.059-.177l-.959-.925a.2.2 0 0 1 .11-.342l1.33-.192a.2.2 0 0 0 .15-.11l.596-1.21a.2.2 0 0 1 .359 0l.596 1.21a.2.2 0 0 0 .151.11l1.352.193a.2.2 0 0 1 .11.342l-.958.924a.2.2 0 0 0-.059.178l.229 1.335a.2.2 0 0 1-.29.211z"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
                fill="none"
                class="absolute -top-0.5 left-0 right-0 mx-auto"
              >
                <path
                  fill="#1D3140"
                  fill-opacity="0.5"
                  d="M.094 2.972q-.028.76.337 1.462l2.55 3.188L5.625 4.49c.263-.47.375-.975.356-1.482-.937-.28-1.95-.45-2.98-.45-1.013 0-1.988.15-2.907.413"
                ></path>
                <path
                  fill="#F9A30B"
                  d="M.9 3.59a2.4 2.4 0 0 1 .075-2.38A2.4 2.4 0 0 1 3.038.046c.862 0 1.63.45 2.08 1.181s.45 1.631.038 2.4L3 7.584z"
                ></path>
                <path
                  fill="#FAF321"
                  d="M3.019 5.878 1.612 3.216C1.05 2.146 1.82.853 3.037.853c1.22 0 2.007 1.313 1.425 2.381z"
                ></path>
                <path
                  fill="#1D3140"
                  d="M3.038 3.253a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65"
                ></path>
              </svg>
            </div>
            <h4
              class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"
            >
              <span class="text-[#E98298]">Wheel</span>
              <p class="whitespace-nowrap">of Fortune</p>
            </h4>
          </div>
          <div
            class="min-h-10 custom-gradient transition-all duration-300 py-1 px-1.5 cursor-pointer rounded-md w-full flex p-1 gap-1.5 items-center"
          >
            <div class="">
              <img
                src="../assets/announce.svg"
                alt=""
                class="w-[20px] h-[20px]"
              />
            </div>
            <h4
              class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"
            >
              <span class="text-[#0C49BE]">Refer</span>
              <p class="whitespace-nowrap">a Friend</p>
            </h4>
          </div>
          <div
            class="min-h-10 rounded-md third cursor-pointer w-full flex py-1 px-1.5 gap-1.5 items-center"
          >
            <div class="">
              <img
                src="../assets/lottery.svg"
                alt=""
                class="w-[20px] h-[20px]"
              />
            </div>
            <h4
              class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"
            >
              <span class="text-[#7470f4]">Wild</span>
              <p class="whitespace-nowrap">Lottery</p>
            </h4>
          </div>
          <div
            class="min-h-10 fourth transition-all duration-300 py-1 px-1.5 cursor-pointer rounded-md w-full flex p-1 gap-1.5 items-center"
          >
            <div class="">
              <img src="../assets/bonus.svg" alt="" class="w-[20px] h-[20px]" />
            </div>
            <h4
              class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"
            >
              <span class="text-[#e0ba7d]">Bonus</span>
              <p class="whitespace-nowrap">Shop</p>
            </h4>
          </div>
        </div>
        <div
          class="bg-white bg-opacity-[3%] h-screen w-full px-3 py-4 flex flex-col gap-1"
        >
          <div
            class="bg-white bg-opacity-5 p-1 rounded-[8px] flex gap-[2px] flex-col"
          >
            <router-link to="/Game">
              <div
                class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
              >
                <img src="../assets/playgames.svg" alt="" class="w-5 h-5" />
                <h3 class="text-sm text-white/80 group-hover:text-white">
                  All Games
                </h3>
              </div>
            </router-link>

            <router-link to="/slot">
              <div
                class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
              >
                <img src="../assets/slot.svg" alt="" class="w-5 h-5" />
                <h3 class="text-sm text-white/80 group-hover:text-white">
                  Slots
                </h3>
              </div>
            </router-link>

            <router-link to="/livecasino">
              <div
                class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
              >
                <img src="../assets/live casino.svg" alt="" class="w-5 h-5" />
                <h3 class="text-sm text-white/80 group-hover:text-white">
                  Live Casino
                </h3>
              </div>
            </router-link>

            <router-link to="/tablegames">
              <div
                class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
              >
                <img src="../assets/tablegam.svg" alt="" class="w-5 h-5" />
                <h3 class="text-sm text-white/80 group-hover:text-white">
                  Table Games
                </h3>
              </div>
            </router-link>
          </div>
          <div
            class="bg-white bg-opacity-5 p-1 rounded-[8px] flex gap-[2px] flex-col"
          >
            <router-link to="/promotion">
              <div
                class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
              >
                <img src="../assets/promo.svg" alt="" class="w-5 h-5" />
                <h3 class="text-sm text-white/80 group-hover:text-white">
                  Promotions
                </h3>
              </div>
            </router-link>

            <router-link
              to="/tournament"
              class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
            >
              <img src="../assets/tournament.svg" alt="" class="w-5 h-5" />
              <h3 class="text-sm text-white/80 group-hover:text-white">
                Tournaments
              </h3>
            </router-link>
            <router-link
              to="/vipclub"
              class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
            >
              <img src="../assets/Vipclub.svg" alt="" class="w-5 h-5" />
              <h3 class="text-sm text-white/80 group-hover:text-white">
                VIP Club
              </h3>
            </router-link>

            <router-link
              to="/challenge"
              class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
            >
              <img src="../assets/challenges.svg" alt="" class="w-5 h-5" />
              <h3 class="text-sm text-white/80 group-hover:text-white">
                Challenges
              </h3>
            </router-link>
          </div>
          <div
            class="bg-white bg-opacity-5 p-1 rounded-[8px] flex gap-[2px] flex-col"
          >
            <router-link
              to="/live"
              class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2"
            >
              <img src="../assets/live.svg" alt="" class="w-5 h-5" />
              <h3 class="text-sm text-white/80 group-hover:text-white">
                Live Support
              </h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="">
    <div
      @click="SearchModal"
      :class="[
        shown
          ? 'h-[100vh] block z-50 w-screen bg-black/80 fixed top-0 left-0'
          : 'h-[100vh] hidden z-50 w-screen bg-black/80 fixed top-0 left-0',
      ]"
    ></div>

    <div
      :class="[
        shown
          ? 'h-[82%]  overflow-y-auto block z-50 md:px-0 px-6  rounded-lg fixed inset-0  m-auto'
          : 'h-[82%]  hidden z-50 overflow-y-auto  md:px-0 px-6 rounded-lg fixed inset-0 m-auto',
      ]"
    >
      <div class="bg-[#263747] rounded-2xl p-5 mx-auto max-w-xl">
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
            class="block cursor-pointer w-full rounded-[8px] border-0 bg-[#2F3F4E] py-[8px] pl-12 placeholder:text-[#CFD2D5] shadow-sm ring-1 ring-inset ring-gray-600 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
function modalFunc() {
  show.value = !show.value;
}

const shown = ref(false);
function SearchModal() {
  shown.value = !shown.value;
}
</script>
