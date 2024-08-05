<template>
    <SportsSidebar />
    
    <div class="xl:pl-64 bg-[#091B29]">
    
        <div class="sm:px-4 flex justify-between gap-5 py-6 px-4">
    
            <div class="lg:w-[74%] w-full">
           
                <SportCards />
  
             
  
               
                <div class="py-5">
    
                    <div class="flex sm:flex-row flex-col justify-between items-center gap-3">
    
                        <h1 class="font-bold text-xl text-white">In-Play</h1>
    
                       <div class="flex flex-wrap items-center gap-3 text-sm">
                        <p class="text-gray-500 ">Show All</p>
                        <div class="bg-[#2B4658] rounded-full h-9 hover:bg-[#1C2C3C] transition-all duration-500 text-[#80909B] cursor-pointer w-9 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                              <rect width="24" height="24" fill="none" />
                              <path fill="currentColor" d="M6.28 2.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0-1.06-1.06L12 8.69zm0 18.06a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 1 1-1.06 1.06L12 15.31z" />
                          </svg>
                      </div>
                       </div>
                    </div>
  
                    
                    <div class="flex flex-col gap-1 mt-6">
                    <div class="">
                        <div class="flex items-center justify-between rounded-t-md border-b border-[#283D4B] bg-[#1C2C3C] p-2">
                          <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#B0B5BB]" width="1em" height="1em" viewBox="0 0 24 24">
                              <rect width="24" height="24" fill="none" />
                              <g fill="none">
                                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor" d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891" />
                              </g>
                            </svg>
                            <p class="text-xs font-medium text-[#B0B5BB]">Japan,NPB</p>
                          </div>
                          <div class="flex w-1/3 items-center justify-between gap-1 text-[#B0B5BB]">
                            <p class="text-sm">1</p>
                            <p class="text-sm">2</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24">
                              <rect width="24" height="24" fill="none" />
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
                            </svg>
                          </div>
                        </div>
                        <div class="text-xs font-bold text-[#B0B5BB]">
                          <div class="divide w-full flex-col items-center justify-between gap-3 rounded-b-md bg-[#1C2C3C] p-3 flex md:flex-row">
                            <div class="sm:flex-row flex-col flex w-full gap-3">
                              <p class="truncatex text-xs font-semibold text-[#B0B5BB]">Inning 5</p>
                              <div class="divide flex sm:flex-row flex-col sm:divide-y-0 w-full justify-between gap-2 divide-y sm:divide-x">
                                <div class="w-full">
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/dragon.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncate text-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/boy.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncatetext-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex items-center gap-2 pl-2">
                                  <div class="flex flex-col">
                                    <p class="text-xs font-bold text-[#0C49BE]">1</p>
                                    <p class="text-xs font-bold text-[#0C49BE]">3</p>
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#77808A]" width="1em" height="1em" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-wrap w-full items-center gap-3 md:w-auto">
                              <div class="flex w-full justify-between gap-[2px]">
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                              </div>
                              <div class="flex items-center text-[#B0B5BB]">
                                <p class="text-sm font-bold text-[#B0B5BB]">17</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                  <rect width="24" height="24" fill="none" />
                                  <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                     
                    </div>
  
                  <button class="bg-[#1C2C3C] rounded-md py-3 w-full text-sm mt-2 text-center hover:opacity-90 font-bold text-white">Show all</button>
                      
                </div>
  
                <div class="py-5">
      
                  <div class="flex sm:flex-row flex-col justify-between items-center gap-3">
    
                    <h1 class="font-bold text-xl text-white">Upcoming</h1>
  
                    <div class="flex flex-wrap items-center gap-3">
                      <p class="text-gray-600 text-sm">Show all</p>
                    <div class="bg-[#2B4658] rounded-full h-9 hover:bg-[#1C2C3C] transition-all duration-500 text-[#80909B] cursor-pointer w-9 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="currentColor" d="M6.28 2.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0-1.06-1.06L12 8.69zm0 18.06a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 1 1-1.06 1.06L12 15.31z" />
                        </svg>
                    </div>
                    </div>
  
                </div>
  
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
                    <div class="flex flex-col gap-1 mt-6">
                    <div class="">
                        <div class="flex items-center justify-between rounded-t-md border-b border-[#283D4B] bg-[#1C2C3C] p-2">
                          <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#B0B5BB]" width="1em" height="1em" viewBox="0 0 24 24">
                              <rect width="24" height="24" fill="none" />
                              <g fill="none">
                                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor" d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891" />
                              </g>
                            </svg>
                            <p class="text-xs font-medium text-[#B0B5BB]">Japan,NPB</p>
                          </div>
                          <div class="flex w-1/3 items-center justify-between gap-1 text-[#B0B5BB]">
                            <p class="text-sm">1</p>
                            <p class="text-sm">2</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" width="1em" height="1em" viewBox="0 0 24 24">
                              <rect width="24" height="24" fill="none" />
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
                            </svg>
                          </div>
                        </div>
                        <div class="text-xs font-bold text-[#B0B5BB]">
                          <div class="divide w-full flex-col items-center justify-between gap-3 rounded-b-md bg-[#1C2C3C] p-3 flex md:flex-row">
                            <div class="sm:flex-row flex-col flex w-full gap-3">
                              <p class="truncatex text-xs font-semibold text-[#B0B5BB]">Inning 5</p>
                              <div class="divide flex sm:flex-row flex-col sm:divide-y-0 w-full justify-between gap-2 divide-y sm:divide-x">
                                <div class="w-full">
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/dragon.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncate text-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/boy.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncatetext-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex items-center gap-2 pl-2">
                                  <div class="flex flex-col">
                                    <p class="text-xs font-bold text-[#0C49BE]">1</p>
                                    <p class="text-xs font-bold text-[#0C49BE]">3</p>
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#77808A]" width="1em" height="1em" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-wrap w-full items-center gap-3 md:w-auto">
                              <div class="flex w-full justify-between gap-[2px]">
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                              </div>
                              <div class="flex items-center text-[#B0B5BB]">
                                <p class="text-sm font-bold text-[#B0B5BB]">17</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                  <rect width="24" height="24" fill="none" />
                                  <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div class="">
                       
                        <div class="text-xs font-bold text-[#B0B5BB]">
                          <div class="divide w-full flex-col items-center justify-between gap-3 rounded-md bg-[#1C2C3C] p-3 flex md:flex-row">
                            <div class="sm:flex-row flex-col flex w-full gap-3">
                              <p class="truncatex text-xs font-semibold text-[#B0B5BB]">Inning 5</p>
                              <div class="divide flex sm:flex-row flex-col sm:divide-y-0 w-full justify-between gap-2 divide-y sm:divide-x">
                                <div class="w-full">
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/dragon.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncate text-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/boy.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncatetext-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex items-center gap-2 pl-2">
                                  <div class="flex flex-col">
                                    <p class="text-xs font-bold text-[#0C49BE]">1</p>
                                    <p class="text-xs font-bold text-[#0C49BE]">3</p>
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#77808A]" width="1em" height="1em" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-wrap w-full items-center gap-3 md:w-auto">
                              <div class="flex w-full justify-between gap-[2px]">
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                              </div>
                              <div class="flex items-center text-[#B0B5BB]">
                                <p class="text-sm font-bold text-[#B0B5BB]">17</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                  <rect width="24" height="24" fill="none" />
                                  <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div class="">
                       
                        <div class="text-xs font-bold text-[#B0B5BB]">
                          <div class="divide w-full flex-col items-center justify-between gap-3 rounded-md bg-[#1C2C3C] p-3 flex md:flex-row">
                            <div class="sm:flex-row flex-col flex w-full gap-3">
                              <p class="truncatex text-xs font-semibold text-[#B0B5BB]">Inning 5</p>
                              <div class="divide flex sm:flex-row flex-col sm:divide-y-0 w-full justify-between gap-2 divide-y sm:divide-x">
                                <div class="w-full">
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/dragon.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncate text-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center justify-between gap-2">
                                      <img src="../assets/boy.png" alt="" class="h-[18px] w-[18px]" />
                                      <p class="truncatetext-[#0C49BE]">Chunichi Dragons *</p>
                                    </div>
                                    <div class="flex items-center gap-3 truncate">
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                      <p class="">1</p>
                                      <p class="">0</p>
                                      <p class="">0</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex items-center gap-2 pl-2">
                                  <div class="flex flex-col">
                                    <p class="text-xs font-bold text-[#0C49BE]">1</p>
                                    <p class="text-xs font-bold text-[#0C49BE]">3</p>
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#77808A]" width="1em" height="1em" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM9 17H7v-5h2zm4 0h-2V7h2zm4 0h-2v-7h2z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-wrap w-full items-center gap-3 md:w-auto">
                              <div class="flex w-full justify-between gap-[2px]">
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-l-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                                <button class="flex w-1/2 cursor-not-allowed justify-center gap-2 rounded-r-md bg-[#273E50] px-10 py-3 text-center transition-all duration-500 hover:bg-opacity-50">
                                  <p class="text-sm font-bold text-white">12.00</p>
                                </button>
                              </div>
                              <div class="flex items-center text-[#B0B5BB]">
                                <p class="text-sm font-bold text-[#B0B5BB]">17</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                  <rect width="24" height="24" fill="none" />
                                  <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                      
                </div>
                <button class="bg-[#1C2C3C] rounded-md py-3 w-full text-sm mt-2 text-center hover:opacity-90 font-bold text-white">Show all</button>
                <div class="py-5">
                  <h1 class="text-white font-bold text-xl">Leagues</h1>
                  <div class="flex flex-col gap-[2px] pt-5">
                    <div class="bg-[#1C2C3C] px-3 py-2.5 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                      <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" width="1em" height="1em" viewBox="0 0 48 48">
                          <rect width="48" height="48" fill="none" />
                          <g fill="currentColor">
                            <path fill-rule="evenodd" d="M24 6c-5.293 0-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10m-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125zm-5.712 9.698q-.114.57-.115 1.177a6 6 0 1 0 11.885-1.177c-4.14-1.002-7.63-1.002-11.77 0" clip-rule="evenodd" />
                            <path d="m35 24l5-2.857V9h2v23l-7-3zm.726 7.728L32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772" />
                            <path fill-rule="evenodd" d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341" clip-rule="evenodd" />
                            <path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788z" />
                          </g>
                        </svg>
                        <p class="text-sm font-medium text-[#A6B5BB] group-hover:text-white">Counter Strike 2</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                      </svg>
                    </div>
                    <div class="bg-[#1C2C3C] px-3 py-2.5 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                      <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" width="1em" height="1em" viewBox="0 0 48 48">
                          <rect width="48" height="48" fill="none" />
                          <g fill="currentColor">
                            <path fill-rule="evenodd" d="M24 6c-5.293 0-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10m-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125zm-5.712 9.698q-.114.57-.115 1.177a6 6 0 1 0 11.885-1.177c-4.14-1.002-7.63-1.002-11.77 0" clip-rule="evenodd" />
                            <path d="m35 24l5-2.857V9h2v23l-7-3zm.726 7.728L32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772" />
                            <path fill-rule="evenodd" d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341" clip-rule="evenodd" />
                            <path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788z" />
                          </g>
                        </svg>
                        <p class="text-sm font-medium text-[#A6B5BB] group-hover:text-white">Counter Strike 2</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                      </svg>
                    </div>
                    <div class="bg-[#1C2C3C] px-3 py-2.5 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                      <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" width="1em" height="1em" viewBox="0 0 48 48">
                          <rect width="48" height="48" fill="none" />
                          <g fill="currentColor">
                            <path fill-rule="evenodd" d="M24 6c-5.293 0-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10m-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125zm-5.712 9.698q-.114.57-.115 1.177a6 6 0 1 0 11.885-1.177c-4.14-1.002-7.63-1.002-11.77 0" clip-rule="evenodd" />
                            <path d="m35 24l5-2.857V9h2v23l-7-3zm.726 7.728L32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772" />
                            <path fill-rule="evenodd" d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341" clip-rule="evenodd" />
                            <path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788z" />
                          </g>
                        </svg>
                        <p class="text-sm font-medium text-[#A6B5BB] group-hover:text-white">Counter Strike 2</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                      </svg>
                    </div>
                    <div class="bg-[#1C2C3C] px-3 py-2.5 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                      <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" width="1em" height="1em" viewBox="0 0 48 48">
                          <rect width="48" height="48" fill="none" />
                          <g fill="currentColor">
                            <path fill-rule="evenodd" d="M24 6c-5.293 0-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10m-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125zm-5.712 9.698q-.114.57-.115 1.177a6 6 0 1 0 11.885-1.177c-4.14-1.002-7.63-1.002-11.77 0" clip-rule="evenodd" />
                            <path d="m35 24l5-2.857V9h2v23l-7-3zm.726 7.728L32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772" />
                            <path fill-rule="evenodd" d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341" clip-rule="evenodd" />
                            <path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788z" />
                          </g>
                        </svg>
                        <p class="text-sm font-medium text-[#A6B5BB] group-hover:text-white">Counter Strike 2</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                      </svg>
                    </div>
                    <div class="bg-[#1C2C3C] px-3 py-2.5 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                      <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" width="1em" height="1em" viewBox="0 0 48 48">
                          <rect width="48" height="48" fill="none" />
                          <g fill="currentColor">
                            <path fill-rule="evenodd" d="M24 6c-5.293 0-9.583 4.477-9.583 10c0 .576-.637 1.816-1.176 2.764c-.235.412.177.923.628.777a48 48 0 0 1 2.208-.654Q16 19.434 16 20a8 8 0 1 0 15.923-1.113a48 48 0 0 1 2.208.654c.452.146.863-.365.628-.777c-.54-.948-1.176-2.188-1.176-2.764c0-5.523-4.29-10-9.583-10m-.173 3.125a.181.181 0 0 1 .345 0l.494 1.52a.18.18 0 0 0 .172.126h1.599c.175 0 .248.225.106.328l-1.293.94a.18.18 0 0 0-.066.202l.494 1.52a.181.181 0 0 1-.279.204l-1.293-.94a.18.18 0 0 0-.213 0l-1.294.94a.181.181 0 0 1-.279-.203l.494-1.52a.18.18 0 0 0-.065-.203l-1.294-.94a.181.181 0 0 1 .107-.328h1.598c.079 0 .148-.05.173-.125zm-5.712 9.698q-.114.57-.115 1.177a6 6 0 1 0 11.885-1.177c-4.14-1.002-7.63-1.002-11.77 0" clip-rule="evenodd" />
                            <path d="m35 24l5-2.857V9h2v23l-7-3zm.726 7.728L32.644 42H42v-5.5c0-2.004-2.663-3.642-6.274-4.772" />
                            <path fill-rule="evenodd" d="M33.798 31.193c-3.32-.814-7.12-1.239-10.327-1.186C16.258 30.124 6 32.44 6 36.5V42h24.556zm-21.692 4.36a1 1 0 0 1 1.341-.447l1.553.776l1.553-.776a1 1 0 1 1 .894 1.788l-2 1a1 1 0 0 1-.894 0l-2-1a1 1 0 0 1-.447-1.341" clip-rule="evenodd" />
                            <path d="M12.142 29.338a1 1 0 1 0-.895-1.788L7.552 29.4a1 1 0 0 0 .896 1.788z" />
                          </g>
                        </svg>
                        <p class="text-sm font-medium text-[#A6B5BB] group-hover:text-white">Counter Strike 2</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                      </svg>
                    </div>
                  </div>
                  <button class="bg-[#1C2C3C] rounded-md justify-center py-3 w-full text-sm mt-2 text-center hover:opacity-90 font-bold text-white flex items-center gap-1">
                    Show all
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                    </svg>
                  </button>
                </div>
                
                <Footersport />
            </div>
    
            <div class="w-[240px]">
    
                <rightsidesports />
    
            </div>
    
        </div>
    <BottomBar />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import SportsSidebar from "../components/SportsSidebar.vue";
  import rightsidesports from "../components/rightsidesports.vue";
  import SportCards from "../components/SportCards.vue";
  import Footer from '../components/Footer.vue';
  import BottomBar from '../components/BottomBar.vue';
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