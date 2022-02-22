"use strict";
// Navigation Buttons
const btn_Home = document.querySelector(".btn--home-modal");

const btn_Workouts_Modal = document.querySelector(".btn--workouts-modal");
const btn_History = document.querySelector(".btn--history");
const btn_Exercises_Modal = document.querySelector(".btn--exercises-modal");
const btn_TrackCalories = document.querySelector(".btn--track-user-cal");
const btn_Health = document.querySelector(".btn--user-health");

let active_ModalStates_Count = 0;
const active_ModalStates = [
  "Home",
  "Workouts",
  "History",
  "Exercises",
  "Calories",
  "Health",
];

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
const btn_Reset_Home_Containers = document.querySelector(
  ".btn--reset-all-home-containers"
);
const btn_Edit_Home_Age = document.querySelector(".btn--edit-age");
const btn_Edit_Home_Name = document.querySelector(".btn--edit-name");
const btn_Edit_Home_Gender = document.querySelector(".btn--edit-gender");
const btn_Edit_Home_Height = document.querySelector(".btn--edit-height");
const btn_Edit_Home_Weight = document.querySelector(".btn--edit-weight");
const btn_Edit_Home_Goals = document.querySelector(".btn--edit-goals");
const btn_Edit_Home_Lifestyle = document.querySelector(".btn--edit-lifestyle");

const btn_Save_Home_Age = document.querySelector(".btn--save-age");
const btn_Save_Home_Name = document.querySelector(".btn--save-name");
const btn_Save_Home_Gender = document.querySelector(".btn--save-gender");
const btn_Save_Home_Height = document.querySelector(".btn--save-height");
const btn_Save_Home_Weight = document.querySelector(".btn--save-weight");
const btn_Save_Home_Goals = document.querySelector(".btn--save-goals");
const btn_Save_Home_Lifestyle = document.querySelector(".btn--save-lifestyle");

const radio_Home_Age = document.querySelector(".home-age-radio");
const radio_Home_Gender = document.querySelector(".home-gender-radio");
const radio_Home_Height = document.querySelector(".home-height-radio");
const radio_Home_Weight = document.querySelector(".home-weight-radio");
const radio_Home_BMI = document.querySelector(".home-bmi-radio");
const radio_Home_Goals = document.querySelector(".home-goals-radio");
const radio_Home_Lifestyle = document.querySelector(".home-lifestyle-radio");
const radio_Home_Protein = document.querySelector(".home-protein-radio");
const radio_Home_Calories = document.querySelector(".home-calories-radio");

if (active_Navigation_Modal.home === true) {
  btn_Home.checked = true;
  label_Home.style.color = "#3b5bdb";
  label_Workouts.style.color = "black";
  label_History.style.color = "black";
  label_History.style.fill = "black";
  label_Exercises.style.color = "black";
  label_Calories.style.color = "black";
  label_Health.style.color = "black";
}

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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
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
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "";
  containerCalories.style.border = "";
}
function hover_Option_Calories() {
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  containerBMI.style.border = "";
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";
  radio_Home_Protein.checked = false;
  radio_Home_Calories.checked = true;
  containerProtein.style.border = "";
  containerCalories.style.border = "3px solid #3b5bdb";
  radio_Home_Age.checked = false;
  radio_Home_Goals.checked = false;
  radio_Home_Lifestyle.checked = false;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;
}

function hover_Option_Protein() {
  containerAge.style.border = "";
  containerGender.style.border = "";
  containerHeight.style.border = "";
  containerWeight.style.border = "";
  containerBMI.style.border = "";
  containerLifestyle.style.border = "";
  containerGoals.style.border = "";

  radio_Home_Age.checked = false;
  radio_Home_Goals.checked = false;
  radio_Home_Lifestyle.checked = false;
  radio_Home_Gender.checked = false;
  radio_Home_Height.checked = false;
  radio_Home_Weight.checked = false;
  radio_Home_BMI.checked = false;

  radio_Home_Protein.checked = true;
  radio_Home_Calories.checked = false;
  containerProtein.style.border = "3px solid #3b5bdb";
  containerCalories.style.border = "";
}

// HOME BUTTON P

