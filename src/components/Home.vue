<template>
  <div ref="loader" class="loader__container bg-orange">
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
</template>

<script>
import Hero from "./Hero.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import Projects from "./Projects.vue";
import Technologies from "./Technologies.vue";
import Contact from "./Contact.vue";
import FullPageLoader from "./FullPageLoader.vue";

import { addClass } from "../composables/useObserver.js";
import store from "../store/store.js";

import scroll from "../composables/useScroll.js";
import { ArrowUpCircleIcon } from "@zhuowenli/vue-feather-icons";
import { TimelineMax, Power4 } from "gsap";
import FloatingNav from "./FloatingNav.vue";

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
    const { loader } = this.$refs;
    const tl = new TimelineMax();

    setTimeout(() => {
      tl.to(loader, {
        clipPath: "circle(0%)",
        duration: 1.3,
        ease: Power4.easeOut,
      });
    }, 1000);

    addClass("#home__icon", document.querySelector(".hero__container"), 0.5);
    addClass(
      "#projects__icon",
      document.querySelector(".projects__container"),
      0.5
    );
    addClass("#tech__icon", document.querySelector(".tech__container"), 0.5);
    addClass(
      "#contact__icon",
      document.querySelector(".contact__container"),
      0.5
    );
  },
};
</script>
