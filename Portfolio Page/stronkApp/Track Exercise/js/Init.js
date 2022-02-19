"use strict";
// const testNumber = document.querySelector(".testNumber");
// for (let i = 0; i < 1001; i++) {
//   const option = document.createElement("option");
//   option.innerHTML = i;
//   testNumber.appendChild(option);
// }
let container_Workouts_Page;
const active_Navigation_Modal = {
  home: true,
  workouts: false,
  history: false,
  exercises: false,
  calories: false,
  health: false,
};

const container_WorkoutsPage_Func = function () {
  if (container_Workouts_Page === 0) {
    exercises_Nav.style.backgroundColor = "white";
    exercises_Nav.style.color = "black";
    console.log(`Main Workouts Modal Page`);
  } else if (container_Workouts_Page === 1) {
    exercises_Nav.style.backgroundColor = "black";
    exercises_Nav.style.color = "white";
    console.log(`Selected Workouts Modal Page`);
  }
};
container_WorkoutsPage_Func();
const exerciseObject = {};

const createWorkout = function (workoutName) {
  exerciseObject[`${workoutName}`] = new Object();
};
const createExercise = function (workoutName, exerciseName) {
  exerciseObject[`${workoutName}`][`${exerciseName}`] = new Object();
  exerciseObject[`${workoutName}`][`${exerciseName}`].sets = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].sets.push(1);
  exerciseObject[`${workoutName}`][`${exerciseName}`].name = exerciseName;
  exerciseObject[`${workoutName}`][`${exerciseName}`].increaseSet = 1;
  exerciseObject[`${workoutName}`][`${exerciseName}`].loopSet = 0;
  exerciseObject[`${workoutName}`][`${exerciseName}`].reps = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].weight = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].reps.push(0);
  exerciseObject[`${workoutName}`][`${exerciseName}`].weight.push(0);
};

const createSetsRepsWeight = function (sets, reps, weight) {
  exerciseObject[`${workoutName}`][`${exerciseName}`].sets = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].reps = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].weight = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].increaseSet = 1;
  for (let i = 0; i < sets; i++) {
    exerciseObject[`${workoutName}`][`${exerciseName}`].sets.push(
      Number(`${i + 1}`)
    );
    exerciseObject[`${workoutName}`][`${exerciseName}`].reps.push(Number(reps));
    exerciseObject[`${workoutName}`][`${exerciseName}`].weight.push(
      Number(weight)
    );
  }
};

// let workout_Timer_Count = 50;

// Containers

let workoutName_Count = 0;

const exerciseGroup = {
  exerciseEquipment: {
    barbell: JSON.parse(localStorage.getItem("exercises_Barbell")) || [],
    dumbbell: JSON.parse(localStorage.getItem("exercises_Dumbbell")) || [],
    rope: JSON.parse(localStorage.getItem("exercises_Rope")) || [],
    body: JSON.parse(localStorage.getItem("exercises_Body")) || [],
    Bag: [],
    Ball: [],
    Bands: [],
    Cable: [],
    EZBar: [],
    FoamRoll: [],
    KettleBell: [],
    Landmine: [],
    Machine: [],
    Other: [],
    // type: JSON.parse(localStorage.getItem("exercises_Equipment_Type")) || [],
  },
  workoutName: [],
  // workoutList: JSON.parse(localStorage.getItem("exercises_WorkoutList")) || [],
  workoutList: [],
  // name: [],
  // weight: JSON.parse(localStorage.getItem("exercises_Weight")) || [],
  weight: [],
  sets: {
    // min: JSON.parse(localStorage.getItem("exercises_Sets_Min")) || [],
    // max: JSON.parse(localStorage.getItem("exercises_Sets_Max")) || [],
    min: [],
    max: [],
  },
  // reps: JSON.parse(localStorage.getItem("exercises_Reps")) || [],
  reps: [],
  rest: {
    // minutes: JSON.parse(localStorage.getItem("exercises_Rest_Minutes")) || [],
    // seconds: JSON.parse(localStorage.getItem("exercises_Rest_Seconds")) || [],
    minutes: [],
    seconds: [],
  },
  archived: [],
};
let archive_Workout_Name =
  JSON.parse(localStorage.getItem("archived_exercises_WorkoutName")) || [];
