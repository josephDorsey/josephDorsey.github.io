"use strict";
const container_TitleNotes = document.querySelector(".container--title-notes");
const exercises_Nav = document.querySelector(".exercise-nav");
const exerciseNotes = document.querySelector(".createWorkout-title-notes");
const modal_Exercise_Info = document.querySelector(".modal-exercise-info");

const activeModalContainer = document.querySelector(".modal-active-container");

const btn_Open_Exercises_Window = document.querySelector(
  ".btn--open-exercises-window"
);
const btn_StartWorkout = document.querySelector(".btn--startWorkout");
const btn_PauseWorkout = document.querySelector(".btn--pauseWorkout");
const btn_ResumeWorkout = document.querySelector(".btn--resumeWorkout");
const btn_EndWorkout = document.querySelector(".btn--endWorkout");
const btn_CloseActiveModal = document.querySelector(".btn--close-activeModal");

// CONTAINER WORKOUT MODAL

const container_workoutTimer_Buttons = document.querySelector(
  ".start-end-workout-modal"
);
const workout_Timer = document.querySelector(".workout-timer");

// let app_Seconds = 0, app_Minutes = 0, app_Hours = 0, app_Days = 0;
const appTimer = () => {
  if (trackerTimer.app_Seconds === 59) {
    trackerTimer.app_Minutes++;

    workout_Timer_Count = 0;
    workout_Timer_Count--;
    // localStorage.setItem("app_Minutes", trackerTimer.app_Minutes);
    localStorage.setItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`,
      trackerTimer.app_Minutes
    );
  }
  if (trackerTimer.app_Minutes === 59) {
    trackerTimer.app_Hours++;
    trackerTimer.app_Minutes = 0;
    // localStorage.setItem("app_Hours", trackerTimer.app_Hours);
    localStorage.setItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`,
      trackerTimer.app_Hours
    );
  }
  if (trackerTimer.app_Hours === 24) {
    trackerTimer.app_Days++;
    trackerTimer.app_Hours = 0;
  }

  workout_Timer_Count++;
  trackerTimer.app_Seconds = workout_Timer_Count;
  // localStorage.setItem("workout_Timer_Count", workout_Timer_Count);
  localStorage.setItem(
    `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`,
    workout_Timer_Count
  );
  localStorage.setItem(
    `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`,
    trackerTimer.app_Seconds
  );
  localStorage.setItem(
    `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`,
    trackerTimer.app_Minutes
  );
  localStorage.setItem(
    `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`,
    trackerTimer.app_Hours
  );
  localStorage.setItem(
    `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Days`,
    trackerTimer.app_Days
  );
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
    localStorage.setItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`,
      workout_Timer_Count
    );
    localStorage.setItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`,
      trackerTimer.app_Seconds
    );
    localStorage.setItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`,
      trackerTimer.app_Minutes
    );
    localStorage.setItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`,
      trackerTimer.app_Hours
    );
    // btn_PauseWorkout.textContent = `Resume Workout`;
    btn_PauseWorkout.classList.toggle("hidden");
    btn_ResumeWorkout.classList.toggle("hidden");
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
  //   if (workoutState[workoutState_Count] === "Pause") {
  //     workout_Timer_Count = JSON.parse(
  //       localStorage.getItem(
  //         `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`
  //       )
  //     );
  //     trackerTimer.app_Seconds =
  //       JSON.parse(
  //         localStorage.getItem(
  //           `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
  //         )
  //       ) || 0;
  //     trackerTimer.app_Minutes =
  //       JSON.parse(
  //         localStorage.getItem(
  //           `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
  //         )
  //       ) || 0;
  //     trackerTimer.app_Hours =
  //       JSON.parse(
  //         localStorage.getItem(
  //           `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
  //         )
  //       ) || 0;
  //     setTimeout(function () {
  //       workoutState_Count--;
  //       localStorage.setItem("workoutState_Count", workoutState_Count);
  //     }, 1000);
  //     console.log(`workout begin`);
  //     // workoutState_Count++;
  //     workout_Interval = setInterval(appTimer, 1000);
  //     btn_PauseWorkout.textContent = `Pause Workout`;
  //   }
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

