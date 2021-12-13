"use strict";

// let workout_Timer_Count = 50;

// Containers

let workoutName_Count = 0;

const exerciseGroup = {
  exerciseEquipment: {
    barbell: JSON.parse(localStorage.getItem("exercises_Barbell")) || [],
    dumbbell: JSON.parse(localStorage.getItem("exercises_Dumbbell")) || [],
    rope: JSON.parse(localStorage.getItem("exercises_Rope")) || [],
    body: JSON.parse(localStorage.getItem("exercises_Body")) || [],
    // type: JSON.parse(localStorage.getItem("exercises_Equipment_Type")) || [],
  },
  workoutName: [],
  // workoutList: JSON.parse(localStorage.getItem("exercises_WorkoutList")) || [],
  workoutList: [],
  // name: [],
  // weight: JSON.parse(localStorage.getItem("exercises_Weight")) || [],
  weight: [],
  sets: {
    // min: JSON.parse(localStorage.getItem("exercises_Sets_Min")) || [],
    // max: JSON.parse(localStorage.getItem("exercises_Sets_Max")) || [],
    min: [],
    max: [],
  },
  // reps: JSON.parse(localStorage.getItem("exercises_Reps")) || [],
  reps: [],
  rest: {
    // minutes: JSON.parse(localStorage.getItem("exercises_Rest_Minutes")) || [],
    // seconds: JSON.parse(localStorage.getItem("exercises_Rest_Seconds")) || [],
    minutes: [],
    seconds: [],
  },
  archived: [],
};
let archive_Workout_Name =
  JSON.parse(localStorage.getItem("archived_exercises_WorkoutName")) || [];
let temp_Workout_Name =
  JSON.parse(localStorage.getItem("exercises_WorkoutName")) || [];

let tempWorkoutList =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
    )
  ) || [];
let temp_Weight =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Weight`
    )
  ) || [];
let temp_Rest_Seconds =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Seconds`
    )
  ) || [];
let temp_Rest_Minutes =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Minutes`
    )
  ) || [];
let temp_Sets_Min =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Min`
    )
  ) || [];
let temp_Sets_Max =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Max`
    )
  ) || [];
let temp_Reps =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Reps`
    )
  ) || [];

let workout_Timer_Count =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`
    )
  ) || 0;
let workout_Interval;
console.log(localStorage);

const trackerTimer = {
  app_Seconds:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
      )
    ) || 0,
  app_Minutes:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
      )
    ) || 0,
  app_Hours:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
      )
    ) || 0,
  app_Days:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Days`
      )
    ) || 0,
};

let modalStates_Count = 0;
let workoutState_Count =
  JSON.parse(localStorage.getItem("workoutState_Count")) || 0;
let states_Count = 0;

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

const modalStates = ["Inactive", "Create Exercise", "Add Exercise"];
const workoutState = ["Inactive", "Active", "Pause"];

const createWorkoutLocalStorage = function (input) {
  // creates input value into localstorage array out of temp array
  localStorage.setItem(
    `workoutName_${input}_Exercises`,
    JSON.stringify(tempWorkoutList)
  );
  // pushes workout name to array and then adds to localstorage
  localStorage.setItem(
    `exercises_WorkoutName`,
    JSON.stringify(temp_Workout_Name)
  );
};

