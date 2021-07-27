const hamburgerBtn = document.querySelector(".hamburger-menu");
const crossBtn = document.querySelector(".cross");
const mobileHeader = document.querySelector(".mobile-header");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerBtn.addEventListener("click", function (event) {
  mobileMenu.classList.toggle("d-block");
});

crossBtn.addEventListener("click", function (event) {
  mobileMenu.classList.toggle("d-block");
});