btn_ResumeWorkout.addEventListener("click", function () {
  if (workoutState[workoutState_Count] === "Pause") {
    workout_Timer_Count = JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`
      )
    );
    trackerTimer.app_Seconds =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
        )
      ) || 0;
    trackerTimer.app_Minutes =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
        )
      ) || 0;
    trackerTimer.app_Hours =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
        )
      ) || 0;
    setTimeout(function () {
      workoutState_Count--;
      localStorage.setItem("workoutState_Count", workoutState_Count);
    }, 1000);
    console.log(`workout begin`);
    // workoutState_Count++;
    workout_Interval = setInterval(appTimer, 1000);
    // btn_PauseWorkout.textContent = `Pause Workout`;
    btn_PauseWorkout.classList.toggle("hidden");
    btn_ResumeWorkout.classList.toggle("hidden");
  }
});

// btn_CloseActiveModal.addEventListener("click", function () {
//   modal_Exercise_Info.classList.toggle("hidden");
//   container_ExerciseInfo.style.display = "grid";
// });
// Workouts button

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
  for (let i = tempWorkoutList.length; i >= 0; i--) {
    tempWorkoutList.splice(i, 1);
  }
  createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
  workouts_Title.classList.toggle("hidden");
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
const archivedWorkoutList = document.querySelector(".archivedWorkout");

btn_createWorkout.addEventListener("click", function () {
  const div = document.createElement("div");
  temp_Workout_Name.push(createWorkout_Input.value);
  createWorkout(createWorkout_Input.value);
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
  for (let i = 0; i < temp_Workout_Name.length; i++) {
    div.innerHTML = `
    <input class="workouts-radios" name="workouts-radios" type="radio">
    <label class="label-workouts-radios">${temp_Workout_Name[i]}</label>
    
    `;
    ungroupedWorkoutList.appendChild(div);
  }
});

btn_createWorkoutGroup.addEventListener("click", function () {
  createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
});

const workouts_Modal_List = document.getElementsByClassName("workouts-radios");
const workouts_Modal_List_Labels = document.getElementsByClassName(
  "label-workouts-radios"
);
const btn_viewWorkOut = document.querySelector(".btn--view-workout");

btn_viewWorkOut.addEventListener("click", function () {
  container_Workouts_Page = 1;
  workouts_Title.style.top = "-157px";
  workouts_Title.style.left = "-239px";
  container_WorkoutsPage_Func();
  exerciseNotes.classList.remove("hidden");
  exerciseNotes.style.top = "-95px";
  exerciseNotes.style.left = "-238px";
  // createWorkoutLocalStorage(exerciseGroup.workoutName[workoutName_Count]);
  container_ExerciseInfo.style.display = "none";
  // container_ExerciseInfo.style.display = "grid";
  btn_createWorkout_WorkoutGroup.classList.add("hidden");
  btn_Edit_Workout_WorkoutGroup.classList.add("hidden");
  btn_CloseExerciseInfoModal.classList.toggle("hidden");
  span_CloseExerciseInfoModal.classList.toggle("hidden");
  //   const modalStates = ["Inactive", "Create Exercise", "Add Exercise"];
  // let modalStates_Count = 0;
  workoutState_Count = 0;
  // if (tempWorkoutList.length === 0) {
  //   container_ExerciseInfo.style.display = "none";
  // } else if (tempWorkoutList.length > 0) {
  //   container_ExerciseInfo.style.display = "grid";
  // }
  if (workoutState[workoutState_Count] === "Inactive") {
    btn_PauseWorkout.classList.toggle("hidden");
    btn_StartWorkout.classList.toggle("hidden");
  }
  if (workoutState[workoutState_Count] === "Pause") {
    btn_PauseWorkout.classList.add("hidden");
    btn_ResumeWorkout.classList.toggle("hidden");
  }

  for (let i = 0; i < workouts_Modal_List.length; i++) {
    if (tempWorkoutList.length === 1) {
      btn_NextExercise.classList.add("hidden");
      labelNextExercise.classList.add("hidden");
    }
    if (workouts_Modal_List[i].checked === true) {
      workoutName_Count = i;
      createWorkout(
        `${workouts_Modal_List_Labels[workoutName_Count].innerText}`
      );
      console.log(`Workout: ${temp_Workout_Name[workoutName_Count]} selected`);
      tempWorkoutList =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Exercises`
          )
        ) || [];
      temp_Weight =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Weight`
          )
        ) || [];
      temp_Rest_Seconds =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Rest_Seconds`
          )
        ) || [];
      temp_Rest_Minutes =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Rest_Minutes`
          )
        ) || [];
      temp_Sets_Min =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Min`
          )
        ) || [];
      temp_Sets_Max =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Max`
          )
        ) || [];
      temp_Reps =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Reps`
          )
        ) || [];
      trackerTimer.app_Seconds =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
          )
        ) || 0;
      trackerTimer.app_Minutes =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
          )
        ) || 0;
      trackerTimer.app_Hours =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
          )
        ) || 0;
      if (trackerTimer.app_Seconds > 0) {
        workoutState_Count = 2;
        if (workoutState[workoutState_Count] === "Pause") {
          btn_StartWorkout.classList.add("hidden");
          btn_PauseWorkout.classList.add("hidden");
          btn_ResumeWorkout.classList.remove("hidden");
          btn_EndWorkout.classList.remove("hidden");
          // btn_Open_Exercises_Window.style.transform = "translateX(0%)";
        }
      } else if (
        trackerTimer.app_Seconds === 0 &&
        trackerTimer.app_Minutes === 0 &&
        trackerTimer.app_Hours === 0
      ) {
        btn_StartWorkout.classList.remove("hidden");
        btn_PauseWorkout.classList.add("hidden");
        btn_ResumeWorkout.classList.add("hidden");
        btn_EndWorkout.classList.add("hidden");
        // btn_Open_Exercises_Window.style.transform = "translateX(-15%)";
        // btn_OpenExerciseInfoModal.style.transform = "translateX(0%)";
      }
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
      groupedWorkoutList.classList.toggle("hidden");
      ungroupedWorkoutList.classList.toggle("hidden");
      btn_viewWorkOut.classList.toggle("hidden");
      workouts_Title.innerHTML = `${temp_Workout_Name[i]}`;

      if (modalStates[modalStates_Count] === "Inactive") {
        btn_PushDataToArray.classList.add("hidden");
        btn_PushToWordBank.classList.add("hidden");
        btn_EditExerciseStorage.classList.add("hidden");
        btn_ExitEditStorage.classList.add("hidden");
        btn_deleteExerciseStorage.classList.add("hidden");

        // Labels for add exercise to workoutlist/localstorage
        // label_addExercise_Exercise.classList.add("hidden");
        // label_addExercise_Sets.classList.add("hidden");
        // label_addExercise_Rest.classList.add("hidden");
        // label_addExercise_Reps.classList.add("hidden");
        // label_addExercise_Weight.classList.add("hidden");

        // hide inputs add exercise
        // exercise_Weight.classList.add("hidden");
        // exercise_Sets.classList.add("hidden");
        // exercise_Reps.classList.add("hidden");
        // exercise_Minutes.classList.add("hidden");
        // exercise_Seconds.classList.add("hidden");
        // exercise_Name.classList.add("hidden");
        // exerciseWordBank_Input.classList.add("hidden");

        // title_AddExercise.classList.add("hidden");
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
    if (tempWorkoutList.length === 1) {
      btn_NextExercise.classList.add("hidden");
      labelNextExercise.classList.add("hidden");
    } else if (tempWorkoutList.length > 1) {
      btn_NextExercise.classList.remove("hidden");
      labelNextExercise.classList.remove("hidden");
    }
    if (workouts_Modal_List[i].checked === true) {
      workoutName_Count = i;
      console.log(`checked`);
      exerciseGroup.workoutName = JSON.parse(
        localStorage.getItem(`exercises_WorkoutName`)
      );
      exerciseGroup.workoutList =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Exercises`
          )
        ) || [];
      exerciseGroup.weight =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Weight`
          )
        ) || [];
      exerciseGroup.sets.min =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Min`
          )
        ) || [];
      exerciseGroup.sets.max =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Max`
          )
        ) || [];
      exerciseGroup.reps =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Reps`
          )
        ) || [];
      exerciseGroup.rest.minutes =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Rest_Minutes`
          )
        ) || [];
      exerciseGroup.rest.seconds =
        JSON.parse(
          localStorage.getItem(
            `workoutName_${temp_Workout_Name[workoutName_Count]}_Rest_Seconds`
          )
        ) || [];
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
  if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
    labelNextSet.classList.toggle("hidden");
    btn_NextSet.classList.toggle("hidden");
    // btn_NextExercise.classList.remove("hidden");
    // labelNextExercise.classList.remove("hidden");
    // btn_NextSet.classList.toggle("hidden");
    // labelNextSet.classList.toggle("hidden");
    console.log(`You've finished your set! begin next exercise`);
    // btn_NextExercise.classList.toggle("hidden");
    // labelNextExercise.classList.toggle("hidden");
  }
  if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
    labelNextSet.classList.remove("hidden");
    btn_NextSet.classList.remove("hidden");
  }
  if (count === 0) {
    labelPreviousExercise.classList.add("hidden");
    btn_PreviousExercise.classList.add("hidden");
  } else if (count > 0) {
    labelPreviousExercise.classList.remove("hidden");
    btn_PreviousExercise.classList.remove("hidden");
  }
});