const retrieveWorkoutLocalStorage = function () {
  for (let i = 0; i < exerciseGroup.workoutName.length; i++) {
    if (
      workouts_Modal_List[workoutName_Count].checked &&
      exerciseGroup.workoutName[workoutName_Count] ===
        workouts_Modal_List_Labels[workoutName_Count].innerHTML
    ) {
      exerciseGroup.workoutList = JSON.parse(
        localStorage.getItem(
          `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
        )
      );
    }
  }
};

window.onload = function () {
  exerciseGroup.workoutName =
    JSON.parse(localStorage.getItem("exercises_WorkoutName")) || [];
  for (let i = 0; i < temp_Workout_Name.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input class="workouts-radios" name="workouts-radios" type="radio">
    <label class="label-workouts-radios">${temp_Workout_Name[i]}</label>
  
    `;
    ungroupedWorkoutList.appendChild(div);
  }
  for (let i = 0; i < exerciseGroup.archived.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input class="archived-workouts-radios" name="archived-workouts-radios" type="radio">
    <label class="label-archived-workouts-radios">${exerciseGroup.archived[i]}</label>
    `;
    archivedWorkoutList.appendChild(div);
  }
  // exerciseGroup.workoutList =
  //   JSON.parse(
  //     localStorage.getItem(
  //       `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
  //     )
  //   ) || [];
  if (
    createWorkout_WorkoutGroup_Modal_state[
      createWorkout_WorkoutGroup_Modal_count
    ] === "Inactive"
  ) {
    createWorkout_WorkoutGroup_Modal.style.display === "none";
  }
  if (workoutState[workoutState_Count] === "Active") {
    btn_StartWorkout.classList.add("hidden");
    btn_PauseWorkout.classList.remove("hidden");
    workout_Timer_Count =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`
        )
      ) || 0;
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
    workout_Interval = setInterval(appTimer, 1000);
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
  }
  if (workoutState[workoutState_Count] === "Pause") {
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
    btn_StartWorkout.classList.add("hidden");
    btn_PauseWorkout.classList.add("hidden");
    btn_ResumeWorkout.classList.remove("hidden");
  }
  count = JSON.parse(localStorage.getItem("current_Exercise_Count")) || 0;
  // exerciseGroup.sets.min =
  //   JSON.parse(localStorage.getItem("exercises_Sets_Min")) || [];
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
    labelPreviousExercise.classList.toggle("hidden");
    btn_PreviousExercise.classList.toggle("hidden");
  } else if (count > 0) {
    labelPreviousExercise.classList.remove("hidden");
    btn_PreviousExercise.classList.remove("hidden");
  }
  // exerciseGroup.exerciseEquipment.type =
  //   JSON.parse(localStorage.getItem("exercises_Equipment_Type")) || [];
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
    exercise_List_CurrentExercise.innerHTML = `Current Exercise: ${exerciseGroup.workoutList[count]}`;
    if (
      exerciseGroup.exerciseEquipment.barbell.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Barbell.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    } else if (
      exerciseGroup.exerciseEquipment.dumbbell.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Dumbbell.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    } else if (
      exerciseGroup.exerciseEquipment.body.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Body.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    } else if (
      exerciseGroup.exerciseEquipment.rope.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Rope.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    }
    //   div.innerHTML = `
    // <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
    // <label>${ }: ${exerciseGroup.workoutList[i]}</label>
    // `;
    exercise_List.appendChild(div);
  }
};

// let main_Nav_styleState;
// const init = function () {
//   // exercise_List_activeState = 0;
//   main_Nav_styleState = 0;
//   // editMode = false;
// };
// init();

// const mainNav_Style = function () {
//   main_Nav_styleState = main_Nav_styleState === 0 ? 1 : 0;
//   if (main_Nav_styleState === 0) {
//     container_MainNav_Buttons.style.display = "grid";
//   } else if (main_Nav_styleState === 1) {
//     container_MainNav_Buttons.style.display = "none";
//   }
// };

let inactiveExercises_Modal,
  addExercises_Modal,
  createExercises_Modal,
  exerciseList_Modal,
  editExercises_Modal,
  activeExercises_Modal;

const state_addExercises = function () {
  if (activeExercises_Modal) {
    img_Modal_ActiveExercise.src =
      "/josephdorsey.github.io/Portfolio Page/stronkApp/Track Exercise/img/pause-circle-outline.svg";
  } else if (!activeExercises_Modal) {
    img_Modal_ActiveExercise.src =
      "/josephdorsey.github.io/Portfolio Page/stronkApp/Track Exercise/img/play-circle-outline.svg";
  }
  // if (inactiveExercises_Modal) {
  //   btn_EditExerciseStorage.classList.add("hidden");
  // }
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
      exercise_List_CurrentExercise.innerHTML = `Current exercise: ${exerciseGroup.workoutList[count]}`;
      btn_SetActive.classList.remove("hidden");
    }
  }
};
// state_addExercises();
