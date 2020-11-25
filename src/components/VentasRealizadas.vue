<template>
     
          <div class="jumbotron jumbotron-fluid">
               <div class="container">
                    <h1 class="display-5">Listado de ventas registradas</h1>
                    <p class="display-4">
                         {{ ventasRegistradas }}
                    </p>
                    <h1 class="display-5">Monto total de ventas</h1>
                    <p class="display-4">
                        $ {{ totalVentas }}
                    </p>
               </div>
          </div>
          
</template>

<script>
import { mapGetters } from "vuex";
export default {
     name: "VentasRealizadas",
     computed: {
          ...mapGetters(["ventasRegistradas", "totalVentas"]),
     },
};
</script>

<style scoped>
h1 {
     text-align: center;
     margin-top: 30px;
}
</style>
