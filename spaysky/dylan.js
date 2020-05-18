const stickBtn = document.querySelector(".sticksBtn");
const wickerBtn = document.querySelector(".wickerBtn");
const imageTrack = document.querySelector(".image-track-container");
let workBtns = document.querySelectorAll(".workBtn");
const stickPics = document.querySelectorAll(".stickPics");
const wickerPics = document.querySelectorAll(".wickerPics");
const stickGallery = document.querySelector(".stick-window");
const wickerGallery = document.querySelector(".wicker-window");
// event listeners for buttons

workBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    imageTrack.classList.add("show");
    let work = event.target;
    if (work === stickBtn) {
      stickGallery.classList.add("show");
    } else if (work === wickerBtn) {
      console.log("buns");
      stickGallery.classList.remove("show");
      wickerGallery.classList.add("show");
    }
  });
});

//modal buttons

const modalPrev = document.querySelector(".modalPrev");
const modalNext = document.querySelector(".modalNext");
let counter = 0;
const modalClose = document.querySelector(".modal-close ");

//modal buttons eventlisteners

modalNext.addEventListener("click", function () {
  let currentSlide = stickPics[counter];
  currentSlide.classList.remove("show");
  counter++;

  if (counter > stickPics.length - 1) {
    counter = 0;
  }
  stickPics[counter].classList.add("show");
});
modalClose.addEventListener("click", function () {
  imageTrack.classList.remove("show");
});
