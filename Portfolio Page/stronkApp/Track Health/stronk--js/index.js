"use strict";
// Login
const btn_Login = document.querySelector(".btn--login");
const userName = document.querySelector(".input--username");
const userGreet = document.querySelector(".user--greet");
const testP = document.querySelector(".test");
const spanWeightData = document.querySelector(".span-weight--data");

// Containers
const container_Question = document.querySelector(".container--questions");
const containerAge = document.querySelector(".container--age");
const containerGender = document.querySelector(".container--gender");
const containerHeight = document.querySelector(".container--height");
const containerName = document.querySelector(".container--name");
const containerBMI = document.querySelector(".container--bmi");
const containerWeight = document.querySelector(".container--weight");
const infoContainerBMI = document.querySelector(".bmi--info");
const containerProtein = document.querySelector(".container--protein");
const containerWeightRange = document.querySelector(".container--weight-range");
const containerResults = document.querySelector(".container--results");

// Form Questions
const userTitle = document.querySelector(".user--title");
const userAge = document.querySelector(".input--age");
const userGenderM = document.querySelector(".radio--male");
const userGenderF = document.querySelector(".radio--female");
const feet = document.querySelector(".input--feet");
const inches = document.querySelector(".input--inches");
const userWeight = document.querySelector(".input--weight");

// The p elements and h3
const proteinRange = document.querySelector(".protein--summary");
const proteinTitle = document.querySelector(".protein--title");
const lifestyleDefinition = document.querySelector(".lifestyle--definition");
const userBMI = document.querySelector(".bmi--summary");
const resultsBMI = document.querySelector(".bmi--results");
const weightRange = document.querySelector(".weight-range--summary");
const lifestyleText = document.querySelector(".lifestyle--summary");
const summaryCalories = document.querySelector(".calorie--summary");
const summaryProtein = document.querySelector(".protein--summary");
const summaryGeneral = document.querySelector(".general--summary");

// list
const listSummary_Sedentary = document.querySelector(".list--sedentary");
const listSummary_LightlyActive = document.querySelector(".list--light-active");
const listSummary_Active = document.querySelector(".list--active");
const listSummary_VeryActive = document.querySelector(".list--very-active");
const listSummary_VigActive = document.querySelector(
  ".list--vigorously-active"
);

// Lifestyle selection
const option_Sedentary = document.querySelector(".option--sedentary");
const option_Light = document.querySelector(".option--light");
const option_Active = document.querySelector(".option--active");
const option_VeryActive = document.querySelector(".option--very-active");
const option_vigorouslyActive = document.querySelector(
  ".option--vigorously-active"
);

// Height selection
const option_Feet = document.querySelector(".option--feet");
const option_Meters = document.querySelector(".option--meters");

// Weight selection
const option_Pounds = document.querySelector(".option--pounds");
const option_Kilograms = document.querySelector(".option--kilograms");

// BMI selection
const btn_BMICategories = document.querySelector(".btn--bmi-categories");
const containerBMICategories = document.querySelector(".bmi--categories");

// Goals selection
const option_MaintainWeight = document.querySelector(".radio--maintain");
const option_LoseWeight = document.querySelector(".radio--lose");
const option_GainWeight = document.querySelector(".radio--gain");

// Gains selection
const containerGainGoal = document.querySelector(".container--slow_fast");
const option_Slow = document.querySelector(".option_Slow");
const option_Fast = document.querySelector(".option_Fast");

const lifeStyle = {
  sedentary: `Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.
  No moderate of vigorous activities.
  Unless you do at least 30 minutes per day of intentional exercise, you are considered sedentary.
  Spending most of the day sitting (e.g. bank teller, desk job). The majority of people will be considered sedentary.`,
  lightlyActive: `Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.
  Daily exercise that is equal to walking for 30 minutes at 4mph. 
  For an adult of average weight, this amount of exercise will burn about 130-160 additional calories. More intense exercise can be performed for less time to achieve the same goal. 
  For example, 15-20 minutes of vigorous activity, such as aerobics, skiing or jogging on a daily basis would put you in this category.
  Spending a good part of the day on your feet (e.g. teacher, salesman).`,
  active: `Activities of daily living, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn, and gardening.
  Daily exercise that is equal to walking for 1 hour and 45 minutes at 4mph. 
  For an adult of average weight, this amount of exercise will burn about 470-580 additional calories.
  More intense exercise can be performed for less time.  For example, jogging for 50 minutes per day. 
  Spending a good part of the day doing some physical activity (e.g. waitress, mailman).`,
  veryActive: `Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.
  Daily exercise that is equal to walking for 4 hours and 15 minutes at 4mph. For an adult of average weight, this amount of exercise will burn about 1,150-1400 additional calories.
  More intense exercise can be performed for less time.  For example, jogging for 2 hours minutes per day.
  Spending most of the day doing heavy physical activity (e.g. bike messenger, carpenter).`,
  vigorouslyActive: `You have selected a vigorously active lifestyle. This means you do strenuous work such as construction or do high intensity exercise most days.`,
};
const lifeStyleChoices = {
  one: `sedentary`,
  two: `lightly active`,
  three: `active`,
  four: `very active`,
  five: `vigorously active`,
};

