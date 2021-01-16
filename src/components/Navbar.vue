<template>
  <nav class="flex flex-row items-center justify-between navbar__container">
    <div class="navbar__logo__container">
      <a href="/">
        <img class="navbar__logo__img" src="../assets/img/logo.svg" alt="" />
      </a>
    </div>
    <div class="navbar__links__container">
      <!-- FR Links -->
      <ul
        v-if="store.lang === 'fr'"
        class="flex flex-col justify-between md:flex-row"
      >
        <li>
          <a
            class="relative navbar__link text-20"
            href="#"
            @click="
              setActive(link, $event);
              scroll(`#Mes-projets`, 500);
            "
            >Mes projets</a
          >
        </li>
        <li>
          <a
            class="relative navbar__link text-20"
            @click="
              setActive(link, $event);
              scroll(`#Technologies`, 500);
            "
            href="#"
            >Technologies</a
          >
        </li>
        <li>
          <a
            class="relative navbar__link text-20"
            @click="
              setActive(link, $event);
              scroll(`#Me-contacter`, 500);
            "
            href="#"
            >Me contacter</a
          >
        </li>
      </ul>
      <!-- EN Links -->
      <ul
        v-if="store.lang === 'en'"
        class="flex flex-col justify-between md:flex-row"
      >
        <li>
          <a
            class="relative navbar__link text-20"
            href="#"
            @click="
              setActive(link, $event);
              scroll(`#Mes-projets`, 500);
            "
            >My projects</a
          >
        </li>
        <li>
          <a
            class="relative navbar__link text-20"
            @click="
              setActive(link, $event);
              scroll(`#Technologies`, 500);
            "
            href="#"
            >Technologies</a
          >
        </li>
        <li>
          <a
            class="relative navbar__link text-20"
            @click="
              setActive(link, $event);
              scroll(`#Me-contacter`, 500);
            "
            href="#"
            >Contact me</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reactive } from "vue";
import scroll from "../composables/useScroll.js";
import store from "../store/store.js";

export default {
  setup() {
    const setActive = (link, event) => {
      let links = document.querySelectorAll("a.navbar__link");
      links.forEach((e) => {
        e.classList.remove("active");
      });
      event.target.classList.toggle("active");
    };

    return { setActive, scroll, store };
  },
};
</script>
