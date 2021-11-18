"use strict";
// Exercise
const exerciseEdit_Radio = document.querySelector(".exercise-edit-radio");
const exerciseEdit_Input = document.querySelector(".exercise-edit-input");
const labelExercise = document.querySelector(".label-exercise");
const btn_EditExercise = document.querySelector(".btn--edit-exercise");

btn_EditExercise.addEventListener("click", function () {
  labelExercise.innerHTML = `Exercise: ${exerciseEdit_Input.value}`;
  exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseEdit_Input.value}`;
  exerciseGroup.workoutList.splice(count, 1, exerciseEdit_Input.value);
  localStorage.setItem(
    "exercises_WorkoutList",
    JSON.stringify(exerciseGroup.workoutList)
  );
  exerciseEdit_Input.classList.toggle("hidden");
  btn_EditExercise.classList.toggle("hidden");
  exerciseEdit_Radio.checked = false;
  if (!exercises_Barbell.includes(`${exerciseEdit_Input.value}`)) {
    exercises_Barbell.push(exerciseEdit_Input.value);
    localStorage.setItem("exercises_Barbell", exercises_Barbell);
  }
  if (!exercises_Dumbbell.includes(`${exerciseEdit_Input.value}`)) {
    exercises_Dumbbell.push(exerciseEdit_Input.value);
    localStorage.setItem("exercises_Dumbbell", exercises_Dumbbell);
  }
  if (!exercises_Body.includes(`${exerciseEdit_Input.value}`)) {
    exercises_Body.push(exerciseEdit_Input.value);
    localStorage.setItem("exercises_Body", exercises_Body);
  }
  if (!exercises_Rope.includes(`${exerciseEdit_Input.value}`)) {
    exercises_Rope.push(exerciseEdit_Input.value);
    localStorage.setItem("exercises_Rope", exercises_Rope);
  }
});

const option_Barbell_Edit = document.querySelector(".barbell-edit");
const option_Body_Edit = document.querySelector(".body-edit");
const option_Dumbbell_Edit = document.querySelector(".dumbbell-edit");
const option_Rope_Edit = document.querySelector(".rope-edit");

// Reps
const repsEdit_Radio = document.querySelector(".reps-edit-radio");
const repsEdit_Input = document.querySelector(".reps-edit-input");
const labelReps = document.querySelector(".label-reps");
const btn_EditReps = document.querySelector(".btn--edit-reps");

btn_EditReps.addEventListener("click", function () {
  labelReps.innerHTML = `Reps: ${repsEdit_Input.value}`;
  exerciseGroup.reps.splice(count, 1, Number(repsEdit_Input.value));
  localStorage.setItem("exercises_Reps", JSON.stringify(exerciseGroup.reps));
  repsEdit_Input.classList.toggle("hidden");
  btn_EditReps.classList.toggle("hidden");
  repsEdit_Radio.checked = false;
});

// Sets
const setsEdit_Radio = document.querySelector(".sets-edit-radio");
const setsMinEdit_Input = document.querySelector(".setsMin-edit-input");
const setsMaxEdit_Input = document.querySelector(".setsMax-edit-input");
const labelSets = document.querySelector(".label-sets");
const btn_EditSets = document.querySelector(".btn--edit-sets");

btn_EditSets.addEventListener("click", function () {
  labelSets.innerHTML = `Set: ${setsMinEdit_Input.value} / ${setsMaxEdit_Input.value}`;
  exerciseGroup.sets.min.splice(count, 1, Number(setsMinEdit_Input.value));
  exerciseGroup.sets.max.splice(count, 1, Number(setsMaxEdit_Input.value));
  localStorage.setItem(
    "exercises_Sets_Min",
    JSON.stringify(exerciseGroup.sets.min)
  );
  localStorage.setItem(
    "exercises_Sets_Max",
    JSON.stringify(exerciseGroup.sets.max)
  );
  setsMinEdit_Input.classList.toggle("hidden");
  setsMaxEdit_Input.classList.toggle("hidden");
  btn_EditSets.classList.toggle("hidden");
  setsEdit_Radio.checked = false;
});

// Rest
const restEdit_Radio = document.querySelector(".rest-edit-radio");
const restMinEdit_Input = document.querySelector(".restMin-edit-input");
const restSecEdit_Input = document.querySelector(".restSec-edit-input");
const labelRest = document.querySelector(".label-rest");
const btn_EditRest = document.querySelector(".btn--edit-rest");

btn_EditRest.addEventListener("click", function () {
  labelRest.innerHTML = `Rest: ${restMinEdit_Input.value}m ${restSecEdit_Input.value}s`;
  exerciseGroup.rest.minutes.splice(count, 1, Number(restMinEdit_Input.value));
  exerciseGroup.rest.seconds.splice(count, 1, Number(restSecEdit_Input.value));
  localStorage.setItem(
    "exercises_Rest_Minutes",
    JSON.stringify(exerciseGroup.rest.minutes)
  );
  localStorage.setItem(
    "exercises_Rest_Seconds",
    JSON.stringify(exerciseGroup.rest.seconds)
  );
  restMinEdit_Input.classList.toggle("hidden");
  restSecEdit_Input.classList.toggle("hidden");
  btn_EditRest.classList.toggle("hidden");
  restEdit_Radio.checked = false;
});

// Weight
const weightEdit_Radio = document.querySelector(".weight-edit-radio");
const weightEdit_Input = document.querySelector(".weight-edit-input");
const btn_EditWeight = document.querySelector(".btn--edit-weight");
const labelWeight = document.querySelector(".label-weight");

btn_EditWeight.addEventListener("click", function () {
  labelWeight.innerHTML = `Weight: ${weightEdit_Input.value}-lbs`;
  exerciseGroup.weight.splice(count, 1, Number(weightEdit_Input.value));
  localStorage.setItem(
    "exercises_Weight",
    JSON.stringify(exerciseGroup.weight)
  );
  weightEdit_Input.classList.toggle("hidden");
  btn_EditWeight.classList.toggle("hidden");
  weightEdit_Radio.checked = false;
});
