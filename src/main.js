import { createApp } from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/fonts.css";
import "./assets/styles/transitions.css";
import "./assets/styles/global.css";

createApp(App)
  .use(router)
  .use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  })
  .mount("#app");
