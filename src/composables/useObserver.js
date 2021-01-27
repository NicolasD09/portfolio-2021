export const addClass = (target, elem, threshold) => {
  let observer = new IntersectionObserver(
    (observables) => {
      observables.forEach((observable) => {
        let myElem = document.querySelector(target);
        if (observable.intersectionRatio > threshold) {
          myElem.classList.add("active");
        } else {
          myElem.classList.remove("active");
        }
      });
    },
    { threshold: [threshold] }
  );
  observer.observe(elem);
};

export const addClasses = (_) => {
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
};
