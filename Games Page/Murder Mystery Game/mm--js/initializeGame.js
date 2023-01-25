"use strict";

function revealScoreBoard() {
  mysteryEl.classList.toggle("hidden");
  attemptEl.classList.toggle("hidden");
  pointsEl.classList.toggle("hidden");
  scoreEl.classList.toggle("hidden");
  highScoreEl.classList.toggle("hidden");
  btnPlay.classList.toggle("hidden");
  rulesContainer.classList.add("game--rules");
  story01El.classList.remove("hidden");
  resetForms();
}

btnPlay.addEventListener("click", revealScoreBoard);

const newGame = function () {
  playing = true;
  scoreBoard.player = "";
  scoreBoard.level = 1;
  scoreBoard.attempt = 1;
  scoreBoard.potentialPoints = 5;
  scoreBoard.score = 0;
  storyTurnEl.textContent = scoreBoard.level;
  attemptTurnEl.textContent = scoreBoard.attempt;
  potentialPoints.textContent = scoreBoard.potentialPoints;
  totalScoreEl.textContent = scoreBoard.score;
  rulesContainer.classList.add("game--rules");
  story01El.classList.remove("hidden");
  story02El.classList.add("hidden");
  story03El.classList.add("hidden");
  story04El.classList.add("hidden");
  story05El.classList.add("hidden");
  btnNew.classList.toggle("hidden");
  enableCheckedBoxes();
  resetChoiceResults();
  resetForms();
  resetStoryBtn();
};

function resetStoryBtn() {
  containerBtn01El.classList.remove("hidden");
  containerBtn02El.classList.remove("hidden");
  containerBtn03El.classList.remove("hidden");
  containerBtn04El.classList.remove("hidden");
  containerBtn05El.classList.remove("hidden");
  containerNextStory01El.classList.add("hidden");
  containerNextStory02El.classList.add("hidden");
  containerNextStory03El.classList.add("hidden");
  containerNextStory04El.classList.add("hidden");
  containerNextStory05El.classList.add("hidden");
}
function resetChoiceResults() {
  guiltyCourtP.innerHTML = "";
  grnHouseP.innerHTML = "";
  fVisitP.innerHTML = "";
  murderSchoolP.innerHTML = "";
  emptyCellP.innerHTML = "";
}
btnNew.addEventListener("click", newGame);

function init() {
  playing = true;
  attemptTurnEl.textContent = 1;
  potentialPoints.textContent = 5;
  scoreBoard.attempt = 1;
  scoreBoard.potentialPoints = 5;
}
// function resetRound() {
//   scoreBoard.attempt = 1;
//   scoreBoard.points = 5;
//   attemptTurnEl.textContent = scoreBoard.attempt;
//   potentialPoints.textContent = scoreBoard.points;
// }

function resetForms() {
  grnHouseForm.reset();
  fVisitForm.reset();
  guiltyCourtForm.reset();
  murderSchoolForm.reset();
  emptyCellForm.reset();
}

function resetScoreBoard() {
  scoreBoard.player = "";
  scoreBoard.story = 1;
  scoreBoard.attempt = 1;
  scoreBoard.points = 5;
  scoreBoard.score = 0;
  // scoreBoard.highScore = 0;
}

function enableCheckedBoxes() {
  grnHouseA01El.disabled = false;
  grnHouseB01El.disabled = false;
  grnHouseC01El.disabled = false;
  grnHouseD01El.disabled = false;
  fVisitA02El.disabled = false;
  fVisitB02El.disabled = false;
  fVisitC02El.disabled = false;
  fVisitD02El.disabled = false;
  guiltyCourtA03El.disabled = false;
  guiltyCourtB03El.disabled = false;
  guiltyCourtC03El.disabled = false;
  guiltyCourtD03El.disabled = false;
  murderSchoolA04El.disabled = false;
  murderSchoolB04El.disabled = false;
  murderSchoolC04El.disabled = false;
  murderSchoolD04El.disabled = false;
  emptyCellA05El.disabled = false;
  emptyCellB05El.disabled = false;
  emptyCellC05El.disabled = false;
  emptyCellD05El.disabled = false;
}

function disableCheckedBoxes_greenHouse() {
  grnHouseA01El.disabled = true;
  grnHouseB01El.disabled = true;
  grnHouseC01El.disabled = true;
  grnHouseD01El.disabled = true;
}

function disabledCheckedBoxes_friendlyVisit() {
  fVisitA02El.disabled = true;
  fVisitB02El.disabled = true;
  fVisitC02El.disabled = true;
  fVisitD02El.disabled = true;
}

function disabledCheckedBoxes_guiltyCourt() {
  guiltyCourtA03El.disabled = true;
  guiltyCourtB03El.disabled = true;
  guiltyCourtC03El.disabled = true;
  guiltyCourtD03El.disabled = true;
}
function disabledCheckedBoxes_murderSchool() {
  murderSchoolA04El.disabled = true;
  murderSchoolB04El.disabled = true;
  murderSchoolC04El.disabled = true;
  murderSchoolD04El.disabled = true;
}
function disabledCheckedBoxes_emptyCell() {
  emptyCellA05El.disabled = true;
  emptyCellB05El.disabled = true;
  emptyCellC05El.disabled = true;
  emptyCellD05El.disabled = true;
}
