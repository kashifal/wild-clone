<template>
    <div class="py-10 overflow-x-hidden">
        <div class="flex justify-between items-center sm:gap-2 sm:flex-row flex-col gap-4">
            <h1 class="text-white font-bold text-xl">Leaderboard</h1>
            <div class="flex p-1 gap-1 bg-[#192C3D] rounded-full">
                <button class="px-3 text-sm bg-white bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Recent Winners</button>
                <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Top Winners</button>
            </div>
        </div>
        <div class="mt-6 overf w-full">
            <table class="md:min-w-full  w-[680px] sm:w-[700px] bg-[#0A1C2D] whitespace-nowrap">
                <thead>
                    <tr>
                        <th class="py-2 px-4 bg-[#0A1C2D] text-white/80 font-normal text-xs uppercase text-left w-1/4">Game</th>
                        <th class="py-2 px-4 bg-[#0A1C2D] text-white/80 font-normal text-xs uppercase text-left w-1/4">Player</th>
                        <th class="py-2 px-4 bg-[#0A1C2D] text-white/80 font-normal text-xs uppercase text-left w-1/4">Bet Amount</th>
                        <th class="py-2 px-4 bg-[#0A1C2D] text-white/80 font-normal text-xs uppercase text-left w-1/4">Multiplier</th>
                        <th class="py-2 px-4 bg-[#0A1C2D] text-white/80 font-normal text-xs uppercase text-left w-1/4">Payout</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/hotcoin.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm"> Hot Coin</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Pl***</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$0.09</p>
                           <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">30.00x</td>
                        <td class="py-2 px-4 ">
                            <div class="flex gap-1.5 items-center">
                               <p class="text-sm font-bold">$0.96</p>
                              <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/booming.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm">Booming Seven</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Bob***</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$0.32</p>
                           <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">2.78x</td>
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 w-full text-right items-center">
                               <p class="text-sm font-bold">$5.99</p>
                              <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/rusty.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm">Rusty & Curly</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Ala***</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$1.60</p>
                           <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">30.00x</td>
                        <td class="py-2 px-4 ">
                            <div class="flex gap-1.5 items-center">
                               <p class="text-sm font-bold">$4.80</p>
                              <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/urban.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm">Urban Tastes</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Ja*</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$0.19</p>
                           <img src="../assets/bitn.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">8.29x</td>
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 w-full justify-right items-center">
                               <p class="text-sm font-bold">$5.99</p>
                              <img src="../assets/bitn.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/Sweet.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm">Sweet Bonanza</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Pao***</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$0.99</p>
                           <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">2.55x</td>
                        <td class="py-2 px-4 ">
                            <div class="flex gap-1.5 items-center">
                               <p class="text-sm font-bold">$2.95</p>
                              <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/booming.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm">Booming Seven</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Bob***</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$5.56</p>
                           <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">2.78x</td>
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 w-full justify-right items-center">
                               <p class="text-sm font-bold">$1.79</p>
                              <img src="../assets/carrd.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    <tr class="border-b-2 bg-[#0F2031] font-normal text-white border-[#0A1C2D]">
                        <td class="py-2 px-4">
                            <div class="flex gap-1.5 items-center">
                            <img src="../assets/win.webp" alt="" class="lg:h-8 rounded-md  h-6 w-6 lg:w-8">
                           <p class="text-ellipis lg:text-[16px] text-sm">Big Win</p>
                        </div>
                        </td>
                        <td class="py-2 px-4 text-sm">Mun***</td>
                        <td class="py-2 px-4 ">
                         <div class="flex gap-1.5 items-center">
                            <p class="text-sm font-bold">$2.49</p>
                           <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                         </div>
                        </td>
                        <td class="py-2 px-4 text-sm text-white/70">60.00x</td>
                        <td class="py-2 px-4 ">
                            <div class="flex gap-1.5 items-center">
                               <p class="text-sm font-bold">$0.98</p>
                              <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                            </div>
                           </td>
                    </tr>
                    
                </tbody>
            </table>
        
        </div>
    </div>
</template>

<script setup></script>

<style>
.overf {
    overflow-x: scroll;
  }
  
  /* Custom scrollbar styles */
  .overf::-webkit-scrollbar {
    height: 4px; /* Width of the scrollbar */
  }
  
  .overf::-webkit-scrollbar-thumb {
    background-color: #6b7280; /* Gray color for the scrollbar thumb */
    border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
  }
  
  .overf::-webkit-scrollbar-track {
    background-color: transparent; /* Transparent track background */
  }
</style>