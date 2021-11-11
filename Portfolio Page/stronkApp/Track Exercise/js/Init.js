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
  exerciseEquipment: {
    barbell: JSON.parse(localStorage.getItem("exercises_Barbell")) || [],
    dumbbell: JSON.parse(localStorage.getItem("exercises_Dumbbell")) || [],
    rope: JSON.parse(localStorage.getItem("exercises_Rope")) || [],
    body: JSON.parse(localStorage.getItem("exercises_Body")) || [],
  },
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

const userExercises = {
  barbell: "",
  dumbbell: "",
  rope: "",
  body: "",
};

// Puts all the array variables back in the exercise array
const exercises_Barbell =
  JSON.parse(localStorage.getItem("exercises_Barbell")) || [];
const exercises_Dumbbell =
  JSON.parse(localStorage.getItem("exercises_Dumbbell")) || [];
const exercises_Rope = JSON.parse(localStorage.getItem("exercises_Rope")) || [];
const exercises_Body = JSON.parse(localStorage.getItem("exercises_Body")) || [];

window.onload = function () {
  for (let i = 0; i < exercises_Barbell.length; i++) {
    // exerciseGroup.exerciseEquipment.barbell.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Barbell[i]}`;
    select_Barbell_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Dumbbell.length; i++) {
    // exerciseGroup.exerciseEquipment.dumbbell.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Dumbbell[i]}`;
    select_Dumbbell_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Rope.length; i++) {
    // exerciseGroup.exerciseEquipment.rope.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Rope[i]}`;
    select_Rope_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Body.length; i++) {
    // exerciseGroup.exerciseEquipment.rope.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Body[i]}`;
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

let inactiveExercises_Modal,
  addExercises_Modal,
  createExercises_Modal,
  editExercises_Modal;
const state_addExercises = function () {
  if (inactiveExercises_Modal) {
    btn_EditExerciseStorage.classList.add("hidden");
  }
  if (addExercises_Modal) {
    select_Equipment_Test();
    if (select_Equipment.selectedIndex === 0) {
      select_Barbell_Exercises.classList.add("hidden");
      select_Dumbbell_Exercises.classList.add("hidden");
      select_Body_Exercises.classList.add("hidden");
      select_Rope_Exercises.classList.add("hidden");
      btn_EditExerciseStorage.classList.add("hidden");
    }
  }
  if (createExercises_Modal) {
    // if (select_Equipment.selectedIndex === 0) {
    //   btn_EditExerciseStorage.classList.add("hidden");
    // }
    // if (!(select_Equipment.selectedIndex === 0)) {
    //   btn_EditExerciseStorage.classList.remove("hidden");
    //   select_Barbell_Exercises.classList.add("hidden");
    //   select_Dumbbell_Exercises.classList.add("hidden");
    //   select_Body_Exercises.classList.add("hidden");
    //   select_Rope_Exercises.classList.add("hidden");
    // }
  }
  if (editExercises_Modal) {
    select_Equipment_Test();
  }
};
state_addExercises();
