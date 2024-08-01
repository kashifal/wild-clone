<template>
    <div class="xl:px-6 px-4 py-4 relative gap-3 flex flex-col lg:flex-row lg:items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#5C59B9] from-[9.16%] via-[#112333] via-[55.17%] to-[#7A52A5] to-[100%]">
        <div class="flex flex-col -space-y-1 lg:w-1/3">
            <p class="text-[15px] text-[#3FC02F]">Earn rewards</p>
            <h5 class="text-white">from every single bet you place.</h5>
        </div>
        <h1 class="text-white font-bold text-xl xl:text-3xl lg:w-1/3 lg:text-center">Daily Rakeback</h1>
        <div class="flex lg:items-center lg:w-1/3 flex-wrap sm:flex-row items-end gap-4">
            <div>
                <p data-slot="text" class="text-white mb-2 text-xs uppercase">Hurry Up</p>
                <div class="flex flex-row justify-center space-x-[1px] font-medium md:mr-8">
                  <div class="text-text-default flex flex-col items-center">
                    <div class="text-white bg-white bg-opacity-5 mb-1 flex h-8 w-8 items-center justify-center rounded-lg">00</div>
                    <div class="text-white text-xs uppercase">Days</div>
                  </div>
                  <span class="p-0.5 text-white font-black">:</span>
                  <div class="text-text-default flex flex-col items-center">
                    <div class="text-white bg-white bg-opacity-5 mb-1 flex h-8 w-8 items-center justify-center rounded-lg">20</div>
                    <div class="text-white text-xs uppercase">HRS</div>
                  </div>
                  <span class="p-0.5 text-white font-black">:</span>
                  <div class="text-text-default flex flex-col items-center">
                    <div class="text-white bg-white bg-opacity-5 mb-1 flex h-8 w-8 items-center justify-center rounded-lg">39</div>
                    <div class="text-white bg-white bg-opacity-10 text-xs uppercase">Mins</div>
                  </div>
                  <span class="p-0.5 text-white font-black">:</span>
                  <div class="text-text-default flex flex-col items-center">
                    <div class="text-white bg-white bg-opacity-5 mb-1 flex h-8 w-8 items-center justify-center rounded-lg">44</div>
                    <div class="text-white text-xs uppercase">Sec</div>
                  </div>
                </div>
              </div>
              <button class="font-semibold h-fit text-white text-[14px] bg-[#52C644] transition-all duration-300 hover:bg-opacity-[70%] px-[18px] py-2.5 rounded-[8px] ">Claim Bonus</button>
        </div>
        <div class="absolute left-1/2 bottom-0">
            <img src="../assets/banner.webp" alt="" class="w-[608px] h-[100px]">
        </div>
    </div>
</template>
<script setup></script>