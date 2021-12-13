"use strict";

const exercise_List = document.querySelector(".exercise-list");
const exercise_List_Exercises = document.getElementsByClassName(
  "exercise-list-exercise"
);
const exercise_List_P = document.querySelector(".exercise-list-p");
const exercise_List_Title = document.querySelector(".exercise-list-title");
const exercise_List_CurrentExercise = document.querySelector(
  ".exercise-list-current-exercise"
);
const span_Nav_Exercises = document.querySelector(".span--exercise-list");
const span_Nav_StartWorkout = document.querySelector(".span--start-workout");
const exercise_List_Labels = document.getElementsByClassName(
  "exercise-list-label"
);
const exercise_List_Hint = document.querySelector(".exercise-list-hint");
const exerciseList_Container = document.querySelector(".exercise-list");
const btn_toggleExerciseList = document.querySelector(".btn--exercise-list");

const btn_SetActive = document.querySelector(".btn--set-active");
const btn_Edit_ExerciseList = document.querySelector(
  ".btn--edit-exercise-list"
);
const btn_DeleteExerciseListItems = document.querySelector(
  ".btn--delete-exercise"
);

const btn_CloseExerciseList = document.querySelector(
  ".btn--close-exercise-list"
);
const btn_ReturnToActiveModal = document.querySelector(
  ".btn--return-to-activeModal"
);

const btnMain_ToggleExerciseList = document.querySelector(
  ".btn--view-exercise-list"
);

btn_Edit_ExerciseList.addEventListener("click", function () {
  exercise_List_editMode();
  console.log(`Exercise List: Edit Mode`);
  btn_SetActive.classList.toggle("hidden");
  btn_DeleteExerciseListItems.classList.toggle("hidden");
});

btn_DeleteExerciseListItems.addEventListener("click", function () {
  for (let i = 0; i < exercise_List_Radios.length; i++) {
    if (exercise_List_Radios[i].checked) {
      exercise_List_Exercises[i].remove();
      exerciseGroup.workoutList.splice(i, 1);
      localStorage.setItem(
        "exercises_WorkoutList",
        JSON.stringify(exerciseGroup.workoutList)
      );
      exerciseGroup.weight.splice(i, 1);
      localStorage.setItem(
        "exercises_Weight",
        JSON.stringify(exerciseGroup.weight)
      );
      exerciseGroup.sets.min.splice(i, 1);
      localStorage.setItem(
        "exercises_Sets_Min",
        JSON.stringify(exerciseGroup.sets.min)
      );
      exerciseGroup.sets.max.splice(i, 1);
      localStorage.setItem(
        "exercises_Sets_Max",
        JSON.stringify(exerciseGroup.sets.max)
      );
      exerciseGroup.reps.splice(i, 1);
      localStorage.setItem(
        "exercises_Reps",
        JSON.stringify(exerciseGroup.reps)
      );

      exerciseGroup.rest.minutes.splice(i, 1);
      localStorage.setItem(
        "exercises_Rest_Minutes",
        JSON.stringify(exerciseGroup.rest.minutes)
      );

      exerciseGroup.rest.seconds.splice(i, 1);
      localStorage.setItem(
        "exercises_Rest_Seconds",
        JSON.stringify(exerciseGroup.rest.seconds)
      );

      // localStorage.setItem("current_Exercise_Count", count);
      // userExercises.body = exercises_Body;

      exercise_List_CurrentExercise.innerHTML = `Current exercise: ${exerciseGroup.workoutList[count]}`;
      console.log(exerciseGroup.workoutList, exerciseGroup);
    }
  }
});

let exercise_List_activeState, editMode;

const exercise_List_editMode = function () {
  exercise_List_activeState = exercise_List_activeState === 0 ? 1 : 0;
  if (exercise_List_activeState === 0) {
    exercise_List_Title.innerHTML = `Exercise List`;
  } else if (exercise_List_activeState === 1) {
    exercise_List_Title.innerHTML = `Edit Mode`;
  }
};

