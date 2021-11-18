"use strict";

const activeModalContainer = document.querySelector(".modal-exercise-info");
const btn_StartWorkout = document.querySelector(".btn--startWorkout");

const btn_CloseActiveModal = document.querySelector(".btn--close-activeModal");

btn_StartWorkout.addEventListener("click", function () {
  // activeExercises_Modal = true;
  if (count + 1 === exerciseGroup.workoutList.length) {
    btn_NextExercise.classList.add("hidden");
    labelNextExercise.classList.add("hidden");
  }
  current_Exercise_List.innerHTML = `Exercise (${count + 1} / ${
    exerciseGroup.workoutList.length
  })`;
  localStorage.setItem("activeExercises_Modal", activeExercises_Modal);
  // span_Nav_StartWorkout.innerHTML = `Resume Workout`;
  // localStorage.setItem(
  //   "span_Nav_StartWorkout",
  //   (span_Nav_StartWorkout.innerHTML = `Resume Workout`)
  // );
  // img_Modal_ActiveExercise.src =
  //   "/josephdorsey.github.io/Portfolio Page/stronkApp/Track Exercise/img/pause-circle-outline.svg";
  // mainNav_Style();
  // Hides the Rest Timer Modal

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
  activeModalContainer.classList.toggle("hidden");
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
});

btn_CloseActiveModal.addEventListener("click", function () {
  // mainNav_Style();
  localStorage.setItem("activeExercises_Modal", activeExercises_Modal);
  // span_Nav_StartWorkout.innerHTML = `Resume Workout`;
  // localStorage.setItem(
  //   "span_Nav_StartWorkout",
  //   (span_Nav_StartWorkout.innerHTML = `Resume Workout`)
  // );
  activeModalContainer.classList.toggle("hidden");
  container_MainNav_Buttons.style.display = "grid";
});

// exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
//   labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[0]}`;
//   labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[0]}`;
//   labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[0]} / ${exerciseGroup.sets.max[0]}`;
//   labelReps.innerHTML = `Reps: ${exerciseGroup.reps[0]}`;
//   labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[0]}m ${exerciseGroup.rest.seconds[0]}s`;
