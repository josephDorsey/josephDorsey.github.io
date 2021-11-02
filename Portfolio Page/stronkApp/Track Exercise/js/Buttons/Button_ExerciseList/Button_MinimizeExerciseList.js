"use strict";

const btn_MinimizeExerciseList = document.querySelector(
  ".btn--close-exercise-list"
);

btn_MinimizeExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  if (exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "0";
  } else if (!exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "10px";
  }
});
