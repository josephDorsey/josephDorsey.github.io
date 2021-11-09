"use strict";

const btn_deleteExerciseStorage = document.querySelector(
  ".btn--delete-exercise-storage"
);
const btn_EditExerciseStorage = document.querySelector(
  ".btn--edit-exercise-storage"
);
const btn_ExitEditStorage = document.querySelector(
  ".btn--exit-edit-exercise-storage"
);
btn_EditExerciseStorage.addEventListener("click", function () {
  editExercises_Modal = true;
  createExercises_Modal = false;
  addExercises_Modal = false;
  select_Equipment.selectedIndex = 0;
  btn_ExitEditStorage.classList.remove("hidden");
  btn_deleteExerciseStorage.classList.remove("hidden");
  btn_PushToWordBank.classList.add("hidden");
  exerciseStorage_Title.innerHTML = `Edit Mode`;
  btn_linkAddExercise.classList.add("hidden");
  btn_linkCreateExercise.classList.add("hidden");
  btn_EditExerciseStorage.classList.add("hidden");
  btn_CloseExerciseInfoModal.classList.add("hidden");
});

btn_ExitEditStorage.addEventListener("click", function () {
  editExercises_Modal = false;
  createExercises_Modal = true;
  select_Equipment.selectedIndex = 0;
  btn_ExitEditStorage.classList.add("hidden");
  btn_deleteExerciseStorage.classList.add("hidden");
  btn_PushToWordBank.classList.remove("hidden");

  btn_linkAddExercise.classList.remove("hidden");
  btn_linkCreateExercise.classList.remove("hidden");
  btn_EditExerciseStorage.classList.remove("hidden");
  exerciseStorage_Title.innerHTML = `Create new exercise`;
  btn_CloseExerciseInfoModal.classList.remove("hidden");
});
