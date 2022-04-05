<script setup lang="ts">
import VInput from '../components/inputs/VInput.vue';
</script>

<template>
    <div class="max-w-xs mx-auto mt-10 bg-white bg-opacity-20 p-6 rounded-lg shadow">
        <VInput label="Email" class="mb-4" />
        <VInput label="Contraseña" class="mb-4" type="password" />
        <div class="flex justify-end">
            <router-link :to="{ name: 'dashboard' }" class="btn btn-primary">Ingresar</router-link>
        </div>
    </div>
</template>
