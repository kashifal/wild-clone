<template>
  <div class="relative">
  <SideBar />
    <div class="lg:pl-64 bg-[#0A1C2D] mx-auto z-20">
      <div
        class="sm:bg-[url('./assets/herobg.webp')] sm:block hidden z-10 h-fit relative w-full bg-center bg-cover"
      >
        <div
          class="absolute xl:block 2xl:hidden inset-0 w-1/6 -left-10 bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-3xl z-20"
        ></div>
        <div
          class="absolute xl:block 2xl:hidden inset-0 w-1/6 -left-60 bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-3xl z-20"
        ></div>
        <div class="mx-auto z-40 relative py-24 px-[34px]">
          <h2 class="text-white text-3xl font-semibold">Welcome Offer</h2>
          <h1 class="text-5xl text-[#FACC15] font-extrabold pt-1">
            120% up to $5,000
          </h1>
          <h2 class="text-white text-2xl pt-1 font-bold">and 75 Free Spins</h2>
          <button
            class="text-white py-[11px] my-6 px-7 flex flex-col -space-x-2 text-center items-center justify-center rounded-xl bg-[#0C49BE] hover:bg-[#0C49BE]"
          >
            <h5 class="text-lg font-semibold">Sign Up Now</h5>
            <em class="text-xs font-medium">Only Takes 30 seconds</em>
          </button>
          <div class="flex items-center gap-3">
            <p class="font-bold text-white text-xs">Great</p>
            <div class="flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path fill="#219653" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fff"
                  d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path fill="#219653" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fff"
                  d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path fill="#219653" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fff"
                  d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path fill="#219653" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fff"
                  d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path fill="url(#half-star_svg__a)" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fff"
                  d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                ></path>
                <defs>
                  <linearGradient
                    id="half-star_svg__a"
                    x1="0"
                    x2="20"
                    y1="10"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#219653"></stop>
                    <stop offset="0.5" stop-color="#219653"></stop>
                    <stop
                      offset="0.5"
                      stop-color="#219653"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="0.5" stop-color="#D9D9D9"></stop>
                    <stop offset="1" stop-color="#D9D9D9"></stop>
                    <stop
                      offset="1"
                      stop-color="#219653"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="#D9D9D9"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="font-bold text-white text-xs">
              180+ <span class="font-normal"> reviews on</span>
            </p>

            <div class="flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                fill="none"
              >
                <path
                  fill="#219653"
                  d="m7.667 10.48 3.042-.772 1.27 3.917zm7-5.063H9.313L7.667.375 6.021 5.417H.667L5 8.542l-1.646 5.041 4.334-3.125 2.667-1.916z"
                ></path>
              </svg>
              <span class="leading-0 text-xs font-bold text-white"
                >Trustpilot</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="block z-20 sm:hidden">
        <img src="../assets/mobilehero.webp" alt="" class="" />
        <div class="w-full relative text-center py-5 bg-[#0A1C2D]">
          <div
            class="absolute inset-0 w-full -top-10 bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-2xl z-20"
          ></div>
          <div class="z-20 relative flex flex-col items-center px-4">
            <h2 class="text-white font-semibold">Welcome Offer</h2>
            <h1
              class="sm:text-5xl text-3xl text-[#FACC15] font-extrabold pt-1 pb-1"
            >
              120% up to $5,000
            </h1>
            <h2 class="text-white font-bold">and 75 Free Spins</h2>
            <button
              class="text-white py-1.5 my-6 px-5 flex flex-col -space-x-2 text-center items-center justify-center rounded-xl bg-[#0C49BE] hover:bg-[#0C49BE]"
            >
              <h5 class="text-lg font-semibold">Sign Up Now</h5>
              <em class="text-xs font-medium">Only Takes 30 seconds</em>
            </button>
            <div
              class="flex flex-wrap text-center justify-center items-center gap-3"
            >
              <p class="font-bold text-white text-xs">Great</p>
              <div class="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path fill="#219653" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path fill="#219653" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path fill="#219653" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path fill="#219653" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path fill="url(#half-star_svg__a)" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="half-star_svg__a"
                      x1="0"
                      x2="20"
                      y1="10"
                      y2="10"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#219653"></stop>
                      <stop offset="0.5" stop-color="#219653"></stop>
                      <stop
                        offset="0.5"
                        stop-color="#219653"
                        stop-opacity="0"
                      ></stop>
                      <stop offset="0.5" stop-color="#D9D9D9"></stop>
                      <stop offset="1" stop-color="#D9D9D9"></stop>
                      <stop
                        offset="1"
                        stop-color="#219653"
                        stop-opacity="0"
                      ></stop>
                      <stop offset="1" stop-color="#D9D9D9"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p class="font-bold text-white text-xs">
                180+ <span class="font-normal"> reviews on</span>
              </p>

              <div class="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#219653"
                    d="m7.667 10.48 3.042-.772 1.27 3.917zm7-5.063H9.313L7.667.375 6.021 5.417H.667L5 8.542l-1.646 5.041 4.334-3.125 2.667-1.916z"
                  ></path>
                </svg>
                <span class="leading-0 text-xs font-bold text-white"
                  >Trustpilot</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-8">
      <Tokens />
      <CardsOne />
      <ScrollCards />
      <Scrollcards2 />
      <Rekebek />
      <Sports />
      <Game />
      <Table />
      <TEXT />
      <LogosBar />
      <Contact class="fixed bottom-20 right-5 z-40" />
      <Footer />
      <BottomBar/>
    </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '../components/Sidebar.vue';
