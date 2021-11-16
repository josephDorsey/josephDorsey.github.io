"use strict";
// Containers

const container_Exercise = document.querySelector(".exercise");
const container_Weight = document.querySelector(".weight");
const container_Sets = document.querySelector(".sets");
const container_Reps = document.querySelector(".reps");
const container_Rest = document.querySelector(".rest");
// imgs

const img_Modal_AddExercise = document.querySelector(".i-AddExercise");
const img_Modal_ExerciseList = document.querySelector(".i-Barbell");
const img_Modal_ActiveExercise = document.querySelector(".i-PlayCircle");
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
  workoutList: JSON.parse(localStorage.getItem("exercises_WorkoutList")) || [],
  // name: [],
  weight: JSON.parse(localStorage.getItem("exercises_Weight")) || [],
  sets: {
    min: JSON.parse(localStorage.getItem("exercises_Sets_Min")) || [],
    max: JSON.parse(localStorage.getItem("exercises_Sets_Max")) || [],
  },
  reps: JSON.parse(localStorage.getItem("exercises_Reps")) || [],
  rest: {
    minutes: JSON.parse(localStorage.getItem("exercises_Rest_Minutes")) || [],
    seconds: JSON.parse(localStorage.getItem("exercises_Rest_Seconds")) || [],
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
  for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
    const div = document.createElement("div");
    div.classList.add("exercise-list-exercise");
    div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label>Exercise: ${exerciseGroup.workoutList[i]}</label>
  `;
    exercise_List.appendChild(div);
  }
  span_Nav_Exercises.innerHTML = `Exercises (${exerciseGroup.workoutList.length})`;
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

let activeExercises_Modal,
  inactiveExercises_Modal,
  addExercises_Modal,
  createExercises_Modal,
  exerciseList_Modal,
  editExercises_Modal;
const state_addExercises = function () {
  if (activeExercises_Modal) {
    img_Modal_ActiveExercise.src = `../img/pause-circle-outline.svg`;
    span_Nav_StartWorkout.innerHTML = `Resume Workout`;
  }
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
  if (exerciseList_Modal) {
    if (exerciseGroup.workoutList.length === 0) {
      exercise_List_P.classList.remove("hidden");
      exercise_List_Hint.classList.remove("hidden");
      exercise_List_CurrentExercise.classList.add("hidden");
      btn_SetActive.classList.add("hidden");
    } else if (exerciseGroup.workoutList.length > 0) {
      exercise_List_P.classList.add("hidden");
      exercise_List_Hint.classList.add("hidden");
      exercise_List_CurrentExercise.classList.remove("hidden");
      btn_SetActive.classList.remove("hidden");
    }
  }
};
state_addExercises();
