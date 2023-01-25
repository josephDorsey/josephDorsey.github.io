"use strict";

const emptyCellForm = document.querySelector(".quiz--empty-cell");
const emptyCellResult = document.querySelector(".quiz--result05El");
const emptyCellP = document.querySelector(".p--answer05El");
const btn05El = document.querySelector(".btn--5");
const emptyCellA05El = document.querySelector(".ec01--failed");
const emptyCellB05El = document.querySelector(".ec02--escape");
const emptyCellC05El = document.querySelector(".ec03--shovel");
const emptyCellD05El = document.querySelector(".ec04--pretend");
const story05El = document.querySelector(".story--5");
const btnNextStory05El = document.querySelector(".btn--next05El");
const containerNextStory05El = document.querySelector(
  ".container-btn--next05El"
);
const containerBtn05El = document.querySelector(".container-btn--5");

function emptyCell_Win() {
  emptyCellP.innerHTML = quiz_emptyCell.correct;
  emptyCellP.classList.remove("choice--incorrect");
  emptyCellP.classList.add("choice--correct");
  disableCheckedBoxes_greenHouse();
  containerBtn05El.classList.toggle("hidden");
  containerNextStory05El.classList.toggle("hidden");
}

function emptyCell_Wrong() {
  emptyCellP.innerHTML = quiz_emptyCell.incorrect;
  emptyCellP.classList.remove("choice--correct");
  emptyCellP.classList.add("choice--incorrect");
}

function btn_level_05() {
  if (emptyCellB05El.checked === true && scoreBoard.attempt === 1) {
    scoreBoard.potentialPoints = scoreBoard.rounds.one;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    emptyCell_Win();
    console.log(scoreBoard);
  } else if (emptyCellB05El.checked === true && scoreBoard.attempt === 2) {
    scoreBoard.potentialPoints = scoreBoard.rounds.two;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    emptyCell_Win();
    console.log(scoreBoard);
  } else if (emptyCellB05El.checked === true && scoreBoard.attempt === 3) {
    scoreBoard.potentialPoints = scoreBoard.rounds.three;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    emptyCell_Win();
    console.log(scoreBoard);
  } else if (
    emptyCellA05El.checked === true ||
    emptyCellC05El.checked === true ||
    emptyCellD05El.checked === true
  ) {
    scoreBoard.attempt++;
    scoreBoard.potentialPoints--;
    scoreBoard.potentialPoints--;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    attemptTurnEl.textContent = scoreBoard.attempt;
    emptyCell_Wrong();
    console.log(scoreBoard);
  }
  if (scoreBoard.attempt > 3) {
    emptyCellP.innerHTML = quiz_emptyCell.failed;
    scoreBoard.attempt = 3;
    scoreBoard.potentialPoints = 0;
    disabledCheckedBoxes_emptyCell();
    attemptTurnEl.textContent = scoreBoard.attempt;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    containerNextStory05El.classList.toggle("hidden");
    containerBtn05El.classList.toggle("hidden");
    console.log(scoreBoard);
  }
}

function next_level_05El() {
  resetChoiceResults();
  if (scoreBoard.score > scoreBoard.highScore) {
    scoreBoard.highScore = scoreBoard.score;
    totalHighScoreEl.textContent = scoreBoard.highScore;
  }
  story05El.classList.toggle("hidden");
  btnNew.classList.toggle("hidden");
  rulesContainer.classList.remove("game--rules");
  btnNew_Container.classList.add("post-game_new-btn");
  //If we decide to continue more than 5
  // scoreBoard.level++;
  // // turn01El++;
  // // storyTurnEl.textContent = turn01El;
  // storyTurnEl.textContent = scoreBoard.level;
  // init();
}

btn05El.addEventListener("click", btn_level_05);
btnNextStory05El.addEventListener("click", next_level_05El);
// function btnStory05() {
//   emptyCellP.innerHTML = "";
//   murderSchoolP.innerHTML = "";
//   guiltyCourtP.innerHTML = "";
//   grnHouseP.innerHTML = "";
//   fVisitP.innerHTML = "";
//   // let p = document.createElement("p");
//   if (emptyCellB05El.checked === true && currentAttempt === 1) {
//     emptyCellP.innerHTML = quiz_emptyCellMystery.correct;
//     emptyCellP.classList.remove("choice--incorrect");
//     emptyCellP.classList.add("choice--correct");
//     emptyCellResult.appendChild(emptyCellP);
//     currentScore += pointGiven05;
//     totalScoreEl.textContent = currentScore;
//     disabledCheckedBoxes_emptyCellMystery();
//     containerBtn05El.classList.toggle("hidden");
//     containerNextStory05El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story05El.classList.toggle("hidden");
//   } else if (emptyCellB05El.checked === true && currentAttempt === 2) {
//     emptyCellP.innerHTML = quiz_emptyCellMystery.correct;
//     emptyCellP.classList.remove("choice--incorrect");
//     emptyCellP.classList.add("choice--correct");
//     emptyCellResult.appendChild(emptyCellP);
//     currentScore += pointGiven03;
//     totalScoreEl.textContent = currentScore;
//     disabledCheckedBoxes_emptyCellMystery();
//     containerBtn05El.classList.toggle("hidden");
//     containerNextStory05El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story04El.classList.toggle("hidden");
//   } else if (emptyCellB05El.checked === true && currentAttempt === 3) {
//     emptyCellP.innerHTML = quiz_emptyCellMystery.correct;
//     emptyCellP.classList.remove("choice--incorrect");
//     emptyCellP.classList.add("choice--correct");
//     emptyCellResult.appendChild(emptyCellP);
//     currentScore += pointGiven01;
//     totalScoreEl.textContent = currentScore;
//     disabledCheckedBoxes_emptyCellMystery();
//     containerBtn05El.classList.toggle("hidden");
//     containerNextStory05El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story05El.classList.toggle("hidden");
//   } else if (
//     emptyCellA05El.checked === true ||
//     emptyCellC05El.checked === true ||
//     emptyCellD05El.checked === true
//   ) {
//     emptyCellP.innerHTML = quiz_emptyCellMystery.incorrect;
//     emptyCellP.classList.remove("choice--correct");
//     emptyCellP.classList.add("choice--incorrect");
//     emptyCellResult.appendChild(emptyCellP);
//     currentAttempt++;
//     currentPotentialPoints -= pointTaken02;
//     attemptTurnEl.textContent = currentAttempt;
//     potentialPoints.textContent = currentPotentialPoints;

//     console.log(`Wrong answer try again`);
//   }
//   if (currentAttempt > 3) {
//     emptyCellP.innerHTML = "";
//     emptyCellP.innerHTML = quiz_emptyCellMystery.failed;
//     currentAttempt--;
//     disabledCheckedBoxes_emptyCellMystery();
//     attemptTurnEl.textContent = 3;
//     potentialPoints.textContent = 0;
//     containerNextStory05El.classList.toggle("hidden");
//     containerBtn05El.classList.toggle("hidden");
//   }
// }
// function nextStory05El() {
//   story05El.classList.toggle("hidden");
//   storyTurnEl.textContent = 5;
//   init();
// }

// btn05El.addEventListener("click", btnStory05);
// btnNextStory05El.addEventListener("click", nextStory05El);
