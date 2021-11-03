"use strict";

// Sets Input
const restEdit_Radio = document.querySelector(".rest-edit-radio");
const restMinEdit_Input = document.querySelector(".restMin-edit-input");
const restSecEdit_Input = document.querySelector(".restSec-edit-input");

// Label
const labelRest = document.querySelector(".label-rest");

// Button
const btn_EditRest = document.querySelector(".btn--edit-rest");

btn_EditRest.addEventListener("click", function () {
  labelRest.innerHTML = `Rest: ${restMinEdit_Input.value}m ${restSecEdit_Input.value}s`;
  restMinEdit_Input.classList.toggle("hidden");
  restSecEdit_Input.classList.toggle("hidden");
  btn_EditRest.classList.toggle("hidden");
  restEdit_Radio.checked = false;
});
