"use strict";

const btn_CloseExerciseInfoModal = document.querySelector(
  ".btn--close-exercise-info"
);
const btn_OpenExerciseInfoModal = document.querySelector(
  ".btn--open-add-exercise-modal"
);

btn_CloseExerciseInfoModal.addEventListener("click", function () {
  container_ExerciseInfo.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

btn_OpenExerciseInfoModal.addEventListener("click", function () {
  container_ExerciseInfo.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});
