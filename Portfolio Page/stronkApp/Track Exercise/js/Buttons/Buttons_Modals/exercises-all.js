"use strict";

const btn_Exercises_Modal = document.querySelector(".btn--exercises-modal");
const container_ExercisesModal = document.querySelector(
  ".container--exercises"
);
const container_AllExercises = document.querySelector(
  ".container--all-exercises"
);

const exercises_Div = document.getElementsByClassName("exercises-all-div");
const exercises_Radio_Label = document.getElementsByClassName(
  "exercises-radio-label"
);

const input_Search_Exercise = document.querySelector(
  ".input--exercises-search"
);
const equipment_Ul = document.getElementsByClassName("ul--exercise-equipment");
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
  // if (all_Exercises.length > 0) {
  //   exercises_Body.sort();
  //   exercises_Dumbbell.sort();
  //   exercises_Rope.sort();
  //   exercises_Barbell.sort();
  //   all_Exercises = exercises_Barbell.concat(
  //     exercises_Body,
  //     exercises_Dumbbell,
  //     exercises_Rope
  //   );
  //   all_Exercises.sort();
  //   all_Exercises_unique = [...new Set(all_Exercises)];
  //   localStorage.setItem(`all_Exercises`, JSON.stringify(all_Exercises));
  //   // break;
  //   for (let i = 0; i < all_Exercises_unique.length; i++) {
  //     const div = document.createElement("div");
  //     div.classList.add("exercises-all-div");
  //     if (
  //       exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
  //       exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
  //       exercises_Body.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}, ${option_Dumbbell.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     if (
  //       exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
  //       exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Body.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Barbell.innerHTML}, ${option_Dumbbell.innerHTML}</li>
  //     </ul>
  //     `;
  //     }

  //     if (
  //       exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Barbell.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Dumbbell.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     if (
  //       exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Barbell.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     if (
  //       exercises_Body.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Rope.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Body.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     if (
  //       exercises_Body.includes(`${all_Exercises_unique[i]}`) &&
  //       exercises_Barbell.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Dumbbell.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Barbell.innerHTML}, ${option_Body.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     if (
  //       exercises_Rope.includes(`${all_Exercises_unique[i]}`) &&
  //       exercises_Body.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Body.innerHTML}, ${option_Rope.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     if (
  //       exercises_Rope.includes(`${all_Exercises_unique[i]}`) &&
  //       !exercises_Body.includes(`${all_Exercises_unique[i]}`)
  //     ) {
  //       div.innerHTML = `
  //     <input type="radio" name="exercises-radio" class="exercises-radio"/>
  //     <label class="exercises-radio-label">${all_Exercises_unique[i]}</label>
  //     <ul class="ul--exercise-equipment">
  //     <li>${option_Rope.innerHTML}</li>
  //     </ul>
  //     `;
  //     }
  //     for (let i = 0; i < exercises_Radio_Label.length; i++) {
  //       if (exercises_Radio_Label[i].innerHTML === "undefined") {
  //         exercises_Radio_Label[i].remove();
  //         exercises_Radio[i].remove();
  //       }
  //     }
  //     container_AllExercises.appendChild(div);
  //   }
  // }

  // container_WorkoutsModal.style.display = "grid";
});

let filter, a, equipment, txtValue;
function searchExercise() {
  filter = input_Search_Exercise.value.toUpperCase();
  for (let i = 0; i < exercises_Radio_Label.length; i++) {
    a = exercises_Radio_Label[i];
    equipment = equipment_Ul[i];
    txtValue = a.innerHTML;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      exercises_Radio_Label[i].style.display = "";
      exercises_Div[i].style.display = "";
      exercises_Radio[i].style.display = "";
      equipment_Ul[i].style.display = "";
      exercises_Div[i].style.borderBottom = "1px solid black";
    } else {
      exercises_Radio_Label[i].style.display = "none";
      exercises_Radio[i].style.display = "none";
      equipment_Ul[i].style.display = "none";
      exercises_Div[i].style.display = "none";
      exercises_Div[i].style.borderBottom = "0";
      container_AllExercises.style.borderTop = "0";
    }
  }
}