btn_ReturnToActiveModal.addEventListener("click", function () {
  // main_Nav_styleState = 1;
  if (count === 0) {
    labelPreviousExercise.classList.add("hidden");
    btn_PreviousExercise.classList.add("hidden");
  } else if (count > 0) {
    labelPreviousExercise.classList.remove("hidden");
    btn_PreviousExercise.classList.remove("hidden");
    btn_NextExercise.style.display = "block";
    labelNextExercise.style.display = "block";
  }
  if (count === exerciseGroup.workoutList.length - 1) {
    btn_NextExercise.classList.add("hidden");
    labelNextExercise.classList.add("hidden");
    btn_NextExercise.style.display = "none";
    labelNextExercise.style.display = "none";
  }
  current_Exercise_List.innerHTML = `Exercise (${count + 1} / ${
    exerciseGroup.workoutList.length
  })`;
  restTimerModal.style.display = "none";
  if (exerciseGroup.workoutList.length === 0) {
    exerciseEditExercise_Title.innerHTML = `Exercise:`;
    labelExercise.innerHTML = `Exercise:`;
    labelWeight.innerHTML = `Weight:`;
    labelSets.innerHTML = `Set:`;
    labelReps.innerHTML = `Reps:`;
    labelRest.innerHTML = `Rest:`;
  } else if (!(exerciseGroup.workoutList.length === 0)) {
    exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[count]}`;
    labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
    labelReps.innerHTML = `Reps: ${exerciseGroup.reps[count]}`;
    labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[count]}m ${exerciseGroup.rest.seconds[count]}s`;
  }
  exerciseList_Container.classList.toggle("hidden");
  modal_Exercise_Info.classList.toggle("hidden");
  // exercise_List_editMode();
  if (exerciseList_Container.classList.contains("hidden")) {
    modal_Exercise_Info.style.gap = "0";
  } else if (!exerciseList_Container.classList.contains("hidden")) {
    modal_Exercise_Info.style.gap = "10px";
  }
  if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
    labelNextSet.classList.remove("hidden");
    btn_NextSet.classList.remove("hidden");
    labelNextExercise.classList.remove("hidden");
    btn_NextExercise.classList.remove("hidden");
    exercise_Completed.classList.add("hidden");
  }
  if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
    labelNextSet.classList.add("hidden");
    btn_NextSet.classList.add("hidden");
    exercise_Completed.classList.remove("hidden");
  }
});

const exerciseList_state_listMode = function () {
  exercise_List_activeState = 0;
  exercise_List_Title.innerHTML = `Exercise List`;
  btn_DeleteExerciseListItems.classList.add("hidden");
};
const exerciseList_state_editMode = function () {};

btn_CloseExerciseList.addEventListener("click", function () {
  // main_Nav_styleState = 1;
  // if (exercise_List_activeState === 1) {
  //   exerciseList_state_listMode();
  // }
  // if (main_Nav_styleState === 1) {
  //   mainNav_Style();
  // }
  container_MainNav_Buttons.style.display = "grid";
  for (let i = 0; i < exercise_List_Radios.length; i++) {
    exercise_List_Radios[i].checked = false;
  }
  exercise_List_CurrentExercise.innerHTML = `Current exercise: ${exerciseGroup.workoutList[count]}`;
  exerciseList_Container.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

// main exercise list btn
// btnMain_ToggleExerciseList.addEventListener("click", function () {
//   // mainNav_Style();
//   // main_Nav_styleState = 0;
//   exerciseList_state_listMode();
//   // exerciseList_Modal = true;
//   exerciseList_Container.classList.toggle("hidden");
//   container_MainNav_Buttons.style.display = "none";
//   if (exerciseGroup.workoutList.length === 0) {
//     exercise_List_P.classList.remove("hidden");
//     exercise_List_Hint.classList.remove("hidden");
//     exercise_List_CurrentExercise.classList.add("hidden");
//     btn_SetActive.classList.add("hidden");
//   } else if (exerciseGroup.workoutList.length > 0) {
//     exercise_List_P.classList.add("hidden");
//     exercise_List_Hint.classList.add("hidden");
//     exercise_List_CurrentExercise.classList.remove("hidden");
//     btn_SetActive.classList.remove("hidden");
//   }
// });

btn_toggleExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  modal_Exercise_Info.classList.toggle("hidden");
  exerciseList_state_listMode();

  if (exerciseList_Container.classList.contains("hidden")) {
    modal_Exercise_Info.style.gap = "0";
  } else if (!exerciseList_Container.classList.contains("hidden")) {
    modal_Exercise_Info.style.gap = "10px";
  }
  if (exerciseGroup.workoutList.length === 0) {
    exercise_List_P.classList.remove("hidden");
    exercise_List_Hint.classList.remove("hidden");
  } else if (exerciseGroup.workoutList.length > 0) {
    exercise_List_P.classList.add("hidden");
    exercise_List_Hint.classList.add("hidden");
    btn_SetActive.classList.remove("hidden");
    exercise_List_CurrentExercise.classList.remove("hidden");
    exercise_List_CurrentExercise.innerHTML = `Current Exercise: ${exerciseGroup.workoutList[count]}`;
  }
});

btn_SetActive.addEventListener("click", function () {
  for (let i = 0; i < exercise_List_Radios.length; i++) {
    if (exercise_List_Radios[i].checked) {
      count = i;
      localStorage.setItem("current_Exercise_Count", count);
      exercise_List_CurrentExercise.innerHTML = `Current Exercise: ${exerciseGroup.workoutList[count]}`;
      console.log(count);
    }
  }
});
