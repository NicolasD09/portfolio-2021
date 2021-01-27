<template>
  <div class="wrapper">
    <div ref="loader" class="loader__container bg-orange" data-scroll-section>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <floating-nav />

    <a
      href="#"
      @click="
        scroll('.loader__container', 500);
        resetActive(link, $event);
      "
    >
      <arrow-up-circle-icon size="40" class="back-to-top__icon text-purple" />
    </a>
    <LanguageSwitch />
    <Hero />
    <Projects />
    <Technologies />
    <Contact />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import Projects from "./Projects.vue";
import Technologies from "./Technologies.vue";
import Contact from "./Contact.vue";
import FullPageLoader from "./FullPageLoader.vue";
import FloatingNav from "./FloatingNav.vue";

import store from "../store/store.js";

import { ArrowUpCircleIcon } from "@zhuowenli/vue-feather-icons";

import scroll from "../composables/useScroll.js";
import { addClasses } from "../composables/useObserver.js";
import { animate } from "../composables/useAnimations";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Hero,
    LanguageSwitch,
    Projects,
    Technologies,
    Contact,
    ArrowUpCircleIcon,
    FullPageLoader,
    FloatingNav,
    store,
  },
  setup() {
    const resetActive = (link, event) => {
      let links = document.querySelectorAll(".active");
      links.forEach((e) => {
        e.classList.remove("active");
      });
    };

    return { scroll, resetActive, store };
  },
  mounted() {
    animate();
    addClasses();
  },
};
</script>
