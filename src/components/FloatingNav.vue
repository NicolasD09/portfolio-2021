<template>
  <div class="floating-nav__container">
    <ul class="floating-nav__list__container">
      <li
        id="home__icon"
        class="floating-nav__list__item"
        @click="
          scroll(`.hero__container`, 500);
          setActive(link, $event);
        "
      >
        <home-icon size="30" />
      </li>
      <li
        id="projects__icon"
        class="floating-nav__list__item"
        @click="
          scroll(`#Mes-projets`, 500);
          setActive(link, $event);
        "
      >
        <code-icon size="30" />
      </li>
      <li
        id="tech__icon"
        class="floating-nav__list__item"
        @click="
          scroll(`#Technologies`, 500);
          setActive(link, $event);
        "
      >
        <terminal-icon size="30" />
      </li>
      <li
        id="contact__icon"
        class="floating-nav__list__item"
        @click="
          scroll(`#Me-contacter`, 500);
          setActive(link, $event);
        "
      >
        <send-icon size="30" />
      </li>
    </ul>
  </div>
</template>

<script>
import scroll from "../composables/useScroll.js";
import {
  TerminalIcon,
  CodeIcon,
  SendIcon,
  HomeIcon,
} from "@zhuowenli/vue-feather-icons";
import store from "../store/store.js";

export default {
  setup() {
    const setActive = (link, event) => {
      let links = document.querySelectorAll(".floating-nav__list__item");
      links.forEach((e) => {
        e.classList.remove("active");
      });
      if (!event.target.classList.contains("active")) {
        event.target.classList.add("active");
      }
    };
    return {
      TerminalIcon,
      CodeIcon,
      SendIcon,
      scroll,
      setActive,
      HomeIcon,
      store,
    };
  },
};
</script>
