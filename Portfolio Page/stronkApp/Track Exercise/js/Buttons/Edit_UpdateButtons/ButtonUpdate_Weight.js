"use strict";
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
