"use strict";

const exercise_List = document.querySelector(".exercise-list");
const exercise_List_P = document.querySelector(".exercise-list-p");
const exercise_List_Hint = document.querySelector(".exercise-list-hint");
const exerciseList_Container = document.querySelector(".exercise-list");
const btn_toggleExerciseList = document.querySelector(".btn--exercise-list");
const radio_ExerciseList = document.getElementsByClassName(
  "exercise-list-radio"
);

btn_toggleExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  if (exerciseGroup.name.length === 0) {
    exercise_List_P.classList.remove("hidden");
    exercise_List_Hint.classList.remove("hidden");
  } else if (exerciseGroup.name.length > 0) {
    exercise_List_P.classList.add("hidden");
    exercise_List_Hint.classList.add("hidden");
  }
});
