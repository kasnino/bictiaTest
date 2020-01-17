<template>
  <div class="home">

 <h1>Aqui el perfil</h1>
 
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Formulario from "@/components/Formulario";

export default {
  components:{
      Formulario
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>