const btn_Edit_Workout_WorkoutGroup = document.querySelector(
  ".btn--edit-Workout-WorkoutGroup"
);
const btn_Delete_Workout_WorkoutGroup = document.querySelector(
  ".btn--delete-workout"
);
const btn_Archive_Workout_WorkoutGroup = document.querySelector(
  ".btn--archive-workout"
);
const btn_View_Archive_Workout_WorkoutGroup = document.querySelector(
  ".btn--view-archived-workout"
);
const btn_Restore_Archive_Workout_WorkoutGroup = document.querySelector(
  ".btn--restore-archived-workout"
);
const archived_Workout_List = document.getElementsByClassName(
  "archived-workouts-radios"
);
const archived_Workout_List_Labels = document.getElementsByClassName(
  "label-archived-workouts-radios"
);

btn_Edit_Workout_WorkoutGroup.addEventListener("click", function () {
  btn_viewWorkOut.classList.toggle("hidden");
  btn_Delete_Workout_WorkoutGroup.classList.toggle("hidden");
  btn_Archive_Workout_WorkoutGroup.classList.toggle("hidden");
  btn_View_Archive_Workout_WorkoutGroup.classList.toggle("hidden");
  if (btn_Edit_Workout_WorkoutGroup.innerHTML === "Done") {
    btn_Edit_Workout_WorkoutGroup.innerHTML = `Edit`;
  } else {
    btn_Edit_Workout_WorkoutGroup.innerHTML = `Done`;
  }
});

