<template>
  <SportsSidebar />

  <div class="xl:pl-64 bg-[#091B29]">
    <div class="md:px-4 flex justify-between gap-5 py-6">
      <div class="xl:w-[74.7%] 2xl:w-[76%] w-full">
        <SportCards />

        <div class="py-5">
          <div class="flex flex-wrap px-3 justify-between items-center gap-3">
            <h1 class="font-bold text-xl text-white">In-Play</h1>

            <div class="flex flex-wrap items-center gap-3">
              <label
                class="relative h-8 w-7 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                for="switch"
              >
                <input class="peer sr-only" id="switch" type="checkbox" />
                <span
                  class="absolute inset-0 m-auto h-3 rounded-full bg-stone-600"
                ></span>
                <span
                  class="absolute inset-y-0 start-0 m-auto size-4 rounded-full bg-[#CFCFCF] transition-all peer-checked:start-4 peer-checked:bg-[#F44336] peer-che peer-checked:[&amp;_>_*]:scale-0"
                >
                </span>
              </label>

              <p class="text-white text-sm">Only with video</p>

              <div class="md:flex hidden p-1 bg-[#2B4658] rounded-full">
                <button
                  class="px-7 text-sm bg-[#1C2C3C] hover:bg-[#091B29] rounded-full py-2 text-[#3FC02F] transition-all duration-500 font-bold"
                >
                  All
                </button>
                <button
                  class="px-4 text-sm hover:bg-[#1C2C3C] rounded-full py-2 hover:text-white text-[#B5BEC5] transition-all duration-500 font-bold"
                >
                  Sports
                </button>
                <button
                  class="px-4 text-sm hover:bg-[#1C2C3C] rounded-full py-2 hover:text-white text-[#B5BEC5] transition-all duration-500 font-bold"
                >
                  Esports
                </button>
              </div>

              <div
                class="bg-[#2B4658] rounded-full h-9 hover:bg-[#1C2C3C] transition-all duration-500 text-[#80909B] cursor-pointer w-9 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M6.28 2.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0-1.06-1.06L12 8.69zm0 18.06a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 1 1-1.06 1.06L12 15.31z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="px-3">
            <div
              class="flex p-1 mt-3 md:hidden bg-[#2B4658] justify-center rounded-full"
            >
              <button
                class="px-7 w-1/3 text-sm bg-[#1C2C3C] hover:bg-[#091B29] rounded-full py-2 text-[#3FC02F] transition-all duration-500 font-bold"
              >
                All
              </button>
              <button
                class="px-4 w-1/3 text-sm hover:bg-[#1C2C3C] rounded-full py-2 hover:text-white text-[#B5BEC5] transition-all duration-500 font-bold"
              >
                Sports
              </button>
              <button
                class="px-4 w-1/3 text-sm hover:bg-[#1C2C3C] rounded-full py-2 hover:text-white text-[#B5BEC5] transition-all duration-500 font-bold"
              >
                Esports
              </button>
            </div>
          </div>
          <div
            class="flex flex-row gap-[2px] boxscr w-[100%] overflow-x-auto justify-between pt-5"
          >
            <div
              class="bg-[#1C2C3C] hover:bg-[#214058] transition-all duration-500 min-w-[84px] rounded-l-md h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-[#F67C0B] w-9 h-9"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15"
                />
              </svg>
              <p class="text-sm text-white">Top</p>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
            <div
              class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A] h-[70px] cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <g fill="currentColor">
                  <path
                    d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z"
                    opacity="0.2"
                  />
                  <path
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-1 mt-6">
            <div class="">
              <CardsBet :items="[1, 2]" />
            </div>
            <div class="">
              <CardsBet :items="[1, 2, 3]" />
            </div>
            <div class="">
              <CardsBet :items="[1, 2]" />
            </div>
          </div>
          <button
            class="bg-[#1C2C3C] rounded-md py-3 w-full text-sm mt-2 text-center hover:opacity-90 font-bold text-white"
          >
            Show all
          </button>
        </div>
        <Footersport />
      </div>

      <div class="w-[240px]">
        <rightsidesports />
      </div>
    </div>
    <BottomBarSport />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SportsSidebar from "../components/SportsSidebar.vue";
import rightsidesports from "../components/rightsidesports.vue";
import SportCards from "../components/SportCards.vue";
import Footer from "../components/Footer.vue";
import Footersport from "../components/Footersport.vue";
import CardsBet from "../components/CardsBet.vue";
import BottomBarSport from "../components/BottomBarSports.vue";
const show = ref(false);

function modalFunc() {
  show.value = !show.value;
}
</script>

<style>
.boxscr {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.boxscr::-webkit-scrollbar {
  height: 2px; /* Width of the scrollbar */
}

.boxscr::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.boxscr::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>
