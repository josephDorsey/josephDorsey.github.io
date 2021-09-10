"use strict";

// Greenhouse Story
const grnHouseForm = document.querySelector(".quiz--greenhouse");
const grnHouseResult = document.querySelector(".quiz--result01El");
const grnHouseP = document.querySelector(".p--answer01El");
const btn01El = document.querySelector(".btn--1");
const grnHouseA01El = document.querySelector(".gh01--driver");
const grnHouseB01El = document.querySelector(".gh02--maid");
const grnHouseC01El = document.querySelector(".gh03--cook");
const grnHouseD01El = document.querySelector(".gh04--gardener");
const storyTurnEl = document.querySelector(".story--turnEl");
const btnNextStory01El = document.querySelector(".btn--next01El");
const containerNextStory01El = document.querySelector(
  ".container-btn--next01El"
);
const containerBtn01El = document.querySelector(".container-btn--1");

// Scoreboard
let currentScore = 0;
let currentAttempt = 1;
let currentPotentialPoints = 5;
let turn01El = 1;
const pointTaken02 = 2;
const pointGiven01 = 1;
const pointGiven03 = 3;
const pointGiven05 = 5;
// make a loop that plays 3 rounds

// we can refactor most of this code into functions like grnHouseCond01, grnHouseCond02, grnHouseCond03
function init() {
  attemptTurnEl.textContent = 1;
  potentialPoints.textContent = 5;
  currentAttempt = 1;
  currentPotentialPoints = 5;
}

function btnStory01() {
  grnHouseP.innerHTML = "";
  // let p = document.createElement("p");
  if (grnHouseB01El.checked === true && currentAttempt === 1) {
    grnHouseP.innerHTML += `Correct Answer! It was the Maid! Click below to begin the next story.`;
    grnHouseP.classList.remove("choice--incorrect");
    grnHouseP.classList.add("choice--correct");
    grnHouseResult.appendChild(grnHouseP);
    currentScore += pointGiven05;
    totalScoreEl.textContent = currentScore;
    console.log(`Correct Answer! It was the maid!`);
    grnHouseA01El.disabled = true;
    grnHouseB01El.disabled = true;
    grnHouseC01El.disabled = true;
    grnHouseD01El.disabled = true;
    containerBtn01El.classList.toggle("hidden");
    containerNextStory01El.classList.toggle("hidden");
    // story01El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story02El.classList.toggle("hidden");
  } else if (grnHouseB01El.checked === true && currentAttempt === 2) {
    grnHouseP.innerHTML += `Correct Answer! It was the Maid! Click below to begin the next story.`;
    grnHouseP.classList.remove("choice--incorrect");
    grnHouseP.classList.add("choice--correct");
    grnHouseResult.appendChild(grnHouseP);
    currentScore += pointGiven03;
    totalScoreEl.textContent = currentScore;
    // story01El.classList.toggle("hidden");
    grnHouseA01El.disabled = true;
    grnHouseB01El.disabled = true;
    grnHouseC01El.disabled = true;
    grnHouseD01El.disabled = true;
    containerNextStory01El.classList.toggle("hidden");
    containerBtn01El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story02El.classList.toggle("hidden");
  } else if (grnHouseB01El.checked === true && currentAttempt === 3) {
    grnHouseP.innerHTML += `Correct Answer! It was the Maid! Click below to begin the next story. `;
    grnHouseP.classList.remove("choice--incorrect");
    grnHouseP.classList.add("choice--correct");
    grnHouseResult.appendChild(grnHouseP);
    currentScore += pointGiven01;
    totalScoreEl.textContent = currentScore;
    // story01El.classList.toggle("hidden");
    containerNextStory01El.classList.toggle("hidden");
    grnHouseA01El.disabled = true;
    grnHouseB01El.disabled = true;
    grnHouseC01El.disabled = true;
    grnHouseD01El.disabled = true;
    containerBtn01El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story02El.classList.toggle("hidden");
  } else if (
    grnHouseA01El.checked === true ||
    grnHouseC01El.checked === true ||
    grnHouseD01El.checked === true
  ) {
    grnHouseP.innerHTML += `Wrong answer! Please try again!`;
    grnHouseP.classList.remove("choice--correct");
    grnHouseP.classList.add("choice--incorrect");
    grnHouseResult.appendChild(grnHouseP);
    currentAttempt++;
    currentPotentialPoints -= pointTaken02;

    attemptTurnEl.textContent = currentAttempt;
    potentialPoints.textContent = currentPotentialPoints;

    console.log(`Wrong answer try again`);
  }
  if (currentAttempt > 3) {
    grnHouseP.innerHTML = "";
    grnHouseP.innerHTML += `Looks like you couldn't solve this mystery! Click below to begin the next story.`;
    currentAttempt--;
    grnHouseA01El.disabled = true;
    grnHouseB01El.disabled = true;
    grnHouseC01El.disabled = true;
    grnHouseD01El.disabled = true;
    attemptTurnEl.textContent = 3;
    potentialPoints.textContent = 0;
    containerNextStory01El.classList.toggle("hidden");
    containerBtn01El.classList.toggle("hidden");
  }
}
function nextStory01El() {
  story01El.classList.toggle("hidden");
  story02El.classList.toggle("hidden");
  turn01El++;
  storyTurnEl.textContent = turn01El;
  init();
}
btn01El.addEventListener("click", btnStory01);
btnNextStory01El.addEventListener("click", nextStory01El);
