"use strict";

const btnPlay = document.querySelector(".btn--play");
const btnNew = document.querySelector(".btn--new-game");
const btnNew_Container = document.querySelector(".new-game--container");
const mysteryEl = document.querySelector(".mystery");
const attemptEl = document.querySelector(".attempt");
const attemptTurnEl = document.querySelector(".attempt--turn");
const pointsEl = document.querySelector(".points");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const potentialPoints = document.querySelector(".score--points-left");
const totalScoreEl = document.querySelector(".score--total-points");
const totalHighScoreEl = document.querySelector(".high-score--total-points");
const rulesContainer = document.querySelector(".rules--container");
const story01El = document.querySelector(".story--1");

let playing, activePlayer, highScore;

const scoreBoard = {
  player: "",
  level: 1,
  attempt: 1,
  totalAttempts: 0,
  rounds: {
    one: 5,
    two: 3,
    three: 1,
  },
  potentialPoints: 5,
  score: 0,
  highScore: 0,
};

// let currentScore = 0;
// let currentAttempt = 1;
// let currentPotentialPoints = 5;
// let turn01El = 1;
// const pointTaken02 = 2;
// const pointGiven01 = 1;
// const pointGiven03 = 3;
// const pointGiven05 = 5;

const quiz_greenHouse = {
  correct: `Correct Answer! It was the Maid! Click below to begin the next story.`,
  incorrect: `Wrong answer! Please try again!`,
  failed: `Sorry. It looks like you couldn't solve this mystery. Click below to begin the next story.`,
};

const quiz_friendlyVisit = {
  correct: `Correct Answer! It was Anna! Click below to begin the next story!`,
  incorrect: `Wrong answer! Please try again!`,
  failed: `Sorry. It looks like you couldn't solve this mystery. Click below to begin the next story.`,
};

const quiz_guiltyCourt = {
  correct: `Correct Answer! She knew that her husband wouldn’t walk through
  them because she had killed him. Click below to begin the next story!`,
  incorrect: `Wrong answer! Please try again!`,
  failed: `Sorry. It looks like you couldn't solve this mystery. Click below to begin the next story.`,
};

const quiz_murderSchool = {
  correct: `Correct Answer! It was the Math teacher. Click below to begin the next story!`,
  incorrect: `Wrong answer! Please try again!`,
  failed: `Sorry. It looks like you couldn't solve this mystery. Click below to begin the next story.`,
};

const quiz_emptyCell = {
  correct: `Correct Answer! He had to stand on the dirt pile. Click below to begin the next story!`,
  incorrect: `Wrong answer! Please try again!`,
  failed: `Sorry. It looks like you couldn't solve this mystery. Click below to begin the next story.`,
};