btn_Delete_Workout_WorkoutGroup.addEventListener("click", function () {
  for (let i = 0; i < workouts_Modal_List.length; i++) {
    if (workouts_Modal_List[i].checked === true) {
      workoutName_Count = i;
      workouts_Modal_List[i].remove();
      workouts_Modal_List_Labels[i].remove();
      deleteSavedWorkout();
      exerciseGroup.workoutName.splice(i, 1);
      temp_Workout_Name.splice(i, 1);
      localStorage.setItem(
        "exercises_WorkoutName",
        JSON.stringify(exerciseGroup.workoutName)
      );
      break;
    }
  }

  console.log(localStorage);
});

const deleteSavedWorkout = function () {
  // set [], save to local, delete from local
  exerciseGroup.workoutList = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`,
    JSON.stringify(exerciseGroup.workoutList)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
  );
  // delete weight
  exerciseGroup.weight = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Weight`,
    JSON.stringify(exerciseGroup.weight)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Weight`
  );

  // delete sets min
  exerciseGroup.sets.min = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Min`,
    JSON.stringify(exerciseGroup.sets.min)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Min`
  );

  // delete sets max
  exerciseGroup.sets.max = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Max`,
    JSON.stringify(exerciseGroup.sets.max)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Max`
  );

  // delete reps
  exerciseGroup.reps = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Reps`,
    JSON.stringify(exerciseGroup.reps)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Reps`
  );

  // delete rest minutes
  exerciseGroup.rest.minutes = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Minutes`,
    JSON.stringify(exerciseGroup.rest.minutes)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Minutes`
  );

  // delete rest seconds
  exerciseGroup.rest.seconds = [];
  localStorage.setItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Seconds`,
    JSON.stringify(exerciseGroup.rest.seconds)
  );
  localStorage.removeItem(
    `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Seconds`
  );

  // Run this loop backwards so that way the spliced indexs dont get mixed up
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
};