import Tokens from '../components/Tokens.vue';
import CardsOne from '../components/Cards1.vue';
import ScrollCards from '../components/Scroll cards.vue';
import Table from '../components/table.vue';
import Scrollcards2 from '../components/ScrollCards2.vue';
import Rekebek from '../components/Rekebek.vue';
import Sports from '../components/Sports.vue';
import Game from '../components/Game.vue';
import LogosBar from '../components/logosbar.vue';
import TEXT from '../components/Text.vue';
import Contact from '../components/Contact.vue';
import Footer from "../components/Footer.vue";
import BottomBar from "../components/BottomBar.vue";
</script>

<style>
.custom-gradient {
  background: linear-gradient(85deg, #0C49BE0d -0.06%, #0C49BE33 102.57%);
}
.custom-gradient:hover {
  background: linear-gradient(83deg, #0C49BE33 -0.06%, #0C49BE33 102.57%);
}

.element {
  background: linear-gradient(
    263deg,
    #f75a7d 0.06%,
    #f75a7d33 0.07%,
    #f75a7d0d 100.06%
  );
}

.element:hover {
  background: linear-gradient(
    263.32deg,
    rgb(247, 90, 125) 0.06%,
    rgba(247, 90, 125, 0.2) 0.07%,
    rgba(247, 90, 125, 0.2) 100.06%
  );
}

.third {
  background: linear-gradient(
    263.32deg,
    rgba(95, 73, 252, 0.4) 0.06%,
    rgba(83, 73, 252, 0.1) 100.06%
  );
}

.third:hover {
  background: linear-gradient(
    263.32deg,
    rgba(95, 73, 252, 0.4) 0.06%,
    rgba(83, 73, 252, 0.4) 100.06%
  );
}

.fourth {
  background: linear-gradient(
    263.66deg,
    rgba(247, 184, 89, 0.49) -2.37%,
    rgba(247, 184, 89, 0.03) 102.49%
  );
}

.fourth:hover {
  background: linear-gradient(
    263.66deg,
    rgba(247, 184, 89, 0.49) -2.37%,
    rgba(247, 184, 89, 0.3) 102.49%
  );
}




.bit{
  
}
</style>
