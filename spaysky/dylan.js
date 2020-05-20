const stickBtn = document.querySelector(".sticksBtn");
const wickerBtn = document.querySelector(".wickerBtn");
const imageTrack = document.querySelector(".image-track-container");
let workBtns = document.querySelectorAll(".workBtn");
const stickPics = document.querySelectorAll(".stickPics");
const wickerPics = document.querySelectorAll(".wickerPics");
const stickGallery = document.querySelector(".stick-window");
const wickerGallery = document.querySelector(".wicker-window");
// galleries created as array to loop through and remove show when closing modal
const galleries = document.querySelectorAll(".gallery");
// event listeners for buttons

workBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    imageTrack.classList.add("show");

    let work = event.target;
    work.classList.add("show");

    if (work === stickBtn) {
      stickGallery.classList.add("show");
      stickGallery.classList.add("currentGallery");
    } else if (work === wickerBtn) {
      console.log("buns");

      wickerGallery.classList.add("show");
      wickerGallery.classList.add("currentGallery");
    }
  });
});

//modal buttons

const modalPrev = document.querySelector(".modalPrev");
const modalNext = document.querySelector(".modalNext");
let counter = 0;
const modalClose = document.querySelector(".modal-close ");

//modal buttons eventlisteners
// added classlist of current gallery to use to create variable to move slides
// instead of stickPics it needs to be a variable
modalNext.addEventListener("click", function () {
  if (1 > 0) {
    console.log("burp");
  }
  let currentSlide = stickPics[counter];
  currentSlide.classList.remove("show");
  counter++;

  if (counter > stickPics.length - 1) {
    counter = 0;
  }
  stickPics[counter].classList.add("show");
});
// modalNext.addEventListener("click", function () {
//   let currentSlide = stickPics[counter];
//   currentSlide.classList.remove("show");
//   counter++;

//   if (counter > stickPics.length - 1) {
//     counter = 0;
//   }
//   stickPics[counter].classList.add("show");
// });

modalPrev.addEventListener("click", function () {
  let currentSlide = stickPics[counter];
  currentSlide.classList.remove("show");
  counter--;

  if (counter < 0) {
    counter = stickPics.length - 1;
  }
  stickPics[counter].classList.add("show");
});
modalClose.addEventListener("click", function () {
  imageTrack.classList.remove("show");
  galleries.forEach(function (gallery) {
    gallery.classList.remove("show");
    gallery.classList.remove("currentGallery");
  });
});
