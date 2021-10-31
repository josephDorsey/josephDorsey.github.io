"use strict";
// Exercise Input
const exerciseEdit_Radio = document.querySelector(".exercise-edit-radio");
const exerciseEdit_Input = document.querySelector(".exercise-edit-input");

// Exercise Label
const labelExercise = document.querySelector(".label-exercise");

const btn_EditExercise = document.querySelector(".btn--edit-exercise");

btn_EditExercise.addEventListener("click", function () {
  labelExercise.innerHTML = `Exercise: ${exerciseEdit_Input.value}`;
  exerciseEdit_Input.classList.toggle("hidden");
  btn_EditExercise.classList.toggle("hidden");
  exerciseEdit_Radio.checked = false;
});
