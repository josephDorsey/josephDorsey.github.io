"use strict";
//1) To determine your protein needs in grams (g), first, calculate your weight in kilograms(kg) by dividing your weight in pounds by 2.2
// My weight: 250 / 2.2 = 113.636363636364
// SEDENTARY My protein intake: 113.63 * 0.8 = 91 grams of protein

// SEDENTARY USERS
// 2) Next, decide how many grams of protein per kilogram of body weight is appropriate for you. Use the low end of the range if you are in good health and are sedentary: 0.8g per kg

// ACTIVE USERS
//3) Use a higher number (between 1.2 and 2.0) if you are under stress, pregnant, recovering from an illness, or if you are involved in consistent and intense weight or endurance training

// ACTIVE My protein intake: 113.63 * 1.2 = 136.36 grams of protein
// ACTIVE My protein intake: 113.63 * 1.3 = 147.72 grams of protein
// ACTIVE My protein intake: 113.63 * 1.4 = 159.1 grams of protein
// ACTIVE My protein intake: 113.63 * 1.5 = 170.445 grams of protein
// ACTIVE My protein intake: 113.63 * 1.6 = 181.808 grams of protein
// ACTIVE My protein intake: 113.63 * 1.7 = 193.171 grams of protein
// ACTIVE My protein intake: 113.63 * 1.8 = 204.534 grams of protein
// ACTIVE My protein intake: 113.63 * 1.9 = 215.897 grams of protein
// ACTIVE My protein intake: 113.63 * 2 = 227.26 grams of protein

// ACTIVE For me, I would need to consume anywhere between 136.36 grams to 227.26 grams of protein a day
// EXAMPLE:
// 154-pound (lb) male who is a regular exerciser and lifts weights, but is not training at an elite level:

// 154 lb/2.2 = 70 kg
// 70 kg x 1.7 = 119 grams protein per day

// Can write a simple function that takes in your weight
// For regular people
const loseWeightRegular_Kilo = {
  one: 1.6,
  two: 1.7,
  three: 1.8,
  four: 1.9,
  five: 2.0,
  six: 2.1,
  seven: 2.2,
};
const loseWeightRegular_Pounds = {
  min: 0.73,
  max: 1,
};

