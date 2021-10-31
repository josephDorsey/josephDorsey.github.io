"use strict";

const exerciseList_Container = document.querySelector(".exercise-list");
const btn_toggleExerciseList = document.querySelector(".btn--exercise-list");

btn_toggleExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
});
