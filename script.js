const header = document.getElementById("header");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 80);

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach(link => link.classList.remove("active"));
      document
        .querySelector(`.nav-links a[href="#${id}"]`)
        .classList.add("active");
    }
  });
});