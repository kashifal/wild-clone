<template>
  <div class="relative group cursor-pointer overflow-hidden">
    <div class="flex cardscroll items-center justify-between gap-4">
      <div class="bg-[#1C2C3C] min-w-1/2 rounded-md p-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-[#B0B5BB]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
                />
              </g>
            </svg>
            <p class="text-[#B0B5BB] text-xs font-medium">Japan,NPB</p>
          </div>
          <p class="text-[#B0B5BB] text-xs font-medium">Inning 9 start</p>
        </div>
        <div class="flex justify-center pt-2 px-3 items-center gap-5">
          <div class="flex items-center gap-2">
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Hokkaido Nippon Ham..
              </p>
            </div>
            <p class="text-[#3FC02F] font-bold text-xl">1</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#3FC02F] font-bold text-xl">3</p>
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag2.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Saitama Seibu Lions
              </p>
            </div>
          </div>
        </div>
        <div class="pt-3 flex gap-[2px]">
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-l-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-r-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-[#1C2C3C] min-w-1/2 rounded-md p-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-[#B0B5BB]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
                />
              </g>
            </svg>
            <p class="text-[#B0B5BB] text-xs font-medium">Japan,NPB</p>
          </div>
          <p class="text-[#B0B5BB] text-xs font-medium">Inning 9 start</p>
        </div>
        <div class="flex justify-center pt-2 px-3 items-center gap-5">
          <div class="flex items-center gap-2">
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Hokkaido Nippon Ham..
              </p>
            </div>
            <p class="text-[#3FC02F] font-bold text-xl">1</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#3FC02F] font-bold text-xl">3</p>
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag2.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Saitama Seibu Lions
              </p>
            </div>
          </div>
        </div>
        <div class="pt-3 flex gap-[2px]">
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-l-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-r-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-[#1C2C3C] min-w-1/2 rounded-md p-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-[#B0B5BB]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
                />
              </g>
            </svg>
            <p class="text-[#B0B5BB] text-xs font-medium">Japan,NPB</p>
          </div>
          <p class="text-[#B0B5BB] text-xs font-medium">Inning 9 start</p>
        </div>
        <div class="flex justify-center pt-2 px-3 items-center gap-5">
          <div class="flex items-center gap-2">
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Hokkaido Nippon Ham..
              </p>
            </div>
            <p class="text-[#3FC02F] font-bold text-xl">1</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#3FC02F] font-bold text-xl">3</p>
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag2.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Saitama Seibu Lions
              </p>
            </div>
          </div>
        </div>
        <div class="pt-3 flex gap-[2px]">
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-l-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-r-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-[#1C2C3C] min-w-1/2 rounded-md p-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-[#B0B5BB]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
                />
              </g>
            </svg>
            <p class="text-[#B0B5BB] text-xs font-medium">Japan,NPB</p>
          </div>
          <p class="text-[#B0B5BB] text-xs font-medium">Inning 9 start</p>
        </div>
        <div class="flex justify-center pt-2 px-3 items-center gap-5">
          <div class="flex items-center gap-2">
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Hokkaido Nippon Ham..
              </p>
            </div>
            <p class="text-[#3FC02F] font-bold text-xl">1</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#3FC02F] font-bold text-xl">3</p>
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag2.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Saitama Seibu Lions
              </p>
            </div>
          </div>
        </div>
        <div class="pt-3 flex gap-[2px]">
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-l-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-r-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-[#1C2C3C] min-w-1/2 rounded-md p-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-[#B0B5BB]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M12 2a9.96 9.96 0 0 1 6.5 2.4a10 10 0 0 0-2.096 2.488l-.044-.02a1 1 0 1 0-.846 1.812l.043.02a10 10 0 0 0-.508 2.3H15a1 1 0 1 0 0 2h.05a10 10 0 0 0 .507 2.3l-.043.02a1 1 0 1 0 .846 1.812l.044-.02c.56.94 1.27 1.78 2.096 2.488A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4a10 10 0 0 0 2.096-2.488l.044.02a1 1 0 1 0 .846-1.812l-.043-.02A10 10 0 0 0 8.95 13H9a1 1 0 1 0 0-2h-.05a10 10 0 0 0-.507-2.3l.043-.02a1 1 0 0 0-.846-1.813l-.044.021c-.56-.94-1.27-1.78-2.096-2.488A9.96 9.96 0 0 1 12 2M4.115 5.849A8 8 0 0 1 5.773 7.74a1 1 0 0 0 .845 1.81q.226.7.32 1.452a1 1 0 0 0 0 1.996q-.094.751-.32 1.453a1 1 0 0 0-.845 1.809a8 8 0 0 1-1.658 1.891A9.96 9.96 0 0 1 2 12c0-2.32.79-4.455 2.115-6.151m15.77 0A9.96 9.96 0 0 1 22 12c0 2.32-.79 4.455-2.115 6.151a8 8 0 0 1-1.658-1.891a1 1 0 0 0-.845-1.81a8 8 0 0 1-.32-1.452a1 1 0 0 0 0-1.996q.094-.751.32-1.453a1 1 0 0 0 .845-1.809a8 8 0 0 1 1.658-1.891"
                />
              </g>
            </svg>
            <p class="text-[#B0B5BB] text-xs font-medium">Japan,NPB</p>
          </div>
          <p class="text-[#B0B5BB] text-xs font-medium">Inning 9 start</p>
        </div>
        <div class="flex justify-center pt-2 px-3 items-center gap-5">
          <div class="flex items-center gap-2">
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Hokkaido Nippon Ham..
              </p>
            </div>
            <p class="text-[#3FC02F] font-bold text-xl">1</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-[#3FC02F] font-bold text-xl">3</p>
            <div class="flex flex-col items-center">
              <img
                src="../assets/teamflag2.png"
                alt=""
                class="w-[58px] h-[58px] object-cover"
              />
              <p class="truncate text-white text-xs font-bold">
                Saitama Seibu Lions
              </p>
            </div>
          </div>
        </div>
        <div class="pt-3 flex gap-[2px]">
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-l-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
          <button
            class="flex w-1/2 px-3 justify-between gap-2 hover:bg-opacity-50 transition-all duration-500 bg-[#273E50] py-1.5 rounded-r-md"
          >
            <p class="text-[#B4BCC2] text-sm">1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-[#526573]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-5 absolute top-[50%] left-2 cursor-not-allowed group-hover:translate-x-0 transition-all duration-1000 hidden -translate-y-[100%] h-5 bg-[#223849] group-hover:flex items-center justify-center rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-[#728490] rotate-180 w-4 h-4"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <rect width="24" height="24" fill="none" />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m10 17l5-5m0 0l-5-5"
        />
      </svg>
    </div>
    <div
      class="w-5 absolute top-[50%] right-[30px] cursor-pointer -translate-y-[100%] h-5 bg-[#2B4658] group-hover:flex items-center group-hover:translate-x-0 transition-all duration-1000 hidden justify-center rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-[#728490] w-4 h-4"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <rect width="24" height="24" fill="none" />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m10 17l5-5m0 0l-5-5"
        />
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style>
.cardscroll {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.cardscroll::-webkit-scrollbar {
  height: 2px; /* Width of the scrollbar */
}

.cardscroll::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.cardscroll::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>
