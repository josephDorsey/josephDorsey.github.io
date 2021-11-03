"use strict";

const exercise_List = document.querySelector(".exercise-list");
const exercise_List_P = document.querySelector(".exercise-list-p");
const exercise_List_Hint = document.querySelector(".exercise-list-hint");
const exerciseList_Container = document.querySelector(".exercise-list");
const btn_toggleExerciseList = document.querySelector(".btn--exercise-list");
const radio_ExerciseList = document.getElementsByClassName(
  "exercise-list-radio"
);

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
  console.log(`clicked`);
  btn_DeleteExerciseListItems.classList.toggle("hidden");
});

btn_ReturnToActiveModal.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  activeModalContainer.classList.toggle("hidden");
  if (exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "0";
  } else if (!exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "10px";
  }
});

btn_CloseExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
});

btnMain_ToggleExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  container_MainNav_Buttons.classList.toggle("hidden");
  if (exerciseGroup.name.length === 0) {
    exercise_List_P.classList.remove("hidden");
    exercise_List_Hint.classList.remove("hidden");
  } else if (exerciseGroup.name.length > 0) {
    exercise_List_P.classList.add("hidden");
    exercise_List_Hint.classList.add("hidden");
  }
});

btn_toggleExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  activeModalContainer.classList.toggle("hidden");
  if (exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "0";
  } else if (!exerciseList_Container.classList.contains("hidden")) {
    activeModalContainer.style.gap = "10px";
  }
  if (exerciseGroup.name.length === 0) {
    exercise_List_P.classList.remove("hidden");
    exercise_List_Hint.classList.remove("hidden");
  } else if (exerciseGroup.name.length > 0) {
    exercise_List_P.classList.add("hidden");
    exercise_List_Hint.classList.add("hidden");
  }
});
