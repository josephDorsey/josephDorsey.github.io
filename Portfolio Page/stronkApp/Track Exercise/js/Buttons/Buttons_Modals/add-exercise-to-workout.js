"use strict";

// Input
const exercise_Name = document.querySelector(".exercise-name");
const exercise_Weight = document.querySelector(".exercise-weight");
const exercise_Sets = document.querySelector(".exercise-sets");
const exercise_Reps = document.querySelector(".exercise-reps");
const exercise_Minutes = document.querySelector(".exercise-minutes");
const exercise_Seconds = document.querySelector(".exercise-seconds");

// Labels
const label_addExercise_Weight = document.querySelector(
  ".label--addExercise-weight"
);
const label_addExercise_Sets = document.querySelector(
  ".label--addExercise-sets"
);
const label_addExercise_Reps = document.querySelector(
  ".label--addExercise-reps"
);
const label_addExercise_Rest = document.querySelector(
  ".label--addExercise-rest"
);
const label_addExercise_Exercise = document.querySelector(
  ".exercise-name-label"
);

const title_AddExercise = document.querySelector(".exercise-info-title");
const btn_PushDataToArray = document.querySelector(".btn--push-data-to-array");
const btn_CloseExerciseInfoModal = document.querySelector(
  ".btn--close-exercise-info"
);
const btn_OpenExerciseInfoModal = document.querySelector(
  ".btn--open-add-exercise-modal"
);
const exerciseEditMode_Title = document.querySelector(
  ".exercise-edit-mode-title"
);
const exerciseEditExercise_Title = document.querySelector(
  ".exercise-edit-exercise-title"
);
const btn_EditSelect = document.querySelector(".btn--edit-select");

const exercise_List_Radios = document.getElementsByClassName(
  "exercise-list-radio"
);
const resetDataInfoPush = function () {
  exercise_Name.value = "";
  exercise_Weight.value = "";
  exercise_Sets.value = "";
  exercise_Reps.value = "";
  exercise_Seconds.value = "";
  exercise_Minutes.value = "";
};

