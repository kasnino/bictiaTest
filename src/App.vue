<template>
<div id="app">
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
     
    >
      <div class="d-flex ">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

     

     
      </div>
   
        <v-btn  justify-align-center text-xs-center>  
          <router-link to="/"> 
                  <div class="">
                  Inicio
                  </div>
          </router-link>
          </v-btn>



          <v-btn  justify-align-center text-xs-center>  
         <router-link to="/perfil">
                  <div class="">
                  Perfil
                  </div>
          </router-link>
          </v-btn>
    
      <v-spacer></v-spacer>

 
    </v-app-bar>

    <v-content>
     <div id="nav">
        <router-view/>
     </div>
    </v-content>
  </v-app>


</div> 
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
