const loveSection = document.querySelector(".love");
const desireSection = document.querySelector(".desire");

if (loveSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loveSection.classList.add("is-active");
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(loveSection);
}

if (desireSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        desireSection.classList.add("is-active");
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(desireSection);
}
