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
const span_CloseExerciseInfoModal = document.querySelector(
  ".span--close-exercise-info"
);
const btn_OpenExerciseInfoModal = document.getElementsByClassName(
  "btn--open-add-exercise-modal"
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
const container_EIE = document.querySelector(
  ".exercise-information-exercises-container"
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

  // Change this to a loop ?
  // exerciseEditExercise_Title.innerHTML = `Exercise: ${exercise_Name.value}`;
  // workoutNameP.innerHTML = workout_Name.value;
  // exerciseGroup.workoutName = workout_Name.value;
  // exerciseGroup.workoutList.push(exercise_Name.value);
  // exerciseGroup.weight.push(Number(exercise_Weight.value));

  // temp_Weight.push(Number(exercise_Weight.value));

  // localStorage.setItem(
  //   "exercises_Weight",
  //   JSON.stringify(exerciseGroup.weight)
  // );
  // localStorage.setItem(
  //   `workoutName_${temp_Workout_Name[workoutName_Count]}_Weight`,
  //   JSON.stringify(temp_Weight)
  // );

  // exerciseGroup.sets.min.push(1);
  // temp_Sets_Min.push(1);

  // localStorage.setItem(
  //   "exercises_Sets_Min",
  //   JSON.stringify(exerciseGroup.sets.min)
  // );
  // localStorage.setItem(
  //   `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Min`,
  //   JSON.stringify(temp_Sets_Min)
  // );

  // exerciseGroup.sets.max.push(Number(exercise_Sets.value));
  // temp_Sets_Max.push(Number(exercise_Sets.value));

  // localStorage.setItem(
  //   "exercises_Sets_Max",
  //   JSON.stringify(exerciseGroup.sets.max)
  // );
  // localStorage.setItem(
  //   `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Max`,
  //   JSON.stringify(temp_Sets_Max)
  // );

  // exerciseGroup.reps.push(Number(exercise_Reps.value));
  // temp_Reps.push(Number(exercise_Reps.value));

  // localStorage.setItem("exercises_Reps", JSON.stringify(exerciseGroup.reps));
  // localStorage.setItem(
  //   `workoutName_${temp_Workout_Name[workoutName_Count]}_Reps`,
  //   JSON.stringify(temp_Reps)
  // );

  // exerciseGroup.rest.minutes.push(Number(exercise_Minutes.value));

  // temp_Rest_Minutes.push(Number(exercise_Minutes.value));
  // localStorage.setItem(
  //   "exercises_Rest_Minutes",
  //   JSON.stringify(exerciseGroup.rest.minutes)
  // );
  // localStorage.setItem(
  //   `workoutName_${temp_Workout_Name[workoutName_Count]}_Rest_Minutes`,
  //   JSON.stringify(temp_Rest_Minutes)
  // );

  // exerciseGroup.rest.seconds.push(Number(exercise_Seconds.value));
  // temp_Rest_Seconds.push(Number(exercise_Seconds.value));

  // localStorage.setItem(
  //   "exercises_Rest_Seconds",
  //   JSON.stringify(exerciseGroup.rest.seconds)
  // );
  // localStorage.setItem(
  //   `workoutName_${temp_Workout_Name[workoutName_Count]}_Rest_Seconds`,
  //   JSON.stringify(temp_Rest_Seconds)
  // );
  // labelExercise.innerHTML = `Exercise: ${exercise_Name.value}`;
  // labelWeight.innerHTML = `Weight: ${exercise_Weight.value}-lbs`;
  // labelSets.innerHTML = `Set: 1 / ${exercise_Sets.value}`;
  // labelReps.innerHTML = `Reps: ${exercise_Reps.value}`;
  // labelRest.innerHTML = `Rest: ${exercise_Minutes.value}m ${exercise_Seconds.value}s`;

  //   div.classList.add("exercise-list-exercise");
  //   div.innerHTML = `
  // <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  // <label>Exercise ${exerciseGroup.workoutList[i]}</label>
  // `;

  // for (let i = 0; i < exerciseGroup.name.length; i++) {
  //   div.innerHTML = `
  // <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  // <label>Exercise ${i + 1}: ${exerciseGroup.name[i]}</label>
  // `;
  // }
  // for (let i = 0; i < exercise_List_Radios.length; i++) {
  //   exercise_List_Radios[i].addEventListener("click", function () {
  //     if (exercise_List_Radios[i] === 1) console.log(`clicked`);
  //   });
  // }
  for (let i = 0; i < exercises_Radio.length; i++) {
    if (exercises_Radio[i].checked === true) {
      tempWorkoutList.push(exercises_Radio_Label[i].innerText);
      exercises_Radio[i].checked = false;
    }
  }
  for (let i = 0; i < tempWorkoutList.length; i++) {
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("hidden");
    createExercise(
      `${temp_Workout_Name[workoutName_Count]}`,
      `${tempWorkoutList[i]}`
    );
    div.innerHTML = `
    <label>
    <input type="radio" name="exercise-list" class="exercise-list">
    <h3 class="exercises-row-title">${tempWorkoutList[i]}</h3>
    <div class="exercises-row-caption">
      <p class="exercises-row-label row-sets">Sets</p>
      <p class="exercises-row-label row-lbs">Weight</p>
      <p class="exercises-row-label row-reps">Reps</p>
    </div>
    <label style="position: relative;">
    <div class="exercises-row">
      <img src="img/checkmark-circle-outline.svg" class="completed-set">
      <input name="exercises-row-radio" class="exercises-row-radio" type="radio">
      <p>1</p>
      <input type="number" value="0" class="input--weight" onchange="updateWeight()">
      <input type="number" value="0" class="input--reps" onchange="updateReps()">
      <p class="hidden">135</p>
      <p class="hidden">10</p>
      <img src="img/create-outline.svg" class="edit-set">
      </div>
      </label>
    <div class="">
      <button class="btn--add-set" onclick="addSet()">
      <img class="ion-icon" src="img/add.svg">Add set
      </button>
    </div>
    <div class="">
      <button class="btn--remove-set">
      
      <img class="ion-icon" src="img/remove-outline.svg">Remove set
      </button>
    </div>
    </label>
    `;
    modal_Exercise_Info.appendChild(div);
  }

  // exercise_List.appendChild(div);
  console.log(tempWorkoutList);
  // resetDataInfoPush();
});