let temp_Workout_Name =
  JSON.parse(localStorage.getItem("exercises_WorkoutName")) || [];

let tempWorkoutList =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
    )
  ) || [];
let temp_Weight =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Weight`
    )
  ) || [];
let temp_Rest_Seconds =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Seconds`
    )
  ) || [];
let temp_Rest_Minutes =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Rest_Minutes`
    )
  ) || [];
let temp_Sets_Min =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Min`
    )
  ) || [];
let temp_Sets_Max =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Max`
    )
  ) || [];
let temp_Reps =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Reps`
    )
  ) || [];

let workout_Timer_Count =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`
    )
  ) || 0;
let workout_Interval;
console.log(localStorage);

const trackerTimer = {
  app_Seconds:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
      )
    ) || 0,
  app_Minutes:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
      )
    ) || 0,
  app_Hours:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
      )
    ) || 0,
  app_Days:
    JSON.parse(
      localStorage.getItem(
        `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Days`
      )
    ) || 0,
};

let modalStates_Count = 0;
let workoutState_Count =
  JSON.parse(localStorage.getItem("workoutState_Count")) || 0;
let states_Count = 0;

const container_Exercise = document.querySelector(".exercise");
const container_Weight = document.querySelector(".weight");
const container_Sets = document.querySelector(".sets");
const container_Reps = document.querySelector(".reps");
const container_Rest = document.querySelector(".rest");
// imgs

const img_Modal_AddExercise = document.querySelector(".i-AddExercise");
const img_Modal_ExerciseList = document.querySelector(".i-Barbell");
const img_Modal_ActiveExercise = document.querySelector(".i-PlayCircle");
// DIV CONTAINERS

const container_ExerciseInfo = document.querySelector(".exercise-information");
const container_MainNav_Buttons = document.querySelector(".main--nav-buttons");
const containerNav_Home = document.querySelector(".home");
const containerNav_Workouts = document.querySelector(".workouts");
const containerNav_History = document.querySelector(".history");
const containerNav_Exercises = document.querySelector(".exercises");
const containerNav_Calories = document.querySelector(".calories");
const containerNav_Health = document.querySelector(".health");

const userExercises = {
  barbell: "",
  dumbbell: "",
  rope: "",
  body: "",
};

// Puts all the array variables back in the exercise array
const exercises_Barbell = [
  "Bent-Over Row",
  "Bench Press",
  "Squat",
  "Stiff Legged Deadlift",
  "Romanian Deadlift",
  "Military Press",
  "Biceps Curl",
  "Lunge",
  "Front Squat",
  "Good-mornings",
  "Calf Raises",
  "Push Press",
  "Snatch",
  "Shrug",
  "Hip Thrusts",
  "Bulgarian Split Squat",
  "T-Bar Row",
  "Reverse Curl",
  "Skull Crushers",
];
const exercises_Dumbbell = [
  "Goblet Squat",
  "Arnold Press",
  "Dumbbell Clean",
  "Renegade Row",
  "Farmer's Walk",
  "Flat Dumbbell Flye",
  "Bent-Over Row",
  "Dumbbell Uppercut",
  "Two-Arm Stiff Legged Deadlift",
  "Kickbacks",
  "One Arm Swing",
  "Bench Press",
  "Shoulder Press",
  "Cross Body Hammer Curl",
  "Upright Row",
  "Step-ups",
  "Spider Curl",
  "Scaption",
  "Bent Arm Pull Over",
  "Lunges",
  "One Leg Deadlift",
  "Single Dumbbell Shoulder Raise",
  "Calf Raises",
  "Hollow Body Skullcrushers",
  "Rotational Decline Weighted Sit-ups",
  "Devil's Press",
  "Hip Thrusts",
];
const exercises_Rope = [
  "Crossover",
  "Standing Biceps Curl",
  "Overhead Curl",
  "Abdominal Crunches",
  "Flyes",
  "Wide-Grip Lat Pulldowns",
  "Seated Rows",
  "Triceps Pushdown",
  "Standing Single Arm Cable Rows",
  "Squat",
  "Lunges",
  "Standing Press",
  "Reverse Grip Cable Pulldowns",
  "One-Legged Cable Kickback",
  "Standing Cable Calf Raise",
];
const exercises_Body = [
  "Push-Up",
  "Groiners",
  "Spider Crawl",
  "Standing Long Jump",
  "Burpees",
  "Handstand Wall Walk",
  "Wide-Grip Pull-Up",
  "Glute Bridge",
  "Inverted Row",
  "Close-Grip Push-Up",
  "Pike Push-Up",
  "Diamond Push-Up",
  "Clap Push-Up",
  "Plank-to-Push-Up",
  "Reverse Crunch",
  "Sit-up",
  "Mountain Climber",
  "Plank",
  "Side Plank",
  "Star Plank",
  "Bicycle Crunch",
  "Frozen V-Sit",
  "Single-Leg Glute Bridge",
  "Bulgarian Split Squat",
  "Squats",
  "Jump Squats",
  "Overhead Lunge",
  "Step-Up with Knee Raises",
  "Bench Dips",
];

const exercises_Bag = [];
const exercises_Ball = [];
const exercises_Bands = [];
const exercises_Cable = [];
const exercises_EZBar = [];
const exercises_FoamRoll = [];
const exercises_KettleBell = [];
const exercises_Landmine = [];
const exercises_Machine = [];
const exercises_Other = [];

const modalStates = ["Inactive", "Create Exercise", "Add Exercise"];
const workoutState = ["Inactive", "Active", "Pause"];

const createWorkoutLocalStorage = function (input) {
  // creates input value into localstorage array out of temp array
  localStorage.setItem(
    `workoutName_${input}_Exercises`,
    JSON.stringify(tempWorkoutList)
  );
  // pushes workout name to array and then adds to localstorage
  localStorage.setItem(
    `exercises_WorkoutName`,
    JSON.stringify(temp_Workout_Name)
  );
};

const retrieveWorkoutLocalStorage = function () {
  for (let i = 0; i < exerciseGroup.workoutName.length; i++) {
    if (
      workouts_Modal_List[workoutName_Count].checked &&
      exerciseGroup.workoutName[workoutName_Count] ===
        workouts_Modal_List_Labels[workoutName_Count].innerHTML
    ) {
      exerciseGroup.workoutList = JSON.parse(
        localStorage.getItem(
          `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
        )
      );
    }
  }
};

