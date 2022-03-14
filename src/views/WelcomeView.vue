<script setup lang="ts"></script>

<template>
    <div class="p-8 text-amber-50">
        <p class="bg-black bg-opacity-25 p-2 rounded-lg">
            QueBoleta te abre la entrada a los mejores eventos deportivos del país.
            Venta de entradas para los mejores eventos deportivos. Busca tus entradas para los próximos partidos de las
            ligas de fútbol, basketball, baseball y demás deportes en colombia. ¡no te quedes fuera!
        </p>
        <div class="flex justify-end mt-2"><router-link :to="{ name: 'login' }" class="btn btn-primary">Iniciar sesión</router-link></div>
    </div>
</template>
