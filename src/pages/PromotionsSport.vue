<template>
    <SportsSidebar />
    
    <div class="xl:pl-64 bg-[#091B29]">
    
        <div class="sm:px-4 lg:flex justify-between gap-5 py-6 px-4">
    
            <div class="xl:w-[69%] w-[100%]">
              <div class="flex w-full flex-col gap-6">
                <div class="relative w-full">
                  <img src="../assets/profit.avif" alt="" class="h-40 rounded object-cover w-full">
                  <div class="absolute top-[50%] left-10 -translate-y-[50%]">
                    <button class="font-semibold text-white text-[14px] bg-[#0C49BE] transition-all duration-300 hover:bg-opacity-[70%] px-8 sm:px-16 py-2.5 rounded-md ">Sign Up</button>
                  </div>
                  <div class="absolute bottom-2 left-3  ">
                    <a href="#" class="text-xs underline text-gray-400 font-medium hover:text-white">Terms & Conditions</a>
                  </div>
                </div>
                <div class="relative w-full">
                  <img src="../assets/profit.avif" alt="" class="h-40 rounded object-cover w-full">
                  <div class="absolute top-[50%] left-10 -translate-y-[50%]">
                    <button class="font-semibold text-white text-[14px] bg-[#0C49BE] transition-all duration-300 hover:bg-opacity-[70%] px-8 sm:px-16 py-2.5 rounded-md ">Sign Up</button>
                  </div>
                  <div class="absolute bottom-2 left-3  ">
                    <a href="#" class="text-xs underline text-gray-400 font-medium hover:text-white">Terms & Conditions</a>
                  </div>
                </div>
                <div class="relative w-full">
                  <img src="../assets/profit.avif" alt="" class="h-40 rounded object-cover w-full">
                  <div class="absolute top-[50%] left-10 -translate-y-[50%]">
                    <button class="font-semibold text-white text-[14px] bg-[#0C49BE] transition-all duration-300 hover:bg-opacity-[70%] px-8 sm:px-16 py-2.5 rounded-md ">Sign Up</button>
                  </div>
                  <div class="absolute bottom-2 left-3  ">
                    <a href="#" class="text-xs underline text-gray-400 font-medium hover:text-white">Terms & Conditions</a>
                  </div>
                </div>
              </div>

              <div class="py-8">
                <h1 class="text-2xl font-bold text-white">Comboboosts</h1>
              <div class="grid md:grid-cols-2 pt-5 gap-5">
                <div class="relative rounded-md h-[250px] sm:h-[300px] bg-[url('./assets/logossi.avif')] bg-blend-multiply bg-blue-900 bg-cover  py-4 w-1/1">
                <h1 class="sm:text-2xl text-white font-bold  px-4">Olympic Games Boost</h1>
                <div class="mt-8 pl-4 pr-8 py-4 bg-white w-fit relative bg-opacity-20">
                  <h1 class="text-white sm:text-xl font-semibold">Coombost</h1>
                  <h1 class="sm:text-5xl text-3xl font-bold text-white">up to 50%</h1>
               
                </div>
                <div class="absolute bottom-3 left-3">
                  <a href="#" class="text-sm  text-gray-400 font-medium hover:text-white">Bonus Terms and Conditions</a>
                </div>
                </div>
                <div class="relative rounded-md h-[250px] sm:h-[300px] bg-[url('./assets/logossi.avif')] bg-blend-multiply bg-blue-900 bg-cover  py-4 w-1/1">
                  <h1 class="sm:text-2xl text-white font-bold  px-4">Olympic Games Boost</h1>
                  <div class="mt-8 pl-4 pr-8 py-4 bg-white w-fit relative bg-opacity-20">
                    <h1 class="text-white sm:text-xl font-semibold">Coombost</h1>
                    <h1 class="sm:text-5xl text-3xl font-bold text-white">up to 50%</h1>
                 
                  </div>
                  <div class="absolute bottom-3 left-3">
                    <a href="#" class="text-sm  text-gray-400 font-medium hover:text-white">Bonus Terms and Conditions</a>
                  </div>
                  </div>
                  <div class="relative rounded-md h-[250px] sm:h-[300px] bg-[url('./assets/logossi.avif')] bg-blend-multiply bg-blue-900 bg-cover  py-4 w-1/1">
                    <h1 class="sm:text-2xl text-white font-bold  px-4">Olympic Games Boost</h1>
                    <div class="mt-8 pl-4 pr-8 py-4 bg-white w-fit relative bg-opacity-20">
                      <h1 class="text-white sm:text-xl font-semibold">Coombost</h1>
                      <h1 class="sm:text-5xl text-3xl font-bold text-white">up to 50%</h1>
                   
                    </div>
                    <div class="absolute bottom-3 left-3">
                      <a href="#" class="text-sm  text-gray-400 font-medium hover:text-white">Bonus Terms and Conditions</a>
                    </div>
                    </div>
                    <div class="relative rounded-md h-[250px] sm:h-[300px] bg-[url('./assets/logossi.avif')] bg-blend-multiply bg-blue-900 bg-cover  py-4 w-1/1">
                      <h1 class="sm:text-2xl text-white font-bold  px-4">Olympic Games Boost</h1>
                      <div class="mt-8 pl-4 pr-8 py-4 bg-white w-fit relative bg-opacity-20">
                        <h1 class="text-white sm:text-xl font-semibold">Coombost</h1>
                        <h1 class="sm:text-5xl text-3xl font-bold text-white">up to 50%</h1>
                     
                      </div>
                      <div class="absolute bottom-3 left-3">
                        <a href="#" class="text-sm  text-gray-400 font-medium hover:text-white">Bonus Terms and Conditions</a>
                      </div>
                      </div>
              </div>
            </div>
                
               <Footersport />
            </div>
    
            <div class="w-[240px]">
    
              
    
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