<template>
  <div>

    <div class="w-16 z-40 hidden sidebar h-screen fixed left-0 top-16 bg-[#192C3D]">
      <div class="flex flex-col items-center  w-16 py-4 gap-1">
        <div class="element group relative cursor-pointer w-fit p-2.5 rounded-[8px]">
          <div class="relative h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="animate-spin  inset-0">
              <path fill="#FAF321" d="M12 22.953c6.14 0 11.118-4.978 11.118-11.119C23.118 5.694 18.14.716 12 .716S.88 5.694.88 11.834 5.86 22.954 12 22.954"></path>
              <path fill="#EFB73A" d="M12.375 2.703v-.131c-.131 0-.244-.019-.375-.019s-.244 0-.375.019v.131c.131 0 .244-.019.375-.019s.262 0 .375.02"></path>
              <path fill="#254460" d="M12 22.11c5.674 0 10.275-4.6 10.275-10.276C22.275 6.16 17.675 1.56 12 1.56S1.725 6.16 1.725 11.834 6.325 22.11 12 22.11"></path>
              <path fill="#C84363" d="M5.287 5.628a9 9 0 0 0-2.4 5.813h8.231z"></path>
              <path fill="#F44D64" d="M3.806 11.46h7.293L5.943 6.302a8.17 8.17 0 0 0-2.137 5.156"></path>
              <path fill="#00B556" d="M2.868 12.21a9.2 9.2 0 0 0 2.363 5.774l5.83-5.775z"></path>
              <path fill="#42EA99" d="m5.906 17.328 5.175-5.119H3.806a8.22 8.22 0 0 0 2.1 5.12"></path>
              <path fill="#C84363" d="M5.774 18.51a9.15 9.15 0 0 0 5.85 2.456v-8.25z"></path>
              <path fill="#F44D64" d="M11.624 20.028v-7.312l-5.193 5.137a8.24 8.24 0 0 0 5.193 2.175"></path>
              <path fill="#F76C0D" d="M12.375 20.966a9.15 9.15 0 0 0 5.813-2.4l-5.813-5.813z"></path>
              <path fill="#F9A30B" d="m17.531 17.89-5.156-5.156v7.294a8.17 8.17 0 0 0 5.156-2.137"></path>
              <path fill="#C84363" d="m12.918 12.21 5.813 5.812a9 9 0 0 0 2.4-5.813z"></path>
              <path fill="#F44D64" d="M18.074 17.366a8.17 8.17 0 0 0 2.138-5.157h-7.294z"></path>
              <path fill="#C232E5" d="M21.13 11.46a9.13 9.13 0 0 0-2.38-5.794l-5.85 5.793z"></path>
              <path fill="#F748D7" d="M12.9 11.46h7.312a8.24 8.24 0 0 0-2.119-5.138z"></path>
              <path fill="#0045AA" d="M18.225 5.122a9.14 9.14 0 0 0-5.831-2.438v8.213z"></path>
              <path fill="#1C6FD1" d="M12.375 3.622v7.275l5.175-5.119a8.2 8.2 0 0 0-5.175-2.156"></path>
              <path fill="#603AB7" d="M11.625 2.703a9.15 9.15 0 0 0-5.812 2.4l5.812 5.813z"></path>
              <path fill="#7E42D3" d="m6.469 5.76 5.156 5.156V3.622a8.25 8.25 0 0 0-5.156 2.137"></path>
              <path fill="#254460" d="M12 16.4a4.566 4.566 0 1 0 0-9.131 4.566 4.566 0 0 0 0 9.13"></path>
              <path fill="#FAF321" d="M11.999 15.199a3.364 3.364 0 1 0 0-6.729 3.364 3.364 0 0 0 0 6.728"></path>
              <path fill="#C84363" d="M12.092 13.288a.2.2 0 0 0-.186 0l-1.192.632a.2.2 0 0 1-.291-.21l.228-1.334a.2.2 0 0 0-.059-.177l-.959-.925a.2.2 0 0 1 .11-.342l1.33-.192a.2.2 0 0 0 .15-.11l.596-1.21a.2.2 0 0 1 .359 0l.596 1.21a.2.2 0 0 0 .151.11l1.352.193a.2.2 0 0 1 .11.342l-.958.924a.2.2 0 0 0-.059.178l.229 1.335a.2.2 0 0 1-.29.211z"></path></svg
            ><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none" class="absolute -top-0.5 left-0 right-0 mx-auto">
              <path fill="#1D3140" fill-opacity="0.5" d="M.094 2.972q-.028.76.337 1.462l2.55 3.188L5.625 4.49c.263-.47.375-.975.356-1.482-.937-.28-1.95-.45-2.98-.45-1.013 0-1.988.15-2.907.413"></path>
              <path fill="#F9A30B" d="M.9 3.59a2.4 2.4 0 0 1 .075-2.38A2.4 2.4 0 0 1 3.038.046c.862 0 1.63.45 2.08 1.181s.45 1.631.038 2.4L3 7.584z"></path>
              <path fill="#FAF321" d="M3.019 5.878 1.612 3.216C1.05 2.146 1.82.853 3.037.853c1.22 0 2.007 1.313 1.425 2.381z"></path>
              <path fill="#1D3140" d="M3.038 3.253a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65"></path>
            </svg>
          </div>
          <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-28 text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
           Fortnite Wheel
           </div>
        </div>
        <div class="custom-gradient group relative cursor-pointer w-fit p-2.5 rounded-[8px]">
          <div class="">
            <img src="../assets/announce.svg" alt="" class="w-[20px] h-[20px]">
          </div>
          <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-24 text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
            Refer Friend
           </div>
        </div>
        <div class="third relative group cursor-pointer w-fit p-2.5 rounded-[8px]">
          <div class="">
            <img src="../assets/lottery.svg" alt="" class="w-[20px] h-[20px]">
          </div>
          <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[98px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
           Wild Lottery
          </div>
        </div>
        <div class="fourth group relative cursor-pointer w-fit p-2.5 rounded-[8px]">
          <div class="">
            <img src="../assets/bonus.svg" alt="" class="w-[20px] h-[20px]">
          </div>
          <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-24 text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
            Bonus Shop
           </div>
        </div>
      </div>
      <div class="bg-white bg-opacity-[3%] pb-16 w-16  flex flex-col gap-1 ">
        <div class="flex flex-col gap-2 border-b px-2.5 py-1 border-gray-600  items-center">
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/playgames.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[82px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                All Games
              </div>
            </div>
          </div>
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/slot.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[54px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Slots
              </div>
            </div>
          </div>
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/live casino.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[90px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Live Casino
              </div>
            </div>
          </div>
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/tablegam.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[98px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Table Games
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 border-b px-2.5 py-1 border-gray-600  items-center">
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/promo.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[92px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Promotions
              </div>
            </div>
          </div>
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/tournament.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[100px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Tournaments
              </div>
            </div>
          </div>
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/Vipclub.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[75px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                VIP Club
              </div>
            </div>
          </div>
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/challenges.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-[88px] text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Challenges
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-2.5 py-1 border-gray-600  items-center">
          <div class="hover:bg-white relative group hover:bg-opacity-[6%] cursor-pointer w-fit p-2.5 rounded-[8px]">
            <div class="">
              <img src="../assets/live.svg" alt="" class="w-[20px] h-[20px]">
              <div class="bg-[#263747] z-40 scale-0 group-hover:scale-100 transition-all duration-300 absolute top-1 -right-8 text-white text-xs font-medium whitespace-nowrap rounded-md p-2.5 shadow ">
                Live match
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="z-40 h-screen w-64 fixed left-0 top-16 bg-[#192C3D]">
      <div class="grid grid-cols-2 gap-1  p-3">
        <div class="min-h-10 rounded-md element cursor-pointer w-full flex py-1 px-1.5 gap-1.5 items-center "
        >
        <div class="relative h-5 w-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="animate-spin  inset-0">
            <path fill="#FAF321" d="M12 22.953c6.14 0 11.118-4.978 11.118-11.119C23.118 5.694 18.14.716 12 .716S.88 5.694.88 11.834 5.86 22.954 12 22.954"></path>
            <path fill="#EFB73A" d="M12.375 2.703v-.131c-.131 0-.244-.019-.375-.019s-.244 0-.375.019v.131c.131 0 .244-.019.375-.019s.262 0 .375.02"></path>
            <path fill="#254460" d="M12 22.11c5.674 0 10.275-4.6 10.275-10.276C22.275 6.16 17.675 1.56 12 1.56S1.725 6.16 1.725 11.834 6.325 22.11 12 22.11"></path>
            <path fill="#C84363" d="M5.287 5.628a9 9 0 0 0-2.4 5.813h8.231z"></path>
            <path fill="#F44D64" d="M3.806 11.46h7.293L5.943 6.302a8.17 8.17 0 0 0-2.137 5.156"></path>
            <path fill="#00B556" d="M2.868 12.21a9.2 9.2 0 0 0 2.363 5.774l5.83-5.775z"></path>
            <path fill="#42EA99" d="m5.906 17.328 5.175-5.119H3.806a8.22 8.22 0 0 0 2.1 5.12"></path>
            <path fill="#C84363" d="M5.774 18.51a9.15 9.15 0 0 0 5.85 2.456v-8.25z"></path>
            <path fill="#F44D64" d="M11.624 20.028v-7.312l-5.193 5.137a8.24 8.24 0 0 0 5.193 2.175"></path>
            <path fill="#F76C0D" d="M12.375 20.966a9.15 9.15 0 0 0 5.813-2.4l-5.813-5.813z"></path>
            <path fill="#F9A30B" d="m17.531 17.89-5.156-5.156v7.294a8.17 8.17 0 0 0 5.156-2.137"></path>
            <path fill="#C84363" d="m12.918 12.21 5.813 5.812a9 9 0 0 0 2.4-5.813z"></path>
            <path fill="#F44D64" d="M18.074 17.366a8.17 8.17 0 0 0 2.138-5.157h-7.294z"></path>
            <path fill="#C232E5" d="M21.13 11.46a9.13 9.13 0 0 0-2.38-5.794l-5.85 5.793z"></path>
            <path fill="#F748D7" d="M12.9 11.46h7.312a8.24 8.24 0 0 0-2.119-5.138z"></path>
            <path fill="#0045AA" d="M18.225 5.122a9.14 9.14 0 0 0-5.831-2.438v8.213z"></path>
            <path fill="#1C6FD1" d="M12.375 3.622v7.275l5.175-5.119a8.2 8.2 0 0 0-5.175-2.156"></path>
            <path fill="#603AB7" d="M11.625 2.703a9.15 9.15 0 0 0-5.812 2.4l5.812 5.813z"></path>
            <path fill="#7E42D3" d="m6.469 5.76 5.156 5.156V3.622a8.25 8.25 0 0 0-5.156 2.137"></path>
            <path fill="#254460" d="M12 16.4a4.566 4.566 0 1 0 0-9.131 4.566 4.566 0 0 0 0 9.13"></path>
            <path fill="#FAF321" d="M11.999 15.199a3.364 3.364 0 1 0 0-6.729 3.364 3.364 0 0 0 0 6.728"></path>
            <path fill="#C84363" d="M12.092 13.288a.2.2 0 0 0-.186 0l-1.192.632a.2.2 0 0 1-.291-.21l.228-1.334a.2.2 0 0 0-.059-.177l-.959-.925a.2.2 0 0 1 .11-.342l1.33-.192a.2.2 0 0 0 .15-.11l.596-1.21a.2.2 0 0 1 .359 0l.596 1.21a.2.2 0 0 0 .151.11l1.352.193a.2.2 0 0 1 .11.342l-.958.924a.2.2 0 0 0-.059.178l.229 1.335a.2.2 0 0 1-.29.211z"></path></svg
          ><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none" class="absolute -top-0.5 left-0 right-0 mx-auto">
            <path fill="#1D3140" fill-opacity="0.5" d="M.094 2.972q-.028.76.337 1.462l2.55 3.188L5.625 4.49c.263-.47.375-.975.356-1.482-.937-.28-1.95-.45-2.98-.45-1.013 0-1.988.15-2.907.413"></path>
            <path fill="#F9A30B" d="M.9 3.59a2.4 2.4 0 0 1 .075-2.38A2.4 2.4 0 0 1 3.038.046c.862 0 1.63.45 2.08 1.181s.45 1.631.038 2.4L3 7.584z"></path>
            <path fill="#FAF321" d="M3.019 5.878 1.612 3.216C1.05 2.146 1.82.853 3.037.853c1.22 0 2.007 1.313 1.425 2.381z"></path>
            <path fill="#1D3140" d="M3.038 3.253a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65"></path>
          </svg>
        </div>
        <h4 class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"><span class="text-[#E98298]">Wheel</span> <p class="whitespace-nowrap">of Fortune</p></h4>
      </div>
      <div class="min-h-10 custom-gradient transition-all duration-300 py-1 px-1.5 cursor-pointer rounded-md w-full flex p-1 gap-1.5 items-center"
       >
      <div class="">
        <img src="../assets/announce.svg" alt="" class="w-[20px] h-[20px]">
      </div>
       <h4 class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"><span class="text-[#3fc02f]">Refer</span> <p class="whitespace-nowrap">a Friend</p></h4>
     </div>
     <div class="min-h-10 rounded-md third cursor-pointer w-full flex py-1 px-1.5 gap-1.5 items-center "
     >
     <div class="">
      <img src="../assets/lottery.svg" alt="" class="w-[20px] h-[20px]">
     </div>
     <h4 class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"><span class="text-[#7470f4]">Wild</span> <p class="whitespace-nowrap">Lottery</p></h4>
   </div>
   <div class="min-h-10 fourth transition-all duration-300 py-1 px-1.5 cursor-pointer rounded-md w-full flex p-1 gap-1.5 items-center"
    >
   <div class="">
     <img src="../assets/bonus.svg" alt="" class="w-[20px] h-[20px]">
   </div>
    <h4 class="uppercase flex md:flex-col flex-row leading-none text-xs text-white md:space-x-0 space-x-1 text-left"><span class="text-[#e0ba7d]">Bonus</span> <p class="whitespace-nowrap">Shop</p></h4>
  </div>
      </div>
      <div class="bg-white bg-opacity-[3%] h-screen w-full px-3 py-4 flex flex-col gap-1">
        <div class="bg-white bg-opacity-5 p-1 rounded-[8px] flex gap-[2px] flex-col">
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/playgames.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">All Games</h3>
          </div>
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/slot.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Slots</h3>
          </div>
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/live casino.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Live Casino</h3>
          </div>
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/tablegam.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Table Games</h3>
          </div>
        </div>
        <div class="bg-white bg-opacity-5 p-1 rounded-[8px] flex gap-[2px] flex-col">
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/promo.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Promotions</h3>
          </div>
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/tournament.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Tournaments</h3>
          </div>
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/Vipclub.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">VIP Club</h3>
          </div>
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/challenges.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Challenges</h3>
          </div>
        </div>
        <div class="bg-white bg-opacity-5 p-1 rounded-[8px] flex gap-[2px] flex-col">
          <div class="rounded-md hover:bg-white group cursor-pointer hover:bg-opacity-[6%] py-2.5 px-3 text-white flex items-center gap-2">
            <img src="../assets/live.svg" alt="" class="w-5 h-5">
            <h3 class="text-sm text-white/80 group-hover:text-white">Live Support</h3>
          </div>
          
        </div>
      </div>
    </div>
    <div class="pl-64 z-20">
      <div class="bg-[url('./assets/herobg.webp')] z-10 h-fit relative w-full bg-cover"
       >
       <div class="absolute inset-0 w-1/6 -left-10  bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-2xl z-20"></div>
       <div class="absolute inset-0 w-1/6 -left-60  bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-2xl z-20"></div>
        <div class="max-w-9xl mx-auto z-40 relative py-24 px-[34px]">
          <h2 class="text-white text-3xl font-semibold">Welcome Offer</h2>
          <h1 class="text-5xl text-[#FACC15] font-extrabold pt-1">120% up to $5,000</h1>
          <h2 class="text-white text-2xl pt-1 font-bold">and 75 Free Spins</h2>
          <button class="text-white py-[11px] my-6 px-7  flex flex-col -space-x-2 text-center items-center justify-center rounded-xl bg-[#3FC02F] hover:bg-[#4FC541]">
            <h5 class="text-lg font-semibold">Sign Up Now</h5>
            <em class="text-xs font-medium">Only Takes 30 seconds</em>
          </button>
          <div class="flex items-center gap-3 ">
            <p class="font-bold text-white text-xs">Great</p>
            <div class="flex space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 20"><path fill="#219653" d="M0 0h24v24H0z"></path><path fill="#fff" d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 20"><path fill="#219653" d="M0 0h24v24H0z"></path><path fill="#fff" d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 20"><path fill="#219653" d="M0 0h24v24H0z"></path><path fill="#fff" d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 20"><path fill="#219653" d="M0 0h24v24H0z"></path><path fill="#fff" d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 20"><path fill="url(#half-star_svg__a)" d="M0 0h24v24H0z"></path><path fill="#fff" d="m10 13.676 3.042-.814L14.312 17zm7-5.349h-5.354L10 3 8.354 8.327H3l4.333 3.302-1.646 5.327 4.334-3.302 2.666-2.025z"></path><defs><linearGradient id="half-star_svg__a" x1="0" x2="20" y1="10" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#219653"></stop><stop offset="0.5" stop-color="#219653"></stop><stop offset="0.5" stop-color="#219653" stop-opacity="0"></stop><stop offset="0.5" stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#219653" stop-opacity="0"></stop><stop offset="1" stop-color="#D9D9D9"></stop></linearGradient></defs> </svg>
          </div>
          <p class="font-bold text-white text-xs">180+
          <span class="font-normal"> reviews on</span> 
          <div class="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none"><path fill="#219653" d="m7.667 10.48 3.042-.772 1.27 3.917zm7-5.063H9.313L7.667.375 6.021 5.417H.667L5 8.542l-1.646 5.041 4.334-3.125 2.667-1.916z"></path></svg>
            <span class="leading-0 text-xs font-bold text-white">Trustpilot</span>
        </div>
          </p>
          </div>
        </div>
      </div>
      <div class=""></div>
    <Footer />
  </div>
  </div>
</template>

<script setup>

import Footer from '../components/Footer.vue';
</script>

<style>
  .custom-gradient {
    background: linear-gradient(85deg, #3FC02F0D -0.06%, #3FC02F33 102.57%);
  }
  .custom-gradient:hover {
    background: linear-gradient(83deg, #3FC02F33 -0.06%, #3FC02F33 102.57%);
  }

  .element {
    background: linear-gradient(263deg, #F75A7D 0.06%, #F75A7D33 0.07%, #F75A7D0D 100.06%);
}

.element:hover {
    background: linear-gradient(263.32deg, rgb(247, 90, 125) 0.06%, rgba(247, 90, 125, 0.2) 0.07%, rgba(247, 90, 125, 0.2) 100.06%);
}

.third {
  background: linear-gradient(263.32deg, rgba(95, 73, 252, 0.4) 0.06%, rgba(83, 73, 252, 0.1) 100.06%);
}

.third:hover {
  background: linear-gradient(263.32deg, rgba(95, 73, 252, 0.4) 0.06%, rgba(83, 73, 252, 0.4) 100.06%);
}

.fourth {
  background: linear-gradient(263.66deg, rgba(247, 184, 89, 0.49) -2.37%, rgba(247, 184, 89, 0.03) 102.49%);
}

.fourth:hover {
  background: linear-gradient(263.66deg, rgba(247, 184, 89, 0.49) -2.37%, rgba(247, 184, 89, 0.3) 102.49%);
}


.sidebar {
 overflow-y: scroll;
}

/* Custom scrollbar styles */
.sidebar::-webkit-scrollbar {
  width: 2px; /* Width of the scrollbar */
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #6B7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.sidebar::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}

.bit{}

</style>