import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Formulario from "@/components/Formulario.vue";
Vue.component("Formulario", Formulario);

import Card from "@/components/Card.vue";
Vue.component("Card", Card);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