const homeResult_Age = document.querySelector(".home-result--age");
const homeResult_Sex = document.querySelector(".home-result--sex");
const homeResult_Height = document.querySelector(".home-result--height");
const homeResult_Weight = document.querySelector(".home-result--weight");
const label_GenderM = document.querySelector(".label--home-gender-m");
const label_GenderF = document.querySelector(".label--home-gender-f");
const homeResult_GoalWeight = document.querySelector(
  ".home-result--goal-weight"
);
const homeResult_PoundsToLG = document.querySelector(
  ".home-result--pounds-to-lose-gain"
);
const homeResult_GoalWeight_Title = document.querySelector(
  ".home-result--current-weight-goal"
);
const title_Goal = document.querySelector(".title--goal");
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
  // user.firstName = localStorage.getItem("user_firstName") || "";
  if (
    user.firstName === localStorage.getItem("user_firstName") &&
    user.age === JSON.parse(localStorage.getItem("user_Age")) &&
    user.gender === localStorage.getItem("user_Gender") &&
    user.height.feet === JSON.parse(localStorage.getItem("user_Height_Feet")) &&
    user.height.inches ===
      JSON.parse(localStorage.getItem("user_Height_Inches")) &&
    user.weight === JSON.parse(localStorage.getItem("user_Weight")) &&
    user.lifeStyle === localStorage.getItem("user_Lifestyle") &&
    user.goal === localStorage.getItem("user_Goal") &&
    user.goalWeight === JSON.parse(localStorage.getItem("user_goalWeight"))
  ) {
    btn_Login.classList.add("hidden");
    userName.classList.add("hidden");
    userTitle.classList.add("hidden");
    userGreet.classList.remove("hidden");
    lifestyleDefinition.classList.remove("hidden");
    userGreet.textContent = `User: ${user.firstName}`;
    container_SelectWeightGoals.classList.add("hidden");
    // container_Question.classList.toggle("hidden");
    container_AHWKG.style.display = "grid";
    btn_Edit_Home_Containers.classList.remove("hidden");

    retrieveHomeLocalStorage();
    homeResult_Age.innerHTML = user.age;
    homeResult_Height.innerHTML = `${user.height["feet"]}' ${user.height["inches"]}"`;
    homeResult_Sex.innerHTML = localStorage.getItem("user_Gender");
    homeResult_Weight.innerHTML = `${user.weight} lbs`;
    homeResult_GoalWeight.innerHTML = JSON.parse(
      localStorage.getItem("user_goalWeight")
    );

    homeResult_GoalWeight_Title.innerHTML = `Weight goal:`;
    title_Goal.innerHTML = `Goal: ${localStorage.getItem("user_Goal")}`;
    resultsBMI.textContent = `${user.BMI}`;
    if (
      title_Goal.innerHTML === "Maintain Weight" ||
      user.goal === "Maintain Weight"
    ) {
      summaryGoal_Maintain();
      container_SelectWeightGoals.selectedIndex = 1;
    } else if (
      title_Goal.innerHTML === "Lose Weight" ||
      user.goal === "Lose Weight"
    ) {
      summaryGoal_Lose();
      container_SelectWeightGoals.selectedIndex = 2;
    } else if (
      title_Goal.innerHTML === "Gain Weight" ||
      user.goal === "Gain Weight"
    ) {
      summaryGoal_Gain();
      container_SelectWeightGoals.selectedIndex = 3;
    }
    if (user.lifeStyle === "sedentary") {
      listSummary_Sedentary.classList.remove("hidden");
      listSummary_LightlyActive.classList.add("hidden");
      listSummary_Active.classList.add("hidden");
      listSummary_VeryActive.classList.add("hidden");
      listSummary_VigActive.classList.add("hidden");
      lifestyleDefinition.innerHTML = `Sedentary`;
    } else if (user.lifeStyle === "lightly active") {
      listSummary_Sedentary.classList.add("hidden");
      listSummary_LightlyActive.classList.remove("hidden");
      listSummary_Active.classList.add("hidden");
      listSummary_VeryActive.classList.add("hidden");
      listSummary_VigActive.classList.add("hidden");
      lifestyleDefinition.innerHTML = `Lightly Active`;
    } else if (user.lifeStyle === "active") {
      listSummary_Sedentary.classList.add("hidden");
      listSummary_LightlyActive.classList.add("hidden");
      listSummary_Active.classList.remove("hidden");
      listSummary_VeryActive.classList.add("hidden");
      listSummary_VigActive.classList.add("hidden");
      lifestyleDefinition.innerHTML = `Active`;
    } else if (user.lifeStyle === "very active") {
      listSummary_Sedentary.classList.add("hidden");
      listSummary_LightlyActive.classList.add("hidden");
      listSummary_Active.classList.add("hidden");
      listSummary_VeryActive.classList.remove("hidden");
      listSummary_VigActive.classList.add("hidden");
      lifestyleDefinition.innerHTML = `Very Active`;
    } else if (user.lifeStyle === "vigorously active") {
      listSummary_Sedentary.classList.add("hidden");
      listSummary_LightlyActive.classList.add("hidden");
      listSummary_Active.classList.add("hidden");
      listSummary_VeryActive.classList.add("hidden");
      listSummary_VigActive.classList.remove("hidden");
      lifestyleDefinition.innerHTML = `Vigorously Active`;
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
    homeResult_GoalWeight_Title.classList.remove("hidden");
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
    summaryGoalWeight.classList.remove("hidden");
    value_Calories.innerHTML = `${user.calorie["max"]}cal`;
    value_Protein.innerHTML = `${user.protein["max"]}g`;

    input_goalWeight.style.display = "none";
    title_goalWeight.classList.add("hidden");
    homeResult_GoalWeight.classList.remove("hidden");
    // showLifeStyleSummary();
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
  localStorage.setItem("user_goalWeight", JSON.stringify(user.goalWeight));
  localStorage.setItem("user_poundsToLG", JSON.stringify(user.poundsToLG));
  localStorage.setItem("user_BMI", JSON.stringify(user.BMI));
  localStorage.setItem("user_Lifestyle", user.lifeStyle);
  localStorage.setItem("user_Calorie_Max", JSON.stringify(user.calorie["max"]));
  if (option_Slow.selected === true || option_Fast.selected === true) {
    localStorage.setItem(
      "user_Calorie_Min",
      JSON.stringify(user.calorie["min"])
    );
    localStorage.setItem(
      "user_Protein_Min",
      JSON.stringify(user.protein["min"])
    );
    localStorage.setItem("user_GainWeight", user.gainWeight);
  }
  localStorage.setItem("user_Protein_Max", JSON.stringify(user.protein["max"]));
  localStorage.setItem("user_Goal", user.goal);
  localStorage.setItem("user_Gender", user.gender);
}
function retrieveHomeLocalStorage() {
  user.firstName = localStorage.getItem("user_firstName");
  user.age = JSON.parse(localStorage.getItem("user_Age"));
  user.height.feet = JSON.parse(localStorage.getItem("user_Height_Feet"));
  user.height.inches = JSON.parse(localStorage.getItem("user_Height_Inches"));
  user.height.total = JSON.parse(localStorage.getItem("user_Height_Total"));
  user.calorie.max = JSON.parse(localStorage.getItem("user_Calorie_Max"));
  user.weight = JSON.parse(localStorage.getItem("user_Weight"));

  user.protein.max = JSON.parse(localStorage.getItem("user_Protein_Max"));
  user.gainWeight = localStorage.getItem("user_GainWeight");
  user.lifeStyle = localStorage.getItem("user_Lifestyle");
  user.gender = localStorage.getItem("user_Gender");
  user.goal = localStorage.getItem("user_Goal");
  user.BMI = JSON.parse(localStorage.getItem("user_BMI"));
  if (user.goal === "Lose Weight" || user.goal === "Gain Weight") {
    user.poundsToLG = JSON.parse(localStorage.getItem("user_poundsToLG"));
    user.goalWeight = JSON.parse(localStorage.getItem("user_goalWeight"));
  }
  if (user.gainWeight === "Slow" || user.gainWeight === "Fast") {
    user.calorie.min = JSON.parse(localStorage.getItem("user_Calorie_Min"));
    user.protein.min = JSON.parse(localStorage.getItem("user_Protein_Min"));
  }
}
btn_SaveUserStats.addEventListener("click", function () {
  // assignment to object -- user
  user.age = Number(userAge.value);
  user.gender = userGenderM.checked ? "Male" : "Female";
  user.height["feet"] = Number(feet.value);
  user.height["inches"] = Number(inches.value);
  user.height["total"] = user.height["feet"] * 12 + user.height["inches"];
  user.weight = Number(userWeight.value);
  user.goalWeight = Number(input_goalWeight.value);
  // assignment to homeResults + remove hidden
  homeResult_Age.innerHTML = user.age;
  homeResult_Height.innerHTML = `${user.height["feet"]}' ${user.height["inches"]}"`;
  homeResult_Sex.innerHTML = user.gender;
  homeResult_Weight.innerHTML = `${user.weight} lbs`;
  homeResult_GoalWeight.innerHTML = user.goalWeight;

  homeResult_GoalWeight_Title.classList.remove("hidden");
  homeResult_GoalWeight_Title.innerHTML = `Weight goal:`;
  homeResult_Age.classList.remove("hidden");
  homeResult_Height.classList.remove("hidden");
  homeResult_Sex.classList.remove("hidden");
  homeResult_Weight.classList.remove("hidden");

  // Hide the input for weight, feet, inches, age
  userWeight.classList.add("hidden");
  feet.classList.add("hidden");
  inches.classList.add("hidden");
  userAge.classList.add("hidden");

  // Hide the Gender options + labels
  userGenderF.classList.add("hidden");
  userGenderM.classList.add("hidden");
  label_GenderM.classList.add("hidden");
  label_GenderF.classList.add("hidden");

  // Hide the height + weight options
  container_WeightOptions.classList.add("hidden");
  container_HeightOptions.classList.add("hidden");

  // Hide the select element + input for weight goals
  container_SelectWeightGoals.classList.add("hidden");
  input_goalWeight.style.display = "none";
  option_Slow.style.display = "none";
  option_Fast.style.display = "none";
  containerGainGoal.classList.add("hidden");
  containerBMI.classList.remove("hidden");
  containerWeightRange.classList.remove("hidden");
  btn_SaveUserStats.classList.add("hidden");
  calculateBMIStandard();
  healthyWeightRange();
  showLifeStyleSummary();
  calcCalories();
  showWBP();
  container_Lifestyle_List.classList.remove("hidden");
  input_goalWeight.classList.add("hidden");
  summaryProtein.classList.remove("hidden");
  summaryCalories.classList.remove("hidden");
  summaryGoalWeight.classList.remove("hidden");
  // title_goalWeight.classList.add("hidden");
  homeResult_GoalWeight.classList.remove("hidden");

  // container_MaintainWeight.classList.add("hidden");
  // container_LoseWeight.classList.add("hidden");
  // container_GainWeight.classList.add("hidden");
  homeResult_GoalWeight.classList.remove("hidden");
  if (option_Weight_Maintain.selected === true) {
    title_Goal.innerHTML = "Goal: Maintain Weight";
    user.goal = "Maintain Weight";
    value_Calories.innerHTML = `${user.calorie["max"]}cal`;
    value_Protein.innerHTML = `${user.protein["max"]}g`;
  }
  if (option_Weight_Lose.selected === true) {
    title_Goal.innerHTML = "Goal: Lose Weight";
    user.goal = "Lose Weight";
    homeResult_PoundsToLG.innerHTML = `${user.weight - user.goalWeight}`;
    value_Calories.innerHTML = `${user.calorie["max"]}cal`;
    value_Protein.innerHTML = `${user.protein["max"]}g`;
  }
  if (option_Weight_Gain.selected === true) {
    title_Goal.innerHTML = "Goal: Gain Weight";
    user.goal = "Gain Weight";
    homeResult_PoundsToLG.innerHTML = `${user.goalWeight - user.weight}`;
    if (option_Slow.selected === true) {
      value_Calories.innerHTML = `${user.calorie["min"]} - ${user.calorie["max"]}cal`;
      value_Protein.innerHTML = `${user.protein["min"]} - ${user.protein["max"]}g`;
      user.gainWeight = "Slow";
    }
    if (option_Fast.selected === true) {
      value_Calories.innerHTML = `${user.calorie["min"]} - ${user.calorie["max"]}cal`;
      value_Protein.innerHTML = `${user.protein["max"]}g`;
      user.gainWeight = "Fast";
    }
  }
  user.poundsToLG = Number(homeResult_PoundsToLG.innerHTML);
  if (user.lifeStyle === "sedentary") {
    listSummary_Sedentary.classList.remove("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Sedentary`;
  } else if (user.lifeStyle === "lightly active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.remove("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Lightly Active`;
  } else if (user.lifeStyle === "active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.remove("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Active`;
  } else if (user.lifeStyle === "very active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.remove("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Very Active`;
  } else if (user.lifeStyle === "vigorously active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.remove("hidden");
    lifestyleDefinition.innerHTML = `Vigorously Active`;
  }
  saveHomeLocalStorage();
});

btn_Edit_Home_Containers.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    title_Stronk.innerHTML = "Stronk";
    btn_Reset_Home_Containers.classList.toggle("hidden");
    btn_Edit_Home_Containers.innerHTML = `Edit`;
  } else if (title_Stronk.innerHTML === "Stronk") {
    title_Stronk.innerHTML = "Edit Mode";
    btn_Edit_Home_Containers.innerHTML = `Exit`;
    btn_Reset_Home_Containers.classList.toggle("hidden");
  }
  // Edit Home Cards
  btn_Edit_Home_Gender.classList.toggle("hidden");
  btn_Edit_Home_Name.classList.toggle("hidden");
  btn_Edit_Home_Age.classList.toggle("hidden");
  btn_Edit_Home_Height.classList.toggle("hidden");
  btn_Edit_Home_Weight.classList.toggle("hidden");
  btn_Edit_Home_Goals.classList.toggle("hidden");
  btn_Edit_Home_Lifestyle.classList.toggle("hidden");

  // Save Home Cards
  btn_Save_Home_Name.classList.toggle("hidden");
  btn_Save_Home_Gender.classList.toggle("hidden");
  btn_Save_Home_Age.classList.toggle("hidden");
  btn_Save_Home_Height.classList.toggle("hidden");
  btn_Save_Home_Weight.classList.toggle("hidden");
  btn_Save_Home_Goals.classList.toggle("hidden");
  btn_Save_Home_Lifestyle.classList.toggle("hidden");
});
// Name

btn_Edit_Home_Name.addEventListener("click", function () {
  userName.style.position = "absolute";
  userName.style.top = "2px";
  userName.style.left = "72px";
  userName.style.width = "176px";
  userName.style.height = "25px";
  userName.classList.remove("hidden");
  userGreet.style.textAlign = "center";
});
btn_Save_Home_Name.addEventListener("click", function () {
  userName.classList.add("hidden");
  user.firstName = userName.value;
  userGreet.textContent = `User: ${user.firstName}`;
  localStorage.setItem("user_firstName", user.firstName);
});
// Age
btn_Edit_Home_Age.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    userAge.classList.remove("hidden");
    homeResult_Age.classList.add("hidden");
    userAge.value = Number(homeResult_Age.innerHTML);
  }
});
btn_Save_Home_Age.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    userAge.classList.add("hidden");
    homeResult_Age.classList.remove("hidden");
    homeResult_Age.innerHTML = Number(userAge.value);
    user.age = Number(userAge.value);
    localStorage.setItem("user_Age", JSON.stringify(user.age));
    updateHomeCards();
  }
});

// Gender
btn_Edit_Home_Gender.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    userGenderM.classList.remove("hidden");
    userGenderF.classList.remove("hidden");
    label_GenderM.classList.remove("hidden");
    label_GenderF.classList.remove("hidden");
    homeResult_Sex.classList.add("hidden");
    if (user.gender === "Male") {
      userGenderM.checked = true;
      userGenderF.checked = false;
    } else if (user.gender === "Female") {
      userGenderF.checked = true;
      userGenderM.checked = false;
    }
    localStorage.setItem("user_Gender", JSON.stringify(user.age));
  }
});
btn_Save_Home_Gender.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    if (userGenderM.checked === true) {
      user.gender = "Male";
      homeResult_Sex.innerHTML = user.gender;
    } else if (userGenderF.checked === true) {
      user.gender = "Female";
      homeResult_Sex.innerHTML = user.gender;
    }
    userGenderM.classList.add("hidden");
    userGenderF.classList.add("hidden");
    label_GenderM.classList.add("hidden");
    label_GenderF.classList.add("hidden");
    homeResult_Sex.classList.remove("hidden");
    localStorage.setItem("user_Gender", JSON.stringify(user.gender));
    updateHomeCards();
  }
});

// Height
btn_Edit_Home_Height.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    feet.classList.remove("hidden");
    inches.classList.remove("hidden");
    feet.value = user.height.feet;
    inches.value = user.height.inches;
    container_HeightOptions.classList.remove("hidden");
    homeResult_Height.classList.add("hidden");
  }
});
btn_Save_Home_Height.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    feet.classList.add("hidden");
    inches.classList.add("hidden");
    user.height.feet = Number(feet.value);
    user.height.inches = Number(inches.value);
    container_HeightOptions.classList.add("hidden");

    homeResult_Height.classList.remove("hidden");
    homeResult_Height.innerHTML = `${feet.value}' ${inches.value}"`;
    user.height["total"] = user.height["feet"] * 12 + user.height["inches"];
    localStorage.setItem("user_Height_Feet", JSON.stringify(user.height.feet));
    localStorage.setItem(
      "user_Height_Inches",
      JSON.stringify(user.height.inches)
    );
    localStorage.setItem(
      "user_Height_Total",
      JSON.stringify(user.height.total)
    );
  }
  healthyWeightRange();
  updateHomeCards();
});

function updateHomeCards() {
  calcCalories();
  value_Calories.innerHTML = user.calorie.max;
  value_Protein.innerHTML = user.protein.max;
  if (user.lifeStyle === "sedentary") {
    listSummary_Sedentary.classList.remove("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Sedentary`;
  } else if (user.lifeStyle === "lightly active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.remove("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Lightly Active`;
  } else if (user.lifeStyle === "active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.remove("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Active`;
  } else if (user.lifeStyle === "very active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.remove("hidden");
    listSummary_VigActive.classList.add("hidden");
    lifestyleDefinition.innerHTML = `Very Active`;
  } else if (user.lifeStyle === "vigorously active") {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.remove("hidden");
    lifestyleDefinition.innerHTML = `Vigorously Active`;
  }
  calculateBMIStandard();
  resultsBMI.innerHTML = user.BMI;
  localStorage.setItem("user_BMI", JSON.stringify(user.BMI));
  localStorage.setItem("user_Calorie_Max", JSON.stringify(user.calorie.max));
  localStorage.setItem("user_Protein_Max", JSON.stringify(user.protein.max));
}
// Weight
btn_Edit_Home_Weight.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    container_WeightOptions.classList.remove("hidden");
    userWeight.classList.remove("hidden");
    homeResult_Weight.classList.add("hidden");
    userWeight.value = Number(user.weight);
  }
});
btn_Save_Home_Weight.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    container_WeightOptions.classList.add("hidden");
    userWeight.classList.add("hidden");
    homeResult_Weight.classList.remove("hidden");
    homeResult_Weight.innerHTML = `${userWeight.value} lbs`;
    user.weight = userWeight.value;
    input_goalWeight.style.display = "none";
    if (option_Weight_Lose.selected === true) {
      user.poundsToLG = user.goalWeight - user.weight;
      homeResult_PoundsToLG.innerHTML = user.poundsToLG;
      homeResult_GoalWeight_Title.innerHTML = `Pounds to lose:`;
    } else if (option_Weight_Gain.selected === true) {
      user.poundsToLG = user.goalWeight - user.weight;
      homeResult_PoundsToLG.innerHTML = user.poundsToLG;
      homeResult_GoalWeight_Title.innerHTML = `Pounds to gain:`;
    }
    localStorage.setItem("user_Weight", JSON.stringify(user.weight));
    localStorage.setItem("user_poundsToLG", JSON.stringify(user.poundsToLG));

    // calcCalories();
    // value_Calories.innerHTML = user.calorie.max;
    // value_Protein.innerHTML = user.protein.max;
    // if (user.lifeStyle === "sedentary") {
    //   listSummary_Sedentary.classList.remove("hidden");
    //   listSummary_LightlyActive.classList.add("hidden");
    //   listSummary_Active.classList.add("hidden");
    //   listSummary_VeryActive.classList.add("hidden");
    //   listSummary_VigActive.classList.add("hidden");
    //   lifestyleDefinition.innerHTML = `Sedentary`;
    // } else if (user.lifeStyle === "lightly active") {
    //   listSummary_Sedentary.classList.add("hidden");
    //   listSummary_LightlyActive.classList.remove("hidden");
    //   listSummary_Active.classList.add("hidden");
    //   listSummary_VeryActive.classList.add("hidden");
    //   listSummary_VigActive.classList.add("hidden");
    //   lifestyleDefinition.innerHTML = `Lightly Active`;
    // } else if (user.lifeStyle === "active") {
    //   listSummary_Sedentary.classList.add("hidden");
    //   listSummary_LightlyActive.classList.add("hidden");
    //   listSummary_Active.classList.remove("hidden");
    //   listSummary_VeryActive.classList.add("hidden");
    //   listSummary_VigActive.classList.add("hidden");
    //   lifestyleDefinition.innerHTML = `Active`;
    // } else if (user.lifeStyle === "very active") {
    //   listSummary_Sedentary.classList.add("hidden");
    //   listSummary_LightlyActive.classList.add("hidden");
    //   listSummary_Active.classList.add("hidden");
    //   listSummary_VeryActive.classList.remove("hidden");
    //   listSummary_VigActive.classList.add("hidden");
    //   lifestyleDefinition.innerHTML = `Very Active`;
    // } else if (user.lifeStyle === "vigorously active") {
    //   listSummary_Sedentary.classList.add("hidden");
    //   listSummary_LightlyActive.classList.add("hidden");
    //   listSummary_Active.classList.add("hidden");
    //   listSummary_VeryActive.classList.add("hidden");
    //   listSummary_VigActive.classList.remove("hidden");
    //   lifestyleDefinition.innerHTML = `Vigorously Active`;
    // }
    // calculateBMIStandard();
    // resultsBMI.innerHTML = user.BMI;
    // localStorage.setItem("user_BMI", JSON.stringify(user.BMI));
    // localStorage.setItem("user_Calorie_Max", JSON.stringify(user.calorie.max));
    // localStorage.setItem("user_Protein_Max", JSON.stringify(user.protein.max));
    updateHomeCards();
  }
});

