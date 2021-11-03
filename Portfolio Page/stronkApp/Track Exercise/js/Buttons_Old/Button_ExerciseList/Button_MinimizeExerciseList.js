"use strict";

const btn_CloseExerciseList = document.querySelector(
  ".btn--close-exercise-list"
);
const btn_ReturnToActiveModal = document.querySelector(
  ".btn--return-to-activeModal"
);

btn_ReturnToActiveModal.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  activeModalContainer.classList.toggle("hidden");
  if (exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "0";
  } else if (!exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "10px";
  }
});

btn_CloseExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});
