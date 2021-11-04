"use strict";

const exercise_List = document.querySelector(".exercise-list");
const exercise_List_P = document.querySelector(".exercise-list-p");
const exercise_List_Title = document.querySelector(".exercise-list-title");
const exercise_List_CurrentExercise = document.querySelector(
  ".exercise-list-current-exercise"
);
const exercise_List_Hint = document.querySelector(".exercise-list-hint");
const exerciseList_Container = document.querySelector(".exercise-list");
const btn_toggleExerciseList = document.querySelector(".btn--exercise-list");
const radio_ExerciseList = document.getElementsByClassName(
  "exercise-list-radio"
);
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
  console.log(`clicked`);
  btn_DeleteExerciseListItems.classList.toggle("hidden");
});

let activeState, editMode;

const init_EditMode = function () {
  activeState = 0;
  editMode = false;
};
init_EditMode();

const exercise_List_editMode = function () {
  activeState = activeState === 0 ? 1 : 0;
  if (activeState === 0) {
    exercise_List_Title.innerHTML = `Exercise List`;
  } else if (activeState === 1) {
    exercise_List_Title.innerHTML = `Edit Mode`;
  }
};

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
    exercise_List_CurrentExercise.classList.add("hidden");
    btn_SetActive.classList.add("hidden");
  } else if (exerciseGroup.name.length > 0) {
    exercise_List_P.classList.add("hidden");
    exercise_List_Hint.classList.add("hidden");
    exercise_List_CurrentExercise.classList.remove("hidden");
    btn_SetActive.classList.remove("hidden");
  }
});

btn_toggleExerciseList.addEventListener("click", function () {
  exerciseList_Container.classList.toggle("hidden");
  activeModalContainer.classList.toggle("hidden");
  if (editMode) {
    exercise_List_Title.innerHTML = `Exercise List`;
  }

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
