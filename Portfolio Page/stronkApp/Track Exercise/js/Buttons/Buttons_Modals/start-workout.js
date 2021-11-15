"use strict";

const activeModalContainer = document.querySelector(".modal-exercise-info");
const btn_StartWorkout = document.querySelector(".btn--startWorkout");

const btn_CloseActiveModal = document.querySelector(".btn--close-activeModal");

btn_StartWorkout.addEventListener("click", function () {
  mainNav_Style();
  activeModalContainer.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
  console.log(`clicked`);
  if (exerciseGroup.workoutList.length === 0) {
    exerciseEditExercise_Title.innerHTML = `Exercise:`;
    labelExercise.innerHTML = `Exercise:`;
    labelWeight.innerHTML = `Weight:`;
    labelSets.innerHTML = `Set:`;
    labelReps.innerHTML = `Reps:`;
    labelRest.innerHTML = `Rest:`;
  } else if (!(exerciseGroup.workoutList.length === 0)) {
    exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
    labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
    labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[0]}`;
    labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[0]} / ${exerciseGroup.sets.max[0]}`;
    labelReps.innerHTML = `Reps: ${exerciseGroup.reps[0]}`;
    labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[0]}m ${exerciseGroup.rest.seconds[0]}s`;
  }
});

btn_CloseActiveModal.addEventListener("click", function () {
  mainNav_Style();
  activeModalContainer.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

// exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
//   labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
//   labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[0]}`;
//   labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[0]} / ${exerciseGroup.sets.max[0]}`;
//   labelReps.innerHTML = `Reps: ${exerciseGroup.reps[0]}`;
//   labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[0]}m ${exerciseGroup.rest.seconds[0]}s`;
