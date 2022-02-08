"use strict";
// Navigation Buttons
const btn_Home = document.querySelector(".btn--home-modal");
const btn_Workouts_Modal = document.querySelector(".btn--workouts-modal");
const btn_History = document.querySelector(".btn--history");
const btn_Exercises_Modal = document.querySelector(".btn--exercises-modal");
const btn_TrackCalories = document.querySelector(".btn--track-user-cal");
const btn_Health = document.querySelector(".btn--user-health");

// NAVIGATION CONTAINERS
const container_Home = document.querySelector(".container--home");
const container_WorkoutsModal = document.querySelector(".container--workouts");
const container_History = document.querySelector(".container--history");
const container_ExercisesModal = document.querySelector(
  ".container--exercises"
);
const container_TrackCalories = document.querySelector(
  ".container--track-user-calories"
);
const container_UserHealth = document.querySelector(".container--user-health");

// Navigation LABELS
const label_Home = document.querySelector(".label--home");
const label_Workouts = document.querySelector(".label--workouts");
const label_History = document.querySelector(".label--history");
const label_Exercises = document.querySelector(".label--exercises");
const label_Calories = document.querySelector(".label--calories");
const label_Health = document.querySelector(".label--health");

// btn_Home.addEventListener("click", function () {
//   container_Home.classList.toggle("hidden");
//   if (container_Home.classList.contains("hidden")) {
//     btn_Home.style.color = "black";
//   } else if (!container_Home.classList.contains("hidden")) {
//     btn_Home.style.color = "green";
//   }
// });

