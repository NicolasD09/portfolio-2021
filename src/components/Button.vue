<template>
  <a class="inline-block text-white cursor-pointer bg-purple">
    <slot> </slot>
  </a>
</template>

<script>
export default {};
</script>
<style scoped>
a {
  padding: 8px 24px;
  border-radius: 999px;
  box-shadow: 0 0 15px rgba(0,0,0,0.35);
}

a:hover{
  transform: translateY(-3px);
  box-shadow: 0 5px 25px rgba(0,0,0,0.4);
  transition: 200ms ease-in-out;
}
</style>