// User Data
const user = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  height: {
    feet: "",
    inches: "",
    total: "",
  },
  weight: "",
  BMI: "",
  calorie: {
    min: "",
    max: "",
  },
  protein: {
    min: "",
    max: "",
  },
  lifeStyle: "",
};

const convertMinBMI = 18.5 / 703;
const convertMaxBMI = 24.9 / 703;

const btn_Calculate = document.querySelector(".btn--calculate");
let age,
  weight,
  weight_Kilo,
  protein_Min,
  protein_Max,
  protein_Sedentary,
  minWeightRange,
  maxWeightRange,
  calories;
// userName;

const calcMaintainWeight = function () {
  if (option_Sedentary.selected) {
    user.lifeStyle = lifeStyleChoices.one;
    // If you are sedentary (little or no exercise) : Calorie-Calculation = BMR x 1.2;
    // ME 2353.6
    // 2356.6 * 1.2 = 2824.32;
    // 2356.6 * 1.2 = 2824.32 * 0.075 (protein);
    user.calorie["max"] = Math.trunc(calories * 1.2);
    user.protein["max"] = Math.trunc(calories * 1.2 * 0.075);
    summaryGoal_Maintain();
  } else if (option_Light.selected) {
    user.lifeStyle = lifeStyleChoices.two;
    //   If you are lightly active (light exercise/sports 1-3 days/week) : Calorie-Calculation = BMR x 1.375;

    // 2356.6 * 1.375 = 3240.32;
    // 2356.6 * 1.375 = 3240.32 * 0.075 (protein);
    user.calorie["max"] = Math.trunc(calories * 1.375);
    user.protein["max"] = Math.trunc(calories * 1.375 * 0.075);
    summaryGoal_Maintain();
  } else if (option_Active.selected) {
    user.lifeStyle = lifeStyleChoices.three;

    // If you are moderately active (moderate exercise/sports 3-5 days/week) : Calorie-Calculation = BMR x 1.55;

    // 2356.6 * 1.55 = 3652.73;
    // 2356.6 * 1.55 = 3652.73 * 0.075 (protein);
    user.calorie["max"] = Math.trunc(calories * 1.55);
    user.protein["max"] = Math.trunc(calories * 1.55 * 0.075);
    summaryGoal_Maintain();
  } else if (option_VeryActive.selected) {
    user.lifeStyle = lifeStyleChoices.four;
    //   If you are very active (hard exercise/sports 6-7 days a week) : Calorie-Calculation = BMR x 1.725;

    // 2356.6 * 1.725 = 4,065.135;
    // 2356.6 * 1.725 = 4,065.135 * 0.075 (protein);
    user.calorie["max"] = Math.trunc(calories * 1.725);
    user.protein["max"] = Math.trunc(calories * 1.725 * 0.075);
    summaryGoal_Maintain();
  } else if (option_vigorouslyActive.selected) {
    user.lifeStyle = lifeStyleChoices.five;
    //   If you are extra active (very hard exercise/sports & physical job or 2x training) : Calorie-Calculation = BMR x 1.9;

    // 2356.6 * 1.9 = 4,477.54;
    // 2356.6 * 1.9 = 4,477.54 * 0.075 (protein);
    user.calorie["max"] = Math.trunc(calories * 1.9);
    user.protein["max"] = Math.trunc(calories * 1.9 * 0.075);
    summaryGoal_Maintain();
  }
};

