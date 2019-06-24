<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  font-family: 'Tajawal', sans-serif;
  /* font-family: 'Quicksand', sans-serif; */
}

.our-btn{
    outline: none;
    background-color: #f23a2e;
    border-radius: 30px!important;
    color: white;
    transition:all 0.4s ease;
}
.our-btn:hover{
  box-shadow: 0 5px 20px -7px rgba(0,0,0,.9)!important;
}

.owl-dots .owl-dot span{
    width: 30px !important;
    border-radius: 0 !important;
    height: 5px !important;
    outline: none;

}
.owl-dots .owl-dot.active span{
  outline: none;
  background-color: rgb(242, 58, 46) !important;
}


</style>