btn_CloseExerciseInfoModal.addEventListener("click", function () {
  workoutName_Count = 0;
  for (let i = tempWorkoutList.length; i >= 0; i--) {
    tempWorkoutList.splice(i, 1);
  }
  for (let i = temp_Reps.length; i >= 0; i--) {
    temp_Reps.splice(i, 1);
  }
  for (let i = temp_Rest_Seconds.length; i >= 0; i--) {
    temp_Rest_Seconds.splice(i, 1);
  }
  for (let i = temp_Rest_Minutes.length; i >= 0; i--) {
    temp_Rest_Minutes.splice(i, 1);
  }
  for (let i = temp_Sets_Max.length; i >= 0; i--) {
    temp_Sets_Max.splice(i, 1);
  }
  for (let i = temp_Sets_Min.length; i >= 0; i--) {
    temp_Sets_Min.splice(i, 1);
  }
  for (let i = temp_Weight.length; i >= 0; i--) {
    temp_Weight.splice(i, 1);
  }
  for (let i = 0; i < workouts_Modal_List.length; i++) {
    workouts_Modal_List[i].checked = false;
  }
  ungroupedWorkoutList.classList.remove("hidden");
  groupedWorkoutList.classList.remove("hidden");
  workout_Timer.classList.add("hidden");
  workouts_Title.innerHTML = `Workouts`;
  container_workoutTimer_Buttons.classList.add("hidden");
  container_ExerciseInfo.style.display = "none";
  btn_viewWorkOut.classList.remove("hidden");
  btn_createWorkout_WorkoutGroup.classList.toggle("hidden");
  btn_Edit_Workout_WorkoutGroup.classList.toggle("hidden");
  btn_CloseExerciseInfoModal.classList.toggle("hidden");
  span_CloseExerciseInfoModal.classList.toggle("hidden");
  activeModalContainer.style.gridRow = "3/6";
  // modal_Exercise_Info.style.display = "none";
  hide_AddExercise_LabelsInputs();
  // editExercises_Modal = false;
  for (let i = 0; i < buttons_AddExerciseModal.length; i++) {
    buttons_AddExerciseModal[i].style.gridRow = "3";
  }
  btn_linkCreateExercise.classList.remove("btn-active");
  btn_linkAddExercise.classList.remove("btn-active");
  // hide_CreateExercise_LabelsInputs();
  btn_PushDataToArray.classList.add("hidden");
  btn_PushToWordBank.classList.add("hidden");
  // container_ExerciseInfo.classList.toggle("hidden");
  // container_MainNav_Buttons.classList.toggle("hidden");
});

