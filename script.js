//<<<----CAROUSEL---->>>

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  breakpoints: {
    1100: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
// adding the keypress event so that the carousel can we swiped using arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    swiper.slideNext();
  } else if (e.key === "ArrowLeft") {
    swiper.slidePrev();
  }
});

//<<<----VIDEO-PLAY---->>>
const video = document.querySelector("#video");
const videoContaier = document.querySelector(".video-container");
const playBtn = document.querySelector(".play-button");
videoContaier.addEventListener("click", (e) => {
  if (e.target.closest(".play-button")) {
    video.play();
    playBtn.classList.add("isHidden");
  } else {
    video.pause();
    playBtn.classList.remove("isHidden");
  }
});

//<<<----REQUEST DISH MODAL---->>>

const modal = document.querySelector("#requestDishModal");
const requestDishBtn = document.querySelector(".request-btn");
const requestForm = document.querySelector("#dishForm");
const dishNameInput = requestForm.querySelector(".dish-name");
const dishQuantityInput = requestForm.querySelector(".dish-quantity");
const dishDescriptionn = requestForm.querySelector(".dish-description");

//request button handler
function requestBtnEventHandler(e) {
  modal.classList.toggle("isHidden");
  document.body.classList.toggle("modal-open");
}
requestDishBtn.addEventListener("click", requestBtnEventHandler);

//hide the modal clicking on either sumbit/cancel or the overlay
modal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("dishModalBtn") ||
    e.target.classList.contains("modal")
  ) {
    e.preventDefault();
    modal.classList.add("isHidden");
    document.body.classList.remove("modal-open");
    // clearing the input fields while closing it
    dishNameInput.value = "";
    dishQuantityInput.value = "";
    dishDescriptionn.value = "";
  }
});

// <<---HAMBURGER--->>>

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navLinks = document.querySelector(".nav-links");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  navLinks.classList.toggle("visible");
});
