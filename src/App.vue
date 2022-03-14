<script setup lang="ts">
import { TicketIcon } from '@heroicons/vue/outline';
</script>

<template>
    <div class="min-h-screen min-w-screen bg-orange-400 font-roboto">
        <div class="min-h-screen max-w-xl container mx-auto bg-orange-400">
            <div>
                <h1 class="font-righteous text-6xl text-yellow-50 flex items-center justify-between px-4">
                    <TicketIcon class="h-16 mr-2" />
                    <span>¡QueBoleta!</span>
                    <TicketIcon class="h-16 mr-2" />
                </h1>
            </div>
            <router-view />
        </div>
    </div>
</template>
