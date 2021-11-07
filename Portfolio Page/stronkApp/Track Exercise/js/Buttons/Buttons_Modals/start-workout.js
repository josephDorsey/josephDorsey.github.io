"use strict";

const activeModalContainer = document.querySelector(".modal-exercise-info");
const btn_StartWorkout = document.querySelector(".btn--startWorkout");

const btn_CloseActiveModal = document.querySelector(".btn--close-activeModal");

btn_StartWorkout.addEventListener("click", function () {
  mainNav_Style();
  activeModalContainer.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
  console.log(`clicked`);
});

btn_CloseActiveModal.addEventListener("click", function () {
  mainNav_Style();
  activeModalContainer.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});
