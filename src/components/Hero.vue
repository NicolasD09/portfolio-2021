<template>
  <div class="hero__container">
    <div class="main__container">
      <Navbar />
      <h1 v-if="store.lang === 'fr'" class="text-50 hero__title">
        Du logo au site internet, je développe des<br />
        images numériques
        <span class="text-orange">
          modernes
        </span>
        .
      </h1>
      <Button @click="scroll('#Mes-projets', 500)">Voir mes projets</Button>
    </div>
  </div>
  <a href="#" @click="scroll('#Mes-projets', 500)">
    <chevron-down-icon size="50" class="hero__chevron__icon text-purple" />
  </a>
  <div class="hero__bg">
    <img src="../assets/img/hero_bg.svg" alt="Background image hero section" class="hero__bg__img" @load="onImgLoad" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Navbar from "./Navbar.vue";
import { ChevronDownIcon } from "@zhuowenli/vue-feather-icons";
import scroll from "../composables/useScroll.js";
import store from "../store/store.js";


export default {
  setup() {
    const onImgLoad = _ => {
      console.log("Image loaded");
    }
    return { scroll, store, onImgLoad };
  },
  components: { Navbar, Button, ChevronDownIcon },
};
</script>
