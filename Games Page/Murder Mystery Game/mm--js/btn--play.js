"use strict";
// const pointGiven01 = 1;
// const pointGiven03 = 3;
// const pointGiven05 = 5;
const btnPlay = document.querySelector(".btn--play");
const mysteryEl = document.querySelector(".mystery");
const attemptEl = document.querySelector(".attempt");
const attemptTurnEl = document.querySelector(".attempt--turn");
const pointsEl = document.querySelector(".points");
const scoreEl = document.querySelector(".score");
const potentialPoints = document.querySelector(".score--points-left");
const totalScoreEl = document.querySelector(".score--total-points");
const rulesContainer = document.querySelector(".rules--container");
const story01El = document.querySelector(".story--1");

function revealScoreBoard() {
  mysteryEl.classList.toggle("hidden");
  attemptEl.classList.toggle("hidden");
  pointsEl.classList.toggle("hidden");
  scoreEl.classList.toggle("hidden");
  btnPlay.classList.toggle("hidden");
  rulesContainer.classList.add("rules--container-post");
  story01El.classList.toggle("hidden");
  grnHouseForm.reset();
  fVisitForm.reset();
  guiltyCourtForm.reset();
  murderSchoolForm.reset();
  emptyCellForm.reset();
}

btnPlay.addEventListener("click", revealScoreBoard);
