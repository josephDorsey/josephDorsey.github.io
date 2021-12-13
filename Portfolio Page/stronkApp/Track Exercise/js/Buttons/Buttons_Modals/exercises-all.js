"use strict";

const btn_Exercises_Modal = document.querySelector(".btn--exercises-modal");
const container_ExercisesModal = document.querySelector(
  ".container--exercises"
);
const container_AllExercises = document.querySelector(
  ".container--all-exercises"
);
const exercises_Radio_Label = document.getElementsByClassName(
  "exercises-radio-label"
);
const exercises_Radio = document.getElementsByClassName("exercises-radio");
let all_Exercises = [];
let all_Exercises_unique;

btn_Exercises_Modal.addEventListener("click", function () {
  if (container_ExercisesModal.style.display === "none") {
    container_ExercisesModal.style.display = "grid";
    container_WorkoutsModal.style.display = "none";
  } else if ((container_ExercisesModal.style.display = "grid")) {
    container_ExercisesModal.style.display = "none";
  }
  if (all_Exercises.length === 0) {
    exercises_Body.sort();
    exercises_Dumbbell.sort();
    exercises_Rope.sort();
    exercises_Barbell.sort();
    all_Exercises = exercises_Barbell.concat(
      exercises_Body,
      exercises_Dumbbell,
      exercises_Rope
    );
    all_Exercises.sort();
    all_Exercises_unique = [...new Set(all_Exercises)];
    localStorage.setItem(`all_Exercises`, JSON.stringify(all_Exercises));
    // break;
    for (let i = 0; i < all_Exercises.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>`;
      container_AllExercises.appendChild(div);
      for (let i = 0; i < exercises_Radio_Label.length; i++) {
        if (exercises_Radio_Label[i].innerHTML === "undefined") {
          exercises_Radio_Label[i].remove();
          exercises_Radio[i].remove();
        }
      }
      // if (exercises_Barbell.includes(`${all_Exercises_unique[i]}`)) {
      //   div.innerHTML = `
      // <input type="radio" name="exercises-radio" class="exercises-radio"/>
      // <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      // <label>${option_Barbell.innerHTML}</label>
      // `;
      // }
      // if (exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)) {
      //   div.innerHTML = `
      // <input type="radio" name="exercises-radio" class="exercises-radio"/>
      // <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      // <label>${option_Dumbbell.innerHTML}</label>
      // `;
      // }
      // if (exercises_Body.includes(`${all_Exercises_unique[i]}`)) {
      //   div.innerHTML = `
      // <input type="radio" name="exercises-radio" class="exercises-radio"/>
      // <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      // <label>${option_Body.innerHTML}</label>
      // `;
      // }
      // if (exercises_Rope.includes(`${all_Exercises_unique[i]}`)) {
      //   div.innerHTML = `
      // <input type="radio" name="exercises-radio" class="exercises-radio"/>
      // <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      // <label>${option_Rope.innerHTML}</label>
      // `;
      // }
    }
  }

  // container_WorkoutsModal.style.display = "grid";
});
