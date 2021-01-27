<template>
  <div class="hero__container">
    <div class="main__container">
      <Navbar />
      <div class="hero__container__anim">
        <translation>
          <template v-slot:fr>
            <h1 class="text-90 text-heavy hero__title hero__anim">
              Du logo au site internet, je développe des images numériques
              <span class="text-orange">modernes</span>.
            </h1>
          </template>
          <template v-slot:en>
            <h1 class="text-90 text-heavy hero__title hero__anim">
              From logos to website, I design
              <span class="text-orange"> modern </span>
              digital brand identities.
            </h1>
          </template>
        </translation>

        <translation>
          <template v-slot:fr>
            <Button class="hero__cta hero__anim" @click="scroll('#Mes-projets')"
              >Voir mes projets</Button
            >
          </template>
          <template v-slot:en>
            <Button class="hero__cta hero__anim" @click="scroll('#Mes-projets')"
              >See my projects</Button
            >
          </template>
        </translation>
      </div>
    </div>
  </div>
  <a href="#" @click="scroll('#Mes-projets')">
    <chevron-down-icon size="50" class="hero__chevron__icon text-purple" />
  </a>
  <div class="hero__bg">
    <img
      src="../assets/img/hero_bg.svg"
      alt="Background image hero section"
      class="hero__bg__img"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import Navbar from "./Navbar.vue";
import { ChevronDownIcon } from "@zhuowenli/vue-feather-icons";
import scroll from "../composables/useScroll.js";
import store from "../store/store.js";
import Translation from "./Translation.vue";

import { launchAnimation } from "../composables/useObserver.js";

export default {
  components: { Navbar, Button, ChevronDownIcon, Translation },
  setup(_, context) {
    const show = ref(false);
    const showActive = () => {
      show.value = true;
    };

    return { scroll, store, showActive, show };
  },
  mounted() {},
};
</script>
