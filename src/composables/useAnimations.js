import { TimelineMax, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl = new TimelineMax();

export const animate = () => {
  tl.to(".loader__container", {
    clipPath: "circle(0%)",
    duration: 1.3,
    ease: Power4.easeOut,
    delay: 1,
  })
    .from(
      ".hero__anim",
      {
        translateY: 30,
        opacity: 0,
        stagger: 0.3,
        duration: 0.5
      },
    )
    .to(".hero__container__anim", {
      translateY: "-130px",
      scale: 0.9,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects__container",
        start: "top bottom",
        end: "+=500",
        scrub: true,
      },
    });
};
