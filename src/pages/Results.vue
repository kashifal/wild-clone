<template>
    <SportsSidebar />
    
    <div class="xl:pl-64 bg-[#091B29]">
    
        <div class="md:px-4 flex justify-between gap-5 py-6">
    
            <div class="xl:w-[74.7%] 2xl:w-[76%] w-full">
           
  
                <div class="py-5 ">
      
                  <div class="flex md:px-0 px-4 flex-wrap justify-between items-center gap-3">
    
                    <h1 class="font-bold text-xl text-white">Upcoming</h1>
  
                    <div class="flex flex-wrap items-center gap-3">
                        <div class="md:flex hidden rounded-full bg-[#2B4658] p-1"><button class="rounded-full bg-[#1C2C3C] px-7 py-2 text-sm font-bold text-[#3FC02F] transition-all duration-500 hover:bg-[#091B29]">All</button><button class="rounded-full px-4 py-2 text-sm font-bold text-[#B5BEC5] transition-all duration-500 hover:bg-[#1C2C3C] hover:text-white">Sports</button><button class="rounded-full px-4 py-2 text-sm font-bold text-[#B5BEC5] transition-all duration-500 hover:bg-[#1C2C3C] hover:text-white">Esports</button></div>

                    <div class="bg-[#2B4658] rounded-full h-9 hover:bg-[#1C2C3C] transition-all duration-500 text-[#80909B] cursor-pointer w-9 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="currentColor" d="M6.28 2.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0-1.06-1.06L12 8.69zm0 18.06a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 1 1-1.06 1.06L12 15.31z" />
                        </svg>
                    </div>
                    </div>
  
                </div>
                <div class="px-4">
                <div class="flex md:hidden rounded-full mt-2 bg-[#2B4658] p-1">
                    <button class="rounded-full w-1/3 bg-[#1C2C3C] px-7 py-2 text-sm font-bold text-[#3FC02F] transition-all duration-500 hover:bg-[#091B29]">All</button>
                    <button class="rounded-full w-1/3 px-4 py-2 text-sm font-bold text-[#B5BEC5] transition-all duration-500 hover:bg-[#1C2C3C] hover:text-white">Sports</button>
                    <button class="rounded-full w-1/3 px-4 py-2 text-sm font-bold text-[#B5BEC5] transition-all duration-500 hover:bg-[#1C2C3C] hover:text-white">Esports</button>
                </div>
                </div>
                <div class="">
                    <div class="flex flex-row gap-[2px] boxscr w-[100%] overflow-x-auto justify-between pt-5">
                        <div class="bg-[#1C2C3C] hover:bg-[#214058] transition-all duration-500 min-w-[84px] rounded-l-md h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-[#F67C0B]  w-9 h-9" width="1em" height="1em" viewBox="0 0 24 24">
                                <rect width="24" height="24" fill="none" />
                                <path fill="currentColor" d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15" />
                            </svg>
                            <p class="text-sm text-white">Top</p>
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                        <div class="bg-[#1C2C3C] min-w-[84px] hover:bg-[#214058] transition-all duration-500 text-[#77808A]  h-[70px] cursor-pointer flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="1em" height="1em" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <g fill="currentColor">
                                    <path d="m65.17 108.08l-33 25.34c-.1-1.8-.15-3.6-.15-5.42a95.6 95.6 0 0 1 21.21-60.22Zm-18.25 71.34a96.12 96.12 0 0 0 57 41.52l-14.7-41.52Zm105.21 41.52a96.12 96.12 0 0 0 57-41.52h-42.3Zm50.64-153.16l-11.94 40.3l33 25.34c.1-1.8.15-3.6.15-5.42a95.6 95.6 0 0 0-21.21-60.22m-38.52-28.7a96.34 96.34 0 0 0-72.5 0L128 64ZM152.72 160L168 115.5L128 88l-40 27.5l15.28 44.5Z" opacity="0.2" />
                                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.4 87.4 0 0 1-10.99 34.3m-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.4 87.4 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.3 87.3 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.3 87.3 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.6 88.6 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.2 88.2 0 0 1 36.14 0m-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.6 88.6 0 0 1 28.77-21.49M63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27M110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
                                </g>
                            </svg>
                            
                        </div>
                      
                        
                        </div>
                        <div class="md:flex hidden justify-center pt-5">
                        <nav class="isolate mx-auto inline-flex gap-[2px] justify-center rounded-md" aria-label="Pagination">
                            <a href="#" class="relative inline-flex  items-center bg-[#1C2C3C]  rounded-l px-2 py-2.5 text-white ">
                              <span class="sr-only">Previous</span>
                              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                              </svg>
                            </a>
                            <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                            <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-[#1C2C3C] px-4 py-2 text-sm font-semibold text-[#3FC02F] focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">1</a>
                            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white  focus:z-20 focus:outline-offset-0">2</a>
                            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white   focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white   focus:z-20 focus:outline-offset-0 md:inline-flex">4</a>
                            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C]  text-white focus:z-20 focus:outline-offset-0">5</a>
                            <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white  focus:outline-offset-0">...</span>
                            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C]  text-white  focus:z-20 focus:outline-offset-0">13</a>
                            <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 bg-[#1C2C3C] focus:z-20 text-white focus:outline-offset-0">
                              <span class="sr-only">Next</span>
                              <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                              </svg>
                            </a>
                          </nav>
                        </div>
                        <div class="flex md:hidden justify-center pt-5">
                            <nav class="isolate mx-auto inline-flex gap-[2px] justify-center rounded-md" aria-label="Pagination">
                                <a href="#" class="relative inline-flex  items-center bg-[#1C2C3C]  rounded-l px-2 py-2.5 text-white ">
                                  <span class="sr-only">Previous</span>
                                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                  </svg>
                                </a>
                                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-[#1C2C3C] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">1/10</a>
                                
                                <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 bg-[#1C2C3C] focus:z-20 text-white focus:outline-offset-0">
                                  <span class="sr-only">Next</span>
                                  <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                  </svg>
                                </a>
                              </nav>
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
                    <div class="md:flex hidden justify-center pt-5">
                        <nav class="isolate mx-auto inline-flex gap-[2px] justify-center rounded-md" aria-label="Pagination">
                            <a href="#" class="relative inline-flex  items-center bg-[#1C2C3C]  rounded-l px-2 py-2.5 text-white ">
                              <span class="sr-only">Previous</span>
                              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                              </svg>
                            </a>
                            <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                            <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-[#1C2C3C] px-4 py-2 text-sm font-semibold text-[#3FC02F] focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">1</a>
                            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white  focus:z-20 focus:outline-offset-0">2</a>
                            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white   focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white   focus:z-20 focus:outline-offset-0 md:inline-flex">4</a>
                            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C]  text-white focus:z-20 focus:outline-offset-0">5</a>
                            <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C] text-white  focus:outline-offset-0">...</span>
                            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#1C2C3C]  text-white  focus:z-20 focus:outline-offset-0">13</a>
                            <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 bg-[#1C2C3C] focus:z-20 text-white focus:outline-offset-0">
                              <span class="sr-only">Next</span>
                              <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                              </svg>
                            </a>
                          </nav>
                        </div>
                        <div class="flex md:hidden justify-center pt-5">
                            <nav class="isolate mx-auto inline-flex gap-[2px] justify-center rounded-md" aria-label="Pagination">
                                <a href="#" class="relative inline-flex  items-center bg-[#1C2C3C]  rounded-l px-2 py-2.5 text-white ">
                                  <span class="sr-only">Previous</span>
                                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                  </svg>
                                </a>
                                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-[#1C2C3C] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">1/10</a>
                                
                                <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 bg-[#1C2C3C] focus:z-20 text-white focus:outline-offset-0">
                                  <span class="sr-only">Next</span>
                                  <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                  </svg>
                                </a>
                              </nav>
                            </div>
                </div>
               
                
               <Footersport />
            </div>
    
            <div class="w-[240px]">
    
                <rightsidesports />
    
            </div>
    
        </div>
    <BottomBarSport/>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import CardsBet from "../components/CardsBet.vue";
  import SportsSidebar from "../components/SportsSidebar.vue";
  import rightsidesports from "../components/rightsidesports.vue";
  import SportCards from "../components/SportCards.vue";
  import Footer from '../components/Footer.vue';
  import BottomBarSport from '../components/BottomBarSports.vue';
import Footersport from "../components/Footersport.vue";
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