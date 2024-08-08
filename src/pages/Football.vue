<template>
    <SportsSidebar />
    
    <div class="xl:pl-64 bg-[#091B29]">
    
        <div class="sm:px-4 flex justify-between gap-5 py-6 px-4">
    
            <div class="xl:w-[74.7%] w-full">
                
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
                    <a href="#" class="border-l-2  border-[#0C49BE] pl-4 pr-32 py-2 bg-[#2B4658] text-white font-bold text-sm">Football</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
                    <a href="#" class="hover:border-l-2  hover:border-[#0C49BE] pl-4 pr-32 py-2 hover:bg-[#2B4658] text-white font-bold text-sm">Tennis</a>
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
                   <CardsBet />
                     
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
                      <CardsBet />
                      <div class="">
                       
                        <CardsBet />
                        
                      </div>
                      <div class="">
                       
                        <CardsBet />
                        
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
                    <button class="bg-[#1C2C3C] mt-4 rounded-md justify-center py-3 w-full text-sm  text-center hover:opacity-90 font-bold text-white flex items-center gap-1">
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
  import CardsBet from '../components/CardsBet.vue'
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