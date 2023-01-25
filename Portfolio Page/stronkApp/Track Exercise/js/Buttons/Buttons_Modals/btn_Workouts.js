"use strict";
// Workouts Navigation Bar
const workouts_Nav = document.querySelector(".container--workouts-nav");

/* Container for View Workout / Edit Mode: delete, archive, view-archived, restore-archived */
const container_ViewWorkoutButtons = document.querySelector(
  ".container--view-workout-buttons"
);

// Workout Modal h1
const workouts_Modal_Title = document.querySelector(".workouts-modal--title");

// Modal: what would you like to create?
const btn_createWorkoutOrWorkoutGroup = document.querySelector(
  ".btn--createWorkout_WorkoutGroup"
);
const btn_CreateWorkout = document.querySelector(".btn--createWorkout");
const btn_CreateWorkoutGroup = document.querySelector(
  ".btn--createWorkoutGroup"
);
const btn_Cancel_CreateWorkout = document.querySelector(
  ".btn--cancel-createWorkoutexercise"
);

// Select + options
const workouts_Modal_Create_Workouts = document.querySelector(
  ".workouts-modal--create-workout"
);
const option_Create_Workout = document.querySelector(".option--workout-modal");
const option_Create_WorkoutGroup = document.querySelector(
  ".option--workoutgroup-modal"
);

btn_createWorkoutOrWorkoutGroup.addEventListener("click", function () {
  btn_viewWorkOut.classList.add("hidden");
  groupedWorkoutList.classList.add("hidden");
  ungroupedWorkoutList.classList.add("hidden");
  for (let i = tempWorkoutList.length; i >= 0; i--) {
    tempWorkoutList.splice(i, 1);
  }
  if (option_Create_Workout.selected === true) {
    // createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
    createWorkout_Modal.style.display = "grid";
    // createWorkoutGroup_Modal.style.display = "none";
    // workouts_Title.classList.toggle("hidden");
  } else if (option_Create_WorkoutGroup.selected === true) {
    createWorkoutGroup_Modal.style.display = "grid";
    createWorkout_Modal.style.display = "none";
  }
});

btn_CreateWorkout.addEventListener("click", function () {
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

btn_CreateWorkoutGroup.addEventListener("click", function () {
  createWorkout_WorkoutGroup_Modal.classList.toggle("hidden");
});

btn_Cancel_CreateWorkout.addEventListener("click", function () {
  workouts_Modal_Create_Workouts.selectedIndex = 0;
  createWorkout_Modal.style.display = "none";
  btn_viewWorkOut.classList.remove("hidden");
  groupedWorkoutList.classList.remove("hidden");
  ungroupedWorkoutList.classList.remove("hidden");
});

function hideCreateWorkoutButton() {
  if (workouts_Modal_Create_Workouts.selectedIndex === 0) {
    btn_createWorkoutOrWorkoutGroup.classList.add("hidden");
  }
  if (workouts_Modal_Create_Workouts.selectedIndex === 1) {
    btn_createWorkoutOrWorkoutGroup.classList.remove("hidden");
  }
  if (workouts_Modal_Create_Workouts.selectedIndex === 2) {
    btn_createWorkoutOrWorkoutGroup.classList.remove("hidden");
  }
}
document.body.addEventListener("change", hideCreateWorkoutButton);
