"use strict";

const btn_MinimizeExerciseList = document.querySelector(
  ".btn--close-exercise-list"
);

btn_MinimizeExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
});
