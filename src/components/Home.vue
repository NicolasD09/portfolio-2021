<template>
  <a href="#" @click="scroll('#language-switch', 500)">
    <arrow-up-circle-icon size="40" class="back-to-top__icon text-purple" />
  </a>
  <LanguageSwitch id="language-switch"/>
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

import scroll from '../composables/useScroll.js'
import { ArrowUpCircleIcon } from "@zhuowenli/vue-feather-icons";

export default {
  setup(){
    return {scroll}
  },
  components: {
    Hero,
    LanguageSwitch,
    Projects,
    Technologies,
    Contact,
    ArrowUpCircleIcon
  },
};
</script>
