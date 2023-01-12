const menu = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
