<script setup lang="ts">
import { HomeIcon, TicketIcon } from '@heroicons/vue/outline';
import { useRoute } from 'vue-router';
const route = useRoute();
const inRoute = (name: string) => route.name === name;
const items: Array<{ name: string; icon: any; label: string }> = [
    { name: 'home', label: 'Inicio', icon: HomeIcon },
    { name: 'buy', label: 'Comprar boletas', icon: TicketIcon },
];
</script>

<template>
    <div class="flex flex-col gap-1">
        <router-link
            v-for="item in items"
            :to="{ name: item.name }"
            class="hover:bg-white/40 hover:shadow flex w-full rounded-lg py-2 px-4 items-center gap-2 group"
            :class="{ 'bg-black/10 pointer-events-none': inRoute(item.name) }"
        >
            <component
                :is="item.icon"
                class="h-5 text-gray-400 group-hover:text-gray-600"
                :class="{ 'text-gray-600': inRoute(item.name) }"
            />
            <span class="text-gray-600 font-medium">{{ item.label }}</span>
        </router-link>
    </div>
</template>
