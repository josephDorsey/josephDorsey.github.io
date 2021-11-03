"use strict";

// Input
const repsEdit_Radio = document.querySelector(".reps-edit-radio");
const repsEdit_Input = document.querySelector(".reps-edit-input");

// Label
const labelReps = document.querySelector(".label-reps");
// Button
const btn_EditReps = document.querySelector(".btn--edit-reps");

btn_EditReps.addEventListener("click", function () {
  labelReps.innerHTML = `Reps: ${repsEdit_Input.value}`;
  repsEdit_Input.classList.toggle("hidden");
  btn_EditReps.classList.toggle("hidden");
  repsEdit_Radio.checked = false;
});