window.onload = function () {
  container_WorkoutsPage_Func();
  if (active_Navigation_Modal.home === true) {
    btn_Home.checked = true;
    label_Home.style.color = "#3b5bdb";
    label_Workouts.style.color = "black";
    label_History.style.color = "black";
    label_History.style.fill = "black";
    label_Exercises.style.color = "black";
    label_Calories.style.color = "black";
    label_Health.style.color = "black";
    if (
      user.firstName === localStorage.getItem("user_firstName") &&
      user.age === JSON.parse(localStorage.getItem("user_Age")) &&
      user.gender === localStorage.getItem("user_Gender") &&
      user.height.feet ===
        JSON.parse(localStorage.getItem("user_Height_Feet")) &&
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
      homeResult_GoalWeight_Title.classList.remove("hidden");
      homeResult_PoundsToLG.classList.remove("hidden");
      homeResult_PoundsToLG.innerHTML = `${user.weight - user.goalWeight}`;
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
    } else if (user.firstName.length === 0) {
      userName.classList.remove("hidden");
      btn_Login.classList.remove("hidden");
    }
  }
  exerciseGroup.workoutName =
    JSON.parse(localStorage.getItem("exercises_WorkoutName")) || [];
  for (let i = 0; i < temp_Workout_Name.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input class="workouts-radios" name="workouts-radios" type="radio">
    <label class="label-workouts-radios">${temp_Workout_Name[i]}</label>
  
    `;
    ungroupedWorkoutList.appendChild(div);
  }
  for (let i = 0; i < exerciseGroup.archived.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <input class="archived-workouts-radios" name="archived-workouts-radios" type="radio">
    <label class="label-archived-workouts-radios">${exerciseGroup.archived[i]}</label>
    `;
    archivedWorkoutList.appendChild(div);
  }
  // exerciseGroup.workoutList =
  //   JSON.parse(
  //     localStorage.getItem(
  //       `workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Exercises`
  //     )
  //   ) || [];
  if (
    createWorkout_WorkoutGroup_Modal_state[
      createWorkout_WorkoutGroup_Modal_count
    ] === "Inactive"
  ) {
    createWorkout_WorkoutGroup_Modal.style.display === "none";
  }
  if (workoutState[workoutState_Count] === "Active") {
    btn_StartWorkout.classList.add("hidden");
    btn_PauseWorkout.classList.remove("hidden");
    workout_Timer_Count =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_Timer_Count`
        )
      ) || 0;
    trackerTimer.app_Seconds =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
        )
      ) || 0;
    trackerTimer.app_Minutes =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
        )
      ) || 0;
    trackerTimer.app_Hours =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
        )
      ) || 0;
    workout_Interval = setInterval(appTimer, 1000);
    workout_Timer.innerHTML = `${
      trackerTimer.app_Hours < 10
        ? `0${trackerTimer.app_Hours}`
        : `${trackerTimer.app_Hours}`
    }:${
      trackerTimer.app_Minutes < 10
        ? `0${trackerTimer.app_Minutes}`
        : `${trackerTimer.app_Minutes}`
    }:${
      trackerTimer.app_Seconds < 10
        ? `0${trackerTimer.app_Seconds}`
        : `${trackerTimer.app_Seconds}`
    }`;
  }
  if (workoutState[workoutState_Count] === "Pause") {
    trackerTimer.app_Seconds =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Seconds`
        )
      ) || 0;
    trackerTimer.app_Minutes =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Minutes`
        )
      ) || 0;
    trackerTimer.app_Hours =
      JSON.parse(
        localStorage.getItem(
          `workoutName_${temp_Workout_Name[workoutName_Count]}_app_Hours`
        )
      ) || 0;
    workout_Timer.innerHTML = `${
      trackerTimer.app_Hours < 10
        ? `0${trackerTimer.app_Hours}`
        : `${trackerTimer.app_Hours}`
    }:${
      trackerTimer.app_Minutes < 10
        ? `0${trackerTimer.app_Minutes}`
        : `${trackerTimer.app_Minutes}`
    }:${
      trackerTimer.app_Seconds < 10
        ? `0${trackerTimer.app_Seconds}`
        : `${trackerTimer.app_Seconds}`
    }`;
    btn_StartWorkout.classList.add("hidden");
    btn_PauseWorkout.classList.add("hidden");
    btn_ResumeWorkout.classList.remove("hidden");
  }
  count = JSON.parse(localStorage.getItem("current_Exercise_Count")) || 0;
  // exerciseGroup.sets.min =
  //   JSON.parse(localStorage.getItem("exercises_Sets_Min")) || [];
  if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
    // labelNextSet.classList.toggle("hidden");
    // btn_NextSet.classList.toggle("hidden");
    // btn_NextExercise.classList.remove("hidden");
    // labelNextExercise.classList.remove("hidden");
    // btn_NextSet.classList.toggle("hidden");
    // labelNextSet.classList.toggle("hidden");
    console.log(`You've finished your set! begin next exercise`);
    // btn_NextExercise.classList.toggle("hidden");
    // labelNextExercise.classList.toggle("hidden");
  }
  // if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
  //   labelNextSet.classList.remove("hidden");
  //   btn_NextSet.classList.remove("hidden");
  // }
  // if (count === 0) {
  //   labelPreviousExercise.classList.toggle("hidden");
  //   btn_PreviousExercise.classList.toggle("hidden");
  // } else if (count > 0) {
  //   labelPreviousExercise.classList.remove("hidden");
  //   btn_PreviousExercise.classList.remove("hidden");
  // }
  // exerciseGroup.exerciseEquipment.type =
  //   JSON.parse(localStorage.getItem("exercises_Equipment_Type")) || [];
  for (let i = 0; i < exercises_Barbell.length; i++) {
    // exerciseGroup.exerciseEquipment.barbell.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Barbell[i]}`;
    select_Barbell_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Dumbbell.length; i++) {
    // exerciseGroup.exerciseEquipment.dumbbell.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Dumbbell[i]}`;
    select_Dumbbell_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Rope.length; i++) {
    // exerciseGroup.exerciseEquipment.rope.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Rope[i]}`;
    select_Rope_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Body.length; i++) {
    // exerciseGroup.exerciseEquipment.rope.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Body[i]}`;
    select_Body_Exercises.appendChild(createOption);
  }
  for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
    const div = document.createElement("div");
    div.classList.add("exercise-list-exercise");
    exercise_List_CurrentExercise.innerHTML = `Current Exercise: ${exerciseGroup.workoutList[count]}`;
    if (
      exerciseGroup.exerciseEquipment.barbell.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Barbell.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    } else if (
      exerciseGroup.exerciseEquipment.dumbbell.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Dumbbell.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    } else if (
      exerciseGroup.exerciseEquipment.body.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Body.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    } else if (
      exerciseGroup.exerciseEquipment.rope.includes(
        `${exerciseGroup.workoutList[i]}`
      )
    ) {
      div.innerHTML = `
  <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
  <label class="exercise-list-label">${option_Rope.innerHTML}: ${exerciseGroup.workoutList[i]}</label>
  `;
    }
    //   div.innerHTML = `
    // <input type="radio" name="exercise-list-radio" class="exercise-list-radio"/>
    // <label>${ }: ${exerciseGroup.workoutList[i]}</label>
    // `;
    exercise_List.appendChild(div);
  }
};

