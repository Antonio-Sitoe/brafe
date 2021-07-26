export default function ScrollAnimation(selector) {
  const handleClick = (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href");
    const el = document.querySelector(id);

    el.scrollIntoView({ behavior: "smooth" });
  };

  const links = document.querySelectorAll(selector);

  for (let link of links) {
    link.addEventListener("click", handleClick);
  }

  return { selector, handleClick };
}
