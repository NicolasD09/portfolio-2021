<template>
  <transition name="fade">
    <div v-if="store.lang === 'fr'">
      <slot key="1" name="fr"></slot>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="store.lang !== 'fr'">
      <slot key="2" name="en"></slot>
    </div>
  </transition>
</template>

<script>
import store from "../store/store.js";

export default {
  setup() {
    return { store };
  },
};
</script>
