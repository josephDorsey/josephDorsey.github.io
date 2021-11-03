"use strict";
// Exercise
const exerciseEdit_Radio = document.querySelector(".exercise-edit-radio");
const exerciseEdit_Input = document.querySelector(".exercise-edit-input");
const labelExercise = document.querySelector(".label-exercise");
const btn_EditExercise = document.querySelector(".btn--edit-exercise");
btn_EditExercise.addEventListener("click", function () {
  labelExercise.innerHTML = `Exercise: ${exerciseEdit_Input.value}`;
  exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseEdit_Input.value}`;
  exerciseEdit_Input.classList.toggle("hidden");
  btn_EditExercise.classList.toggle("hidden");
  exerciseEdit_Radio.checked = false;
});

// Reps
const repsEdit_Radio = document.querySelector(".reps-edit-radio");
const repsEdit_Input = document.querySelector(".reps-edit-input");
const labelReps = document.querySelector(".label-reps");
const btn_EditReps = document.querySelector(".btn--edit-reps");
btn_EditReps.addEventListener("click", function () {
  labelReps.innerHTML = `Reps: ${repsEdit_Input.value}`;
  repsEdit_Input.classList.toggle("hidden");
  btn_EditReps.classList.toggle("hidden");
  repsEdit_Radio.checked = false;
});

// Sets
const setsEdit_Radio = document.querySelector(".sets-edit-radio");
const setsMinEdit_Input = document.querySelector(".setsMin-edit-input");
const setsMaxEdit_Input = document.querySelector(".setsMax-edit-input");
const labelSets = document.querySelector(".label-sets");
const btn_EditSets = document.querySelector(".btn--edit-sets");
btn_EditSets.addEventListener("click", function () {
  labelSets.innerHTML = `Set: ${setsMinEdit_Input.value} / ${setsMaxEdit_Input.value}`;
  setsMinEdit_Input.classList.toggle("hidden");
  setsMaxEdit_Input.classList.toggle("hidden");
  btn_EditSets.classList.toggle("hidden");
  setsEdit_Radio.checked = false;
});

// Rest
const restEdit_Radio = document.querySelector(".rest-edit-radio");
const restMinEdit_Input = document.querySelector(".restMin-edit-input");
const restSecEdit_Input = document.querySelector(".restSec-edit-input");
const labelRest = document.querySelector(".label-rest");
const btn_EditRest = document.querySelector(".btn--edit-rest");
btn_EditRest.addEventListener("click", function () {
  labelRest.innerHTML = `Rest: ${restMinEdit_Input.value}m ${restSecEdit_Input.value}s`;
  restMinEdit_Input.classList.toggle("hidden");
  restSecEdit_Input.classList.toggle("hidden");
  btn_EditRest.classList.toggle("hidden");
  restEdit_Radio.checked = false;
});

// Weight
const weightEdit_Radio = document.querySelector(".weight-edit-radio");
const weightEdit_Input = document.querySelector(".weight-edit-input");
const btn_EditWeight = document.querySelector(".btn--edit-weight");
const labelWeight = document.querySelector(".label-weight");

btn_EditWeight.addEventListener("click", function () {
  labelWeight.innerHTML = `Weight: ${weightEdit_Input.value}-lbs`;
  weightEdit_Input.classList.toggle("hidden");
  btn_EditWeight.classList.toggle("hidden");
  weightEdit_Radio.checked = false;
});

// Next Set
const btn_NextSet = document.querySelector(".btn--next-set");
const labelNextSet = document.querySelector(".label-btn-next-set");
