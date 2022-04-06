<script setup lang="ts">
import { SelectorIcon } from '@heroicons/vue/solid';
</script>

<template>
    <router-link
        :to="{ name: 'profile' }"
        class="hover:bg-black/10 flex gap-4 cursor-pointer rounded-lg px-4 py-2 w-80"
    >
        <div>
            <img
                width="50"
                height="50"
                src="https://ui-avatars.com/api/?name=John+Doe&rounded=true&background=089cd8&bold=true&size=50"
                alt="avatar image"
            />
        </div>
        <div class="flex flex-col justify-center">
            <h1 class="font-medium">Juan David</h1>
            <span class="font-medium text-gray-500">juan.zea@gmail.com</span>
        </div>
        <div class="flex items-center">
            <SelectorIcon class="h-5" />
        </div>
    </router-link>
</template>
