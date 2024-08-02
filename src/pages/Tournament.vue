<template>
    <div class="overflow-hidden">
        <Sidebar />
        <div class="lg:pl-64 bg-[#0A1C2D] mx-auto z-20">
            <div class="">
                <div class="relative z-10 text-white h-full mx-auto mb-3 bg-[url('./assets/tournamentbg.webp')] flex items-center overflow-hidden bg-center bg-cover py-32  2xl:px-8">
                    <div class="flex justify-center w-full h-full flex-col mx-auto items-center gap-2">
                        <img src="../assets/tournamentherologo.svg" alt="" class="h-[8.625rem] md:h-28">
                        <h1 class="max-w-sm text-xl font-medium text-white text-center">Conquer the leaderboard to prove your might - spectacular prizes await!</h1>
                       </div>
                        <div
                         class="absolute inset-0 w-20 -top-10 bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-2xl z-20"
                         ></div>  
                         <div
                         class="absolute inset-0 w-full h-20 top-[83%] right-0 bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-xl z-20"
                         ></div>
                  </div>
                 <div class="sm:px-8 px-4">
                    <div class="md:-mt-8 relative">
                        <div
                        class="absolute md:block hidden inset-0 w-full h-20 top-[0%] right-0 bg-gradient-to-r from-[#0A1C2D] to-[#0A2334] blur-xl z-20"
                        ></div>
                        <div class="flex justify-between gap-3 z-20 relative items-center sm:flex-row flex-col">
                            <div class="flex items-center gap-2">
                                <img src="../assets/trophy.svg" alt="" class="w-6 h-6">
                                <h3 class="text-2xl font-semibold text-white">Tournament</h3>
                            </div>
                            <div class="flex p-1 gap-1 bg-[#192C3D] rounded-full">
                                <button class="px-3 text-sm bg-white bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Active</button>
                                <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Incomming</button>
                                <button class="px-3 text-sm hover:bg-white hover:bg-opacity-[7%] rounded-full py-1.5 text-white font-semibold">Finished</button>
                            </div>
                        </div>
                        <div class="grid relative pt-2 z-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            <div class="relative overflow-hidden rounded-xl">
                                <div class="">
                                    <img src="../assets/tourna1.webp" alt="" class="rounded-t-xl w-full">
                                </div>
                                <div class="bg-[#746DF4] absolute left-3 top-3 text-white text-xs font-medium w-fit rounded-full px-1.5 py-[4px]">In progress</div>
                                <div class="bg-[#192C3D] p-2.5">
                                    <div class="flex flex-col gap-[2px]">
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/cup.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Prize Pool</h3>
                                            </div>
                                            <div class="max-w-[200px]">
                                                <h4 class="font-medium text-sm text-white truncate">5,000 USDT + 1,000 VIP Free Spi</h4>
                                            </div>
                                        </div>
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/dollar.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Min Bet</h3>
                                            </div>
                                            <div class="max-w-[200px] flex items-center gap-1">
                                                <h4 class="font-medium text-sm text-white truncate">$1.00</h4>
                                                <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                                            </div>
                                        </div>
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/end.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Ends in</h3>
                                            </div>
                                            <div class="max-w-[200px]">
                                                <h4 class="font-medium text-sm text-white truncate">8d 21h 15m 59s</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="bg-[#1E3041] hover:bg-[#253747] text-sm text-center py-[10px] rounded-[8px] text-white w-full mt-3 font-medium hover:bg-opacity-90">View Leaderboard</button>
                                </div>
                            </div>
                            <div class="relative overflow-hidden rounded-xl">
                                <div class="">
                                    <img src="../assets/tour2.webp" alt="" class="rounded-t-xl w-full">
                                </div>
                                <div class="bg-[#746DF4] absolute left-3 top-3 text-white text-xs font-medium w-fit rounded-full px-1.5 py-[4px]">In progress</div>
                                <div class="bg-[#192C3D] p-2.5">
                                    <div class="flex flex-col gap-[2px]">
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/cup.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Prize Pool</h3>
                                            </div>
                                            <div class="max-w-[200px]">
                                                <h4 class="font-medium text-sm text-white truncate">1,000 USDT</h4>
                                            </div>
                                        </div>
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/dollar.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Min Bet</h3>
                                            </div>
                                            <div class="max-w-[200px] flex items-center gap-1">
                                                <h4 class="font-medium text-sm text-white truncate">$1.00</h4>
                                                <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                                            </div>
                                        </div>
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/end.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Ends in</h3>
                                            </div>
                                            <div class="max-w-[200px]">
                                                <h4 class="font-medium text-sm text-white truncate">8d 21h 15m 59s</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="bg-[#1E3041] hover:bg-[#253747] text-sm text-center py-[10px] rounded-[8px] text-white w-full mt-3 font-medium">View Leaderboard</button>
                                </div>
                            </div>
                            <div class="relative overflow-hidden rounded-xl">
                                <div class="">
                                    <img src="../assets/tour3.webp" alt="" class="rounded-t-xl w-full">
                                </div>
                                <div class="bg-[#746DF4] absolute left-3 top-3 text-white text-xs font-medium w-fit rounded-full px-1.5 py-[4px]"></div>
                                <div class="bg-[#192C3D] p-2.5">
                                    <div class="flex flex-col gap-[2px]">
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/cup.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Prize Pool</h3>
                                            </div>
                                            <div class="max-w-[200px]">
                                                <h4 class="font-medium text-sm text-white truncate">2,000 USDT</h4>
                                            </div>
                                        </div>
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/dollar.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Min Bet</h3>
                                            </div>
                                            <div class="max-w-[200px] flex items-center gap-1">
                                                <h4 class="font-medium text-sm text-white truncate">$0.50</h4>
                                                <img src="../assets/diamond.svg" alt="" class="w-4 h-4">
                                            </div>
                                        </div>
                                        <div class="px-2 py-[12px] rounded-[8px] bg-[#1E3041] flex justify-between gap-2 items-center">
                                            <div class="flex items-center w-1/3 gap-1">
                                                <img src="../assets/end.svg" alt="" class="w-4 h-4">
                                                <h3 class="font-medium text-sm text-white/80 truncate">Ends in</h3>
                                            </div>
                                            <div class="max-w-[200px]">
                                                <h4 class="font-medium text-sm text-white truncate">8d 21h 15m 59s</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="bg-[#1E3041] hover:bg-[#253747] text-sm text-center py-[10px] rounded-[8px] text-white w-full mt-3 font-medium hover:bg-opacity-90">View Leaderboard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div class="py-24">
                    <div class="lg:max-w-3xl relative mx-auto max-h-[26.75rem]  overflow-hidden rounded-b-3xl bg- bg-gradient-to-t from-transparent to-[#0A1C2D] p-2 transition-all duration-200 ease-in-out">
                        <div class="">
                          <div class="text-sm text-white/80">
                            <div class="flex flex-col max-w-6xl gap-5">
                              <h1 class="text-2xl text-white font-semibold">Get your adrenaline pumping with online casino tournaments</h1>
                              <p>Our online crypto casino offers your crypto slots tournaments with thrilling cash prizes. Play Bitcoin games in our BTC casino and climb the leaderboard to win crypto rewards, cash prizes and free spins.</p>
                              <p>When it comes to the world of online gambling, crypto casinos have revolutionized the industry. With their ability to offer quick and secure transactions, these casinos have quickly gained popularity among players. One of the most exciting features that any mobile Bitcoin casino or live Litecoin casino can offer is a variety of thrilling casino tournaments. In addition to the usual promotions, free spins, and bonuses, these tournaments provide players with the opportunity to earn extra rewards.</p>
                              
                              <p>A Bitcoin casino online promotion is a marketing strategy used by online casinos to attract and retain players who prefer to gamble with Bitcoin or other cryptocurrencies. These promotions can come in different forms and may offer a variety of rewards and bonuses to players who participate.</p>
                              <p>At Wild.io, you'll never run out of excitement and entertainment. With a wide range of gaming options available, including BTC online casino, Doge casino, BNB casino, and more, you're sure to find the perfect game to suit your taste.</p>
                              <p>Whether you're a fan of classic table games like roulette and blackjack or prefer to spin the reels of the latest <a href="#">Bitcoin slots</a>, Wild.io has it all. The <a href="#">Bitcoin jackpot games</a> offer the chance to win big and add an extra layer of thrill to your gaming experience.</p>
                              <p>At Wild.io, you'll enjoy a premium gaming experience with lightning-fast payouts, unparalleled customer service, and a secure and reliable platform. So, what are you waiting for? Join the Wild.io community today and experience the ultimate crypto casino adventure!</p>
                              <h2 class="text-xl text-white font-semibold">Why play crypto casino games?</h2>
                              <p>Crypto casinos have become increasingly popular in recent years, and for good reason. There are several advantages to playing at a crypto casino compared to a traditional online casino.</p>
                              <p>First of all, using cryptocurrency offers greater security and privacy compared to traditional payment methods. Cryptocurrency transactions are encrypted and decentralized, meaning they are not tied to any central authority, making it more difficult for hackers to access your personal information or steal your funds.</p>
                              <p>Secondly, crypto casinos often offer faster transaction times and lower fees compared to traditional casinos. This is because cryptocurrency transactions do not require intermediaries such as banks, which can often result in delays and higher fees.</p>
                              <p>More so, crypto casinos often offer a wider range of games compared to traditional casinos, as they are not bound by the same regulations and restrictions. You can find a variety of games to play at a crypto casino, including Bitcoin slots, <a href="#">Bitcoin table games</a>, BNB casino games, and more.</p>
                              <p>Lastly, playing at a crypto casino can offer the potential for greater returns on your investment. The value of cryptocurrencies can be volatile, and if you choose the right cryptocurrency to play with, you could potentially see your winnings increase significantly in value over time.</p>
                              <p>Overall, playing at a crypto casino can offer several advantages compared to a traditional online casino. With greater security, faster transaction times, a wider range of games, and the potential for greater returns, it's no wonder why more and more people are choosing to play at crypto casinos.</p>
                              <h2 class="text-xl text-white font-semibold">Are Bitcoin casinos legit?</h2>
                              <p>Bitcoin casinos are more and more popular in recent years, as more people are drawn to the convenience and anonymity offered by cryptocurrency transactions. However, many potential users are hesitant to trust these platforms due to concerns about their legitimacy. In this section, we will explore the question of whether Bitcoin casinos and crypto casino games are legit and what factors to consider when choosing one.</p>
                              <p>First and foremost, it is important to note that the legality of online gambling varies by jurisdiction. While some countries have strict laws against online crypto gambling, others have more permissive regulations or none at all. Therefore, the first step in determining whether a Bitcoin casino is legit is to research the laws in your country or state to ensure that online gambling is legal.</p>
                              <p>Assuming that online gambling is legal in your area, the next factor to consider is the reputation and track record of the Bitcoin casino in question. Look for online reviews and forums where users discuss their experiences with different casinos. Pay attention to complaints about delayed or denied withdrawals, unfair games, or other issues that suggest a lack of transparency or trustworthiness.</p>
                              <p>Another important consideration is the licensing and regulation of the Bitcoin casino. Legitimate casinos should be licensed and regulated by a reputable authority, such as the Malta Gaming Authority or the UK Gambling Commission. These regulators ensure that casinos operate fairly and transparently, and that players' funds are protected.</p>
                              <p>Finally, it is essential to ensure that the Bitcoin casino offers secure and reliable payment options. Look for casinos that use SSL encryption and two-factor authentication to protect your personal and financial information. Also, ensure that the casino offers a variety of payment options, including Bitcoin and other cryptocurrencies, as well as traditional payment methods like credit cards and bank transfers.</p>
                              <p>In conclusion, Bitcoin casinos can be legit and offer a convenient and anonymous way to gamble online. However, it is important to do your research and choose a reputable casino that is licensed and regulated, has a good reputation, and offers secure payment options. By taking these factors into consideration, you can enjoy a safe and enjoyable online gambling experience.</p>
                              <h2 class="text-xl text-white font-semibold">How to play crypto casino games?</h2>
                              <p>The first thing you need to do is acquire some Bitcoin. You can buy Bitcoin from an exchange or from a peer-to-peer marketplace. You'll need to create a Bitcoin wallet to store your Bitcoin and to make transactions.</p>
                              <p>Step 2: Choose a Bitcoin Casino</p>
                              <p>Once you have some Bitcoin, you'll need to choose a Bitcoin casino. There are plenty of options out there, so do your research to find a reputable casino that offers the games you want to play.</p>
                              <p>Step 3: Make a Deposit</p>
                              <p>To start playing, you'll need to make a deposit. This is done by sending Bitcoin from your wallet to the casino's wallet. The casino will provide you with a Bitcoin address to send the funds to.</p>
                              <p>Step 4: Choose Your Game</p>
                              <p>Once your deposit is confirmed, you can start playing! Bitcoin casinos offer a wide variety of games, including slots, table games, and even live dealer games. Choose the game you want to play and get started.</p>
                              <p>Step 5: Withdraw Your Winnings</p>
                              <p>If you win, you'll need to withdraw your winnings. This is done by sending Bitcoin from the casino's wallet to your own wallet. Make sure you follow the casino's withdrawal procedures to ensure a smooth and timely transaction.</p>
                              <p>In conclusion, playing Bitcoin casino games is easy and straightforward. Just follow these simple steps to get started and enjoy the excitement of playing with Bitcoin.</p>
                              <h2 class="text-xl text-white font-semibold">Why should you choose a crypto casino like Wild.io?</h2>
                              <p>We’re boasting hundreds of new and popular casino games, from <a href="#">Bitcoin table games</a> like Blackjack, Rocket Dice, or Baccarat to the <a href="#">best Bitcoin slots</a> like 7 Fortune Frenzy, Alkemor’s Tower, 2 Million B.C., and many more. Play the best Bitcoin jackpot slots and the most popular Ethereum casino games from renowned developers and game providers like Bgaming, Bet Soft Gaming, Endorphina, Belatra Games, Gamebeat, Platipus, and many, many others.</p>
                              <p>Wild.io players can make deposits and withdrawals in several big cryptocurrencies like Bitcoin, Ethereum, Litecoin, Bitcoin cash, Tether, and Dogecoin. Create an account today and get a First Deposit Bonus, daily, weekly, and monthly Rakeback, as well as instant withdrawals, an easy sign-up process, and plenty of VIP perks. There are plenty of Bitcoin casino bonuses and Bitcoin casino free spins to go around for everyone.</p>
                              <h3 class="text-xl text-white font-semibold">What’s the Wild.io crypto casino <a href="#">Welcome Package</a>?</h3>
                              <p>With a first deposit bonus of up to 150%, a second deposit bonus of up to 100%, a third deposit bonus of up to 120%, and a fourth deposit bonus of up to 150%, you’ll get a whole whopping package of up to 520% in deposit bonuses and 10 BTC Welcome Package. If that’s not the best Bitcoin casino bonus you’ve ever heard of, we don’t know what it is! Wild.io offers a weekly tournament for new players with a total prize pool of 1000 free spins for the first 10 spots. The more you play, the more you spin!</p>
                              <p>Last but not least, our dedicated team of customer support specialists is available 24/7 to answer any questions and help solve any issues you might encounter. Each customer support team member is experienced and friendly, dedicated to offering you the utmost online crypto casino experience ever.</p>
                              <h3 class="text-xl text-white font-semibold">How to choose an Ethereum casino that focuses on responsible gaming</h3>
                              <p>Choosing an Ethereum casino that focuses on responsible gaming is an essential step to ensure a safe and enjoyable gambling experience. Here are some factors to consider when looking for such a crypto casino:</p>
                              <p>Licenses and regulation: A reputable Ethereum casino must hold valid licenses and adhere to regulatory requirements in the jurisdiction they operate in. A regulated crypto casino is more likely to take responsible gaming seriously and offer various protection measures to its players.</p>
                              <p>Account control options: An Ethereum casino that prioritizes responsible gaming will offer its users various account control options such as deposit limits, loss limits, session time limits, self-exclusion, and cool-off periods. These measures help players control their gambling habits and prevent them from going overboard.</p>
                              <p>Player protection measures: A responsible Ethereum casino will have measures in place to identify and prevent potentially problematic betting patterns. These measures could include mandatory identity verification, age verification, and anti-fraud measures to prevent underage gambling and other illegal activities.</p>
                              <p>Fairness and transparency: An Ethereum casino that focuses on responsible gaming should provide its players with fair and transparent games. They should use reputable game developers and publish their game payout percentages and other relevant information that players can use to make informed decisions.</p>
                              <p>Support and resources: A responsible Ethereum casino will provide support and resources to its players who may be experiencing gambling-related issues. This could include access to counseling services, self-assessment tests, and links to gambling addiction support organizations.</p>
                              <p>In summary, when choosing an Ethereum casino that focuses on responsible gaming, or any kind of Cardano casino, Doge casino, or even live Litecoin casino, look for licensed and regulated casinos that offer account control options, player protection measures, fair and transparent games, and provide support and resources to their players.</p>
                              <h4 class="text-xl text-white font-semibold">Start your best Bitcoin casino journey today</h4>
                              <p>Begin your thrilling journey into the world of online gambling today with Wild.io- the ultimate destination for crypto enthusiasts! We take pride in offering the best Bitcoin casino software available, coupled with years of experience in the industry, ensuring an unparalleled gaming experience.</p>
                              <p>With an extensive range of thrilling games, including the <a href="#">latest releases</a>, class, and everything in between, you are sure to find something that fits your style and preferences. Whether you want to indulge in Ethereum casino games or explore the best Cardano casino options, Wild.io has got you covered.</p>
                              <p>But that's not all! We are committed to ensuring that our players get the most out of their gaming experience. That's why we offer fantastic promotions and bonuses, giving you even more chances to win big. From free spins to deposit bonuses and loyalty rewards, our <a href="https://wild.io/promotions">promotions</a> will keep you coming back for more.</p>
                              <p>So, what are you waiting for? Sign up for your account now and embark on your Wild.io adventure! Whether you prefer a live Litecoin casino or the best Doge casino games, Wild.io has everything you need for an unforgettable gaming experience. Join us today and experience the thrill of online gambling at its best!</p>
                            </div>
                          </div>
                        </div>
                        <div class="py-6">&nbsp;</div>
                        <div>
                          <div class="before: absolute bottom-0 left-0 z-20 flex h-40 w-full items-end justify-center bg-gradient-to-t from-[#0A1C2D] to-transparent pt-6 shadow-xl before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[20rem] before:w-full before:bg-gradient-to-t before:from-[#0A1C2D] before:to-transparent before:content-['']">
                            <button class="py-2 px-3 text-sm rounded-md bg-white bg-opacity-[3%] hover:bg-opacity-[5%] z-40 text-white font-medium">Read more</button>
                        </div>
                        </div>
                      </div>
                      
                </div>
             <Contact class="fixed bottom-20 right-5 z-40" />
            <Footer />
            <BottomBar />
        </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
import BottomBar from "../components/BottomBar.vue";
</script>

<style>
/* Custom scrollbar styles */
.buttons::-webkit-scrollbar {
    height: 3px; /* Width of the scrollbar */
  }
  
  .buttons::-webkit-scrollbar-thumb {
    background-color: #6b7280; /* Gray color for the scrollbar thumb */
    border-radius: 3px; /* Optional: rounded corners for the scrollbar thumb */
  }
  
  .buttons::-webkit-scrollbar-track {
    background-color: transparent; /* Transparent track background */
  }
</style>