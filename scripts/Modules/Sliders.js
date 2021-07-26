export default function Sliders() {
  const ps = document.querySelectorAll(".slides p");
  const dots = document.querySelectorAll(".dot");

  const show = "show";
  ps[0].classList.add(show);

  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => currentSlide(index))
  );

  function currentSlide(n) {
    ps.forEach((item) => item.classList.remove(show));
    ps[n].classList.add(show);
  }

  let i = 0;
  setInterval(() => {
    if (i > 2) {
      i = 0;
    }
    currentSlide(i);

    i++;
  }, 6000);
}
