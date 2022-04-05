<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/outline'; 
</script>

<template>
    <div class="p-8">
        <p class="bg-black text-white bg-opacity-20 shadow p-2 rounded-lg">
            QueBoleta te abre la entrada a los mejores eventos deportivos del país.
            Venta de entradas para los mejores eventos deportivos. Busca tus entradas para los próximos partidos de las
            ligas de fútbol, basketball, baseball y demás deportes en colombia. ¡no te quedes fuera!
        </p>
        <div class="flex mt-2">
            <router-link :to="{ name: 'login' }" class="btn btn-primary w-full justify-between">
                Iniciar sesión
                <ArrowRightIcon class="h-5" />
            </router-link>
        </div>
    </div>
</template>
