<template>
  <span class="tag" @click="setActive">
    <slot></slot>
  </span>
</template>

<script>
export default {
  setup() {
    const setActive = ($event) => {
      $event.target.classList.toggle("active");
    };

    return { setActive };
  },
};
</script>

<style>
.tag {
  border: 2px solid #7b61ff;
  padding: 5px 15px;
  color: #333;
  background-color: #fdfdfd;
  border-radius: 99px;
  cursor: pointer;
  transition: 250ms;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
}

.tag.active {
  background-color: #7b61ff;
  color: white;
  transition: 250ms;
}

</style>
