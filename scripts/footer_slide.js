const nav_links = document.querySelectorAll(".js-nav_link");
const footer = document.querySelector(".js-footer");

[...nav_links].forEach((element) => {
  element.addEventListener("focusin", () => {
    footer.classList.add("slide");
  });
  element.addEventListener("focusout", () => {
    footer.classList.remove("slide");
  });
});