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
window.onload = function () {
  // alert(`page loaded`);

  userExercises.barbell = JSON.parse(localStorage.exercises_Barbell);
  exercises_Barbell = JSON.parse(localStorage.exercises_Barbell);

  for (let i = 0; i < userExercises.barbell.length; i++) {
    const createOption = document.createElement("option");

    createOption.innerHTML = `${userExercises.barbell[i]}`;
    select_Barbell_Exercises.appendChild(createOption);
  }

  userExercises.dumbbell = JSON.parse(localStorage.exercises_Dumbbell);
  exercises_Dumbbell = JSON.parse(localStorage.exercises_Dumbbell);

  for (let i = 0; i < userExercises.dumbbell.length; i++) {
    const createOption = document.createElement("option");
    createOption.innerHTML = `${userExercises.dumbbell[i]}`;
    select_Dumbbell_Exercises.appendChild(createOption);
  }
  userExercises.rope = JSON.parse(localStorage.exercises_Rope);
  exercises_Rope = JSON.parse(localStorage.exercises_Rope);

  for (let i = 0; i < userExercises.rope.length; i++) {
    const createOption = document.createElement("option");
    createOption.innerHTML = `${userExercises.rope[i]}`;
    select_Rope_Exercises.appendChild(createOption);
  }

  userExercises.body = JSON.parse(localStorage.exercises_Body);
  exercises_Body = JSON.parse(localStorage.exercises_Body);

  for (let i = 0; i < userExercises.body.length; i++) {
    const createOption = document.createElement("option");
    createOption.innerHTML = `${userExercises.body[i]}`;
    select_Body_Exercises.appendChild(createOption);
  }
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

let inactiveExercises_Modal, addExercises_Modal, createExercises_Modal;
const state_addExercises = function () {
  if (addExercises_Modal) {
    select_Equipment_Test();
    if (select_Equipment.selectedIndex === 0) {
      select_Barbell_Exercises.classList.add("hidden");
      select_Dumbbell_Exercises.classList.add("hidden");
      select_Body_Exercises.classList.add("hidden");
      select_Rope_Exercises.classList.add("hidden");
    }
  }
  if (createExercises_Modal) {
    select_Barbell_Exercises.classList.add("hidden");
    select_Dumbbell_Exercises.classList.add("hidden");
    select_Body_Exercises.classList.add("hidden");
    select_Rope_Exercises.classList.add("hidden");
  }
};
state_addExercises();