// let main_Nav_styleState;
// const init = function () {
//   // exercise_List_activeState = 0;
//   main_Nav_styleState = 0;
//   // editMode = false;
// };
// init();

// const mainNav_Style = function () {
//   main_Nav_styleState = main_Nav_styleState === 0 ? 1 : 0;
//   if (main_Nav_styleState === 0) {
//     container_MainNav_Buttons.style.display = "grid";
//   } else if (main_Nav_styleState === 1) {
//     container_MainNav_Buttons.style.display = "none";
//   }
// };

let inactiveExercises_Modal,
  addExercises_Modal,
  createExercises_Modal,
  exerciseList_Modal,
  editExercises_Modal,
  activeExercises_Modal;

const state_addExercises = function () {
  if (activeExercises_Modal) {
    img_Modal_ActiveExercise.src =
      "/josephdorsey.github.io/Portfolio Page/stronkApp/Track Exercise/img/pause-circle-outline.svg";
  } else if (!activeExercises_Modal) {
    img_Modal_ActiveExercise.src =
      "/josephdorsey.github.io/Portfolio Page/stronkApp/Track Exercise/img/play-circle-outline.svg";
  }
  // if (inactiveExercises_Modal) {
  //   btn_EditExerciseStorage.classList.add("hidden");
  // }
  if (addExercises_Modal) {
    select_Equipment_Test();
    if (select_Equipment.selectedIndex === 0) {
      select_Barbell_Exercises.classList.add("hidden");
      select_Dumbbell_Exercises.classList.add("hidden");
      select_Body_Exercises.classList.add("hidden");
      select_Rope_Exercises.classList.add("hidden");
      btn_EditExerciseStorage.classList.add("hidden");
    }
  }
  if (createExercises_Modal) {
    // if (select_Equipment.selectedIndex === 0) {
    //   btn_EditExerciseStorage.classList.add("hidden");
    // }
    // if (!(select_Equipment.selectedIndex === 0)) {
    //   btn_EditExerciseStorage.classList.remove("hidden");
    //   select_Barbell_Exercises.classList.add("hidden");
    //   select_Dumbbell_Exercises.classList.add("hidden");
    //   select_Body_Exercises.classList.add("hidden");
    //   select_Rope_Exercises.classList.add("hidden");
    // }
  }
  if (editExercises_Modal) {
    select_Equipment_Test();
  }
  if (exerciseList_Modal) {
    if (exerciseGroup.workoutList.length === 0) {
      exercise_List_P.classList.remove("hidden");
      exercise_List_Hint.classList.remove("hidden");
      exercise_List_CurrentExercise.classList.add("hidden");
      btn_SetActive.classList.add("hidden");
    } else if (exerciseGroup.workoutList.length > 0) {
      exercise_List_P.classList.add("hidden");
      exercise_List_Hint.classList.add("hidden");
      exercise_List_CurrentExercise.classList.remove("hidden");
      exercise_List_CurrentExercise.innerHTML = `Current exercise: ${exerciseGroup.workoutList[count]}`;
      btn_SetActive.classList.remove("hidden");
    }
  }
};
// state_addExercises();
