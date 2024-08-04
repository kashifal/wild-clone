<template>
    <SportsSidebar />
    
    <div class="xl:pl-64 bg-[#091B29]">
    
        <div class="sm:px-4 flex justify-between gap-5 py-6 px-4">
    
            <div class="lg:w-[74%] w-full">
                
           <div class="bg-[url('./assets/footballbg.png')] w-full  bg-cover bg-center">
            <div class="flex gap-2 pb-5 px-3 py-3 items-center">
                <a href="/" class="text-[#A9AEB2] font-medium hover:text-white text-sm">Home</a>
                <a href="/" class="text-[#A9AEB2] font-medium hover:text-white text-sm">/</a>
                <div class="group relative">
                <a href="/" class="text-[#A9AEB2] flex gap-3 items-center font-medium hover:text-white text-sm">Football
                    <div class="w-4  top-[50%] right-[30px] cursor-pointer  h-4 bg-[#2B4658] flex items-center  transition-all duration-1000  justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#728490] rotate-90 w-4 h-4" width="1em" height="1em" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" />
                        </svg>
                    </div>
                </a>
                <div class="bg-[#1C2C3C] hidden group-hover:flex flex-col z-20 top-8 pt-1.5 absolute w-fit h-fit">
                    <a href="#" class="border-l-2  border-[#3FC02F] pl-4 pr-32 py-2 bg-[#2B4658] text-white font-bold text-sm">Football</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#3FC02F] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                </div>
                </div>
            </div>
            <h1 class="text-white font-bold text-3xl pb-5 px-3">Football</h1>
                <SportCards />
            </div>
  
             
  
               
                <div class="py-5">
    
                    <div class="flex sm:flex-row flex-col justify-between items-center gap-3">
    
                        <h1 class="font-bold text-xl text-white">In-Play</h1>
    
                       <div class="flex flex-wrap items-center gap-3 text-sm">
                        <p class="text-gray-500 ">Show All</p>
                       
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
                                      <p class="truncate text-[#2AB42F]">Chunichi Dragons *</p>
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
                                      <p class="truncatetext-[#2AB42F]">Chunichi Dragons *</p>
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
                                    <p class="text-xs font-bold text-[#24A42F]">1</p>
                                    <p class="text-xs font-bold text-[#24A42F]">3</p>
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
                                      <p class="truncate text-[#2AB42F]">Chunichi Dragons *</p>
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
                                      <p class="truncatetext-[#2AB42F]">Chunichi Dragons *</p>
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
                                    <p class="text-xs font-bold text-[#24A42F]">1</p>
                                    <p class="text-xs font-bold text-[#24A42F]">3</p>
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
                                      <p class="truncate text-[#2AB42F]">Chunichi Dragons *</p>
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
                                      <p class="truncatetext-[#2AB42F]">Chunichi Dragons *</p>
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
                                    <p class="text-xs font-bold text-[#24A42F]">1</p>
                                    <p class="text-xs font-bold text-[#24A42F]">3</p>
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
                                      <p class="truncate text-[#2AB42F]">Chunichi Dragons *</p>
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
                                      <p class="truncatetext-[#2AB42F]">Chunichi Dragons *</p>
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
                                    <p class="text-xs font-bold text-[#24A42F]">1</p>
                                    <p class="text-xs font-bold text-[#24A42F]">3</p>
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
                    <h1 class="text-white font-bold text-xl">Outrights</h1>
                    <div class="flex flex-col gap-[2px] pt-5">
                        <div class="">
                            <h1 class="text-white font-bold px-3 py-3">Next Permanent Manchester United Manager</h1>
                      <div class="bg-[#1C2C3C] px-3 py-3 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                        <div class="flex gap-2 items-center">
                          
                          <p class="text-sm font-bold  text-white"><span class="">World</span> Next Permanent Manchester United Manager</p>
                        </div>
                        <div class="flex gap-1 items-center">
                        <p class="text-sm">Nov,30,2024</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                          <rect width="24" height="24" fill="none" />
                          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                        </svg>
                    </div>
                      </div>
                      </div>
                      <div class="mt-4">
                        <h1 class="text-white font-bold px-3 py-3">Next Permanent Manchester United Manager</h1>
                  <div class="bg-[#1C2C3C] px-3 py-3 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                    <div class="flex gap-2 items-center">
                      
                      <p class="text-sm font-bold  text-white"><span class="">World</span> Next Permanent Manchester United Manager</p>
                    </div>
                    <div class="flex gap-1 items-center">
                    <p class="text-sm">Nov,30,2024</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                    </svg>
                </div>
                  </div>
                  </div>
                  <div class="mt-4">
                    <h1 class="text-white font-bold px-3 py-3">Next Permanent Manchester United Manager</h1>
              <div class="bg-[#1C2C3C] px-3 py-3 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
                <div class="flex gap-2 items-center">
                  
                  <p class="text-sm font-bold  text-white"><span class="">World</span> Next Permanent Manchester United Manager</p>
                </div>
                <div class="flex gap-1 items-center">
                <p class="text-sm">Nov,30,2024</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none" />
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                </svg>
            </div>
              </div>
              </div>
              <div class="mt-4">
                <h1 class="text-white font-bold px-3 py-3">Next Permanent Manchester United Manager</h1>
          <div class="bg-[#1C2C3C] px-3 py-3 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
            <div class="flex gap-2 items-center">
              
              <p class="text-sm font-bold  text-white"><span class="">World</span> Next Permanent Manchester United Manager</p>
            </div>
            <div class="flex gap-1 items-center">
            <p class="text-sm">Nov,30,2024</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
            </svg>
        </div>
          </div>
          </div>
          <div class="mt-4">
            <h1 class="text-white font-bold px-3 py-3">Next Permanent Manchester United Manager</h1>
      <div class="bg-[#1C2C3C] px-3 py-3 group  text-[#7C858F] hover:text-white cursor-pointer hover:bg-opacity-80 rounded-md flex justify-between items-center gap-2">
        <div class="flex gap-2 items-center">
          
          <p class="text-sm font-bold  text-white"><span class="">World</span> Next Permanent Manchester United Manager</p>
        </div>
        <div class="flex gap-1 items-center">
        <p class="text-sm">Nov,30,2024</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="none" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
        </svg>
    </div>
      </div>
      </div>
                    </div>
                    <button class="bg-[#1C2C3C] mt-4 rounded-md justify-center py-3 w-full text-sm mt-2 text-center hover:opacity-90 font-bold text-white flex items-center gap-1">
                      Show all
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="1em" height="1em" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" />
                      </svg>
                    </button>
                  </div>


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
                
                <footer class="w-full  border-t  border-gray-600 mt-10 pt-20 pb-40">
                  <div class="max-w-7xl mx-auto">
                      <div class="flex xl:flex-row flex-col gap-4 lg:gap-6 xl:gap-12 2xl:gap-12 justify-between ">
                     <div class="">
                              <img src="../assets/logo.png" alt="" class="w-[130px] h-[60px] object-cover">
                              <p class="text-white/90 text-sm">© 2024 Wild. All rights <br>reserved.</p>
                              <div class="flex  gap-4 py-3">
                                  <a href="#" target="_blank" class="">
                                      <svg viewBox="0 0 12 13" fill="none" class="w-6 h-6 hover:opacity-70 transition-all duration-300 text-white fill-white" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.01869 5.78216C4.11944 4.43122 6.18708 3.54059 7.22164 3.11029C10.1755 1.88168 10.7893 1.66826 11.1893 1.66121C11.2773 1.65966 11.4741 1.68146 11.6015 1.78487C11.7091 1.87219 11.7387 1.99013 11.7529 2.07292C11.767 2.1557 11.7847 2.34429 11.7707 2.49164C11.6106 4.17351 10.918 8.25497 10.5656 10.1387C10.4165 10.9358 10.1229 11.203 9.8387 11.2292C9.22102 11.286 8.75199 10.821 8.15373 10.4288C7.21759 9.81516 6.68872 9.43316 5.78003 8.83435C4.72988 8.14231 5.41065 7.76196 6.00913 7.14036C6.16575 6.97768 8.88726 4.50226 8.93993 4.2777C8.94652 4.24962 8.95264 4.14493 8.89044 4.08965C8.82825 4.03437 8.73646 4.05328 8.67022 4.06831C8.57633 4.08962 7.08082 5.07809 4.1837 7.03373C3.75921 7.32522 3.37471 7.46724 3.03022 7.4598C2.65044 7.4516 1.91991 7.24507 1.37683 7.06854C0.710718 6.85201 0.181308 6.73753 0.227408 6.36981C0.251419 6.17827 0.515181 5.98239 1.01869 5.78216Z" fill="current"></path></svg>
                                  </a>
                                  <a href="#" target="_blank" class="">
                                      <svg viewBox="0 0 14 13" fill="none" class="w-6 h-6 hover:opacity-70 transition-all duration-300 text-white fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M0.531707 0.635742L5.55137 7.36786L0.5 12.8398H1.6375L6.05869 8.04764L9.63171 12.8398H13.5L8.19893 5.73005L12.8995 0.635742H11.764L7.69162 5.04829L4.40198 0.635742H0.531707ZM2.20427 1.47452H3.98186L11.8294 11.9991H10.0518L2.20427 1.47452Z" fill="current"></path></svg>
                                  </a>
                                  <a href="#" target="_blank" class="">
                                      <svg viewBox="0 0 12 13" fill="none" class="w-6 h-6 hover:opacity-70 transition-all duration-300 text-white fill-white" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1634_32897)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.52521 0.671471C4.16594 0.642888 4.37079 0.635742 6 0.635742C7.62922 0.635742 7.83407 0.642888 8.47718 0.669089C9.11791 0.697672 9.5538 0.800093 9.9349 0.947771C10.3279 1.10259 10.6638 1.30744 10.9972 1.6409C11.3307 1.97437 11.5379 2.30783 11.6904 2.70323C11.838 3.08671 11.9405 3.5226 11.969 4.16095C11.9976 4.80168 12.0048 5.00414 12.0048 6.63574C12.0048 8.26734 11.9976 8.4698 11.969 9.11053C11.9405 9.75126 11.838 10.1872 11.6904 10.5683C11.5355 10.9613 11.3307 11.2971 10.9972 11.6306C10.6638 11.964 10.3303 12.1713 9.9349 12.3237C9.55142 12.4714 9.11553 12.5738 8.47718 12.6024C7.83645 12.631 7.63399 12.6381 6.00239 12.6381C4.37079 12.6381 4.16832 12.631 3.52759 12.6024C2.88686 12.5738 2.45097 12.4714 2.06987 12.3237C1.67686 12.1689 1.34101 11.964 1.00754 11.6306C0.674078 11.2971 0.466852 10.9636 0.314411 10.5683C0.166733 10.1848 0.0643113 9.74888 0.0357285 9.11053C0.0071457 8.4698 0 8.26496 0 6.63574C0 5.00652 0.0071457 4.80168 0.0357285 4.16333C0.0643113 3.5226 0.166733 3.08671 0.314411 2.70561C0.469234 2.3126 0.674078 1.97675 1.00754 1.64328C1.34101 1.30982 1.67448 1.10259 2.06987 0.950153C2.45097 0.802475 2.88686 0.700053 3.52521 0.671471ZM2.91782 6.63813C2.91782 4.93507 4.29932 3.55595 6 3.55595C7.70305 3.55595 9.08217 4.93507 9.08217 6.63813C9.08217 8.34118 7.70305 9.7203 6 9.7203C4.29694 9.7203 2.91782 8.34118 2.91782 6.63813ZM3.9992 6.63575C3.9992 7.74095 4.8948 8.63654 6 8.63654C7.1052 8.63654 8.00079 7.74095 8.00079 6.63575C8.00079 5.53055 7.1052 4.63495 6 4.63495C4.8948 4.63495 3.9992 5.53055 3.9992 6.63575Z" fill="current"></path><path d="M9.20371 4.15156C9.60099 4.15156 9.92304 3.8295 9.92304 3.43222C9.92304 3.03495 9.60099 2.71289 9.20371 2.71289C8.80643 2.71289 8.48438 3.03495 8.48438 3.43222C8.48438 3.8295 8.80643 4.15156 9.20371 4.15156Z" fill="#0A1C2D"></path></g><defs><clipPath id="clip0_1634_32897"><rect width="12" height="12" fill="current" transform="translate(0 0.635742)"></rect></clipPath></defs></svg>
                                  </a>
                                  <a href="#" target="_blank" class="">
                                      <svg viewBox="0 0 13 11" fill="none" class="w-6 h-6 hover:opacity-70 transition-all duration-300 text-white fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M10.6603 1.63154C9.85742 1.2631 8.99713 0.991814 8.09712 0.836619C8.08063 0.833564 8.06412 0.840897 8.05618 0.856172C7.94558 1.05292 7.82277 1.31015 7.73723 1.51178C6.7694 1.36697 5.80647 1.36697 4.85819 1.51178C4.77204 1.30526 4.64495 1.05292 4.53374 0.856172C4.52519 0.841508 4.5087 0.834175 4.49281 0.836619C3.59341 0.991814 2.73251 1.2631 1.92965 1.63154C1.92293 1.63459 1.91682 1.63948 1.91254 1.6462C0.279937 4.08533 -0.167331 6.46458 0.0520199 8.8145C0.053242 8.82611 0.0593532 8.83711 0.0685183 8.84383C1.14572 9.63508 2.18933 10.1153 3.21337 10.4337C3.22987 10.4385 3.24697 10.4324 3.25736 10.419C3.49932 10.0884 3.71562 9.73956 3.90075 9.37235C3.91175 9.35096 3.90074 9.3253 3.87875 9.31674C3.53597 9.1866 3.2103 9.02835 2.89625 8.84872C2.8712 8.83405 2.86937 8.79861 2.89198 8.7815C2.95797 8.73201 3.02395 8.68069 3.08689 8.62875C3.0985 8.61898 3.11438 8.61715 3.12782 8.62326C5.18874 9.5642 7.42013 9.5642 9.45661 8.62326C9.47005 8.61654 9.48593 8.61898 9.49754 8.62815C9.56047 8.68008 9.62646 8.73201 9.69306 8.7815C9.71567 8.79861 9.71446 8.83405 9.6894 8.84872C9.37596 9.03202 9.04968 9.18721 8.70629 9.31674C8.68369 9.3253 8.6739 9.35096 8.6849 9.37296C8.87431 9.73895 9.09 10.0878 9.32768 10.419C9.33746 10.4331 9.35517 10.4392 9.37167 10.4343C10.4006 10.1159 11.4442 9.63569 12.5214 8.84444C12.5306 8.83772 12.5367 8.82672 12.5379 8.81572C12.8006 6.0992 12.098 3.7395 10.6762 1.64742C10.6725 1.6407 10.667 1.6352 10.6597 1.63215L10.6603 1.63154ZM4.20746 7.38353C3.58668 7.38353 3.07589 6.81407 3.07589 6.11447C3.07589 5.41487 3.57752 4.84542 4.20746 4.84542C4.83741 4.84542 5.34943 5.42037 5.33904 6.11447C5.33904 6.81407 4.83741 7.38353 4.20746 7.38353ZM8.39223 7.38353C7.77145 7.38353 7.26066 6.81407 7.26066 6.11447C7.26066 5.41487 7.76228 4.84542 8.39223 4.84542C9.02217 4.84542 9.5342 5.42037 9.52381 6.11447C9.52381 6.81407 9.02767 7.38353 8.39223 7.38353Z" fill="current"></path></svg>
                                  </a>
                              </div>
                              <div class="flex items-center py-4 gap-1">
                                  <p class="text-sm font-semibold text-white">AM</p>
                                  <label class="relative inline-flex items-center cursor-pointer">
                                      <input class="sr-only peer" value="" type="checkbox">
                                      <div class="group peer ring-0 bg-[#3FC02F] rounded-full outline-none duration-700 after:duration-200 w-[50px] h-6  shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-white after:translate-x-[27px] after:outline-none after:h-4 after:w-4 after:top-1 after:left-1 peer-checked:bg-[#091B29]  peer-checked:after:translate-x-0 peer-hover:after:scale-95">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="absolute  top-1 left-[5px] w-4 h-4" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="1.667" stroke="#fff" stroke-width="2"></circle><path stroke="#fff" stroke-linecap="round" stroke-width="2" d="M8 3.333V2M8 14v-1.334M11.3 4.7l.943-.943M3.757 12.243 4.7 11.3M12.667 8H14M2 8h1.333M11.3 11.3l.943.943M3.757 3.757 4.7 4.7"></path></svg>
                                      </div>
                                    </label>
                                    <p class="text-sm font-semibold text-white">PM</p>
                                    
                              </div>
                          </div>
                      <div class=" xl:grid-cols-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-5 sm:gap-16">
                         
                          <div class="mt-2">
                              <h3 class="uppercase text-white font-medium text-sm">Slot Games</h3>
                              <div class="flex flex-col gap-2 pt-3.5">
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Slots</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Skill Games</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Jackpot</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Bonus Buy</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Crash Games</a>
                              </div>
                          </div>
                          <div class="mt-2">
                              <h3 class="uppercase text-white font-medium text-sm">Live Casino</h3>
                              <div class="flex flex-col gap-2 pt-3.5">
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Roulette</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Blackjack</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Live Casino</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Table Games</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Video Poker</a>
                              </div>
                          </div>
                          <div class="mt-2">
                              <h3 class="uppercase text-white font-medium text-sm">Live Casino</h3>
                              <div class="flex flex-col gap-2 pt-3.5">
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">About Us</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Promotions</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Tournaments</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Affiliate Program</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Loyalty Program</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Refer a friend</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Blog</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Bonus Shop</a>
                              </div>
                          </div>
                          <div class="mt-2">
                              <h3 class="uppercase text-white font-medium text-sm">Legal</h3>
                              <div class="flex flex-col gap-2 pt-3.5">
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Privacy Policy</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Terms & Conditions</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Bonus Terms</a>
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Responsible <br /> Gambling</a>
                              </div>
                          </div>
                          <div class="mt-2">
                              <h3 class="uppercase text-white font-medium text-sm">Support</h3>
                              <div class="flex flex-col gap-2 pt-3.5">
                                  <a href="#" class="text-[14px] hover:text-[#3FC02F] transition-all duration-300 text-white/80">Live Support</a>
                              </div>
                          </div>
                      </div>
                      </div>
                      <div class="border border-gray-600 my-10 lg:flex-row flex-col flex justify-between items-center gap-5 lg:gap-3 rounded-lg p-5">
                          <p class="text-white/80 lg:w-1/2 lg:text-left text-center text-xs">Wild.io is owned and operated by Nonce Gaming B.V. that is incorporated under the laws of<br class="lg:flex hidden"> Curacao with company registration number 161858 and having its registered address at<br class="lg:flex hidden"> Scharlooweg 39, Willemstad, Curaçao. Nonce Gaming B.V. is operating under E-gaming license<br class="lg:flex hidden"> No. 8048/JAZ issued by Antillephone N.V. authorized by the government of Curacao.</p>
                          <div class=" flex flex-wrap items-center gap-6">
                              <img src="../assets/footerlogo.svg" alt="" class="w-[36px] sm:mx-0 mx-auto h-[36px]">
                              <img src="../assets/foo2.svg" alt="" class="w-[30px] sm:mx-0 mx-auto h-[33px]">
                              <img src="../assets/foo3.svg" alt="" class="w-[117px] sm:mx-0 mx-auto h-[33px]">
                              <img src="../assets/foo4.svg" alt="" class="w-[95px] sm:mx-0 mx-auto h-[33px]">
                              <a href="#" target="blank" class="">
                              <img src="../assets/foo5.png" alt="" class="w-[50px] sm:mx-0 mx-auto grayscale h-[50px]">
                          </a>
                          </div>
                      </div>
                     
                  </div>
              </footer>
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