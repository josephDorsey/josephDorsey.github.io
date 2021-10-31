"use strict";

// CLOCK
// const TIME_LIMIT = inputRest.value;
const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
const app = document.getElementById("app");
let timerInterval = null;
// app.innerHTML = `...`;

const workoutTimer = document.querySelector(".timer--begin-workout");

const timer = function (x) {
  if (x === 0) {
    timeElm.innerHTML = `Rest is over, begin set! 🏋🏿‍♂️`;
    restTimer.innerHTML = `Rest is over, begin set! 🏋🏿‍♂️`;
    setsRadio.classList.remove("hidden");
    if (newExercise.sets.min === newExercise.sets.max) {
      btn_NextSet.classList.add("hidden");
      btn_NextExercise.classList.add("hidden");
    }
    return;
  }

  timeElm.innerHTML = x;
  restTimer.innerHTML = x;

  return setTimeout(() => {
    timer(--x);
  }, 1000);
};
