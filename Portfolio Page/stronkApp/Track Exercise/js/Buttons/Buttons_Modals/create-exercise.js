"use strict";

// Arrays

const exerciseWordBank = [];
// let exercises_Barbell = [];
// let exercises_Body = [];
// let exercises_Dumbbell = [];
// let exercises_Rope = [];

// Input variables
const exerciseWordBank_Input = document.querySelector(
  ".input--exerciseStorage"
);
const exerciseStorage_Title = document.querySelector(".title--exerciseStorage");

// Options
const option_Barbell = document.querySelector(".barbell");
const option_Body = document.querySelector(".body");
const option_Rope = document.querySelector(".rope");
const option_Dumbbell = document.querySelector(".dumbbell");
const select_Equipment = document.querySelector(".select--equipment");
// Container
const containerExerciseStorage = document.querySelector(
  ".container--exerciseStorage"
);
const buttons_AddExerciseModal = document.getElementsByClassName("btn");
// Push to Exercise Name Storage
const btn_PushToWordBank = document.querySelector(
  ".btn--add-to-exercise-storage"
);

// const createDumbbellExercise = function (name) {
//   window.localStorage.setItem("Dumbbell Exercise", name);

//   exercises_Dumbbell.push(localStorage.getItem("Dumbbell Exercise"));
//   localStorage.setItem(
//     "exercises_Dumbbell",
//     JSON.stringify(exercises_Dumbbell)
//   );
// };

// localStorage.setItem("exercises_Dumbbell", JSON.stringify(exercises_Dumbbell));
// localStorage.setItem("exercises_Barbell", JSON.stringify(exercises_Barbell));
// localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));
// localStorage.setItem("exercises_Body", JSON.stringify(exercises_Body));

// parsed_Exercises();

btn_PushToWordBank.addEventListener("click", function () {
  const createOption = document.createElement("option");
  // exerciseWordBank.push(exerciseWordBank_Input.value);
  if (option_Barbell.selected) {
    exercises_Barbell.push(exerciseWordBank_Input.value);
    localStorage.setItem(
      "exercises_Barbell",
      JSON.stringify(exercises_Barbell)
    );

    console.log(localStorage);
    for (let i = 0; i < exercises_Barbell.length; i++) {
      createOption.innerHTML = `${exercises_Barbell[i]}`;
      select_Barbell_Exercises.appendChild(createOption);
    }
  }
  if (option_Dumbbell.selected) {
    exercises_Dumbbell.push(exerciseWordBank_Input.value);
    // localStorage.dumbbellExercises = JSON.stringify(exercises_Dumbbell);
    localStorage.setItem(
      "exercises_Dumbbell",
      JSON.stringify(exercises_Dumbbell)
    );
    for (let i = 0; i < exercises_Dumbbell.length; i++) {
      createOption.innerHTML = `${exercises_Dumbbell[i]}`;
      select_Dumbbell_Exercises.appendChild(createOption);
    }
    console.log(localStorage);
  }
  if (option_Body.selected) {
    exercises_Body.push(exerciseWordBank_Input.value);
    localStorage.setItem("exercises_Body", JSON.stringify(exercises_Body));
    // localStorage.bodyExercises = JSON.stringify(exercises_Body);
    for (let i = 0; i < exercises_Body.length; i++) {
      // const createOption = document.createElement("option");
      createOption.innerHTML = `${exercises_Body[i]}`;
      select_Body_Exercises.appendChild(createOption);
    }
    console.log(localStorage);
  }
  if (option_Rope.selected) {
    exercises_Rope.push(exerciseWordBank_Input.value);
    localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));

    // localStorage.ropeExercises = JSON.stringify(exercises_Rope);
    for (let i = 0; i < exercises_Rope.length; i++) {
      // const createOption = document.createElement("option");
      createOption.innerHTML = `${exercises_Rope[i]}`;
      select_Rope_Exercises.appendChild(createOption);
    }
    console.log(localStorage);
  }

  // localStorage.wordBank = JSON.stringify(exerciseWordBank);
  exerciseWordBank_Input.value = "";
  // parsed_Exercises();
});

const exerciseListActiveState = [0, 0];
// let activeState, exercising;

// const init = function () {
//   activeState = 0;
//   exercising = true;
//   activeModal
// };
