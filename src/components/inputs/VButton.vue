<script setup lang="ts">
defineProps<{
    label: string;
}>();
</script>

<template>
    <button
        class="flex w-full items-center bg-blue-500 rounded-xl px-6 py-3 text-2xl text-white font-bold hover:scale-110 duration-100 shadow-md"
    >
        <slot name="icon" />
        <div class="flex flex-col ml-1">
            <span>{{ label }}</span>
        </div>
    </button>
</template>