function nav_Home() {
  label_Home.style.color = "green";
  label_Workouts.style.color = "black";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "black";
  label_Health.style.color = "black";
  container_Home.classList.remove("hidden");
  container_UserHealth.classList.add("hidden");
  container_WorkoutsModal.classList.add("hidden");
  container_TrackCalories.classList.add("hidden");
  container_ExercisesModal.classList.add("hidden");
  container_History.classList.add("hidden");
  container_WorkoutsModal.style.display = "none";
  container_UserHealth.style.display = "none";
  container_Home.style.display = "grid";
  container_TrackCalories.style.display = "none";
  container_ExercisesModal.style.display = "none";
  container_History.style.display = "none";
}
function nav_UserHealth() {
  label_Home.style.color = "black";
  label_Workouts.style.color = "black";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "black";
  label_Health.style.color = "green";
  container_UserHealth.classList.remove("hidden");
  container_Question.classList.remove("hidden");
  container_Home.classList.add("hidden");
  container_WorkoutsModal.classList.add("hidden");
  container_TrackCalories.classList.add("hidden");
  container_ExercisesModal.classList.add("hidden");
  container_History.classList.add("hidden");
  container_UserHealth.style.display = "grid";
  container_WorkoutsModal.style.display = "none";
  container_Home.style.display = "none";
  container_TrackCalories.style.display = "none";
  container_ExercisesModal.style.display = "none";
  container_History.style.display = "none";
}
function nav_WorkoutsModal() {
  label_Home.style.color = "black";
  label_Workouts.style.color = "green";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "black";
  label_Health.style.color = "black";
  container_UserHealth.classList.add("hidden");
  container_Home.classList.add("hidden");
  container_WorkoutsModal.classList.remove("hidden");
  container_TrackCalories.classList.add("hidden");
  container_ExercisesModal.classList.add("hidden");
  container_History.classList.add("hidden");
  container_WorkoutsModal.style.display = "grid";
  container_UserHealth.style.display = "none";
  container_Home.style.display = "none";
  container_TrackCalories.style.display = "none";
  container_ExercisesModal.style.display = "none";
  container_History.style.display = "none";
}
function nav_TrackCalories() {
  label_Home.style.color = "black";
  label_Workouts.style.color = "black";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "green";
  label_Health.style.color = "black";
  container_UserHealth.classList.add("hidden");
  container_Home.classList.add("hidden");
  container_WorkoutsModal.classList.add("hidden");
  container_TrackCalories.classList.remove("hidden");
  container_ExercisesModal.classList.add("hidden");
  container_History.classList.add("hidden");
  container_WorkoutsModal.style.display = "none";
  container_UserHealth.style.display = "none";
  container_Home.style.display = "none";
  container_TrackCalories.style.display = "grid";
  container_ExercisesModal.style.display = "none";
  container_History.style.display = "none";
}
function nav_ExercisesModal() {
  label_Home.style.color = "black";
  label_Workouts.style.color = "black";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "green";
  label_Calories.style.color = "black";
  label_Health.style.color = "black";
  container_UserHealth.classList.add("hidden");
  container_Home.classList.add("hidden");
  container_WorkoutsModal.classList.add("hidden");
  container_TrackCalories.classList.add("hidden");
  container_ExercisesModal.classList.remove("hidden");
  container_History.classList.add("hidden");
  container_WorkoutsModal.style.display = "none";
  container_UserHealth.style.display = "none";
  container_Home.style.display = "none";
  container_TrackCalories.style.display = "none";
  container_ExercisesModal.style.display = "grid";
  container_History.style.display = "none";
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
    localStorage.setItem(
      `all_Exercises_Modal`,
      JSON.stringify(all_Exercises_unique)
    );
    // break;
    for (let i = 0; i < all_Exercises_unique.length; i++) {
      const div = document.createElement("div");
      div.classList.add("exercises-all-div");
      if (
        exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
        exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
        exercises_Body.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}, ${option_Dumbbell.innerHTML}</li>
      </ul>
      `;
      }
      if (
        exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
        exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Body.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Barbell.innerHTML}, ${option_Dumbbell.innerHTML}</li>
      </ul>
      `;
      }

      if (
        exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Barbell.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Dumbbell.innerHTML}</li>
      </ul>
      `;
      }
      if (
        exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Barbell.innerHTML}</li>
      </ul>
      `;
      }
      if (
        exercises_Body.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Rope.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Body.innerHTML}</li>
      </ul>
      `;
      }
      if (
        exercises_Body.includes(`${all_Exercises_unique[i]}`) &&
        exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}</li>
      </ul>
      `;
      }
      if (
        exercises_Rope.includes(`${all_Exercises_unique[i]}`) &&
        exercises_Body.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Body.innerHTML}, ${option_Rope.innerHTML}</li>
      </ul>
      `;
      }
      if (
        exercises_Rope.includes(`${all_Exercises_unique[i]}`) &&
        !exercises_Body.includes(`${all_Exercises_unique[i]}`)
      ) {
        div.innerHTML = `
      <input type="radio" name="exercises-radio" class="exercises-radio"/>
      <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
      <ul class="ul--exercise-equipment">
      <li>${option_Rope.innerHTML}</li>
      </ul>
      `;
      }
      for (let i = 0; i < exercises_Radio_Label.length; i++) {
        if (exercises_Radio_Label[i].innerHTML === "undefined") {
          exercises_Radio_Label[i].remove();
          exercises_Radio[i].remove();
        }
      }
      container_AllExercises.appendChild(div);
    }
  }
}
function nav_History() {
  label_Home.style.color = "black";
  label_Workouts.style.color = "black";
  label_History.style.color = "green";
  label_History.style.fill = "green";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "black";
  label_Health.style.color = "black";
  container_UserHealth.classList.add("hidden");
  container_Home.classList.add("hidden");
  container_WorkoutsModal.classList.add("hidden");
  container_TrackCalories.classList.add("hidden");
  container_ExercisesModal.classList.add("hidden");
  container_History.classList.remove("hidden");
  container_WorkoutsModal.style.display = "none";
  container_UserHealth.style.display = "none";
  container_Home.style.display = "none";
  container_TrackCalories.style.display = "none";
  container_ExercisesModal.style.display = "none";
  container_History.style.display = "grid";
}

function switchNavModals() {
  if (btn_Home.checked === true) {
    nav_Home();
  } else if (btn_Workouts_Modal.checked === true) {
    nav_WorkoutsModal();
  } else if (btn_History.checked === true) {
    nav_History();
  } else if (btn_Exercises_Modal.checked === true) {
    nav_ExercisesModal();
  } else if (btn_TrackCalories.checked === true) {
    nav_TrackCalories();
  } else if (btn_Health.checked === true) {
    nav_UserHealth();
  }
}
document.addEventListener("change", switchNavModals);

// btn_Exercises_Modal.addEventListener("click", function () {
//   if (container_ExercisesModal.style.display === "none") {
//     container_ExercisesModal.style.display = "grid";
//     container_WorkoutsModal.style.display = "none";
//     container_UserHealth.style.display = "none";
//     btn_Exercises_Modal.style.color = "green";
//     btn_Health.style.color = "black";
//     btn_Workouts_Modal.style.color = "black";
//   } else if ((container_ExercisesModal.style.display = "grid")) {
//     btn_Exercises_Modal.style.color = "black";
//     container_ExercisesModal.style.display = "none";
//   }
//   if (all_Exercises.length === 0) {
//     exercises_Body.sort();
//     exercises_Dumbbell.sort();
//     exercises_Rope.sort();
//     exercises_Barbell.sort();
//     all_Exercises = exercises_Barbell.concat(
//       exercises_Body,
//       exercises_Dumbbell,
//       exercises_Rope
//     );
//     all_Exercises.sort();
//     all_Exercises_unique = [...new Set(all_Exercises)];
//     localStorage.setItem(
//       `all_Exercises_Modal`,
//       JSON.stringify(all_Exercises_unique)
//     );
//     // break;
//     for (let i = 0; i < all_Exercises_unique.length; i++) {
//       const div = document.createElement("div");
//       div.classList.add("exercises-all-div");
//       if (
//         exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
//         exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
//         exercises_Body.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}, ${option_Dumbbell.innerHTML}</li>
//       </ul>
//       `;
//       }
//       if (
//         exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
//         exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Body.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Barbell.innerHTML}, ${option_Dumbbell.innerHTML}</li>
//       </ul>
//       `;
//       }

