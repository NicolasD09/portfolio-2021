export const addClass = (target, elem, threshold) => {
  let observer = new IntersectionObserver(
    (observables) => {
      observables.forEach((observable) => {
        let myElem = document.querySelector(target);
        if (observable.intersectionRatio > threshold) {
          myElem.classList.add('active');
        } else {
          myElem.classList.remove('active')
        }
      });
    },
    { threshold: [threshold] }
  );
  observer.observe(elem);
};

