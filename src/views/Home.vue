<template>
  <div class="home">

     <Formulario></Formulario>
 
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