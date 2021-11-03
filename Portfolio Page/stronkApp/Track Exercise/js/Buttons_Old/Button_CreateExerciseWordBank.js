"use strict";

const exerciseWordBank = [];
const exerciseWordBank_Input = document.querySelector(
  ".input--exerciseStorage"
);
const exerciseStorage_P = document.querySelector(".p--exerciseStorage");
const btn_PushToWordBank = document.querySelector(
  ".btn--add-to-exercise-storage"
);
const btn_CloseExerciseStorageModal = document.querySelector(
  ".btn--close-exerciseStorage"
);
const btn_ToggleCreateExerciseModal = document.querySelector(
  ".btn--open-create-exercise-modal"
);
const containerExerciseStorage = document.querySelector(
  ".container--exerciseStorage"
);
btn_CloseExerciseStorageModal.addEventListener("click", function () {
  containerExerciseStorage.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

btn_ToggleCreateExerciseModal.addEventListener("click", function () {
  containerExerciseStorage.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});
btn_PushToWordBank.addEventListener("click", function () {
  exerciseWordBank.push(exerciseWordBank_Input.value);
  // if (option_Barbell.selected) {
  //   localStorage.barbellExercises = JSON.stringify(exerciseWordBank);
  //   console.log(JSON.parse(localStorage.barbellExercises));
  // } else if (option_Dumbbell.selected) {
  //   localStorage.dumbbellExercises = JSON.stringify(exerciseWordBank);
  //   console.log(JSON.parse(localStorage.dumbbellExercises));
  // } else if (option_Body.selected) {
  //   localStorage.bodyExercises = JSON.stringify(exerciseWordBank);
  //   console.log(JSON.parse(localStorage.bodyExercises));
  // } else if (option_Rope.selected) {
  //   localStorage.ropeExercises = JSON.stringify(exerciseWordBank);
  //   console.log(JSON.parse(localStorage.ropeExercises));
  // }
  localStorage.wordBank = JSON.stringify(exerciseWordBank);
  exerciseWordBank_Input.value = "";
  console.log(exerciseWordBank, JSON.parse(localStorage.wordBank));
});

const push_localStorage = function (x) {
  localStorage.testBank = JSON.stringify(x);
  console.log(JSON.parse(localStorage.testBank));
};