const calcLoseWeight = function () {
  // Calories to lose weight
  // Calories never drop 1000 below maintenance level
  // Woman never drop below 1200 calories and men 1800
  //  Reduce your calories by at least 500
  // Protein intake of around 30% of calories may be optimal for weight loss
  // BMR * 0.075 for protein
  // 1. Say you have a calorie maintenance of 2356.6
  // 2. Subtract 500
  // 3. Now your maintenance is 1856 (cant go lower 1800 is lowest)
  // 4. If calories <= 1800 STOP! This is below the recommended maintenance level, please pick a different amount of calories to cut
  //  This is the total number of calories you need in order to lose your current weight, 500 calories below maintenance

  if (option_Sedentary.selected) {
    user.lifeStyle = lifeStyleChoices.one;
    // If you are sedentary (little or no exercise) :
    // Calorie-Calculation = BMR x 1.2 - 500
    // Calorie-Calculation = BMR x 1.2 - 500 *0.075(protein)
    user.calorie["max"] = Math.trunc(calories * 1.2 - 500);
    user.protein["max"] = Math.trunc((calories * 1.2 - 500) * 0.075);
    summaryGoal_Lose();
  } else if (option_Light.selected) {
    user.lifeStyle = lifeStyleChoices.two;
    // If you are lightly active (light exercise/sports 1-3 days/week) :
    // slow gain
    // Calorie-Calculation = BMR x 1.375 - 500 (min)
    // Calorie-Calculation = BMR x 1.375 - 500*0.075 (Protein)
    user.calorie["max"] = Math.trunc(calories * 1.375 - 500);
    user.protein["max"] = Math.trunc((calories * 1.375 - 500) * 0.075);
    summaryGoal_Lose();
  } else if (option_Active.selected) {
    user.lifeStyle = lifeStyleChoices.three;
    // If you are moderately active (moderate exercise/sports 3-5 days/week) :
    //slow gain
    // Calorie-Calculation = BMR x 1.55 - 500 (min)
    // Calorie-Calculation = BMR x 1.55- 500*0.075 (Protein)
    user.calorie["max"] = Math.trunc(calories * 1.55 - 500);
    user.protein["max"] = Math.trunc((calories * 1.55 - 500) * 0.075);
    summaryGoal_Lose();
  } else if (option_VeryActive.selected) {
    // If you are very active (hard exercise/sports 6-7 days a week) :
    user.lifeStyle = lifeStyleChoices.four;
    // Calorie-Calculation = BMR x 1.725 - 500;
    // Calorie-Calculation = BMR x 1.725 - 500*0.075 (Protein);

    user.calorie["max"] = Math.trunc(calories * 1.725 - 500);
    user.protein["max"] = Math.trunc((calories * 1.725 - 500) * 0.075);
    summaryGoal_Lose();
  } else if (option_vigorouslyActive.selected) {
    // If you are extra active (very hard exercise/sports & physical job or 2x training) :
    user.lifeStyle = lifeStyleChoices.five;
    // Calorie-Calculation = BMR x 1.9 - 500
    // Calorie-Calculation = BMR x 1.9 - 500*0.075 (Protein)
    user.calorie["max"] = Math.trunc(calories * 1.9 - 500);
    user.protein["max"] = Math.trunc((calories * 1.9 - 500) * 0.075);
    summaryGoal_Lose();
  }
};
const calcGainWeight = function () {
  if (option_Sedentary.selected) {
    user.lifeStyle = lifeStyleChoices.one;
    //     If you are sedentary (little or no exercise) : Calorie-Calculation = BMR x 1.2 + 300 (min)
    // Calorie-Calculation = BMR x 1.2 + 500 (max)

    if (option_Slow.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.2 + 300);
      user.calorie["max"] = Math.trunc(calories * 1.2 + 500);
      user.protein["min"] = Math.trunc((calories * 1.2 + 300) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.2 + 500) * 0.075);
      summaryGoal_Gain();
    } else if (option_Fast.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.2 + 700);
      user.calorie["max"] = Math.trunc(calories * 1.2 + 1000);
      user.protein["min"] = Math.trunc((calories * 1.2 + 700) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.2 + 1000) * 0.075);
      summaryGoal_Gain();
    }
    // Calorie-Calculation = BMR x 1.2 + 500 *0.075(max-Protein)
    //slow protein gain
    // Calorie-Calculation = BMR x 1.2 + 300 *0.075(min-Protein)
    // Fast gain
    // Calorie-Calculation = BMR x 1.2 + 700 (min)
    // Calorie-Calculation = BMR x 1.2 + 1000 (max)
    // //fast protein gain
    // Calorie-Calculation = BMR x 1.2 + 700 *0.075(min-Protein)
    // Calorie-Calculation = BMR x 1.2 + 1000* 0.075(max-Protein)
  } else if (option_Light.selected) {
    user.lifeStyle = lifeStyleChoices.two;
    //     If you are lightly active (light exercise/sports 1-3 days/week) :
    // // slow gain
    // Calorie-Calculation = BMR x 1.375 + 300 (min)
    //   Calorie-Calculation = BMR x 1.375 + 500 (max)
    //   //slow protein gain
    // Calorie-Calculation = BMR x 1.375 + 300*0.075 (min-Protein)
    //   Calorie-Calculation = BMR x 1.375 + 500*0.075 (max-Protein)
    if (option_Slow.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.375 + 300);
      user.calorie["max"] = Math.trunc(calories * 1.375 + 500);
      user.protein["min"] = Math.trunc((calories * 1.375 + 300) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.375 + 500) * 0.075);
      summaryGoal_Gain();
    } else if (option_Fast.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.375 + 700);
      user.calorie["max"] = Math.trunc(calories * 1.375 + 1000);
      user.protein["min"] = Math.trunc((calories * 1.375 + 700) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.375 + 1000) * 0.075);
      summaryGoal_Gain();
    }
    // // Fast gain
    // Calorie-Calculation = BMR x 1.375 + 700 (min)
    // Calorie-Calculation = BMR x 1.375 + 1000 (max)
    // //fast protein gain
    // Calorie-Calculation = BMR x 1.375 + 700*0.075 (min-PRotein)
    // Calorie-Calculation = BMR x 1.375 + 1000*0.075 (max-PRotein)
  } else if (option_Active.selected) {
    user.lifeStyle = lifeStyleChoices.three;
    // If you are moderately active (moderate exercise/sports 3-5 days/week) :
    //slow gain
    // Calorie-Calculation = BMR x 1.55 + 300 (min)
    //   Calorie-Calculation = BMR x 1.55 + 500 (max)
    // //slow protein gain
    // Calorie-Calculation = BMR x 1.55 + 300*0.075 (min-Protein)
    //   Calorie-Calculation = BMR x 1.55 + 500*0.075 (max-Protein)
    if (option_Slow.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.55 + 300);
      user.calorie["max"] = Math.trunc(calories * 1.55 + 500);
      user.protein["min"] = Math.trunc((calories * 1.55 + 300) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.55 + 500) * 0.075);
      summaryGoal_Gain();
    } else if (option_Fast.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.55 + 700);
      user.calorie["max"] = Math.trunc(calories * 1.55 + 1000);
      user.protein["min"] = Math.trunc((calories * 1.55 + 700) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.55 + 1000) * 0.075);
      summaryGoal_Gain();
    }
    // // Fast gain
    // Calorie-Calculation = BMR x 1.375 + 700 (min)
    // Calorie-Calculation = BMR x 1.375 + 1000 (max)
    // //fast protein gain
    // Calorie-Calculation = BMR x 1.375 + 700*0.075 (min-PRotein)
    // Calorie-Calculation = BMR x 1.375 + 1000*0.075 (max-PRotein)

    // Fast gain
    // Calorie-Calculation = BMR x 1.55 + 700 (min)
    // Calorie-Calculation = BMR x 1.55 + 1000 (max)
    // //fast protein gain
    // Calorie-Calculation = BMR x 1.55 + 700*0.075 (min-Protein)
    // Calorie-Calculation = BMR x 1.55 + 1000*0.075 (max-Protein)
  } else if (option_VeryActive.selected) {
    user.lifeStyle = lifeStyleChoices.four;
    // If you are very active (hard exercise/sports 6-7 days a week) :
    // slow gain
    // Calorie-Calculation = BMR x 1.725 + 300 (min)
    // Calorie-Calculation = BMR x 1.725 + 500 (max)
    // -Protein
    // // slow protein gain
    // Calorie-Calculation = BMR x 1.725 + 300*0.075 (min-Protein)
    // Calorie-Calculation = BMR x 1.725 + 500*0.075 (max-Protein)
    // Fast gain
    if (option_Slow.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.725 + 300);
      user.calorie["max"] = Math.trunc(calories * 1.725 + 500);
      user.protein["min"] = Math.trunc((calories * 1.725 + 300) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.725 + 500) * 0.075);
      summaryGoal_Gain();
    } else if (option_Fast.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.725 + 700);
      user.calorie["max"] = Math.trunc(calories * 1.725 + 1000);
      user.protein["min"] = Math.trunc((calories * 1.725 + 700) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.725 + 1000) * 0.075);
      summaryGoal_Gain();
      // // Fast gain
      // Calorie-Calculation = BMR x 1.375 + 700 (min)
      // Calorie-Calculation = BMR x 1.375 + 1000 (max)
      // //fast protein gain
      // Calorie-Calculation = BMR x 1.375 + 700*0.075 (min-PRotein)
      // Calorie-Calculation = BMR x 1.375 + 1000*0.075 (max-PRotein)
    }
    // Calorie-Calculation = BMR x 1.725 + 700 (min)
    // Calorie-Calculation = BMR x 1.725 + 1000 (max)
    // //fast protein gain
    // Calorie-Calculation = BMR x 1.725 + 700*0.075 (min-Protein)
    // Calorie-Calculation = BMR x 1.725 + 1000*0.075 (max-Protein)
  } else if (option_vigorouslyActive.selected) {
    user.lifeStyle = lifeStyleChoices.five;
    //      If you are extra active (very hard exercise/sports & physical job or 2x training) :
    // //slow gain
    // Calorie-Calculation = BMR x 1.9 + 300 (min)
    // Calorie-Calculation = BMR x 1.9 + 500 (max)
    // //slow protein gain
    // Calorie-Calculation = BMR x 1.9 + 300*0.075 (min-Protein)
    // Calorie-Calculation = BMR x 1.9 + 500*0.075 (max-Protein)
    //   // Fast gain
    // Calorie-Calculation = BMR x 1.9 + 700 (min)
    // Calorie-Calculation = BMR x 1.9 + 1000 (max)
    // //fast protein gain
    // Calorie-Calculation = BMR x 1.9 + 700*0.075 (min-Protein)
    // Calorie-Calculation = BMR x 1.9 + 1000*0.075 (max-Protein)
    if (option_Slow.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.9 + 300);
      user.calorie["max"] = Math.trunc(calories * 1.9 + 500);
      user.protein["min"] = Math.trunc((calories * 1.9 + 300) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.9 + 500) * 0.075);
      summaryGoal_Gain();
    } else if (option_Fast.selected) {
      user.calorie["min"] = Math.trunc(calories * 1.9 + 700);
      user.calorie["max"] = Math.trunc(calories * 1.9 + 1000);
      user.protein["min"] = Math.trunc((calories * 1.9 + 700) * 0.075);
      user.protein["max"] = Math.trunc((calories * 1.9 + 1000) * 0.075);
      summaryGoal_Gain();
      // // Fast gain
      // Calorie-Calculation = BMR x 1.375 + 700 (min)
      // Calorie-Calculation = BMR x 1.375 + 1000 (max)
      // //fast protein gain
      // Calorie-Calculation = BMR x 1.375 + 700*0.075 (min-PRotein)
      // Calorie-Calculation = BMR x 1.375 + 1000*0.075 (max-PRotein)
    }
  }
};
const calcCalories = function () {
  // The Basal Metabolic Rate (BMR) is the amount of energy (calories) your body needs while resting. This accounts for about 60 to 70 percent of calories burned in a day. In general, men have a higher BMR than women. One of the most accurate methods of estimating your basal metabolic rate is the Harris-Benedict formula:
  // Pounds Male
  // Pounds female
  // Calculate protein off calorie intake
  // To gain weight increase your calories by 300-500 above your maintenance level for slow weight gain, or 700-1000 if you want to gain weight fast
  if (userGenderM.checked) {
    calories =
      66 + 6.3 * user.weight + 12.9 * user.height.total - 6.8 * user.age;
    user.calorie.max = calories;
    if (option_MaintainWeight.checked) {
      calcMaintainWeight();
    } else if (option_LoseWeight.checked) {
      calcLoseWeight();
    } else if (option_GainWeight.checked) {
      calcGainWeight();
    }
  } else if (userGenderF.checked) {
    calories =
      655 + 4.3 * user.weight + 4.7 * user.height.total - 4.7 * user.age;
    user.calorie.max = calories;
    if (option_MaintainWeight.checked) {
      calcMaintainWeight();
    } else if (option_LoseWeight.checked) {
      calcLoseWeight();
    } else if (option_GainWeight.checked) {
      calcGainWeight();
    }
  }
};
const goalSelection = function () {
  if (option_MaintainWeight.checked || option_LoseWeight.checked) {
    containerGainGoal.classList.add("hidden");
  } else if (option_GainWeight.checked) {
    containerGainGoal.classList.remove("hidden");
  }
};

