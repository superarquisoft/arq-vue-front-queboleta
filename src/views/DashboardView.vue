<script setup lang="ts">
import VButton from '../components/inputs/VButton.vue';
import { CurrencyDollarIcon, ClipboardListIcon, ShoppingBagIcon, CogIcon } from '@heroicons/vue/outline';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <div class="grid grid-cols-2 gap-4 mt-4">
        <VButton @click="router.push({name: 'buyTicket'})" label="Comprar boleta">
            <template #icon>
                <CurrencyDollarIcon class="h-12" />
            </template>
        </VButton>
        <VButton @click="router.push({name: 'seeTicket'})" label="Ver boleta">
            <template #icon>
                <ClipboardListIcon class="h-12" />
            </template>
        </VButton>
        <VButton label="Mis compras">
            <template #icon>
                <ShoppingBagIcon class="h-12" />
            </template>
        </VButton>
        <VButton label="Mi cuenta">
            <template #icon>
                <CogIcon class="h-12" />
            </template>
        </VButton>
    </div>
</template>
