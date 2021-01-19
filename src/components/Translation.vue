<template>
  <transition-group name="fade">
    <span :key="1">
      <slot name="fr" v-if="store.lang === 'fr'" ></slot>
    </span>
    <span :key="2">
      <slot name="en" v-if="store.lang === 'en'" ></slot>
    </span>
  </transition-group>
</template>

<script>
import store from "../store/store.js";

export default {
  setup() {
    return { store };
  },
};
</script>
