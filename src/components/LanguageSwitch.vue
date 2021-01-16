<template>
  <div class="absolute flex grid-cols-2 gap-4 language-switch__container">
    <div @click="switchLang('fr')" class="m-1 cursor-pointer language-switch__item">
      <img
        class="bg-transparent"
        src="../assets/img/france.svg"
        alt="french flag icon"
      />
    </div>
    <div @click="switchLang('en')" class="m-1 cursor-pointer language-switch__item disabled">
      <img
        class="bg-transparent"
        src="../assets/img/united-states.svg"
        alt="american flag icon"
      />
    </div>
  </div>
</template>

<script>
import store from "../store/store.js";
export default {
  setup() {
    const switchLang = (lang) => {
      store.lang = lang;
    };
    return { store, switchLang };
  },
};
</script>
