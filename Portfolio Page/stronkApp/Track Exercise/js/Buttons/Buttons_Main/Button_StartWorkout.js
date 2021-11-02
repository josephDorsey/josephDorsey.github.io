"use strict";
const activeModalContainer = document.querySelector(".modal-exercise-info");
const btn_StartWorkout = document.querySelector(".btn--startWorkout");
btn_StartWorkout.addEventListener("click", function () {
  activeModalContainer.classList.toggle("hidden");
  console.log(`clicked`);
});
