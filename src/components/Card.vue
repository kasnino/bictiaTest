<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img   height="250" :src="require(`@/assets/rie${likes}.jpg`)" alt=""></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>     
<!-- <div class="card-main">
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
</div> -->
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