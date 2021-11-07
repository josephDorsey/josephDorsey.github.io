"use strict";
// Containers

const container_Exercise = document.querySelector(".exercise");
const container_Weight = document.querySelector(".weight");
const container_Sets = document.querySelector(".sets");
const container_Reps = document.querySelector(".reps");
const container_Rest = document.querySelector(".rest");

// DIV CONTAINERS

const container_ExerciseInfo = document.querySelector(".exercise-information");
const container_MainNav_Buttons = document.querySelector(".main--nav-buttons");

const exerciseGroup = {
  workoutGroup: "",
  workoutName: "",
  name: [],
  weight: [],
  sets: {
    min: [],
    max: [],
  },
  reps: [],
  rest: {
    minutes: [],
    seconds: [],
  },
};

let main_Nav_styleState;
const mainNav_Style = function () {
  main_Nav_styleState = main_Nav_styleState === 0 ? 1 : 0;
  if (main_Nav_styleState === 0) {
    container_MainNav_Buttons.style.display = "grid";
  } else if (main_Nav_styleState === 1) {
    container_MainNav_Buttons.style.display = "none";
  }
};
