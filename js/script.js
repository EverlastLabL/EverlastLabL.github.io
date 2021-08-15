"use strict";
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
$(document).ready(function () {
  $(".specialization__wrapper_carousel").owlCarousel({
    items: 5,
    loop: true,
    nav: true,
    navText: true,
    dots: false,
    margin: 30
  })
  var service = $(".services__wrapper__carousel")
  service.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
  });
  $(".service__prev").click(function () {
    service.trigger("next.owl.carousel");
  });
  $(".service__next").click(function () {
    service.trigger("prev.owl.carousel");
  });
});
