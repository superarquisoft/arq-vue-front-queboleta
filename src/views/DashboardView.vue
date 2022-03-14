<script setup lang="ts">
import VButton from '../components/inputs/VButton.vue';
import { CurrencyDollarIcon, ClipboardListIcon } from '@heroicons/vue/outline';
</script>

<template>
    <div class="grid grid-cols-2 gap-4 mt-4">
        <VButton label="Comprar boleta">
            <template #icon>
                <CurrencyDollarIcon class="h-12" />
            </template>
        </VButton>
        <VButton label="Ver boleta">
            <template #icon>
                <ClipboardListIcon class="h-12" />
            </template>
        </VButton>
    </div>
</template>
