<template>
  <h2 class="relative text-50">
    <slot></slot>
  </h2>
</template>

<script>
export default {};
</script>

<style scoped>
  h2{
    width: fit-content;
  }
  h2::after{
    content: '';
    border-bottom: 2px solid #7B61FF;
    position: absolute;
    width: 70%;
    left: 0;
    bottom: -8px;
  }
</style>
