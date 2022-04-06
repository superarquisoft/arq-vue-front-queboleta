<script setup lang="ts">
import ProfileLink from '../../components/ProfileLink.vue';
import NavMenuItems from '../../components/NavMenuItems.vue';
</script>

<template>
    <div class="min-h-screen flex w-screen">
        <div class="sticky h-screen bg-gray-200 border-r border-gray-300 shadow-lg flex flex-col py-4">
            <div class="flex justify-center mb-4">
                <img src="/src/assets/logo.png" alt="QueBoleta logo" width="100" />
            </div>
            <hr class="border border-gray-300" />
            <div class="p-4"><ProfileLink /></div>
            <div class="px-4"><NavMenuItems /></div>
            <div class="mt-auto">
                <hr class="border border-gray-300" />
                <div class="flex justify-center mt-4">
                    <router-link
                    :to="{ name: 'welcome' }"
                    class="text-sm text-white px-4 py-2 rounded-lg font-medium bg-red-500"
                >
                    Cerrar sesión
                </router-link>
                </div>
            </div>
        </div>
        <div class="p-4 in-shadow flex-grow"><slot /></div>
    </div>
</template>
