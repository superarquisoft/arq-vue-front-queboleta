<script setup lang="ts">
import { LoginIcon } from '@heroicons/vue/outline';
</script>

<template>
    <div class="min-h-screen">
        <div class="bg-gray-200 shadow">
            <div class="container mx-auto flex justify-between items-center">
                <img src="/src/assets/logo.png" alt="QueBoleta logo" width="70" />
                <router-link :to="{ name: 'home' }" class="btn btn-primary gap-2">
                    Inicia Sesión
                    <LoginIcon class="h-7 rotate-180" />
                </router-link>
            </div>
        </div>
    </div>
</template>
