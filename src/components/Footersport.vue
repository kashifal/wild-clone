<template>
    <div class="px-3">
    <footer class="w-full  border-t  border-gray-600 mt-10 pt-20 pb-40">
        <div class="max-w-7xl mx-auto">
            <div class="flex xl:flex-row flex-col gap-4 lg:gap-6 xl:gap-12 2xl:gap-12 justify-between ">
           <div class="">
                    <img src="../assets/logo.svg" alt="" class="w-32 h-auto pb-8">
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
            <div class=" xl:grid-cols-2 grid 2xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-5 sm:gap-16">
               
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
</template>

<script setup></script>