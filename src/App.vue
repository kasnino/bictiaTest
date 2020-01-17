<template>
  <div id="app">
     <div id="nav">
   
<router-link to="/"> <span class="navegacion"></span>
       <div class="">
           <button>Inicio</button>
       </div>
       </router-link> 
     
     <div>

       Tienda Bictia Colombia
     </div>

    </div> 


    <router-view/>
  </div>
</template>

<style lang="scss">
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0; 
}
#nav{
  font-family: 'Poppins', sans-serif;
  background: #A030F0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 20px;
  padding: 23px;

  }

  button{
        
      width: 89px;
      height: 37px;
      border: 1px solid #FFF;
      border-radius: 24px;
      border:none;
      color:white;
    background: #faebd74d;
    cursor: pointer;
      
  }

</style>