// Goals
btn_Edit_Home_Goals.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    homeResult_GoalWeight.classList.add("hidden");
    container_SelectWeightGoals.classList.remove("hidden");
    title_goalWeight.classList.add("hidden");
    homeResult_GoalWeight_Title.classList.add("hidden");
    homeResult_PoundsToLG.classList.add("hidden");
    summaryGoalWeight.classList.add("hidden");
    summaryProtein.classList.add("hidden");
    summaryCalories.classList.add("hidden");
    title_Goal.innerHTML = "Goal";
    container_SelectWeightGoals.selectedIndex = 0;
    user.goal = "";
    // option_MaintainWeight.classList.remove("hidden");
    // option_GainWeight.classList.remove("hidden");
    // option_LoseWeight.classList.remove("hidden");

    console.log(`Editing Goals!`);
  }
});
btn_Save_Home_Goals.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    homeResult_GoalWeight.classList.remove("hidden");
    summaryGoalWeight.classList.remove("hidden");
    summaryProtein.classList.remove("hidden");
    summaryCalories.classList.remove("hidden");

    // option_Weight_Maintain.classList.add("hidden");
    // option_Weight_Gain.classList.add("hidden");
    // option_Weight_Lose.classList.add("hidden");
    container_SelectWeightGoals.classList.add("hidden");
    calcCalories();
    if (option_Weight_Maintain.selected === true) {
      title_Goal.innerHTML = "Goal: Maintain Weight";
      user.goal = "Maintain Weight";
      value_Calories.innerHTML = `${user.calorie["max"]}cal`;
      value_Protein.innerHTML = `${user.protein["max"]}g`;
      // calcLoseWeight();
    }
    if (option_Weight_Lose.selected === true) {
      // calcLoseWeight();
      homeResult_GoalWeight_Title.classList.remove("hidden");
      homeResult_PoundsToLG.classList.remove("hidden");
      title_Goal.innerHTML = "Goal: Lose Weight";
      user.goal = "Lose Weight";
      user.goalWeight = input_goalWeight.value;
      user.poundsToLG = `${Number(user.weight - user.goalWeight)}`;
      homeResult_PoundsToLG.innerHTML = user.poundsToLG;
      localStorage.setItem("user_poundsToLG", JSON.stringify(user.poundsToLG));
      homeResult_GoalWeight_Title.innerHTML = `Pounds to lose:`;
      homeResult_GoalWeight.innerHTML = input_goalWeight.value;
      homeResult_GoalWeight_Title.innerHTML = `Weight goal:`;
      input_goalWeight.style.display = "none";
      value_Calories.innerHTML = `${user.calorie["max"]}cal`;
      value_Protein.innerHTML = `${user.protein["max"]}g`;
    }
    if (option_Weight_Gain.selected === true) {
      // calcGainWeight();
      homeResult_GoalWeight_Title.classList.remove("hidden");
      homeResult_PoundsToLG.classList.remove("hidden");
      title_Goal.innerHTML = "Goal: Gain Weight";
      user.goal = "Gain Weight";
      user.goalWeight = input_goalWeight.value;
      homeResult_PoundsToLG.innerHTML = `${Number(
        user.goalWeight - user.weight
      )}`;

      homeResult_GoalWeight.innerHTML = input_goalWeight.value;
      homeResult_GoalWeight_Title.innerHTML = `Weight goal:`;
      input_goalWeight.style.display = "none";
      if (option_Slow.selected === true) {
        title_goalWeight.innerHTML = `Pounds to gain slowly:`;
        value_Calories.innerHTML = `${user.calorie["min"]} - ${user.calorie["max"]}cal`;
        value_Protein.innerHTML = `${user.protein["min"]} - ${user.protein["max"]}g`;
        user.gainWeight = "Slow";
        localStorage.setItem(
          "user_poundsToLG",
          JSON.stringify(user.poundsToLG)
        );
      } else if (option_Fast.selected === true) {
        title_goalWeight.innerHTML = `Pounds to gain fast:`;
        value_Calories.innerHTML = `${user.calorie["min"]} - ${user.calorie["max"]}cal`;
        value_Protein.innerHTML = `${user.protein["max"]}g`;
        user.gainWeight = "Fast";
        localStorage.setItem(
          "user_poundsToLG",
          JSON.stringify(user.poundsToLG)
        );
      }
    }
    containerGainGoal.classList.add("hidden");
    localStorage.setItem("user_Goal", user.goal);

    console.log(`Goals updated!`);
  }
});

