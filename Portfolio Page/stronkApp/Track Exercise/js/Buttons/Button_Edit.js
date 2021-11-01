"use strict";

const btn_EditSelect = document.querySelector(".btn--edit-select");

btn_EditSelect.addEventListener("click", function () {
  repsEdit_Radio.classList.toggle("hidden");
  setsEdit_Radio.classList.toggle("hidden");
  weightEdit_Radio.classList.toggle("hidden");
  exerciseEdit_Radio.classList.toggle("hidden");
  restEdit_Radio.classList.toggle("hidden");
  repsEdit_Radio.checked = false;
  setsEdit_Radio.checked = false;
  weightEdit_Radio.checked = false;
  exerciseEdit_Radio.checked = false;
  restEdit_Radio.checked = false;
});

const editExerciseFunc = function () {
  if (repsEdit_Radio.checked) {
    labelReps.innerHTML = `Reps:`;
    repsEdit_Input.classList.remove("hidden");
    btn_EditReps.classList.remove("hidden");
  }
  if (setsEdit_Radio.checked) {
    labelSets.innerHTML = `Set:`;
    setsMinEdit_Input.classList.remove("hidden");
    setsMaxEdit_Input.classList.remove("hidden");
    btn_EditSets.classList.remove("hidden");
  }
  if (weightEdit_Radio.checked) {
    labelWeight.innerHTML = `Weight: `;
    weightEdit_Input.classList.remove("hidden");
    btn_EditWeight.classList.remove("hidden");
  }
  if (exerciseEdit_Radio.checked) {
    labelExercise.innerHTML = `Exercise: `;
    exerciseEdit_Input.classList.remove("hidden");
    btn_EditExercise.classList.remove("hidden");
  }
  if (restEdit_Radio.checked) {
    labelRest.innerHTML = `Rest:`;
    restMinEdit_Input.classList.remove("hidden");
    restSecEdit_Input.classList.remove("hidden");
    btn_EditRest.classList.remove("hidden");
  }
};

const resetEditFunc = function () {
  repsEdit_Input.classList.toggle("hidden");
  btn_EditReps.classList.toggle("hidden");
  setsMinEdit_Input.classList.toggle("hidden");
  setsMaxEdit_Input.classList.toggle("hidden");
  btn_EditSets.classList.toggle("hidden");
  weightEdit_Input.classList.toggle("hidden");
  btn_EditWeight.classList.toggle("hidden");
  exerciseEdit_Input.classList.toggle("hidden");
  btn_EditExercise.classList.toggle("hidden");
  restMinEdit_Input.classList.toggle("hidden");
  restSecEdit_Input.classList.toggle("hidden");
  btn_EditRest.classList.toggle("hidden");
};
document.addEventListener("click", editExerciseFunc);