btn_Archive_Workout_WorkoutGroup.addEventListener("click", function () {
  for (let i = 0; i < workouts_Modal_List.length; i++) {
    if (workouts_Modal_List[i].checked === true) {
      workoutName_Count = i;
      workouts_Modal_List[i].remove();
      workouts_Modal_List_Labels[i].remove();
      archive_Workout_Name.push(exerciseGroup.workoutName.splice(i, 1).pop());
      temp_Workout_Name.splice(i, 1);
      localStorage.setItem(
        "exercises_WorkoutName",
        JSON.stringify(temp_Workout_Name)
      );
      localStorage.setItem(
        "archived_exercises_WorkoutName",
        JSON.stringify(archive_Workout_Name)
      );
      break;
    }
  }
});

btn_View_Archive_Workout_WorkoutGroup.addEventListener("click", function () {
  groupedWorkoutList.classList.toggle("hidden");
  btn_Archive_Workout_WorkoutGroup.classList.toggle("hidden");
  btn_Delete_Workout_WorkoutGroup.classList.toggle("hidden");
  ungroupedWorkoutList.classList.toggle("hidden");
  archivedWorkoutList.classList.toggle("hidden");
  btn_Restore_Archive_Workout_WorkoutGroup.classList.toggle("hidden");
  exerciseGroup.archived =
    JSON.parse(localStorage.getItem("archived_exercises_WorkoutName")) || [];
  const div = document.createElement("div");
  for (let i = 0; i < exerciseGroup.archived.length; i++) {
    div.innerHTML = `
    <input class="archived-workouts-radios" name="archived-workouts-radios" type="radio">
    <label class="label-archived-workouts-radios">${exerciseGroup.archived[i]}</label>
    `;
    archivedWorkoutList.appendChild(div);
  }

  if (btn_View_Archive_Workout_WorkoutGroup.innerHTML === "View Archive") {
    btn_View_Archive_Workout_WorkoutGroup.innerHTML = "Close Archive";
  } else {
    btn_View_Archive_Workout_WorkoutGroup.innerHTML = "View Archive";
  }
});
btn_Restore_Archive_Workout_WorkoutGroup.addEventListener("click", function () {
  for (let i = 0; i < archived_Workout_List.length; i++) {
    if (archived_Workout_List[i].checked === true) {
      archived_Workout_List[i].remove();
      archived_Workout_List_Labels[i].remove();
      temp_Workout_Name.push(exerciseGroup.archived.splice(i, 1).pop());
      archive_Workout_Name.splice(i, 1);
      localStorage.setItem(
        "archived_exercises_WorkoutName",
        JSON.stringify(archive_Workout_Name)
      );
      localStorage.setItem(
        "exercises_WorkoutName",
        JSON.stringify(temp_Workout_Name)
      );
      const div = document.createElement("div");
      for (let i = 0; i < temp_Workout_Name.length; i++) {
        div.innerHTML = `
        <input class="workouts-radios" name="workouts-radios" type="radio">
        <label class="label-workouts-radios">${temp_Workout_Name[i]}</label>
        
        `;
        ungroupedWorkoutList.appendChild(div);
      }
      break;
    }
  }
});

let all_Exercises_Info = [];