// Lifestyle

btn_Edit_Home_Lifestyle.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    lifestyle_Title.classList.remove("hidden");
    lifestyleDefinition.classList.add("hidden");
    select_Lifestyle.classList.remove("hidden");
    container_Lifestyle_List.classList.add("hidden");
  }
});

btn_Save_Home_Lifestyle.addEventListener("click", function () {
  if (title_Stronk.innerHTML === "Edit Mode") {
    lifestyle_Title.classList.add("hidden");
    lifestyleDefinition.classList.remove("hidden");
    select_Lifestyle.classList.add("hidden");
    container_Lifestyle_List.classList.remove("hidden");
    showLifeStyleSummary();
  }
});

btn_Reset_Home_Containers.addEventListener("click", function () {
  let eraseDataPrompt = prompt("Erase all user data? Type yes or cancel");
  if (eraseDataPrompt === "yes") {
    (user.firstName = ""),
      (user.lastName = ""),
      (user.age = ""),
      (user.gender = ""),
      (user.height.feet = ""),
      (user.height.inches = ""),
      (user.height.total = ""),
      (user.weight = ""),
      (user.BMI = ""),
      (user.calorie.min = ""),
      (user.calorie.max = ""),
      (user.protein.min = ""),
      (user.protein.max = ""),
      (user.lifeStyle = ""),
      (user.goal = ""),
      (user.goalWeight = "");
    title_goalWeight.innerHTML = `What is your desired weight?`;
    title_goalWeight.classList.add("hidden");
    container_SelectWeightGoals.selectedIndex = 0;
    input_goalWeight.classList.add("hidden");
    userName.classList.remove("hidden");
    select_Lifestyle.selectedIndex = 0;
    localStorage.removeItem("user_firstName");
    localStorage.removeItem("user_Age");
    localStorage.removeItem("user_BMI");
    localStorage.removeItem("user_Calorie_Max");
    localStorage.removeItem("user_Calorie_Min");
    localStorage.removeItem("user_Protein_Max");
    localStorage.removeItem("user_Protein_Min");
    localStorage.removeItem("user_Gender");
    localStorage.removeItem("user_Goal");
    localStorage.removeItem("user_goalWeight");
    localStorage.removeItem("user_Height_Inches");
    localStorage.removeItem("user_Height_Feet");
    localStorage.removeItem("user_Height_Total");
    localStorage.removeItem("user_Lifestyle");
    localStorage.removeItem("user_Weight");
    hideHomeResults();
    showHomeInputs();
  }
});

