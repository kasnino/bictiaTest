<template>
<div class="">
<router-link to="/perfil"> <span class="navegacion"></span>
     <p>perfil</p>
       </router-link> 


<div class="grid-conten"> 
   <div 
     v-for="(item, index) in lengtn" :key="index"  class="about">

      <Card :likes="index"></Card>
  </div>
}
  </div>
</div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components:{
      Card
  },

  data() {
    return {
       name: 'home',
  lengtn: 12
    }
  }
 
}
</script>


<style lang="scss" scoped>


.about{
  width: 100%;
  height: 100%;
  background: #FFF;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-conten{
  display: grid;
  grid-template-columns: repeat(3,33%);
  height: 250px;
}
</style>


