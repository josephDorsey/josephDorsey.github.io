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
const container_WeightOptions = document.querySelector(
  ".container--weight-options"
);
const container_HeightOptions = document.querySelector(
  ".container--height-options"
);

// Navigation LABELS
const label_Home = document.querySelector(".label--home");
const label_Workouts = document.querySelector(".label--workouts");
const label_History = document.querySelector(".label--history");
const label_Exercises = document.querySelector(".label--exercises");
const label_Calories = document.querySelector(".label--calories");
const label_Health = document.querySelector(".label--health");

const btn_Edit_Home_Containers = document.querySelector(
  ".btn--edit-home-containers"
);
const btn_Edit_Home_Age = document.querySelector(".btn--edit-age");
const btn_Edit_Home_Gender = document.querySelector(".btn--edit-gender");
const btn_Edit_Home_Height = document.querySelector(".btn--edit-height");
const btn_Edit_Home_Weight = document.querySelector(".btn--edit-weight");

const btn_Save_Home_Age = document.querySelector(".btn--save-age");
const btn_Save_Home_Gender = document.querySelector(".btn--save-gender");
const btn_Save_Home_Height = document.querySelector(".btn--save-height");
const btn_Save_Home_Weight = document.querySelector(".btn--save-weight");

const radio_Home_Age = document.querySelector(".home-age-radio");
const radio_Home_Gender = document.querySelector(".home-gender-radio");
const radio_Home_Height = document.querySelector(".home-height-radio");
const radio_Home_Weight = document.querySelector(".home-weight-radio");
const radio_Home_BMI = document.querySelector(".home-bmi-radio");
const radio_Home_Goals = document.querySelector(".home-goals-radio");
const radio_Home_Lifestyle = document.querySelector(".home-lifestyle-radio");

function hover_Option_Age() {
  radio_Home_Age.checked = true;
  containerAge.style.border = "3px solid #3b5bdb";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;
  containerBMI.style.border = "";
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";
  radio_Home_Lifestyle.checked = false;
  radio_Home_Goals.checked = false;
}
function hover_Option_Gender() {
  radio_Home_Age.checked = false;
  radio_Home_Gender.checked = true;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;
  containerAge.style.border = "";
  containerGender.style.border = "3px solid #3b5bdb";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  containerBMI.style.border = "";
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";
  radio_Home_Lifestyle.checked = false;
  radio_Home_Goals.checked = false;
}
function hover_Option_Height() {
  radio_Home_Age.checked = false;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = true;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "3px solid #3b5bdb";
  containerWeight.style.border = "";
  containerBMI.style.border = "";
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";
  radio_Home_Lifestyle.checked = false;
  radio_Home_Goals.checked = false;
}
function hover_Option_Weight() {
  radio_Home_Age.checked = false;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = true;
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";
  radio_Home_Lifestyle.checked = false;
  radio_Home_Goals.checked = false;
  radio_Home_BMI.checked = false;
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerBMI.style.border = "";
  containerWeight.style.border = "3px solid #3b5bdb";
}
function hover_Option_BMI() {
  radio_Home_Age.checked = false;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = true;
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";
  radio_Home_Lifestyle.checked = false;
  radio_Home_Goals.checked = false;
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  containerBMI.style.border = "3px solid #3b5bdb";
}
function hover_Option_Goals() {
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  containerBMI.style.border = "";
  containerGoals.style.border = "3px solid #3b5bdb";
  containerLifestyle.style.border = "";
  radio_Home_Lifestyle.checked = false;
  radio_Home_Goals.checked = true;
  radio_Home_Age.checked = false;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;
}
function hover_Option_Lifestyle() {
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  containerBMI.style.border = "";
  containerLifestyle.style.border = "3px solid #3b5bdb";
  containerGoals.style.border = "";
  radio_Home_Age.checked = false;
  radio_Home_Goals.checked = false;
  radio_Home_Lifestyle.checked = true;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;
}

// HOME BUTTON P

const homeResult_Age = document.querySelector(".home-result--age");
const homeResult_Sex = document.querySelector(".home-result--sex");
const homeResult_Height = document.querySelector(".home-result--height");
const homeResult_Weight = document.querySelector(".home-result--weight");
const label_GenderM = document.querySelector(".label--home-gender-m");
const label_GenderF = document.querySelector(".label--home-gender-f");
// btn_Home.addEventListener("click", function () {
//   container_Home.classList.toggle("hidden");
//   if (container_Home.classList.contains("hidden")) {
//     btn_Home.style.color = "black";
//   } else if (!container_Home.classList.contains("hidden")) {
//     btn_Home.style.color = "green";
//   }
// });

