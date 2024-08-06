<template>
    <div>
        <Sidebar />
        <Margin>
            <div class="sm:px-4 overflow-x-hidden px-4">
                <div class="py-5">
                    <div class="flex items-center gap-2">
                        <img src="../assets/profile.svg" alt="" class="w-6 h-6">
                        <h1 class="text-white text-2xl font-semibold">Account</h1>
                    </div>
                    <div class="flex buttonsscrl p-1 whitespace-nowrap w-full sm:w-fit mt-4 gap-1 bg-[#192C3D] rounded-full">
                        <button class="px-3 text-sm bg-white bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">General</button>
                        <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Security</button>
                        <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Active Session</button>
                        <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Verification</button>
                        <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Responsible Gambling</button>
                    
                    </div>
                    <div class="grid md:grid-cols-12 gap-5">
                    <div class="md:col-span-7 ">
                    <div class="mt-4 p-5 bg-[#263747] rounded-2xl">
                        <div class=" bg-gradient-to-r from-[#6454F5] to-[#5547ED] p-4 rounded-2xl flex items-center gap-4">
                            <div class="">
                                <div role="button" class="pointer-events-none relative flex items-center">
                                    <div class="relative inline-block" style="height: 58px; width: 58px;">
                                      <svg height="58" width="58" class="rounded-full">
                                        <circle fill="transparent" class="text-[#6454F5] stroke-current" stroke-width="3" r="23" cx="29" cy="29" style="stroke-dashoffset: 144.513;"></circle>
                                        <defs>
                                          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="40%" stop-color="#6454F5"></stop>
                                            <stop offset="100%" stop-color="#6454F5"></stop>
                                          </linearGradient>
                                        </defs>
                                       
                                      </svg>
                                      <div class="text-text-default absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform-gpu items-center justify-center text-xs font-semibold leading-4">
                                        <div class="relative h-[2.375rem] w-[2.375rem] overflow-visible focus:outline-none focus-visible:outline-none">
                                          <div class="absolute bg-[#0C49BE] -bottom-1 -right-1 flex h-4 w-4 items-center justify-center overflow-hidden rounded-full text-[8px] text-white">1</div>
                                          <div class="bg-base-primary flex h-[2.375rem] w-[2.375rem] items-center justify-center overflow-hidden rounded-full">
                                            <img alt="User Avatar" src="../assets/profo.webp" loading="lazy" width="38" height="38" decoding="async" data-nimg="1"  style="color: transparent;" />
                                        </div>
                                        </div>
                                      </div>
                                    </div>
                                   
                                  </div>
                                  
                            </div>
                            <div class="">
                                <h1 class="text-white font-semibold text-lg">sanwalsulehri077</h1>
                                <div class="flex items-center gap-2">
                                    <h4 class="text-white font-semibold text-sm">sanwalsulehri077@gmail.com</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-4 text-[#D3A080] w-4"><path fill="#F7B859" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>
                                </div>
                            </div>
                        </div>
                        <form action="post">
                            <h1 class="text-2xl text-white font-semibold mt-4">Personal Info</h1>
                            <div class="pt-4 flex flex-col gap-4">
                            <div class="">
                                <label for="fname" class="text-white text-sm font-semibold">First name <span class="text-[#E06059]">*</span></label>
                                <input type="name" name="fname" id="fname" placeholder="Enter your first name" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="lname" class="text-white text-sm font-semibold">Last name <span class="text-[#E06059]">*</span></label>
                                <input type="name" name="lname" id="lname" placeholder="Enter your last name" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="email" class="text-[#9DA4A2] text-sm font-semibold">Email</label>
                                <input type="email" name="email" id="email" disabled placeholder="sanwalsulehri077@gmail.com" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#9DA4A2] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="uname" class="text-white text-sm font-semibold">Username</label>
                                <input type="name" name="uname" id="uname" placeholder="Enter your username" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="address" class="text-white text-sm font-semibold">Address</label>
                                <input type="name" name="address" id="address" placeholder="Enter your address" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="city" class="text-white text-sm font-semibold">City</label>
                                <input type="name" name="city" id="city" placeholder="Enter your city" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="country" class="text-white text-sm font-semibold">Country <span class="text-[#E06059]">*</span></label>
                                <div class="relative pt-2">
                                    <select name="regions" id="regions" class="block w-full appearance-none text-ellipsis rounded-md border border-[#42505E] bg-[#2F3F4E]  py-2 pl-4 pr-12 text-sm text-[#CFD2D5] outline-[#0C49BE] placeholder:text-gray-400 ">
                                      <option value="">Pakistan</option>
                                      <option value="">Turkey</option>
                                      <option value="">Iraq</option>
                                      <option value="">Iran</option>
                                      <option value="">Palestine</option>
                                      <option value="">Africa</option>
                                      <option value="">India</option>
                                      <option value="">Egypt</option>
                                      <option value="">Bangladesh</option>
                                      <option value="">Norway</option>
                                      <option value="">German</option>
                                      <option value="">France</option>
                                      <option value="">Nigeria</option>
                                      <option value="">New Zeeland</option>
                                      </select
                                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-white fill-white/80"><path d="M4.47 6.97a.75.75 0 0 1 1.06 0L10 11.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06Z"></path></svg>
                                  </div>
                            </div>
                            <div class="">
                                <label for="postal" class="text-white text-sm font-semibold">Postal code</label>
                                <input type="name" name="postal" id="postal" placeholder="Enter your postal code" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <div class="">
                                <label for="gender" class="text-white text-sm font-semibold">Gender</label>
                                <div class="relative pt-2">
                                    <select name="gender" id="gender" class="block w-full appearance-none text-ellipsis rounded-md border border-[#42505E] bg-[#2F3F4E]  py-2 pl-4 pr-12 text-sm text-[#CFD2D5] outline-[#0C49BE] placeholder:text-gray-400 ">
                                        <option value="">Select your gender</option>
                                      <option value="">Male</option>
                                      <option value="">Female</option>
                                      </select
                                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-white fill-white/80"><path d="M4.47 6.97a.75.75 0 0 1 1.06 0L10 11.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06Z"></path></svg>
                                  </div>
                            </div>
                            <div class="">
                                <label for="date" class="text-white text-sm font-semibold">Date of birth</label>
                                <input type="date" name="date" id="date" class="text-white border-[#42505E] border rounded-lg w-full py-2 mt-2 placeholder:text-sm outline-[#0C49BE] ring-[#0C49BE] placeholder:text-[#CFD2D5] bg-[#2F3F4E] px-4">
                            </div>
                            <button
                            class="font-semibold text-white text-[14px] bg-[#0C49BE] transition-all duration-300 hover:bg-opacity-[70%] px-[18px] py-2.5 rounded-[8px] w-fit">Save changes</button>
                        </div>
                        </form>
                    </div>
                    <div class=" p-5 bg-[#263747] rounded-2xl mt-6">
                        <h1 class="text-white font-semibold text-xl">Marketing Preferences</h1>
                        <div class="px-4 py-3 mt-4 rounded-2xl bg-[#2A3B4B] flex justify-between items-center gap-3">
                            <div class="">
                                <h1 class="text-white  font-semibold">Email Marketing</h1>
                                <p class="text-white/80 pt-1 text-sm">Enjoy exclusive offers that are only available to subscribers.</p>
                            </div>
                            <div class="">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input class="sr-only peer" value="" type="checkbox">
                                    <div class="group peer ring-0 bg-[#0C49BE] rounded-full outline-none duration-700 after:duration-200 w-[50px] h-6  shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-white after:translate-x-[27px] after:outline-none after:h-4 after:w-4 after:top-1 after:left-1 peer-checked:bg-[#2A3B4B]  peer-checked:after:translate-x-0 peer-hover:after:scale-95">
                                       
                                    </div>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-5 mt-4">
                    <div class="bg-[#263747] rounded-2xl px-6 py-6">
                        <h1 class="font-semibold text-white ">Email Verification</h1>
                        <p class="text-white/80 pt-1 text-sm">To benefit from all Wild casino features please verify your email address.</p>
                    <button class="px-3 rounded-xl py-1.5 mt-2 hover:bg-opacity-[7%] bg-white bg-opacity-[5%] text-sm text-white font-bold">Recent Verification Email</button>
                    </div>
                    <div class="bg-[#263747] rounded-2xl mt-3 px-6 py-6">
                        <h1 class="font-semibold text-white ">Verify Identity</h1>
                        <p class="text-white/80 pt-1 text-sm">Completing your KYC will not only ensure the security of your account but also help us tailor our services to better meet your needs.</p>
                    <button class="px-3 rounded-lg py-2 mt-2 hover:bg-opacity-[7%] bg-white bg-opacity-[5%] text-sm w-full text-white font-bold">Verify ID</button>
                    </div>
                    <div class="bg-[#263747] rounded-2xl mt-3 px-6 py-6">
                        <h1 class="font-semibold text-white ">Two-Factor Authentication</h1>
                        <p class="text-white/80 pt-1 text-sm">You currently do no have 2FA enabled</p>
                    <button class="px-3 rounded-lg py-2 mt-2 hover:bg-opacity-[7%] bg-white bg-opacity-[5%] text-sm w-full text-white font-bold">Enable 2FA</button>
                    </div>
                </div>
                </div>
                </div>
                <Footer />
            </div>
        </Margin>
    </div>
</template>

<script setup>
import Margin from "../layouts/margin.vue";
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
</script>

<style>
.buttonsscrl {
  overflow-x: auto;
}
/* Custom scrollbar styles */
.buttonsscrl::-webkit-scrollbar {
  height: 2px; /* Width of the scrollbar */
}

.buttonsscrl::-webkit-scrollbar-thumb {
  background-color: #6b7280; /* Gray color for the scrollbar thumb */
  border-radius: 10px; /* Optional: rounded corners for the scrollbar thumb */
}

.buttonsscrl::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track background */
}
</style>