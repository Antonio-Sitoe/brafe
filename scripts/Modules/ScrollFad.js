export default function ScrollFad(selector) {
  const Animation = function () {
    const allSections = document.querySelectorAll(selector);

    const windowHeight = window.innerHeight * 0.6;

    allSections.forEach((section) => {
      const rect = section.getBoundingClientRect().top;
      const condition = rect - windowHeight < 0;

      if (condition) {
        section.classList.add("ative");
        section.classList.remove("leave");
      } else {
        section.classList.remove("ative");
        section.classList.add("leave");
      }
    });
  };

  window.addEventListener("scroll", Animation);

  return { selector };
}
