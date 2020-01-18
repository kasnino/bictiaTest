<template>
         
<div class="card-main">
    <div
     class="imagen-main">
        <img :src="require(`@/assets/rie${likes}.jpg`)" alt="">
          <div class="conten-cuadrado">
    </div>
    </div>
    <div class="description-card">
      <span class="titulo-main"><h1>$12.000.000</h1></span>
    </div>
    
    <div class="informacion-card">
    </div>
    <div class="boton-contacto">
      <div class="boton-main">
        <span class="boton">
          <a href="#">Contactar</a>
        </span>
      </div>
      <div class="checket">
        <div class="checkbox">
          <input id="checkbox-rem5" type="checkbox" />
          Comparar <label for="checkbox-rem5">
          <span class="box"></span>
          </label>
        </div>
      </div>
    </div>
</div>
</template>
<script>


export default {

props:['likes'],
  data() {
    return {
       name: 'home',
       lengtn: 12
    }
  }
 
}
</script>
<style lang="scss" scoped>


.card-main{
  width: 300px;
  border: 1px solid #c8c0c0b0;
  border-radius: 10px;
  padding: 20px;
}

.imagen-main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>