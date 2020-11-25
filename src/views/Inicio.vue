<template>
     <div>
          <div class="titulo">
               <h2>{{ enviandoMensaje1 }}</h2>
               <h3>{{ enviandoMensaje2 }}</h3>
          </div>
          <Carousel />
     </div>
</template>

<script>
import { mapGetters } from "vuex";
import Carousel from "../components/Carousel.vue";

export default {
     name: "Inicio",
     computed: {
          ...mapGetters(["enviandoMensaje1", "enviandoMensaje2"]),
     },
     components: {
          Carousel,
     },
};
</script>

<style>
.titulo {
     color: white;
     padding-left: 30px;
     font-weight: bold;
     background-color: #E74C3C;
     padding-top: 5px;
     padding-bottom: 5px;
     text-align: center;
}
</style>