const loseWeightAthlete_Kilo = {
  one: 2.2,
  two: 2.3,
  three: 2.4,
  four: 1.5,
  five: 2.6,
  six: 2.7,
  seven: 2.8,
  seven: 2.9,
  seven: 3.0,
  seven: 3.1,
  seven: 3.2,
  seven: 3.3,
  seven: 3.4,
};
const loseWeightAthlete_Pounds = {
  min: 1,
  max: 1.5,
};
const weight_Kilograms = function () {
  weight_Kilo = Math.trunc(user.weight * 2.2);
  if (option_Sedentary.selected) {
    // (0.8kg/ 1.0kg if age >= 70)
    user.age >= 70
      ? (protein_Sedentary = Math.trunc(weight_Kilo * 0.8))
      : (protein_Sedentary = Math.trunc(weight_Kilo * 1));
    proteinRequirement(lifeStyleChoices.one);
    proteinRangeText(lifeStyleChoices.one);
    lifeStyleRequirement(lifeStyleChoices.one);
    listSummary_Sedentary.classList.toggle("hidden");
  } else if (option_Light.selected) {
    // (1.1kg)
    protein_Max = Math.trunc(weight_Kilo * 1.1);
    proteinRequirement(lifeStyleChoices.two);
    proteinRangeText(lifeStyleChoices.two);
    lifeStyleRequirement(lifeStyleChoices.two);
    listSummary_LightlyActive.classList.toggle("hidden");
  } else if (option_Active.selected) {
    protein_Min = Math.trunc(weight_Kilo * 1.1);
    protein_Max = Math.trunc(weight_Kilo * 1.4);
    proteinRequirement(lifeStyleChoices.three);
    proteinRangeText(lifeStyleChoices.three);
    lifeStyleRequirement(lifeStyleChoices.three);
    listSummary_Active.classList.toggle("hidden");
    // 1.1kg to 1.4kg
  } else if (option_VeryActive.selected) {
    protein_Min = Math.trunc(weight_Kilo * 1.4);
    protein_Max = Math.trunc(weight_Kilo * 1.7);
    proteinRequirement(lifeStyleChoices.four);
    proteinRangeText(lifeStyleChoices.four);
    lifeStyleRequirement(lifeStyleChoices.four);
    listSummary_VeryActive.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need between ${protein_Min} to ${protein_Max} grams of protein a day.`);
    // 1.4kg to 1.7kg
  } else if (option_vigorouslyActive.selected) {
    protein_Min = Math.trunc(weight_Kilo * 1.7);
    protein_Max = Math.trunc(weight_Kilo * 2.0);
    proteinRequirement(lifeStyleChoices.five);
    proteinRangeText(lifeStyleChoices.five);
    lifeStyleRequirement(lifeStyleChoices.five);
    listSummary_VigActive.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need between ${protein_Min} to ${protein_Max} grams of protein a day.`);
    // 1.7kg to 2.0kg
  }
};
const weight_Pounds = function () {
  weight = Math.trunc(user.weight);
  if (option_Sedentary.selected) {
    // (0.8kg/ 1.0kg if age >= 70)
    user.age >= 70
      ? (protein_Sedentary = Math.trunc(weight * 0.8))
      : (protein_Sedentary = Math.trunc(weight * 1));
    proteinRequirement(lifeStyleChoices.one);
    proteinRangeText(lifeStyleChoices.one);
    lifeStyleRequirement(lifeStyleChoices.one);
    listSummary_Sedentary.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need ${protein_Sedentary} grams of protein a day.`);
  } else if (option_Light.selected) {
    // (1.1kg)
    protein_Max = Math.trunc(weight * 1.1);
    proteinRequirement(lifeStyleChoices.two);
    proteinRangeText(lifeStyleChoices.two);
    lifeStyleRequirement(lifeStyleChoices.two);
    listSummary_LightlyActive.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need ${protein_Max} grams of protein a day.`);
  } else if (option_Active.selected) {
    protein_Min = Math.trunc(weight * 1.1);
    protein_Max = Math.trunc(weight * 1.4);
    proteinRequirement(lifeStyleChoices.three);
    proteinRangeText(lifeStyleChoices.three);
    lifeStyleRequirement(lifeStyleChoices.three);
    listSummary_Active.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need between ${protein_Min} to ${protein_Max} grams of protein a day.`);
    // 1.1kg to 1.4kg
  } else if (option_VeryActive.selected) {
    protein_Min = Math.trunc(weight * 1.4);
    protein_Max = Math.trunc(weight * 1.7);
    proteinRequirement(lifeStyleChoices.four);
    proteinRangeText(lifeStyleChoices.four);
    lifeStyleRequirement(lifeStyleChoices.four);
    listSummary_VeryActive.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need between ${protein_Min} to ${protein_Max} grams of protein a day.`);
    // 1.4kg to 1.7kg
  } else if (option_vigorouslyActive.selected) {
    protein_Min = Math.trunc(weight * 1.7);
    protein_Max = Math.trunc(weight * 2.0);
    proteinRequirement(lifeStyleChoices.five);
    proteinRangeText(lifeStyleChoices.five);
    lifeStyleRequirement(lifeStyleChoices.five);
    listSummary_VigActive.classList.toggle("hidden");
    // return (proteinRange.textContent = `Our calculations say that you will need between ${protein_Min} to ${protein_Max} grams of protein a day.`);
    // 1.7kg to 2.0
  }
};

const calcProtein = function () {
  option_Pounds.selected ? weight_Pounds() : weight_Kilograms();
};
//  This is the total number of calories you need in order to maintain your current weight.
// BMR * 0.075 to determine protein for weight
// Do you want slow gain? 300-500 calories
// Fast weight gain? 700-1000 calories

const proteinRequirement = function (lifestyle) {
  lifestyle === lifeStyleChoices.three
    ? (proteinTitle.textContent = `How much protein do I need with an ${lifestyle} lifestyle?`)
    : (proteinTitle.textContent = `How much protein do I need with a ${lifestyle} lifestyle?`);
};
const proteinRangeText = function (protein) {
  if (protein === lifeStyleChoices.one) {
    proteinRange.textContent = `Our calculations say that you will need ${protein_Sedentary} grams of protein a day.`;
  } else if (protein === lifeStyleChoices.two) {
    proteinRange.textContent = `Our calculations say that you will need ${protein_Max} grams of protein a day.`;
  } else if (
    protein === lifeStyleChoices.three ||
    protein === lifeStyleChoices.four ||
    protein === lifeStyleChoices.five
  ) {
    proteinRange.textContent = `Our calculations say that you will need between ${protein_Min} to ${protein_Max} grams of protein a day.`;
  }
};
const lifeStyleRequirement = function (lifestyle) {
  lifestyle === lifeStyleChoices.three
    ? (lifestyleDefinition.textContent = `What is an ${lifestyle} lifestyle?`)
    : (lifestyleDefinition.textContent = `What is a ${lifestyle} lifestyle?`);
};
