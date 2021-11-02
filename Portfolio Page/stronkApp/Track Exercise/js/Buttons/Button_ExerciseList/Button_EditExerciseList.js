"use strict";

const btn_Edit_ExerciseList = document.querySelector(
  ".btn--edit-exercise-list"
);
const btn_DeleteExerciseListItems = document.querySelector(
  ".btn--delete-exercise"
);

btn_Edit_ExerciseList.addEventListener("click", function () {
  console.log(`clicked`);
  btn_DeleteExerciseListItems.classList.toggle("hidden");
});