function nav_Home() {
  label_Home.style.color = "#3b5bdb";
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
  if (user.firstName === "") {
    user.firstName = localStorage.getItem("user_firstName") || "";
    btn_Login.classList.add("hidden");
    userName.classList.add("hidden");
    userTitle.classList.add("hidden");
    userGreet.classList.toggle("hidden");
    lifestyleDefinition.classList.toggle("hidden");
    userGreet.textContent = `User: ${user.firstName}`;
    // container_Question.classList.toggle("hidden");
    container_AHWKG.style.display = "grid";
    btn_Edit_Home_Containers.classList.remove("hidden");

    // if (
    //   user.age === "" &&
    //   user.height.feet === "" &&
    //   user.height.inches === "" &&
    //   user.calorie.max === "" &&
    //   user.weight === "" &&
    //   user.protein.max === "" &&
    //   user.lifeStyle === "" &&
    //   user.goal === "" &&
    //   user.gender === ""
    // ) {
    retrieveHomeLocalStorage();
    homeResult_Age.innerHTML = user.age;
    homeResult_Height.innerHTML = `${user.height["feet"]}' ${user.height["inches"]}"`;
    homeResult_Sex.innerHTML = JSON.parse(localStorage.getItem("user_Gender"));
    homeResult_Weight.innerHTML = `${user.weight} lbs`;
    selected_Goal.innerHTML = JSON.parse(localStorage.getItem("user_Goal"));
    resultsBMI.textContent = `${user.BMI}`;
    if (selected_Goal.innerHTML === "Maintain Weight") {
      summaryGoal_Maintain();
    } else if (selected_Goal.innerHTML === "Lose Weight") {
      summaryGoal_Lose();
    } else if (selected_Goal.innerHTML === "Gain Weight") {
      summaryGoal_Gain();
    }
    if (user.BMI <= 18.5) {
      userBMI.textContent = `With a BMI of ${user.BMI} you are considered underweight. A few more pounds can lessen your chances of thinning bones and a weakened immune system, as well as feeling tired. Women who are underweight may have irregular periods or stop having them altogether. Underweight men may have lower sperm counts. The healthy range for BMI in your height and weight range is between 18.5 and 24.9.`;
    } else if (user.BMI >= 18.5 && user.BMI <= 24.9) {
      userBMI.textContent = `With a BMI of ${user.BMI} you're in a good place now. The healthy range for BMI in your height and weight range is between 18.5 and 24.9. Keep up your healthy habits to maintain your weight.`;
    } else if (user.BMI >= 25 && user.BMI <= 29.9) {
      userBMI.textContent = `With a BMI of ${user.BMI} your weight puts you in the overweight range. Losing some extra pounds is a good first step toward lowering your chances of health problems. The healthy range for BMI in your height and weight range is between 18.5 and 24.9. If you have a very muscular build, though, you could have an overweight BMI and still be OK.`;
    } else if (user.BMI >= 30) {
      userBMI.textContent = `With a BMI of ${user.BMI} your weight puts you in the obese range. You're much more likely to have serious health problems. The healthy range for BMI in your height and weight range is between 18.5 and 24.9.`;
    }
    homeResult_Age.classList.remove("hidden");
    homeResult_Height.classList.remove("hidden");
    homeResult_Sex.classList.remove("hidden");
    homeResult_Weight.classList.remove("hidden");
    userWeight.classList.add("hidden");
    feet.classList.add("hidden");
    inches.classList.add("hidden");
    userAge.classList.add("hidden");
    userGenderF.classList.add("hidden");
    userGenderM.classList.add("hidden");
    label_GenderM.classList.add("hidden");
    label_GenderF.classList.add("hidden");
    container_WeightOptions.classList.add("hidden");
    container_HeightOptions.classList.add("hidden");
    containerBMI.classList.remove("hidden");
    containerWeightRange.classList.remove("hidden");
    btn_SaveUserStats.classList.add("hidden");
    summaryProtein.classList.remove("hidden");
    summaryCalories.classList.remove("hidden");
    summaryGeneral.classList.remove("hidden");
    value_Calories.innerHTML = `${user.calorie["max"]}cal`;
    value_Protein.innerHTML = `${user.protein["max"]}g`;
    container_MaintainWeight.classList.add("hidden");
    container_LoseWeight.classList.add("hidden");
    container_GainWeight.classList.add("hidden");
    selected_Goal.classList.remove("hidden");
    showLifeStyleSummary();
    healthyWeightRange();
    showWBP();
    // }
  }
}
function nav_UserHealth() {
  label_Home.style.color = "black";
  label_Workouts.style.color = "black";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "black";
  label_Health.style.color = "#3b5bdb";
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
  label_Workouts.style.color = "#3b5bdb";
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
  label_Calories.style.color = "#3b5bdb";
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
  label_Exercises.style.color = "#3b5bdb";
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
  label_History.style.color = "#3b5bdb";
  label_History.style.fill = "#3b5bdb";
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
function setMainScreen() {
  btn_Home.checked = true;
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
const btn_SaveUserStats = document.querySelector(".btn--save-user-stats");

function saveHomeLocalStorage() {
  localStorage.setItem("user_firstName", user.firstName);
  localStorage.setItem("user_Age", JSON.stringify(user.age));
  localStorage.setItem("user_Height_Feet", JSON.stringify(user.height["feet"]));
  localStorage.setItem(
    "user_Height_Inches",
    JSON.stringify(user.height["inches"])
  );
  localStorage.setItem(
    "user_Height_Total",
    JSON.stringify(user.height["total"])
  );
  localStorage.setItem("user_Weight", JSON.stringify(user.weight));
  localStorage.setItem("user_BMI", JSON.stringify(user.BMI));
  localStorage.setItem("user_Lifestyle", JSON.stringify(user.lifeStyle));
  localStorage.setItem(
    "user_Calories_Max",
    JSON.stringify(user.calorie["max"])
  );
  localStorage.setItem("user_Protein_Max", JSON.stringify(user.protein["max"]));
  localStorage.setItem("user_Goal", JSON.stringify(user.goal));
  localStorage.setItem("user_Gender", JSON.stringify(user.gender));
}
function retrieveHomeLocalStorage() {
  user.age = JSON.parse(localStorage.getItem("user_Age")) || "";
  user.height.feet = JSON.parse(localStorage.getItem("user_Height_Feet")) | "";
  user.height.inches =
    JSON.parse(localStorage.getItem("user_Height_Inches")) | "";
  user.height.total =
    JSON.parse(localStorage.getItem("user_Height_Total")) | "";
  user.calorie.max = JSON.parse(localStorage.getItem("user_Calories_Max")) | "";
  user.weight = JSON.parse(localStorage.getItem("user_Weight")) | "";
  user.protein.max = JSON.parse(localStorage.getItem("user_Protein_Max")) | "";
  user.lifeStyle = JSON.parse(localStorage.getItem("user_Lifestyle"));
  user.gender = JSON.parse(localStorage.getItem("user_Gender"));
  user.goal = JSON.parse(localStorage.getItem("user_Goal"));
  user.BMI = JSON.parse(localStorage.getItem("user_BMI"));
}
btn_SaveUserStats.addEventListener("click", function () {
  user.age = Number(userAge.value);
  user.gender = userGenderM.checked ? "Male" : "Female";
  user.height["feet"] = Number(feet.value);
  user.height["inches"] = Number(inches.value);
  user.height["total"] = user.height["feet"] * 12 + user.height["inches"];

  user.weight = Number(userWeight.value);
  homeResult_Age.innerHTML = user.age;
  homeResult_Height.innerHTML = `${user.height["feet"]}' ${user.height["inches"]}"`;
  homeResult_Sex.innerHTML = user.gender;
  homeResult_Weight.innerHTML = `${user.weight} lbs`;
  homeResult_Age.classList.remove("hidden");
  homeResult_Height.classList.remove("hidden");
  homeResult_Sex.classList.remove("hidden");
  homeResult_Weight.classList.remove("hidden");
  userWeight.classList.add("hidden");
  feet.classList.add("hidden");
  inches.classList.add("hidden");
  userAge.classList.add("hidden");
  userGenderF.classList.add("hidden");
  userGenderM.classList.add("hidden");
  label_GenderM.classList.add("hidden");
  label_GenderF.classList.add("hidden");
  container_WeightOptions.classList.add("hidden");
  container_HeightOptions.classList.add("hidden");
  containerBMI.classList.remove("hidden");
  containerWeightRange.classList.remove("hidden");
  btn_SaveUserStats.classList.add("hidden");
  calculateBMIStandard();
  healthyWeightRange();
  showLifeStyleSummary();
  calcCalories();
  showWBP();

  summaryProtein.classList.remove("hidden");
  summaryCalories.classList.remove("hidden");
  summaryGeneral.classList.remove("hidden");
  value_Calories.innerHTML = `${user.calorie["max"]}cal`;
  value_Protein.innerHTML = `${user.protein["max"]}g`;
  container_MaintainWeight.classList.add("hidden");
  container_LoseWeight.classList.add("hidden");
  container_GainWeight.classList.add("hidden");
  selected_Goal.classList.remove("hidden");
  if (option_MaintainWeight.checked === true) {
    selected_Goal.innerHTML = "Maintain Weight";
    user.goal = selected_Goal.innerHTML;
  }
  if (option_LoseWeight.checked === true) {
    selected_Goal.innerHTML = "Lose Weight";
    user.goal = selected_Goal.innerHTML;
  }
  if (option_GainWeight.checked === true) {
    selected_Goal.innerHTML = "Gain Weight";
    user.goal = selected_Goal.innerHTML;
  }
  saveHomeLocalStorage();
});

btn_Edit_Home_Containers.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    title_Stronk.innerHTML = "Stronk";

    btn_Edit_Home_Containers.innerHTML = `Edit`;
  } else if (title_Stronk.innerHTML === "Stronk") {
    title_Stronk.innerHTML = "Edit Mode";
    btn_Edit_Home_Containers.innerHTML = `Exit`;
  }
  btn_Edit_Home_Gender.classList.toggle("hidden");
  btn_Edit_Home_Age.classList.toggle("hidden");
  btn_Edit_Home_Height.classList.toggle("hidden");
  btn_Edit_Home_Weight.classList.toggle("hidden");
  btn_Save_Home_Gender.classList.toggle("hidden");
  btn_Save_Home_Age.classList.toggle("hidden");
  btn_Save_Home_Height.classList.toggle("hidden");
  btn_Save_Home_Weight.classList.toggle("hidden");
});
