const humburger = document.querySelector(".humburger");
const mobileMenu = document.querySelector(".mopile-menu");
const icons = document.querySelectorAll("i");

humburger.addEventListener("click", function (event) {
  const isVisible = mobileMenu.getAttribute("data-visible");
  if (isVisible == "true") {
    // qari hiding
    mobileMenu.setAttribute("data-visible", "false");
    icons[0].setAttribute("data-visible", "true");
    icons[1].setAttribute("data-visible", "false");
  } else if (isVisible == "false") {
    // soo bandhig showing
    mobileMenu.setAttribute("data-visible", "true");
    icons[0].setAttribute("data-visible", "false");
    icons[1].setAttribute("data-visible", "true");
  }
});