for (let i = 0; i < btn_OpenExerciseInfoModal.length; i++) {
  btn_OpenExerciseInfoModal[i].addEventListener("click", function () {
    exerciseList_Container.classList.add("hidden");
    btn_EditExerciseStorage.classList.add("hidden");
    btn_ExitEditStorage.classList.add("hidden");
    btn_deleteExerciseStorage.classList.add("hidden");
    // select_Barbell_Exercises.style.display = "none";
    // select_Dumbbell_Exercises.style.display = "none";
    // select_Body_Exercises.style.display = "none";
    // select_Rope_Exercises.style.display = "none";
    select_Barbell_Exercises.classList.add("hidden");
    select_Dumbbell_Exercises.classList.add("hidden");
    select_Body_Exercises.classList.add("hidden");
    select_Rope_Exercises.classList.add("hidden");
    container_MainNav_Buttons.style.display = "none";
    container_ExerciseInfo.style.display = "grid";
    hide_AddExercise_LabelsInputs();
    hide_CreateExercise_LabelsInputs();
    // select_Equipment_Test();
    // inactiveExercises_Modal = true;
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
}

// btn_EditSelect.addEventListener("click", function () {
//   container_Exercise.classList.toggle("hidden");
//   repsEdit_Radio.classList.toggle("hidden");
//   setsEdit_Radio.classList.toggle("hidden");
//   weightEdit_Radio.classList.toggle("hidden");
//   exerciseEdit_Radio.classList.toggle("hidden");
//   restEdit_Radio.classList.toggle("hidden");
//   exerciseEditMode_Title.classList.toggle("hidden");
//   exerciseEditExercise_Title.classList.toggle("hidden");
//   btn_CloseActiveModal.classList.toggle("hidden");

//   btn_NextExercise.classList.toggle("hidden");

//   labelNextExercise.classList.toggle("hidden");
//   btn_EditExercise.classList.add("hidden");
//   btn_EditWeight.classList.add("hidden");
//   btn_EditSets.classList.add("hidden");
//   btn_EditReps.classList.add("hidden");
//   btn_EditRest.classList.add("hidden");

//   if (
//     labelPreviousExercise.classList.contains("hidden") &&
//     btn_PreviousExercise.classList.contains("hidden")
//   ) {
//     labelPreviousExercise.classList.add("hidden");
//     btn_PreviousExercise.classList.add("hidden");
//   }
//   if (count === 0) {
//     labelPreviousExercise.classList.add("hidden");
//     btn_PreviousExercise.classList.add("hidden");
//   } else if (count > 0) {
//     labelPreviousExercise.classList.remove("hidden");
//     btn_PreviousExercise.classList.remove("hidden");
//   }
//   repsEdit_Input.classList.add("hidden");
//   setsMinEdit_Input.classList.add("hidden");
//   setsMaxEdit_Input.classList.add("hidden");
//   weightEdit_Input.classList.add("hidden");
//   exerciseEdit_Input.classList.add("hidden");
//   restMinEdit_Input.classList.add("hidden");
//   restSecEdit_Input.classList.add("hidden");

//   labelNextSet.classList.toggle("hidden");
//   btn_NextSet.classList.toggle("hidden");
//   repsEdit_Radio.checked = false;
//   setsEdit_Radio.checked = false;
//   weightEdit_Radio.checked = false;
//   exerciseEdit_Radio.checked = false;
//   restEdit_Radio.checked = false;
// });
const select_Equipment_Test = function () {
  for (let i = 0; i < modalStates.length; i++) {
    if (modalStates[states_Count] === modalStates[0]) {
      if (
        option_Body.selected ||
        option_Dumbbell.selected ||
        option_Rope.selected ||
        option_Barbell.selected
      ) {
        select_Barbell_Exercises.classList.add("hidden");
        select_Dumbbell_Exercises.classList.add("hidden");
        select_Body_Exercises.classList.add("hidden");
        select_Rope_Exercises.classList.add("hidden");
      }
    } else if (modalStates[states_Count] === modalStates[1]) {
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
      } else if (select_Equipment.selectedIndex === 0) {
        select_Barbell_Exercises.classList.add("hidden");
        select_Dumbbell_Exercises.classList.add("hidden");
        select_Body_Exercises.classList.add("hidden");
        select_Rope_Exercises.classList.add("hidden");
      }
    }
  }

  // if (option_Barbell.selected) {
  //   select_Barbell_Exercises.classList.remove("hidden");
  //   select_Dumbbell_Exercises.classList.add("hidden");
  //   select_Body_Exercises.classList.add("hidden");
  //   select_Rope_Exercises.classList.add("hidden");
  // } else if (option_Dumbbell.selected) {
  //   select_Dumbbell_Exercises.classList.remove("hidden");
  //   select_Barbell_Exercises.classList.add("hidden");
  //   select_Body_Exercises.classList.add("hidden");
  //   select_Rope_Exercises.classList.add("hidden");
  // } else if (option_Body.selected) {
  //   select_Body_Exercises.classList.remove("hidden");
  //   select_Barbell_Exercises.classList.add("hidden");
  //   select_Dumbbell_Exercises.classList.add("hidden");
  //   select_Rope_Exercises.classList.add("hidden");
  // } else if (option_Rope.selected) {
  //   select_Rope_Exercises.classList.remove("hidden");
  //   select_Barbell_Exercises.classList.add("hidden");
  //   select_Dumbbell_Exercises.classList.add("hidden");
  //   select_Body_Exercises.classList.add("hidden");
  // } else if (select_Equipment.selectedIndex === 0) {
  //   select_Barbell_Exercises.classList.add("hidden");
  //   select_Dumbbell_Exercises.classList.add("hidden");
  //   select_Body_Exercises.classList.add("hidden");
  //   select_Rope_Exercises.classList.add("hidden");
  // }
};

// if ()
// select_Equipment_Test();
// const editExerciseFunc = function () {
//   if (repsEdit_Radio.checked) {
//     labelReps.innerHTML = `Reps:`;
//     repsEdit_Input.classList.remove("hidden");
//     btn_EditReps.classList.remove("hidden");
//   }
//   if (setsEdit_Radio.checked) {
//     labelSets.innerHTML = `Set:`;
//     setsMinEdit_Input.classList.remove("hidden");
//     setsMaxEdit_Input.classList.remove("hidden");
//     btn_EditSets.classList.remove("hidden");
//   }
//   if (weightEdit_Radio.checked) {
//     labelWeight.innerHTML = `Weight: `;
//     weightEdit_Input.classList.remove("hidden");
//     btn_EditWeight.classList.remove("hidden");
//   }
//   if (exerciseEdit_Radio.checked) {
//     labelExercise.innerHTML = `Exercise: `;
//     exerciseEdit_Input.classList.remove("hidden");
//     btn_EditExercise.classList.remove("hidden");
//   }
//   if (restEdit_Radio.checked) {
//     labelRest.innerHTML = `Rest:`;
//     restMinEdit_Input.classList.remove("hidden");
//     restSecEdit_Input.classList.remove("hidden");
//     btn_EditRest.classList.remove("hidden");
//   }
// };

// const resetEditFunc = function () {
//   repsEdit_Input.classList.toggle("hidden");
//   btn_EditReps.classList.toggle("hidden");
//   setsMinEdit_Input.classList.toggle("hidden");
//   setsMaxEdit_Input.classList.toggle("hidden");
//   btn_EditSets.classList.toggle("hidden");
//   weightEdit_Input.classList.toggle("hidden");
//   btn_EditWeight.classList.toggle("hidden");
//   exerciseEdit_Input.classList.toggle("hidden");
//   btn_EditExercise.classList.toggle("hidden");
//   restMinEdit_Input.classList.toggle("hidden");
//   restSecEdit_Input.classList.toggle("hidden");
//   btn_EditRest.classList.toggle("hidden");
//   edit_Select_Equipment.classList.toggle("hidden");
//   btn_EditEquipment.classList.toggle("hidden");
// };
// document.addEventListener("click", editExerciseFunc);

const btn_CreateExerciseWindow = document.querySelector(
  ".btn--create-exercise-window"
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

btn_CreateExerciseWindow.addEventListener("click", function () {
  // createExercises_Modal = true;
  // addExercises_Modal = false;
  // inactiveExercises_Modal = false;
  states_Count = 0;
  select_Equipment.selectedIndex = 0;
  btn_EditExerciseStorage.classList.remove("hidden");
  btn_deleteExerciseStorage.classList.add("hidden");
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
  states_Count = 1;
  select_Equipment.selectedIndex = 0;
  // inactiveExercises_Modal = false;
  // createExercises_Modal = false;
  // addExercises_Modal = true;
  select_Equipment_Test();
  if (select_Equipment.selectedIndex === 0) {
    select_Barbell_Exercises.classList.add("hidden");
    select_Dumbbell_Exercises.classList.add("hidden");
    select_Body_Exercises.classList.add("hidden");
    select_Rope_Exercises.classList.add("hidden");
    btn_EditExerciseStorage.classList.add("hidden");
  }

  btn_EditExerciseStorage.classList.add("hidden");
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
