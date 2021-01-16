<template>
  <div class="tech__container" id="Technologies">
    <div class="main__container">
      <Title>Technologies</Title>
      <h3 class="font-light text-50">Les <span class="text-orange">technologies</span> que j'utilise</h3>
    
    <div class="flex justify-between tech__img__container">
      <img src="../assets/img/vue.png" alt="Vue js logo">
      <img src="../assets/img/sanity.png" alt="Vue js logo">
      <img src="../assets/img/wp.png" alt="Vue js logo">
      <img src="../assets/img/woo.svg" alt="Vue js logo">
      <img src="../assets/img/netlify.svg" alt="Vue js logo">
    </div>
    
    </div> 
  </div>
</template>

<script>
import Title from "./Title.vue";

export default {
setup(){

},
components: {Title,}
}
</script>

<style scoped>
  div{
    width: 100%;
  }
</style>