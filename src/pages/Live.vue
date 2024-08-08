<template>
    <Sidebar />
    <div class="bg-[#0A1C2D]  h-fit flex items-center justify-center">
        <div class="md:w-[400px] relative h-[90vh] overflow-hidden w-full mx-auto  rounded-2xl bg-gradient-to-b from-[#1B3A52] to-[#A3AEB6]" style="background: linear-gradient(to bottom, #1B3A52 80%, #A3AEB6 100%);">
          <div class="p-5">
            <div class="flex justify-between items-center gap-3">
                <a href="#" class="">
                    <img src="../assets/logo.png" alt="" class="w-[95px] object-cover h-[32px]">
                </a>
                <div class="p-3 bg-black/20 rounded-lg">
                    <svg focusable="false" class="fill-white" aria-hidden="true" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" color="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.23251L7.23251 8L4 4.76749L0.767492 8L0 7.23251L3.23251 4L0 0.767492L0.767492 0L4 3.23251L7.23251 0L8 0.767492L4.76749 4L8 7.23251Z" fill="currentColor"></path></svg>
                </div>
            </div>
            <div class="pt-16 box pb-20 overflow-y-scroll h-[75vh] xl:h-[80vh]">
                <h1 class="text-3xl text-[#909DA7] font-bold">Hi there! 🐺</h1>
                <h1 class="text-3xl text-white font-bold">How can we help?</h1>
                <div class="flex flex-col gap-1 pt-4 ">
                    <div class="p-3 bg-white cursor-pointer group rounded-xl">
                        <h1 class="text-black text-sm group-hover:text-[#0C49BE] font-medium">How do i register an account?</h1>
                        <p class="text-gray-600 text-sm">It’s as easy as pie, anyone can do it! Head over to the…</p>
                    </div>
                    <div class="p-3 bg-white cursor-pointer group rounded-xl">
                        <h1 class="text-black text-sm group-hover:text-[#0C49BE] font-medium">How do I claim the Welcome Package?</h1>
                        <p class="text-gray-600 text-sm">To claim our Welcome Package, head over to your bonuses page…</p>
                    </div>
                    <div class="p-3 bg-white cursor-pointer group rounded-xl">
                        <div class="relative">
                        <input type="text" placeholder="Search for help" class="placeholder:text-black placeholder:font-medium placeholder:text-xs py-2 px-3 w-full rounded-md bg-gray-100">
                        <div class="absolute right-3 top-3 text-[#0C49BE]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="4.625" stroke="currentColor" stroke-width="1.75"></circle><path d="M13.3813 14.6187C13.723 14.9604 14.277 14.9604 14.6187 14.6187C14.9604 14.277 14.9604 13.723 14.6187 13.3813L13.3813 14.6187ZM10.3813 11.6187L13.3813 14.6187L14.6187 13.3813L11.6187 10.3813L10.3813 11.6187Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3  py-3 ">
                       <div class="flex justify-between gap-3 px-3 items-center">
                        <h1 class="text-xs text-black">How do I claim the Welcome Package?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0C49BE]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z" fill="currentColor"></path></svg>
                       </div>
                       <div class="flex justify-between gap-3 px-3 items-center">
                        <h1 class="text-xs text-black">How do I activate bonuses?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0C49BE]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z" fill="currentColor"></path></svg>
                       </div>
                       <div class="flex justify-between gap-3 px-3 items-center">
                        <h1 class="text-xs text-black">Self Exclusion and Account Closure</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0C49BE]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z" fill="currentColor"></path></svg>
                       </div>
                       <div class="flex justify-between gap-3 px-3 items-center">
                        <h1 class="text-xs text-black">What is the Weekly Cashback?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0C49BE]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z" fill="currentColor"></path></svg>
                       </div>
                    </div>
                    </div>
                    <div class="py-3 px-6 mt-2 flex justify-between items-center gap-2 bg-white cursor-pointer group rounded-xl">
                        
                        <h1 class="text-black text-sm group-hover:text-[#0C49BE] font-medium">Ask a question</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0C49BE]" width="17" height="16" fill="none" viewBox="0 0 17 16" color="linkColor"><path fill="currentColor" fill-rule="evenodd" d="m4.563 14.605 9.356-5.402c1-.577 1-2.02 0-2.598L4.563 1.203a1.5 1.5 0 0 0-2.25 1.3v10.803a1.5 1.5 0 0 0 2.25 1.3M6.51 8.387 2.313 9.512V6.297L6.51 7.42c.494.133.494.834 0 .966" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute w-full md:w-[400px]   bottom-0 ">
           <div class="rounded-b-2xl flex justify-between py-4 px-14   bg-white items-center">
            <div class="flex cursor-pointer flex-col text-xs items-center text-[#0C49BE] font-bold gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" fill="none" viewBox="0 0 24 24"><mask id="a9eaa" fill="#fff"><path fill-rule="evenodd" d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786" clip-rule="evenodd"></path></mask><path fill="currentColor" fill-rule="evenodd" d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786" clip-rule="evenodd"></path><path fill="currentColor" d="m3 7.51-.965-1.4-.01.007zm7.5-5.175L9.538.934l-.003.002zM21 7.51l.974-1.393-.009-.006zm-7.5-5.175.966-1.4-.004-.001zM6.116 14.434l1.268 1.132zm1.2-.068 1.133-1.268zm-1.132 1.268L5.05 16.902zm11.632 0 1.133 1.268zm.068-1.2-1.268 1.132zm-1.2-.068-1.133-1.268zM3.965 8.91l7.5-5.175L9.536.936l-7.5 5.175zm-.265.44c0-.12.063-.299.274-.447L2.026 6.117C.987 6.843.3 8.022.3 9.35zm0 10.35V9.35H.3V19.7zm.8.6a.9.9 0 0 1-.615-.227.5.5 0 0 1-.185-.373H.3c0 2.335 2.022 4 4.2 4zm15 0h-15v3.4h15zm.8-.6a.5.5 0 0 1-.185.373.9.9 0 0 1-.615.227v3.4c2.178 0 4.2-1.665 4.2-4zm0-10.35V19.7h3.4V9.35zm-.274-.447c.211.148.274.326.274.447h3.4c0-1.328-.687-2.507-1.726-3.233zm-7.491-5.169 7.5 5.175 1.93-2.798-7.5-5.175zm-1.073.002a.99.99 0 0 1 1.076 0L14.462.934a4.39 4.39 0 0 0-4.924 0zm-4.078 11.83a.85.85 0 0 1-1.2.068l2.265-2.536a2.55 2.55 0 0 0-3.6.203zm-.068-1.2c.35.313.38.85.068 1.2l-2.536-2.265a2.55 2.55 0 0 0 .203 3.6zM12 16.152c-1.8 0-3.44-.675-4.684-1.786l-2.265 2.536A10.4 10.4 0 0 0 12 19.552zm4.684-1.786A7 7 0 0 1 12 16.152v3.4c2.667 0 5.105-1.004 6.949-2.65zm-.068 1.2a.85.85 0 0 1 .068-1.2l2.265 2.536a2.55 2.55 0 0 0 .203-3.6zm1.2.068a.85.85 0 0 1-1.2-.068l2.536-2.265a2.55 2.55 0 0 0-3.6-.203zM12 17.852a8.7 8.7 0 0 0 5.816-2.218l-2.265-2.536A5.3 5.3 0 0 1 12 14.452zm-5.816-2.218A8.7 8.7 0 0 0 12 17.852v-3.4a5.3 5.3 0 0 1-3.551-1.354z" mask="url(#a9eaa)"></path></svg>
            Home
            </div>
            <div class="flex cursor-pointer flex-col text-xs items-center group text-black hover:text-[#0C49BE] font-bold gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-black group-hover:text-[#0C49BE]" fill="currentcolor" viewBox="0 0 24 24"><mask id="62c3a" fill="#fff"><path fill-rule="evenodd" d="M19 2a3 3 0 0 1 3 3v15.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" clip-rule="evenodd"></path></mask><path fill="currentcolor" d="m19.441 21.868 1.2-1.204zM15.56 18v-1.7h.702l.498.496zM20.3 5A1.3 1.3 0 0 0 19 3.7V.3A4.7 4.7 0 0 1 23.7 5zm0 8.956V5h3.4v8.956zm0 2.544v-2.544h3.4V16.5zm0 4.306V16.5h3.4v4.306zm.341-.142a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267zm-3.882-3.868 3.882 3.868-2.4 2.409-3.882-3.869zM5 16.3h10.559v3.4H5zM3.7 15A1.3 1.3 0 0 0 5 16.3v3.4A4.7 4.7 0 0 1 .3 15zm0-10v10H.3V5zM5 3.7A1.3 1.3 0 0 0 3.7 5H.3A4.7 4.7 0 0 1 5 .3zm14 0H5V.3h14z" class="3f25e7bafill" mask="url(#62c3a)"></path><path fill="currentColor" fill-rule="evenodd" d="M17 7a.85.85 0 0 1 0 1.7H7A.85.85 0 1 1 7 7zm-5 4a.85.85 0 0 1 0 1.7H7A.85.85 0 0 1 7 11z" class="3f25e7bafill" clip-rule="evenodd"></path></svg>
                Messages
            </div>
             <div class="flex cursor-pointer flex-col text-xs items-center text-black hover:text-[#0C49BE] font-bold gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.65" stroke="currentColor" stroke-width="1.7" class="61f09407stroke e77791cacircle"></circle><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M9.664 8.576a2.41 2.41 0 1 1 4.102 2.39l-1.075 1.104c-.326.322-.765.76-.765 1.544v.364" class="61f09407stroke 703dd797negative"></path><circle cx="11.927" cy="16.884" r="0.884" fill="currentColor" class="488ae35efill 703dd797negative"></circle></svg>
                Help
            </div>
        </div>
        </div>
        </div>
   
        
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style>
.box {
  overflow-y: scroll;
}
/* Custom scrollbar styles */
.box::-webkit-scrollbar {
  width: 2px; /* Width of the scrollbar */
}

.box::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.box::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>