document.addEventListener("click", goalSelection);
const closeLogin = function () {
  user.firstName = userName.value;
  btn_Login.classList.add("hidden");
  userName.classList.add("hidden");
  userTitle.classList.add("hidden");
  userGreet.classList.toggle("hidden");
  lifestyleDefinition.classList.toggle("hidden");
  userGreet.textContent = `Welcome, ${user.firstName}!`;
  container_Question.classList.toggle("hidden");
  console.log(user);
};
// const enterKey = function (e) {
//   if (e.key === "Enter" && !containerName.classList.contains("hidden")) {
//     closeLogin();
//   }
// };

const showWBP = function () {
  containerBMI.classList.remove("hidden");
  containerWeightRange.classList.remove("hidden");
  lifestyleDefinition.classList.remove("hidden");
  containerResults.classList.remove("hidden");
  // proteinRange.classList.toggle("hidden");
};
const showLifeStyleSummary = function () {
  if (option_Sedentary.selected) {
    listSummary_Sedentary.classList.remove("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
  } else if (option_Light.selected) {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.remove("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
  } else if (option_Active.selected) {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.remove("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.add("hidden");
  } else if (option_VeryActive.selected) {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.remove("hidden");
    listSummary_VigActive.classList.add("hidden");
  } else if (option_vigorouslyActive.selected) {
    listSummary_Sedentary.classList.add("hidden");
    listSummary_LightlyActive.classList.add("hidden");
    listSummary_Active.classList.add("hidden");
    listSummary_VeryActive.classList.add("hidden");
    listSummary_VigActive.classList.remove("hidden");
  }
};
const calculateUserData = function () {
  // if (
  //   userAge.value === "" ||
  //   !userGenderM.checked ||
  //   !userGenderF.checked ||
  //   feet.value === "" ||
  //   inches.value === "" ||
  //   userWeight.value === "" ||
  //   !option_MaintainWeight.checked ||
  //   !option_LoseWeight.checked ||
  //   !option_GainWeight.checked
  // ) {
  //   userAge.required = true;
  //   userGenderM.required = true;
  //   userGenderF.required = true;
  //   feet.required = true;
  //   inches.required = true;
  //   userWeight.required = true;
  //   option_MaintainWeight.required = true;
  //   option_LoseWeight.required = true;
  //   option_GainWeight.required = true;
  // } else {
  user.age = Number(userAge.value);
  user.gender = userGenderM.checked ? "Male" : "Female";
  user.height["feet"] = Number(feet.value);
  user.height["inches"] = Number(inches.value);
  user.height["total"] = user.height["feet"] * 12 + user.height["inches"];
  user.weight = Number(userWeight.value);
  showLifeStyleSummary();
  calcCalories();
  calculateBMIStandard();
  healthyWeightRange();
  showWBP();
  console.log(user);
};

// For pounds + inches
const calculateBMIStandard = function () {
  userBMI.textContent = "";
  let heightSquared = user.height.total * user.height.total;
  let withoutFactorBMI = user.weight / heightSquared;
  let BMI = withoutFactorBMI * 703;
  // alert(BMI.toFixed(2));
  user.BMI = Number(BMI.toFixed(2));
  resultsBMI.textContent = `BMI: ${user.BMI}`;
  if (user.BMI <= 18.5) {
    userBMI.textContent = `With a BMI of ${user.BMI} you are considered underweight. A few more pounds can lessen your chances of thinning bones and a weakened immune system, as well as feeling tired. Women who are underweight may have irregular periods or stop having them altogether. Underweight men may have lower sperm counts. The healthy range for BMI is between 18.5 and 24.9.`;
  } else if (user.BMI >= 18.5 && user.BMI <= 24.9) {
    userBMI.textContent = `With a BMI of ${user.BMI} you're in a good place now. The healthy range for BMI is between 18.5 and 24.9. Keep up your healthy habits to maintain your weight.`;
  } else if (user.BMI >= 25 && user.BMI <= 29.9) {
    userBMI.textContent = `With a BMI of ${user.BMI} your weight puts you in the overweight range. Losing some extra pounds is a good first step toward lowering your chances of health problems. The healthy range for BMI is between 18.5 and 24.9. If you have a very muscular build, though, you could have an overweight BMI and still be OK.`;
  } else if (user.BMI >= 30) {
    userBMI.textContent = `With a BMI of ${user.BMI} your weight puts you in the obese range. You're much more likely to have serious health problems. The healthy range for BMI is between 18.5 and 24.9.`;
  }
};
const healthyWeightRange = function () {
  // min weight range 18.5/703 -> n*user.height.total**2
  minWeightRange = Math.trunc(convertMinBMI * user.height.total ** 2);
  maxWeightRange = Math.trunc(convertMaxBMI * user.height.total ** 2);
  weightRange.textContent = `For your height a healthy weight range would be between ${minWeightRange} to ${maxWeightRange} lbs.`;
  return weightRange.textContent;
};

document.addEventListener("click", function () {
  if (option_Pounds.selected) {
    userWeight.placeholder = "pounds";
  } else if (option_Kilograms.selected) {
    userWeight.placeholder = "kilograms";
  }
});
btn_Login.addEventListener("click", closeLogin);
btn_Calculate.addEventListener("click", calculateUserData);
// document.addEventListener("keydown", enterKey);
btn_BMICategories.addEventListener("click", function () {
  if (infoContainerBMI.classList.contains("hidden")) {
    infoContainerBMI.classList.remove("hidden");
    container_Question.style.opacity = "rgba(0, 0, 0, 0.7)";
  } else if (!infoContainerBMI.classList.contains("hidden")) {
    infoContainerBMI.classList.add("hidden");
  }
});
// DEVINE FORMULA FOR IDEAL BODY WEIGHT
// Male:	50.0 kg + 2.3 kg per inch over 5 feet
// Female:	45.5 kg + 2.3 kg per inch over 5 feet
// Male 106 + 6 pounds each inch
// Female 100 + 5 pounds each inch
// If under 5 feet tall, subtract 2 pounds for each inch under 5 feet

// FORMULAS
// Kilograms and meters (or centimeters)
// Formula: weight (kg) / [height (m)]2

// The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.

// pounds and inches
// Formula: 703 x weight (lbs) / [height (in)]2

// When using English measurements, pounds should be divided by inches squared. This should then be multiplied by 703 to convert from lbs/inches2 to kg/m2.

// FORMULA w = BMI/703 -> n*inches^2
// min weight range
// max weight range

// The minimum intake "active individuals" should should for is 1.2 to 1.7grams per kilogram of bodyweight, or 0.54 to 0.77 grams per pound.;

// average protein intake, the standard amount most often recommended by bodybuilders and athletes, which is 1gram per pound of bodyweight

// How much protein should I eat at every meal?
// Research suggests that 30 grams of protein per meal is a good goal to shoot for in order to maintain muscle protein synthesis, though 20 grams may be sufficient if the protein is very high quality and high in the amino acid leucine, like whey protein.

// POUNDS
//calcpro calculations  LOSE WEIGHT - POUNDS
// LOSING WEIGHT - Sedentary .816
// LOSING WEIGHT - Lightly Active .93
// LOSING WEIGHT - Moderately Active 1.05
// LOSING WEIGHT - Very Active 1.165
// LOSING WEIGHT - Extra Active 1.29

// GAIN WEIGHT - Sedentary .91
// GAIN WEIGHT - Lightly Active 1.02
// GAIN WEIGHT - Moderately Active 1.132
// GAIN WEIGHT - Very Active 1.244
// GAIN WEIGHT - Extra Active 1.352

// MAINTAIN WEIGHT - Sedentary 0.76
// MAINTAIN WEIGHT - L A .872
// MAINTAIN WEIGHT - M A .98
// MAINTAIN WEIGHT - V A 1.092
// MAINTAIN WEIGHT - E A 1.204

// KILOGRAMS
// LOSING WEIGHT - Sedentary 1.79
// LOSING WEIGHT - Lightly Active 2.054
// LOSING WEIGHT - Moderately Active 2.31
// LOSING WEIGHT - Very Active 2.58
// LOSING WEIGHT - Extra Active 2.84

// GAIN WEIGHT - Sedentary 2.01
// GAIN WEIGHT - Lightly Active 2.257
// GAIN WEIGHT - Moderately Active 2.5
// GAIN WEIGHT - Very Active 2.75
// GAIN WEIGHT - Extra Active 2.992

// MAINTAIN WEIGHT - SEDENTARY 1.682
// MAINTAIN WEIGHT - Lightly Active 1.9204
// MAINTAIN WEIGHT - M Active 2.17
// MAINTAIN WEIGHT - V Active 2.41
// MAINTAIN WEIGHT - E Active 2.659

// HEIGHT CONVERSION TO PROTEIN
// increases by 17 grams
// base is 5 grams
// 1 foot = 5 grams
// 2 foot = 22 grams
// 3 foot = 39 grams
// 4 foot = 56 grams
// 5 foot = 74 grams

// 1 inch = 1 gram (5 + 1) = 6
// 2 inch = 2 gram (6 + 2) = 8
// 3 inch = 1 gram (8 + 1 ) = 9
//4 inch = 2 gram (9 + 2) = 11
// 5 inch = 1 gram (11 + 1) = 12
//6 inch = 2 gram (12 + 2) = 14
//7 inch = 1 gram (14 + 1) = 15
//8 inch = 1 gram (15 + 1) = 16
//9 inch = 2 gram (16 + 2) = 18
//10 inch = 1 gram (18 + 1) = 19
// 11 inch = 2 gram (19 + 2) = 21

// For two pounds = 1 gram

const summaryGoal_Maintain = function () {
  lifeStyleRequirement(user.lifeStyle);
  summaryGeneral.textContent = `As a ${feet.value}'${inches.value}" ${
    userWeight.value
  }${option_Pounds.selected ? `lb` : `kg`} ${
    userGenderM.checked ? `male` : `female`
  }, in order to maintain your same weight with a ${user.lifeStyle} lifestyle:`;
  summaryCalories.textContent = `You need to consume ${user.calorie.max} calories a day.`;
  summaryProtein.textContent = `You also need to consume ${user.protein.max} grams of protein. This daily protein target can help you focus on body recomposition, or gradually burning fat and building muscle, while focusing on your health.`;
};
const summaryGoal_Lose = function () {
  lifeStyleRequirement(user.lifeStyle);
  summaryGeneral.textContent = `As a ${feet.value}'${inches.value}" ${
    userWeight.value
  }${option_Pounds.selected ? `lb` : `kg`} ${
    userGenderM.checked ? `male` : `female`
  }, in order to lose weight with a ${user.lifeStyle} lifestyle:`;
  summaryCalories.textContent = `You need to consume ${user.calorie.max} calories a day.`;
  summaryProtein.textContent = `You also need to consume ${user.protein.max} grams of protein. This daily protein target can help you lose weight in the form of body fat while minimizing muscle loss.`;
};
const summaryGoal_Gain = function () {
  lifeStyleRequirement(user.lifeStyle);
  if (option_Slow.selected) {
    summaryGeneral.textContent = `As a ${feet.value}'${inches.value}" ${
      userWeight.value
    }${option_Pounds.selected ? `lb` : `kg`} ${
      userGenderM.checked ? `male` : `female`
    }, in order to gain weight in a slow progression with a ${
      user.lifeStyle
    } lifestyle:`;
    summaryCalories.textContent = `You need to consume between ${user.calorie.min} to ${user.calorie.max} calories a day.`;
    summaryProtein.textContent = `You also need to consume between ${user.protein.min} to ${user.protein.max} grams of protein. This daily protein target can help you build lean muscle mass while minimizing body-fat gains.`;
  } else if (option_Fast.selected) {
    summaryGeneral.textContent = `As a ${feet.value}'${inches.value}" ${
      userWeight.value
    }${option_Pounds.selected ? `lb` : `kg`} ${
      userGenderM.checked ? `male` : `female`
    }, in order to gain weight in a fast progression with a ${
      user.lifeStyle
    } lifestyle:`;
    summaryCalories.textContent = `You need to consume between ${user.calorie.min} to ${user.calorie.max} calories a day.`;
    summaryProtein.textContent = `You also need to consume between ${user.protein.min} to ${user.protein.max} grams of protein. This daily protein target can help you build lean muscle mass while minimizing body-fat gains.`;
  }
};
