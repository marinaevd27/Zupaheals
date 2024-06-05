"use strict";

const mobileBottons = document.querySelector(".header__mobile");
const body = document.body;
const mobileMenu = document.querySelector(".header__menu");
console.log(mobileBottons);

mobileBottons.addEventListener("click", mobileHandler);
function mobileHandler() {
  body.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  mobileBottons.classList.toggle("active");
}