function hideHomeResults() {
  homeResult_Weight.classList.add("hidden");
  homeResult_Height.classList.add("hidden");
  homeResult_Age.classList.add("hidden");
  homeResult_Sex.classList.add("hidden");
  homeResult_GoalWeight_Title.classList.add("hidden");
  homeResult_PoundsToLG.classList.add("hidden");
  homeResult_GoalWeight.classList.add("hidden");
  containerWeightRange.classList.add("hidden");
  containerBMI.classList.add("hidden");
  containerCalories.classList.add("hidden");
  containerProtein.classList.add("hidden");
  lifestyleDefinition.classList.add("hidden");
  container_Lifestyle_List.classList.add("hidden");
  value_Calories.classList.add("hidden");
  value_Protein.classList.add("hidden");
  summaryGoalWeight.classList.add("hidden");
  summaryProtein.classList.add("hidden");
  summaryCalories.classList.add("hidden");
}
function showHomeResults() {}
function showHomeInputs() {
  // userName.classList.remove("hidden");
  userGenderF.classList.remove("hidden");
  userGenderM.classList.remove("hidden");
  label_GenderM.classList.remove("hidden");
  label_GenderF.classList.remove("hidden");
  userWeight.classList.remove("hidden");
  feet.classList.remove("hidden");
  inches.classList.remove("hidden");
  userAge.classList.remove("hidden");
  lifestyle_Title.classList.remove("hidden");
  select_Lifestyle.classList.remove("hidden");
  container_WeightOptions.classList.remove("hidden");
  container_HeightOptions.classList.remove("hidden");
  btn_SaveUserStats.classList.remove("hidden");
  container_SelectWeightGoals.classList.remove("hidden");
  // input_goalWeight.classList.remove("hidden");
  title_Goal.innerHTML = "Goal";
}
function hideHomeInputs() {}
