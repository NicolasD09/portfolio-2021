import VueScrollTo from "vue-scrollto";
const options = {
  container: "body",
  // easing: [0.49,-0.07,0.79,1.01],
  // easing: [0.23,0.02,0.48,1],
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: false,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
};

const scroll = (el, dur = 1200) => {
  VueScrollTo.scrollTo(el, dur, options);
};


export default scroll;
