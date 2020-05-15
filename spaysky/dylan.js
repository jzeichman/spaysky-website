const sticks = document.querySelector(".sticksBtn");
const wicker = document.querySelector(".wickerBtn");
const imageTrack = document.querySelector(".image-track-container");
const modalClose = document.querySelector(".modal-close ");

wicker.addEventListener("click", function () {
  imageTrack.classList.add("show");
});

sticks.addEventListener("click", function () {
  imageTrack.classList.add("show");
});

modalClose.addEventListener("click", function () {
  imageTrack.classList.remove("show");
});
const modalPrev = document.querySelector(".modalPrev");
const modalNext = document.querySelector(".modalNext");
let counter = 0;
const stickPics = document.querySelectorAll(".stickPics");
const wickerPics = document.querySelectorAll(".wickerPics");

modalNext.addEventListener("click", function () {
  let currentSlide = stickPics[counter];
  currentSlide.classList.remove("show");
  counter++;

  if (counter > stickPics.length - 1) {
    counter = 0;
  }
  stickPics[counter].classList.add("show");
});
