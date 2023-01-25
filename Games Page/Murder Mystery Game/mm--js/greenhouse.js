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
const containerBtn01El = document.querySelector(".container-btn--1");
const containerNextStory01El = document.querySelector(
  ".container-btn--next01El"
);

// we can refactor most of this code into functions like grnHouseCond01, grnHouseCond02, grnHouseCond03
function greenHouse_Win() {
  grnHouseP.innerHTML = quiz_greenHouse.correct;
  grnHouseP.classList.remove("choice--incorrect");
  grnHouseP.classList.add("choice--correct");
  disableCheckedBoxes_greenHouse();
  containerBtn01El.classList.toggle("hidden");
  containerNextStory01El.classList.toggle("hidden");
}

function greenHouse_Wrong() {
  grnHouseP.innerHTML = quiz_greenHouse.incorrect;
  grnHouseP.classList.remove("choice--correct");
  grnHouseP.classList.add("choice--incorrect");
}

// switch (grnHouseB01El.checked) {
//   case true && scoreBoard.attempt === 1:
//     console.log(`That's the correct answer`);
//   case true && scoreBoard.attempt === 2:
//     console.log(`That's the correct answer`);
//   case true && scoreBoard.attempt === 3:
//     console.log(`That's the correct answer`);
//   case false:
//     scoreBoard.potentialPoints += -2;
//     console.log(`SORRY WRONG ANSWER`);
// }
function btn_level_01() {
  if (grnHouseB01El.checked === true && scoreBoard.attempt === 1) {
    scoreBoard.potentialPoints = scoreBoard.rounds.one;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    greenHouse_Win();
    console.log(scoreBoard);
  } else if (grnHouseB01El.checked === true && scoreBoard.attempt === 2) {
    scoreBoard.potentialPoints = scoreBoard.rounds.two;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    greenHouse_Win();
    console.log(scoreBoard);
  } else if (grnHouseB01El.checked === true && scoreBoard.attempt === 3) {
    scoreBoard.potentialPoints = scoreBoard.rounds.three;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    greenHouse_Win();
    console.log(scoreBoard);
  } else if (
    grnHouseA01El.checked === true ||
    grnHouseC01El.checked === true ||
    grnHouseD01El.checked === true
  ) {
    scoreBoard.attempt++;
    // scoreBoard.potentialPoints--;
    // scoreBoard.potentialPoints--;
    scoreBoard.potentialPoints += -2;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    attemptTurnEl.textContent = scoreBoard.attempt;
    greenHouse_Wrong();
    console.log(scoreBoard);
  }
  if (scoreBoard.attempt > 3) {
    grnHouseP.innerHTML = quiz_greenHouse.failed;
    scoreBoard.attempt = 3;
    scoreBoard.potentialPoints = 0;
    disableCheckedBoxes_greenHouse();
    attemptTurnEl.textContent = scoreBoard.attempt;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    containerNextStory01El.classList.toggle("hidden");
    containerBtn01El.classList.toggle("hidden");
    console.log(scoreBoard);
  }
}

function next_level_01El() {
  resetChoiceResults();
  story01El.classList.toggle("hidden");
  story02El.classList.toggle("hidden");
  scoreBoard.level++;
  // turn01El++;
  // storyTurnEl.textContent = turn01El;
  storyTurnEl.textContent = scoreBoard.level;
  init();
}

btn01El.addEventListener("click", btn_level_01);
btnNextStory01El.addEventListener("click", next_level_01El);
