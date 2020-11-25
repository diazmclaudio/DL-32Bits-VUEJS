<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{name: 'Inicio'}" class="navbar-brand">Tienda 32 Bits !!</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link :to="{name: 'Inicio'}" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Busqueda'}" class="nav-link">Búsqueda</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Ventas'}" class="nav-link">Ventas</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Total'}" class="nav-link">Total</router-link>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
    
</style>