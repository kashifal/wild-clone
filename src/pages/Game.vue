<template>
    <div>
        <Sidebar />
        <div class="lg:pl-64 bg-[#0A1C2D] mx-auto z-20">
            <div class="sm:px-8 px-4">
            <GamePage />
            <Footer />
        </div>
        </div>
       
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import GamePage from '../components/GamePage.vue';
import Footer from '../components/Footer.vue';
</script>