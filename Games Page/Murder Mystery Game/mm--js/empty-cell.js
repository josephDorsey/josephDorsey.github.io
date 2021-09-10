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

function btnStory05() {
  emptyCellP.innerHTML = "";
  murderSchoolP.innerHTML = "";
  guiltyCourtP.innerHTML = "";
  grnHouseP.innerHTML = "";
  fVisitP.innerHTML = "";
  // let p = document.createElement("p");
  if (emptyCellB05El.checked === true && currentAttempt === 1) {
    emptyCellP.innerHTML += `Correct Answer!  He had to stand on the dirt pile. Click below to begin the next story!`;
    emptyCellP.classList.remove("choice--incorrect");
    emptyCellP.classList.add("choice--correct");
    emptyCellResult.appendChild(emptyCellP);
    currentScore += pointGiven05;
    totalScoreEl.textContent = currentScore;
    emptyCellA05El.disabled = true;
    emptyCellB05El.disabled = true;
    emptyCellC05El.disabled = true;
    emptyCellD05El.disabled = true;
    containerBtn05El.classList.toggle("hidden");
    containerNextStory05El.classList.toggle("hidden");
    // story02El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story05El.classList.toggle("hidden");
  } else if (emptyCellB05El.checked === true && currentAttempt === 2) {
    emptyCellP.innerHTML += `Correct Answer!  He had to stand on the dirt pile. Click below to begin the next story!`;
    emptyCellP.classList.remove("choice--incorrect");
    emptyCellP.classList.add("choice--correct");
    emptyCellResult.appendChild(emptyCellP);
    currentScore += pointGiven03;
    totalScoreEl.textContent = currentScore;
    emptyCellA05El.disabled = true;
    emptyCellB05El.disabled = true;
    emptyCellC05El.disabled = true;
    emptyCellD05El.disabled = true;
    containerBtn05El.classList.toggle("hidden");
    containerNextStory05El.classList.toggle("hidden");
    // story02El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story04El.classList.toggle("hidden");
  } else if (emptyCellB05El.checked === true && currentAttempt === 3) {
    emptyCellP.innerHTML += `Correct Answer! He had to stand on the dirt pile. Click below to begin the next story!`;
    emptyCellP.classList.remove("choice--incorrect");
    emptyCellP.classList.add("choice--correct");
    emptyCellResult.appendChild(emptyCellP);
    currentScore += pointGiven01;
    totalScoreEl.textContent = currentScore;
    emptyCellA05El.disabled = true;
    emptyCellB05El.disabled = true;
    emptyCellC05El.disabled = true;
    emptyCellD05El.disabled = true;
    containerBtn05El.classList.toggle("hidden");
    containerNextStory05El.classList.toggle("hidden");
    // story02El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story05El.classList.toggle("hidden");
  } else if (
    emptyCellA05El.checked === true ||
    emptyCellC05El.checked === true ||
    emptyCellD05El.checked === true
  ) {
    emptyCellP.innerHTML += `Wrong Answer! Please try again!`;
    emptyCellP.classList.remove("choice--correct");
    emptyCellP.classList.add("choice--incorrect");
    emptyCellResult.appendChild(emptyCellP);
    currentAttempt++;
    currentPotentialPoints -= pointTaken02;
    attemptTurnEl.textContent = currentAttempt;
    potentialPoints.textContent = currentPotentialPoints;

    console.log(`Wrong answer try again`);
  }
  if (currentAttempt > 3) {
    emptyCellP.innerHTML = "";
    emptyCellP.innerHTML += `Good try. It looks like you couldn't solve this mystery. Click below to begin the next story!`;
    currentAttempt--;
    emptyCellA05El.disabled = true;
    emptyCellB05El.disabled = true;
    emptyCellC05El.disabled = true;
    emptyCellD05El.disabled = true;
    attemptTurnEl.textContent = 3;
    potentialPoints.textContent = 0;
    containerNextStory05El.classList.toggle("hidden");
    containerBtn05El.classList.toggle("hidden");
  }
}
function nextStory05El() {
  story05El.classList.toggle("hidden");
  storyTurnEl.textContent = 5;
  init();
}

btn05El.addEventListener("click", btnStory05);
btnNextStory05El.addEventListener("click", nextStory05El);
