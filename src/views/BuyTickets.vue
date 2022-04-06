<script setup lang="ts">
import DashboardLayout from './layouts/DashboardLayout.vue';
import EventCard from '../components/EventCard.vue';
</script>

<template>
    <DashboardLayout>
        <h1 class="text-gray-800 font-bold text-2xl mb-4">Eventos en 2022</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-4">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    </DashboardLayout>
</template>