//       if (
//         exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Barbell.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Dumbbell.innerHTML}</li>
//       </ul>
//       `;
//       }
//       if (
//         exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Barbell.innerHTML}</li>
//       </ul>
//       `;
//       }
//       if (
//         exercises_Body.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Rope.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Body.innerHTML}</li>
//       </ul>
//       `;
//       }
//       if (
//         exercises_Body.includes(`${all_Exercises_unique[i]}`) &&
//         exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}</li>
//       </ul>
//       `;
//       }
//       if (
//         exercises_Rope.includes(`${all_Exercises_unique[i]}`) &&
//         exercises_Body.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Body.innerHTML}, ${option_Rope.innerHTML}</li>
//       </ul>
//       `;
//       }
//       if (
//         exercises_Rope.includes(`${all_Exercises_unique[i]}`) &&
//         !exercises_Body.includes(`${all_Exercises_unique[i]}`)
//       ) {
//         div.innerHTML = `
//       <input type="radio" name="exercises-radio" class="exercises-radio"/>
//       <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
//       <ul class="ul--exercise-equipment">
//       <li>${option_Rope.innerHTML}</li>
//       </ul>
//       `;
//       }
//       for (let i = 0; i < exercises_Radio_Label.length; i++) {
//         if (exercises_Radio_Label[i].innerHTML === "undefined") {
//           exercises_Radio_Label[i].remove();
//           exercises_Radio[i].remove();
//         }
//       }
//       container_AllExercises.appendChild(div);
//     }
//   }
// });
