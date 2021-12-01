"use strict";

const modal_Exercise_Info = document.querySelector(".modal-exercise-info");

const activeModalContainer = document.querySelector(".modal-active-container");
const btn_StartWorkout = document.querySelector(".btn--startWorkout");
const btn_PauseWorkout = document.querySelector(".btn--pauseWorkout");
const btn_EndWorkout = document.querySelector(".btn--endWorkout");
const btn_CloseActiveModal = document.querySelector(".btn--close-activeModal");
const container_WorkoutsModal = document.querySelector(".container--workouts");
const container_workoutTimer_Buttons = document.querySelector(
  ".start-end-workout-modal"
);

const workout_Timer = document.querySelector(".workout-timer");
const trackerTimer = {
  app_Seconds: JSON.parse(localStorage.getItem("app_Seconds")) || 0,
  app_Minutes: JSON.parse(localStorage.getItem("app_Minutes")) || 0,
  app_Hours: JSON.parse(localStorage.getItem("app_Hours")) || 0,
  app_Days: JSON.parse(localStorage.getItem("app_Days")) || 0,
};
// let app_Seconds = 0, app_Minutes = 0, app_Hours = 0, app_Days = 0;
const appTimer = () => {
  if (trackerTimer.app_Seconds === 59) {
    trackerTimer.app_Minutes++;

    workout_Timer_Count = 0;
    workout_Timer_Count--;
    localStorage.setItem("app_Minutes", trackerTimer.app_Minutes);
  }
  if (trackerTimer.app_Minutes === 59) {
    trackerTimer.app_Hours++;
    trackerTimer.app_Minutes = 0;
    localStorage.setItem("app_Hours", trackerTimer.app_Hours);
  }
  if (trackerTimer.app_Hours === 24) {
    trackerTimer.app_Days++;
    trackerTimer.app_Hours = 0;
  }

  workout_Timer_Count++;
  trackerTimer.app_Seconds = workout_Timer_Count;
  localStorage.setItem("workout_Timer_Count", workout_Timer_Count);
  localStorage.setItem("app_Seconds", trackerTimer.app_Seconds);
  localStorage.setItem("app_Minutes", trackerTimer.app_Minutes);
  localStorage.setItem("app_Hours", trackerTimer.app_Hours);
  localStorage.setItem("app_Days", trackerTimer.app_Days);
  workout_Timer.innerHTML = `${
    trackerTimer.app_Hours < 10
      ? `0${trackerTimer.app_Hours}`
      : `${trackerTimer.app_Hours}`
  }:${
    trackerTimer.app_Minutes < 10
      ? `0${trackerTimer.app_Minutes}`
      : `${trackerTimer.app_Minutes}`
  }:${
    trackerTimer.app_Seconds < 10
      ? `0${trackerTimer.app_Seconds}`
      : `${trackerTimer.app_Seconds}`
  }`;
};
btn_StartWorkout.addEventListener("click", function () {
  // const workoutState = [
  //   "Start Workout",
  //   "Pause Workout",
  //   "Resume",
  //   "End Workout",
  // ];
  workoutState_Count = 0;
  if (workoutState[workoutState_Count] === "Inactive") {
    setTimeout(function () {
      workoutState_Count++;
      localStorage.setItem("workoutState_Count", workoutState_Count);
    }, 1000);
    btn_StartWorkout.classList.add("hidden");
    btn_StartWorkout.textContent = `Pause Workout`;
    btn_PauseWorkout.classList.remove("hidden");
    workout_Interval = setInterval(appTimer, 1000);
    if (count + 1 === exerciseGroup.workoutList.length) {
      btn_NextExercise.classList.add("hidden");
      labelNextExercise.classList.add("hidden");
    }
    current_Exercise_List.innerHTML = `Exercise (${count + 1} / ${
      exerciseGroup.workoutList.length
    })`;
    console.log(`workout begin`);
    if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
      labelNextSet.classList.remove("hidden");
      btn_NextSet.classList.remove("hidden");
      labelPreviousExercise.classList.remove("hidden");
      btn_PreviousExercise.classList.remove("hidden");
      exercise_Completed.classList.add("hidden");
      if (count === 0) {
        labelPreviousExercise.classList.add("hidden");
        btn_PreviousExercise.classList.add("hidden");
      }
    }
    if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
      labelNextSet.classList.add("hidden");
      btn_NextSet.classList.add("hidden");
      labelPreviousExercise.classList.remove("hidden");
      btn_PreviousExercise.classList.remove("hidden");
      exercise_Completed.classList.remove("hidden");
      if (count === 0) {
        labelPreviousExercise.classList.add("hidden");
        btn_PreviousExercise.classList.add("hidden");
      }
    }
    restTimerModal.style.display = "none";
    modal_Exercise_Info.classList.toggle("hidden");
    container_MainNav_Buttons.style.display = "none";
    console.log(`Start workout state activated. Start timer!`);
    if (exerciseGroup.workoutList.length === 0) {
      labelEquipment.innerHTML = `Equipment: `;
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
  }
});

