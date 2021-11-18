"use strict";

const btn_deleteExerciseStorage = document.querySelector(
  ".btn--delete-exercise-storage"
);
const btn_EditExerciseStorage = document.querySelector(
  ".btn--edit-exercise-storage"
);
const btn_ExitEditStorage = document.querySelector(
  ".btn--exit-edit-exercise-storage"
);
btn_EditExerciseStorage.addEventListener("click", function () {
  editExercises_Modal = true;
  createExercises_Modal = false;
  addExercises_Modal = false;
  select_Equipment.selectedIndex = 0;
  exerciseWordBank_Input.classList.toggle("hidden");
  label_addExercise_Exercise.classList.toggle("hidden");
  btn_ExitEditStorage.classList.remove("hidden");
  btn_deleteExerciseStorage.classList.remove("hidden");
  btn_PushToWordBank.classList.add("hidden");
  exerciseStorage_Title.innerHTML = `Edit Mode`;
  btn_linkAddExercise.classList.add("hidden");
  btn_linkCreateExercise.classList.add("hidden");
  btn_EditExerciseStorage.classList.add("hidden");
  btn_CloseExerciseInfoModal.classList.add("hidden");
});

btn_ExitEditStorage.addEventListener("click", function () {
  editExercises_Modal = false;
  createExercises_Modal = true;
  select_Equipment.selectedIndex = 0;
  exerciseWordBank_Input.classList.toggle("hidden");
  label_addExercise_Exercise.classList.toggle("hidden");
  select_Barbell_Exercises.classList.add("hidden");
  select_Dumbbell_Exercises.classList.add("hidden");
  select_Body_Exercises.classList.add("hidden");
  select_Rope_Exercises.classList.add("hidden");
  btn_ExitEditStorage.classList.add("hidden");
  btn_deleteExerciseStorage.classList.add("hidden");
  btn_PushToWordBank.classList.remove("hidden");

  btn_linkAddExercise.classList.remove("hidden");
  btn_linkCreateExercise.classList.remove("hidden");
  btn_EditExerciseStorage.classList.remove("hidden");
  exerciseStorage_Title.innerHTML = `Create new exercise`;
  btn_CloseExerciseInfoModal.classList.remove("hidden");
});

const findIndexOfExercises = function () {
  // select_Barbell_Exercises.options[0].value = "Bench Press"
  // select_Barbell_Exercises.options[0].selected
  if (option_Barbell.selected) {
    for (let i = 0; i < select_Barbell_Exercises.options.length; i++) {
      if (
        select_Barbell_Exercises.options[i].selected &&
        select_Barbell_Exercises.options[i].value === exercises_Barbell[i]
      ) {
        exercises_Barbell.splice(i, 1);
        exerciseGroup.workoutList.splice(i, 1);
        select_Barbell_Exercises.options[i].remove();
        localStorage.setItem(
          "exercises_Barbell",
          JSON.stringify(exercises_Barbell)
        );

        // userExercises.body = exercises_Body;
        console.log(exercises_Barbell);
      }
    }
  }
  if (option_Dumbbell.selected) {
    for (let i = 0; i < select_Dumbbell_Exercises.options.length; i++) {
      if (
        select_Dumbbell_Exercises.options[i].selected &&
        select_Dumbbell_Exercises.options[i].value === exercises_Dumbbell[i]
      ) {
        exercises_Dumbbell.splice(i, 1);
        exerciseGroup.workoutList.splice(i, 1);
        select_Dumbbell_Exercises.options[i].remove();
        localStorage.setItem(
          "exercises_Dumbbell",
          JSON.stringify(exercises_Dumbbell)
        );

        // userExercises.body = exercises_Body;
        console.log(exercises_Dumbbell);
      }
    }
  }
  if (option_Body.selected) {
    for (let i = 0; i < select_Body_Exercises.options.length; i++) {
      if (
        select_Body_Exercises.options[i].selected &&
        select_Body_Exercises.options[i].value === exercises_Body[i]
      ) {
        // exercises_Body.splice(i, 1);
        exercises_Body.splice(i, 1);
        exerciseGroup.workoutList.splice(i, 1);
        select_Body_Exercises.options[i].remove();
        localStorage.setItem("exercises_Body", JSON.stringify(exercises_Body));

        // userExercises.body = exercises_Body;
        console.log(exercises_Body);
      }
    }
  }
  if (option_Rope.selected) {
    for (let i = 0; i < select_Rope_Exercises.options.length; i++) {
      if (
        select_Rope_Exercises.options[i].selected &&
        select_Rope_Exercises.options[i].value === exercises_Rope[i]
      ) {
        exercises_Rope.splice(i, 1);
        exerciseGroup.workoutList.splice(i, 1);
        select_Rope_Exercises.options[i].remove();
        localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));

        // userExercises.body = exercises_Body;
        console.log(exercises_Rope);
      }
    }
  }
};

btn_deleteExerciseStorage.addEventListener("click", function () {
  findIndexOfExercises();
});
