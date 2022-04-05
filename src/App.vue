<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <div class="min-h-screen min-w-screen bg-green-400 font-roboto">
        <div class="min-h-screen max-w-xl container mx-auto bg-green-400">
            <div class="flex justify-center pt-5">
                <img
                    class="hover:scale-110 duration-100 cursor-pointer"
                    @click="router.push({ name: 'welcome' })"
                    src="./assets/logo.png"
                    width="200"
                    alt="Logo"
                />
            </div>
            <router-view />
        </div>
    </div>
</template>