btn_PauseWorkout.addEventListener("click", function () {
  if (workoutState[workoutState_Count] === "Active") {
    console.log(`workout pause`);
    clearInterval(workout_Interval);
    setTimeout(function () {
      workoutState_Count++;
      localStorage.setItem("workoutState_Count", workoutState_Count);
    }, 1000);
    localStorage.setItem("workout_Timer_Count", workout_Timer_Count);
    localStorage.setItem("app_Seconds", trackerTimer.app_Seconds);
    localStorage.setItem("app_Minutes", trackerTimer.app_Minutes);
    localStorage.setItem("app_Hours", trackerTimer.app_Hours);
    btn_PauseWorkout.textContent = `Resume Workout`;
    console.log(
      `${
        trackerTimer.app_Hours < 10
          ? `0${trackerTimer.app_Hours}`
          : `${trackerTimer.app_Hours}`
      }:${
        trackerTimer.app_Minutes < 10
          ? `0${trackerTimer.app_Minutes}`
          : `${trackerTimer.app_Minutes}`
      }:${
        trackerTimer.app_Seconds < 10
          ? `0${trackerTimer.app_Seconds}`
          : `${trackerTimer.app_Seconds}`
      }`
    );
  }
  if (workoutState[workoutState_Count] === "Pause") {
    setTimeout(function () {
      workoutState_Count--;
      localStorage.setItem("workoutState_Count", workoutState_Count);
    }, 1000);
    console.log(`workout begin`);
    // workoutState_Count++;
    workout_Interval = setInterval(appTimer, 1000);
    btn_PauseWorkout.textContent = `Pause Workout`;
  }
});

btn_EndWorkout.addEventListener("click", function () {
  workoutState_Count = 0;
  if (workoutState[workoutState_Count] === "Inactive") {
    clearInterval(workout_Interval);
    btn_PauseWorkout.classList.add("hidden");
    btn_StartWorkout.classList.remove("hidden");
    workout_Timer.innerHTML = `00:00:00`;
    console.log(
      `WORKOUT ENDED: ${
        trackerTimer.app_Hours < 10
          ? `0${trackerTimer.app_Hours}`
          : `${trackerTimer.app_Hours}`
      }:${
        trackerTimer.app_Minutes < 10
          ? `0${trackerTimer.app_Minutes}`
          : `${trackerTimer.app_Minutes}`
      }:${
        trackerTimer.app_Seconds < 10
          ? `0${trackerTimer.app_Seconds}`
          : `${trackerTimer.app_Seconds}`
      }`
    );
  }
});
btn_CloseActiveModal.addEventListener("click", function () {
  // mainNav_Style();

  // span_Nav_StartWorkout.innerHTML = `Resume Workout`;
  // localStorage.setItem(
  //   "span_Nav_StartWorkout",
  //   (span_Nav_StartWorkout.innerHTML = `Resume Workout`)
  // );
  modal_Exercise_Info.classList.toggle("hidden");
  container_ExerciseInfo.style.display = "grid";
});

// exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
//   labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
//   labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[0]}`;
//   labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[0]} / ${exerciseGroup.sets.max[0]}`;
//   labelReps.innerHTML = `Reps: ${exerciseGroup.reps[0]}`;
//   labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[0]}m ${exerciseGroup.rest.seconds[0]}s`;

// Workouts button

const btn_Workouts_Modal = document.querySelector(".btn--workouts-modal");

// What would you like to create modal
const btn_createWorkout_WorkoutGroup = document.querySelector(
  ".btn--createWorkout_WorkoutGroup"
);
const btn_createWorkout_Modal = document.querySelector(
  ".btn--create-workoutgroup-buttons-workout"
);
const btn_createWorkoutGroup = document.querySelector(
  ".btn--create-workoutgroup-buttons-workoutGroup"
);
const createWorkout_Modal = document.querySelector(".createWorkout-modal");
const createWorkoutGroup_Modal = document.querySelector(
  ".createWorkoutGroup-modal"
);
const createWorkout_Input = document.querySelector(".createWorkout-input");
const workouts_Title = document.querySelector(".createWorkout-title");

const createWorkout_WorkoutGroup_Modal = document.querySelector(
  ".createWorkout_WorkoutGroup-modal"
);
const btn_createWorkout = document.querySelector(".btn--createWorkout");
let createWorkout_WorkoutGroup_Modal_count = 0;
const createWorkout_WorkoutGroup_Modal_state = ["Inactive", "Active"];

btn_createWorkout_WorkoutGroup.addEventListener("click", function () {
  createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
  workouts_Title.classList.toggle("hidden");
});

btn_Workouts_Modal.addEventListener("click", function () {
  // btn_createWorkout_WorkoutGroup.classList.toggle("hidden");
  if (container_WorkoutsModal.style.display === "none") {
    container_WorkoutsModal.style.display = "grid";
  } else if ((container_WorkoutsModal.style.display = "grid")) {
    container_WorkoutsModal.style.display = "none";
  }
  // container_WorkoutsModal.style.display = "grid";
});

btn_createWorkout_Modal.addEventListener("click", function () {
  createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
  createWorkout_Modal.style.display = "grid";
  workouts_Title.classList.toggle("hidden");
  groupedWorkoutList.classList.toggle("hidden");
  ungroupedWorkoutList.classList.toggle("hidden");
});

const ungroupedWorkoutList = document.querySelector(".ungroupedWorkout");
const groupedWorkoutList = document.querySelector(".groupedWorkout");

btn_createWorkout.addEventListener("click", function () {
  const div = document.createElement("div");
  exerciseGroup.workoutName.push(createWorkout_Input.value);
  createWorkoutLocalStorage(createWorkout_Input.value);
  // exerciseGroup.workoutName.push(createWorkout_Input.value);
  // localStorage.setItem(
  //   "exercises_WorkoutName",
  //   JSON.stringify(exerciseGroup.workoutName)
  // );

  createWorkout_Input.value = "";
  createWorkout_Modal.style.display = "none";
  groupedWorkoutList.classList.toggle("hidden");
  ungroupedWorkoutList.classList.toggle("hidden");

  // div.classList.add("")
  for (let i = 0; i < exerciseGroup.workoutName.length; i++) {
    div.innerHTML = `
    <input class="workouts-radios" name="workouts-radios" type="radio">
    <label class="label-workouts-radios">${exerciseGroup.workoutName[i]}</label>
    
    `;
    ungroupedWorkoutList.appendChild(div);
  }
});

btn_createWorkoutGroup.addEventListener("click", function () {
  createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
});

//

const workouts_Modal_List = document.getElementsByClassName("workouts-radios");
const workouts_Modal_List_Labels = document.getElementsByClassName(
  "label-workouts-radios"
);
const btn_viewWorkOut = document.querySelector(".btn--view-workout");