btn_PushDataToArray.addEventListener("click", function () {
  const div = document.createElement("div");
  span_Nav_Exercises.innerHTML = `Exercises (${exerciseGroup.name.length + 1})`;

  exerciseEditExercise_Title.innerHTML = `Exercise: ${exercise_Name.value}`;
  // workoutNameP.innerHTML = workout_Name.value;
  // exerciseGroup.workoutName = workout_Name.value;
  exerciseGroup.name.push(exercise_Name.value);
  exerciseGroup.weight.push(exercise_Weight.value);
  exerciseGroup.sets.min.push(1);
  exerciseGroup.sets.max.push(Number(exercise_Sets.value));
  exerciseGroup.reps.push(Number(exercise_Reps.value));
  exerciseGroup.rest.minutes.push(Number(exercise_Minutes.value));
  exerciseGroup.rest.seconds.push(Number(exercise_Seconds.value));
  console.log(exerciseGroup);
  // labelExercise.innerHTML = `Exercise: ${exercise_Name.value}`;
  // labelWeight.innerHTML = `Weight: ${exercise_Weight.value}-lbs`;
  // labelSets.innerHTML = `Set: 1 / ${exercise_Sets.value}`;
  // labelReps.innerHTML = `Reps: ${exercise_Reps.value}`;
  // labelRest.innerHTML = `Rest: ${exercise_Minutes.value}m ${exercise_Seconds.value}s`;

  for (let i = 0; i < exerciseGroup.name.length; i++) {
    div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label>Exercise ${i + 1}: ${exerciseGroup.name[i]}</label>
  `;
  }
  // for (let i = 0; i < exercise_List_Radios.length; i++) {
  //   exercise_List_Radios[i].addEventListener("click", function () {
  //     if (exercise_List_Radios[i] === 1) console.log(`clicked`);
  //   });
  // }
  if (exerciseGroup.name.length === 0) {
    exercise_List_P.classList.remove("hidden");
    exercise_List_Hint.classList.remove("hidden");
  } else if (exerciseGroup.name.length > 0) {
    exercise_List_P.classList.add("hidden");
    exercise_List_Hint.classList.add("hidden");
  }
  exercise_List.appendChild(div);
  resetDataInfoPush();
});

btn_CloseExerciseInfoModal.addEventListener("click", function () {
  mainNav_Style();
  hide_AddExercise_LabelsInputs();
  for (let i = 0; i < buttons_AddExerciseModal.length; i++) {
    buttons_AddExerciseModal[i].style.gridRow = "3";
  }
  btn_linkCreateExercise.classList.remove("btn-active");
  btn_linkAddExercise.classList.remove("btn-active");
  // hide_CreateExercise_LabelsInputs();
  btn_PushDataToArray.classList.add("hidden");
  btn_PushToWordBank.classList.add("hidden");
  container_ExerciseInfo.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

btn_OpenExerciseInfoModal.addEventListener("click", function () {
  // select_Barbell_Exercises.style.display = "none";
  // select_Dumbbell_Exercises.style.display = "none";
  // select_Body_Exercises.style.display = "none";
  // select_Rope_Exercises.style.display = "none";
  select_Barbell_Exercises.classList.add("hidden");
  select_Dumbbell_Exercises.classList.add("hidden");
  select_Body_Exercises.classList.add("hidden");
  select_Rope_Exercises.classList.add("hidden");
  mainNav_Style();
  hide_AddExercise_LabelsInputs();
  hide_CreateExercise_LabelsInputs();
  // select_Equipment_Test();
  inactiveExercises_Modal = true;
  for (let i = 0; i < buttons_AddExerciseModal.length; i++) {
    buttons_AddExerciseModal[i].style.gridRow = "3";
  }
  btn_linkCreateExercise.classList.remove("btn-active");
  btn_linkAddExercise.classList.remove("btn-active");
  btn_PushDataToArray.classList.add("hidden");
  btn_PushToWordBank.classList.add("hidden");
  container_ExerciseInfo.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

btn_EditSelect.addEventListener("click", function () {
  container_Exercise.classList.toggle("hidden");
  repsEdit_Radio.classList.toggle("hidden");
  setsEdit_Radio.classList.toggle("hidden");
  weightEdit_Radio.classList.toggle("hidden");
  exerciseEdit_Radio.classList.toggle("hidden");
  restEdit_Radio.classList.toggle("hidden");
  exerciseEditMode_Title.classList.toggle("hidden");
  exerciseEditExercise_Title.classList.toggle("hidden");
  btn_CloseActiveModal.classList.toggle("hidden");
  labelNextSet.classList.toggle("hidden");
  btn_NextSet.classList.toggle("hidden");
  repsEdit_Radio.checked = false;
  setsEdit_Radio.checked = false;
  weightEdit_Radio.checked = false;
  exerciseEdit_Radio.checked = false;
  restEdit_Radio.checked = false;
});

const select_Equipment_Test = function () {
  if (option_Barbell.selected) {
    select_Barbell_Exercises.classList.remove("hidden");
    select_Dumbbell_Exercises.classList.add("hidden");
    select_Body_Exercises.classList.add("hidden");
    select_Rope_Exercises.classList.add("hidden");
  } else if (option_Dumbbell.selected) {
    select_Dumbbell_Exercises.classList.remove("hidden");
    select_Barbell_Exercises.classList.add("hidden");
    select_Body_Exercises.classList.add("hidden");
    select_Rope_Exercises.classList.add("hidden");
  } else if (option_Body.selected) {
    select_Body_Exercises.classList.remove("hidden");
    select_Barbell_Exercises.classList.add("hidden");
    select_Dumbbell_Exercises.classList.add("hidden");
    select_Rope_Exercises.classList.add("hidden");
  } else if (option_Rope.selected) {
    select_Rope_Exercises.classList.remove("hidden");
    select_Barbell_Exercises.classList.add("hidden");
    select_Dumbbell_Exercises.classList.add("hidden");
    select_Body_Exercises.classList.add("hidden");
  }
};

// if ()
// select_Equipment_Test();
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

const btn_linkCreateExercise = document.querySelector(
  ".btn--link-createExercise"
);
const btn_linkAddExercise = document.querySelector(".btn--link-addExercise");
const select_WorkoutType = document.querySelector(".select--workout-type");

// Add Exercises Equipment choices exercises

const select_Barbell_Exercises = document.querySelector(
  ".select--barbell-exercises"
);
const select_Body_Exercises = document.querySelector(".select--body-exercises");
const select_Dumbbell_Exercises = document.querySelector(
  ".select--dumbbell-exercises"
);
const select_Rope_Exercises = document.querySelector(".select--rope-exercises");

const container_ExerciseSelectContainer = document.querySelector(
  ".grid-exercise-select"
);

btn_linkCreateExercise.addEventListener("click", function () {
  createExercises_Modal = true;
  addExercises_Modal = false;
  inactiveExercises_Modal = false;
  select_Equipment.selectedIndex = 0;

  select_Barbell_Exercises.classList.add("hidden");
  select_Dumbbell_Exercises.classList.add("hidden");
  select_Body_Exercises.classList.add("hidden");
  select_Rope_Exercises.classList.add("hidden");

  label_addExercise_Weight.classList.add("hidden");
  label_addExercise_Sets.classList.add("hidden");
  label_addExercise_Reps.classList.add("hidden");
  label_addExercise_Rest.classList.add("hidden");
  exercise_Weight.classList.add("hidden");
  exercise_Sets.classList.add("hidden");
  exercise_Reps.classList.add("hidden");
  exercise_Seconds.classList.add("hidden");
  exercise_Minutes.classList.add("hidden");
  exercise_Name.classList.add("hidden");

  btn_PushToWordBank.classList.remove("hidden");
  btn_PushDataToArray.classList.add("hidden");
  exerciseStorage_Title.classList.remove("hidden");
  exerciseWordBank_Input.classList.remove("hidden");
  select_Equipment.classList.remove("hidden");

  label_addExercise_Exercise.classList.remove("hidden");
  for (let i = 0; i < buttons_AddExerciseModal.length; i++) {
    buttons_AddExerciseModal[i].style.gridRow = "1";
  }
  btn_linkCreateExercise.classList.add("btn-active");
  btn_linkAddExercise.classList.remove("btn-active");
  // btn_linkAddExercise.classList.toggle("btn-active");
  container_ExerciseSelectContainer.style.gridColumn = "1 / -1";
  container_ExerciseSelectContainer.style.justifySelf = "center";
  label_addExercise_Exercise.classList.remove("hidden");
  title_AddExercise.classList.add("hidden");
  exercise_Name.classList.add("hidden");
});

btn_linkAddExercise.addEventListener("click", function () {
  inactiveExercises_Modal = false;
  createExercises_Modal = false;
  addExercises_Modal = true;
  select_Equipment.selectedIndex = 0;
  btn_linkAddExercise.classList.add("btn-active");
  btn_linkCreateExercise.classList.remove("btn-active");
  // btn_AddCreateExercise.classList.toggle("btn-active");
  container_ExerciseSelectContainer.style.gridColumn = "1 / -1";
  container_ExerciseSelectContainer.style.justifySelf = "center";
  for (let i = 0; i < buttons_AddExerciseModal.length; i++) {
    buttons_AddExerciseModal[i].style.gridRow = "1";
  }
  btn_PushToWordBank.classList.add("hidden");
  btn_PushDataToArray.classList.remove("hidden");
  label_addExercise_Weight.classList.remove("hidden");
  label_addExercise_Sets.classList.remove("hidden");
  label_addExercise_Reps.classList.remove("hidden");
  label_addExercise_Rest.classList.remove("hidden");
  exercise_Weight.classList.remove("hidden");
  exercise_Sets.classList.remove("hidden");
  exercise_Reps.classList.remove("hidden");
  exercise_Seconds.classList.remove("hidden");
  exercise_Minutes.classList.remove("hidden");
  exercise_Name.classList.add("hidden");
  title_AddExercise.classList.remove("hidden");
  select_Equipment.classList.remove("hidden");
  label_addExercise_Exercise.classList.add("hidden");
  exerciseStorage_Title.classList.add("hidden");
  exerciseWordBank_Input.classList.add("hidden");
});
const hide_AddExercise_LabelsInputs = function () {
  btn_PushDataToArray.classList.add("hidden");
  label_addExercise_Weight.classList.add("hidden");
  label_addExercise_Sets.classList.add("hidden");
  label_addExercise_Reps.classList.add("hidden");
  label_addExercise_Rest.classList.add("hidden");
  exercise_Weight.classList.add("hidden");
  exercise_Sets.classList.add("hidden");
  exercise_Reps.classList.add("hidden");
  exercise_Seconds.classList.add("hidden");
  exercise_Minutes.classList.add("hidden");
  exercise_Name.classList.add("hidden");
  title_AddExercise.classList.add("hidden");
  select_Equipment.classList.add("hidden");
  label_addExercise_Exercise.classList.add("hidden");

  // create
};

const hide_CreateExercise_LabelsInputs = function () {
  exerciseStorage_Title.classList.add("hidden");
  exerciseWordBank_Input.classList.add("hidden");
};
