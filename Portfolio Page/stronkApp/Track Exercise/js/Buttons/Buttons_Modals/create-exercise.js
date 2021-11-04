"use strict";

// Arrays

const exerciseWordBank = [];
const exercises_Barbell = [];
const exercises_Body = [];
const exercises_Dumbbell = [];
const exercises_Rope = [];

// Input variables
const exerciseWordBank_Input = document.querySelector(
  ".input--exerciseStorage"
);
const exerciseStorage_P = document.querySelector(".p--exerciseStorage");

// Options
const option_Barbell = document.querySelector(".barbell");
const option_Body = document.querySelector(".body");
const option_Rope = document.querySelector(".rope");
const option_Dumbbell = document.querySelector(".dumbbell");

// Container
const containerExerciseStorage = document.querySelector(
  ".container--exerciseStorage"
);

// Close create exercise modal
const btn_CloseExerciseStorageModal = document.querySelector(
  ".btn--close-exerciseStorage"
);
btn_CloseExerciseStorageModal.addEventListener("click", function () {
  containerExerciseStorage.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

// Toggle create exercise modal
const btn_ToggleCreateExerciseModal = document.querySelector(
  ".btn--open-create-exercise-modal"
);

btn_ToggleCreateExerciseModal.addEventListener("click", function () {
  containerExerciseStorage.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

// Push to Exercise Name Storage
const btn_PushToWordBank = document.querySelector(
  ".btn--add-to-exercise-storage"
);
btn_PushToWordBank.addEventListener("click", function () {
  // exerciseWordBank.push(exerciseWordBank_Input.value);
  if (option_Barbell.selected) {
    exercises_Barbell.push(exerciseWordBank_Input.value);
    localStorage.barbellExercises = JSON.stringify(exercises_Barbell);
    console.log(JSON.parse(localStorage.barbellExercises));
  } else if (option_Dumbbell.selected) {
    exercises_Dumbbell.push(exerciseWordBank_Input.value);
    localStorage.dumbbellExercises = JSON.stringify(exercises_Dumbbell);
    console.log(JSON.parse(localStorage.dumbbellExercises));
  } else if (option_Body.selected) {
    exercises_Body.push(exerciseWordBank_Input.value);
    localStorage.bodyExercises = JSON.stringify(exercises_Body);
    console.log(JSON.parse(localStorage.bodyExercises));
  } else if (option_Rope.selected) {
    exercises_Rope.push(exerciseWordBank_Input.value);
    localStorage.ropeExercises = JSON.stringify(exercises_Rope);
    console.log(JSON.parse(localStorage.ropeExercises));
  }
  // localStorage.wordBank = JSON.stringify(exerciseWordBank);
  exerciseWordBank_Input.value = "";
});

const push_localStorage = function (x) {
  localStorage.testBank = JSON.stringify(x);
  console.log(JSON.parse(localStorage.testBank));
};

const exerciseListActiveState = [0, 0];

// let activeState, exercising;

// const init = function () {
//   activeState = 0;
//   exercising = true;
//   activeModal
// };