let all_Exercises_Info_Modal;
const btn_Close_Exercises_Window = document.querySelector(
  ".btn--close-exercise-window"
);
btn_Open_Exercises_Window.addEventListener("click", function () {
  states_Count = 1;
  exercises_Nav.classList.add("hidden");
  select_Equipment.selectedIndex = 0;
  container_ExerciseInfo.style.display = "grid";
  btn_Open_Exercises_Window.style.display = "none";
  btn_linkAddExercise.classList.add("hidden");
  container_EIE.style.display = "grid";
  // Hide workouts timer
  workouts_Title.classList.add("hidden");
  btn_CloseExerciseInfoModal.classList.toggle("hidden");
  span_CloseExerciseInfoModal.classList.toggle("hidden");
  workout_Timer.classList.add("hidden");
  // Hide Workout Timer
  workout_Timer.classList.add("hidden");
  for (let i = 0; i < row_Div.length; i++) {
    row_Div[i].classList.add("hidden");
  }

  // Hide Workout Buttons
  container_workoutTimer_Buttons.classList.add("hidden");
  // btn_StartWorkout.classList.add("hidden");
  // btn_PauseWorkout.classList.add("hidden");
  // btn_EndWorkout.classList.add("hidden");
  // btn_ResumeWorkout.classList.add("hidden");

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
  // btn_linkCreateExercise.classList.remove("btn-active");
  // btn_AddCreateExercise.classList.toggle("btn-active");
  container_ExerciseSelectContainer.style.gridColumn = "1 / -1";
  container_ExerciseSelectContainer.style.justifySelf = "center";
  for (let i = 0; i < buttons_AddExerciseModal.length; i++) {
    buttons_AddExerciseModal[i].style.gridRow = "1";
  }
  btn_PushToWordBank.classList.add("hidden");
  btn_PushDataToArray.classList.remove("hidden");
  // label_addExercise_Weight.classList.remove("hidden");
  // label_addExercise_Sets.classList.remove("hidden");
  // label_addExercise_Reps.classList.remove("hidden");
  // label_addExercise_Rest.classList.remove("hidden");
  // exercise_Weight.classList.remove("hidden");
  // exercise_Sets.classList.remove("hidden");
  // exercise_Reps.classList.remove("hidden");
  // exercise_Seconds.classList.remove("hidden");
  // exercise_Minutes.classList.remove("hidden");
  // exercise_Name.classList.add("hidden");
  // title_AddExercise.classList.remove("hidden");
  select_Equipment.classList.add("hidden");
  // label_addExercise_Exercise.classList.add("hidden");

  exerciseStorage_Title.classList.add("hidden");
  // exerciseWordBank_Input.classList.add("hidden");

  if (all_Exercises_Info.length === 0) {
    exercises_Body.sort();
    exercises_Dumbbell.sort();
    exercises_Rope.sort();
    exercises_Barbell.sort();
    all_Exercises_Info = exercises_Barbell.concat(
      exercises_Body,
      exercises_Dumbbell,
      exercises_Rope
    );
    all_Exercises_Info.sort();
    all_Exercises_Info_Modal = [...new Set(all_Exercises_Info)];
    localStorage.setItem(
      `all_Exercises_Info_Modal`,
      JSON.stringify(all_Exercises_Info_Modal)
    );
    // break;
    for (let i = 0; i < all_Exercises_Info_Modal.length; i++) {
      // const div = document.createElement("div");
      const label = document.createElement("label");
      // div.classList.add("exercises-all-div");
      label.classList.add("exercises-all-div");
      if (
        exercises_Barbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        exercises_Dumbbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        exercises_Body.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        label.innerHTML = `
        <div>
        <input type="radio" class="exercises-radio"/>
        <label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
        <ul class="ul--exercise-equipment">
        <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}, ${option_Dumbbell.innerHTML}</li>
        </ul>
        </div>
        `;
        //   div.innerHTML = `
        //   <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>
        // ${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}, ${option_Dumbbell.innerHTML}</li>
        // </ul>
        // `;
      }
      if (
        exercises_Barbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        exercises_Dumbbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Body.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `
        //   <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>
        // ${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Barbell.innerHTML}, ${option_Dumbbell.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
      <input type="radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
      <ul class="ul--exercise-equipment">
      <li>${option_Barbell.innerHTML}, ${option_Dumbbell.innerHTML}</li>
      </ul>
      </div>
      `;
      }

      if (
        exercises_Dumbbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Barbell.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `
        //   <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>
        // ${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Dumbbell.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
      <input type="radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
      <ul class="ul--exercise-equipment">
      <li>${option_Dumbbell.innerHTML}</li>
      </ul>
      </div>
      `;
      }
      if (
        exercises_Barbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Dumbbell.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `
        //   <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>
        // ${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Barbell.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
        <input type="radio" class="exercises-radio"/>
        <label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
        <ul class="ul--exercise-equipment">
        <li>${option_Barbell.innerHTML}</li>
        </ul>
        </div>
      `;
      }
      if (
        exercises_Body.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Barbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Dumbbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Rope.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `
        //   <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>
        // ${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Body.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
        <input type="radio" class="exercises-radio"/>
        <label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
        <ul class="ul--exercise-equipment">
        <li>${option_Body.innerHTML}</li>
        </ul>
        </div>
      `;
      }
      if (
        exercises_Body.includes(`${all_Exercises_Info_Modal[i]}`) &&
        exercises_Barbell.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Dumbbell.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `

        // <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
        <input type="radio" class="exercises-radio"/><label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
        <ul class="ul--exercise-equipment">
        <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}</li>
        </ul>
        </div>
      `;
      }
      if (
        exercises_Rope.includes(`${all_Exercises_Info_Modal[i]}`) &&
        exercises_Body.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `

        // <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Body.innerHTML}, ${option_Rope.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
        <input type="radio" class="exercises-radio"/><label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
        </label>
        <ul class="ul--exercise-equipment">
        <li>${option_Body.innerHTML}, ${option_Rope.innerHTML}</li>
        </ul>
        </div>
      `;
      }
      if (
        exercises_Rope.includes(`${all_Exercises_Info_Modal[i]}`) &&
        !exercises_Body.includes(`${all_Exercises_Info_Modal[i]}`)
      ) {
        //   div.innerHTML = `

        // <label class="exercises-radio-label">
        // <input type="radio" class="exercises-radio"/>${all_Exercises_Info_Modal[i]}</label>
        // <ul class="ul--exercise-equipment">
        // <li>${option_Rope.innerHTML}</li>
        // </ul>
        // `;
        label.innerHTML = `
        <div>
      <input type="radio" class="exercises-radio"/><label class="exercises-radio-label">${all_Exercises_Info_Modal[i]}
      </label>
      <ul class="ul--exercise-equipment">
      <li>${option_Rope.innerHTML}</li>
      </ul></div>
      `;
      }
      for (let i = 0; i < exercises_Radio_Label.length; i++) {
        if (exercises_Radio_Label[i].innerHTML === "undefined") {
          exercises_Radio_Label[i].remove();
          exercises_Radio[i].remove();
        }
      }
      // container_EIE.appendChild(div);
      container_EIE.appendChild(label);
    }
  }
});
btn_Close_Exercises_Window.addEventListener("click", function () {
  container_EIE.style.display = "none";

  exercises_Nav.classList.remove("hidden");
  container_ExerciseInfo.style.display = "none";
  container_workoutTimer_Buttons.classList.remove("hidden");
  btn_Open_Exercises_Window.style.display = "";
  workout_Timer.classList.remove("hidden");
  // Hide workouts timer
  container_TitleNotes.style.top = "4px";
  workouts_Title.classList.remove("hidden");
  workouts_Title.style.left = "-14px";
  workouts_Title.style.top = "-22px";
  exerciseNotes.classList.remove("hidden");
  exerciseNotes.style.left = "-12px";
  exerciseNotes.style.top = "41px";
  btn_CloseExerciseInfoModal.classList.remove("hidden");
  span_CloseExerciseInfoModal.classList.remove("hidden");
  for (let i = 0; i < row_Div.length; i++) {
    if (row_Div.length === 0) {
      row_Div[i].classList.add("hidden");
    } else if (row_Div.length > 1) {
      row_Div[i].classList.remove("hidden");
    }
  }
});
