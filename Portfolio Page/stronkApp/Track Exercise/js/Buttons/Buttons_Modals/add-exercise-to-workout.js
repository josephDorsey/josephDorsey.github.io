"use strict";

const exercise_Name = document.querySelector(".exercise-name");
const exercise_Weight = document.querySelector(".exercise-weight");
const exercise_Sets = document.querySelector(".exercise-sets");
const exercise_Reps = document.querySelector(".exercise-reps");
const exercise_Minutes = document.querySelector(".exercise-minutes");
const exercise_Seconds = document.querySelector(".exercise-seconds");
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
  btnMain_ToggleExerciseList.innerHTML = `Exercises (${
    exerciseGroup.name.length + 1
  })`;

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
  <input type="radio" class="exercise-list-radio"/>
  <label>Exercise ${i + 1}: ${exerciseGroup.name[i]}</label>
  `;
  }
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
  container_ExerciseInfo.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

btn_OpenExerciseInfoModal.addEventListener("click", function () {
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
