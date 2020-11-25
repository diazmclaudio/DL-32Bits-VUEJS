import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "#E74C3C", destacado: true},
      {codigo: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color: "#2980B9", destacado: false},
      {codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color: "#ABEBC6", destacado: true},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: 100, precio: 35000, color: "#F7DC6F", destacado: false},
      {codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color: "#2980B9", destacado: false},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color: "#E74C3C", destacado: true}
    ],
    message1: "Tienda 32 bits",
    message2: "Venta de Juegos de PC y Consolas"
    },
  getters: {
    enviandoMensaje1(state){
      return state.message1;
    },
    enviandoMensaje2(state){
      return state.message2;
    },
    enviandoJuegos(state){
      return state.juegos;
    },
    filtroJuego: (state) => (codigo) => {
      return state.juegos.filter( producto => producto.codigo == codigo );
    },
    totalJuegos (state){
      return state.juegos.length;
    },
    enviandoStock(state) {
      return state.juegos.filter(producto=> producto.stock > 0);
    },
    ventasRegistradas(state) {
      return state.juegos.reduce((acumulador,valor) => {
        return acumulador + valor.stock;
      },0);
    },
    totalVentas(state) {
      return state.juegos.reduce((acumulador,valor) => {
        return acumulador + (valor.precio*valor.stock);
      },0);
    },
  },
  mutations: {
    restaStock(state, index){
      if (state.juegos[index].stock > 0) {
        state.juegos[index].stock--;
      } else {
        state.juegos[index].disponible = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puede disminuir el inventario',
          footer: 'Intenta con otro producto'
        })
      }      
      if (state.juegos[index].stock == 0) {
        state.juegos[index].disponible = false;
      }
    },
  },
  actions: {
    vender(context, index){
      context.commit('restaStock', index);
    }
  }  
})
