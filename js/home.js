var swiper = new Swiper(".sliderBanners", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document
  .querySelector("button.fotocheck")
  .addEventListener("click", function () {
    document.querySelector(".modalFotocheck").classList.add("active");
    document.querySelector("body").classList.add("scrollHidden");
  });

document
  .querySelector(".modalFotocheck .close")
  .addEventListener("click", function () {
    document.querySelector(".modalFotocheck").classList.remove("active");
    document.querySelector("body").classList.remove("scrollHidden");
  });
