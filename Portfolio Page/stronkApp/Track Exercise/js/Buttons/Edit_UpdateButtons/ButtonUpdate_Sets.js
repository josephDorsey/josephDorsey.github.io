"use strict";
// Sets Input
const setsEdit_Radio = document.querySelector(".sets-edit-radio");
const setsMinEdit_Input = document.querySelector(".setsMin-edit-input");
const setsMaxEdit_Input = document.querySelector(".setsMax-edit-input");

// Label
const labelSets = document.querySelector(".label-sets");

// Button
const btn_EditSets = document.querySelector(".btn--edit-sets");

btn_EditSets.addEventListener("click", function () {
  labelSets.innerHTML = `Set: ${setsMinEdit_Input.value} / ${setsMaxEdit_Input.value}`;
  setsMinEdit_Input.classList.toggle("hidden");
  setsMaxEdit_Input.classList.toggle("hidden");
  btn_EditSets.classList.toggle("hidden");
  setsEdit_Radio.checked = false;
});
