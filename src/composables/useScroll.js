import VueScrollTo from "vue-scrollto";
const options = {
  container: "body",
  duration: 500,
  easing: [0.4,0.96,0.63,0.9],
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
};

const scroll = (el, dur) => {
  VueScrollTo.scrollTo(el, dur, options);
};


export default scroll;