btn_viewWorkOut.addEventListener("click", function () {
  // createWorkoutLocalStorage(exerciseGroup.workoutName[workoutName_Count]);

  //   const modalStates = ["Inactive", "Create Exercise", "Add Exercise"];
  // let modalStates_Count = 0;
  for (let i = 0; i < workouts_Modal_List.length; i++) {
    if (workouts_Modal_List[i].checked === true) {
      workoutName_Count = i;
      console.log(`checked`);

      groupedWorkoutList.classList.toggle("hidden");
      ungroupedWorkoutList.classList.toggle("hidden");
      btn_viewWorkOut.classList.toggle("hidden");
      workouts_Title.innerHTML = `${exerciseGroup.workoutName[i]}`;
      container_ExerciseInfo.style.display = "grid";
      if (modalStates[modalStates_Count] === "Inactive") {
        btn_PushDataToArray.classList.add("hidden");
        btn_PushToWordBank.classList.add("hidden");
        btn_EditExerciseStorage.classList.add("hidden");
        btn_ExitEditStorage.classList.add("hidden");
        btn_deleteExerciseStorage.classList.add("hidden");

        // Labels for add exercise to workoutlist/localstorage
        label_addExercise_Exercise.classList.add("hidden");
        label_addExercise_Sets.classList.add("hidden");
        label_addExercise_Rest.classList.add("hidden");
        label_addExercise_Reps.classList.add("hidden");
        label_addExercise_Weight.classList.add("hidden");

        // hide inputs add exercise
        exercise_Weight.classList.add("hidden");
        exercise_Sets.classList.add("hidden");
        exercise_Reps.classList.add("hidden");
        exercise_Minutes.classList.add("hidden");
        exercise_Seconds.classList.add("hidden");
        exercise_Name.classList.add("hidden");
        exerciseWordBank_Input.classList.add("hidden");

        title_AddExercise.classList.add("hidden");
        exerciseStorage_Title.classList.add("hidden");

        // hide select add exercise
        select_Equipment.classList.add("hidden");
        select_Barbell_Exercises.classList.add("hidden");
        select_Dumbbell_Exercises.classList.add("hidden");
        select_Body_Exercises.classList.add("hidden");
        select_Rope_Exercises.classList.add("hidden");

        workout_Timer.classList.remove("hidden");
        container_workoutTimer_Buttons.classList.remove("hidden");
        // const exercise_Name = document.querySelector(".exercise-name");
      }
    }
  }
});

const btn_linkViewWorkout = document.querySelector(".btn--link-viewWorkout");

btn_linkViewWorkout.addEventListener("click", function () {
  for (let i = 0; i < workouts_Modal_List.length; i++) {
    if (workouts_Modal_List[i].checked === true) {
      workoutName_Count = i;
      console.log(`checked`);
      exerciseGroup.workoutList = JSON.parse(
        localStorage.getItem(
          `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
        )
      );
    }
  }

  modal_Exercise_Info.classList.toggle("hidden");
  activeModalContainer.style.gridRow = "2/6";
  container_ExerciseInfo.style.display = "none";
  restTimerModal.style.display = "none";
  if (exerciseGroup.workoutList.length === 0) {
    current_Exercise_List.innerHTML = `Exercise (0/0)`;
    exerciseEditExercise_Title.innerHTML = `Exercise:`;
    labelExercise.innerHTML = `Exercise:`;
    labelWeight.innerHTML = `Weight:`;
    labelSets.innerHTML = `Set:`;
    labelReps.innerHTML = `Reps:`;
    labelRest.innerHTML = `Rest:`;
  } else if (!(exerciseGroup.workoutList.length === 0)) {
    current_Exercise_List.innerHTML = `Exercise (${count + 1} / ${
      exerciseGroup.workoutList.length
    })`;
    exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[count]}`;
    labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
    labelReps.innerHTML = `Reps: ${exerciseGroup.reps[count]}`;
    labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[count]}m ${exerciseGroup.rest.seconds[count]}s`;
  }
});
