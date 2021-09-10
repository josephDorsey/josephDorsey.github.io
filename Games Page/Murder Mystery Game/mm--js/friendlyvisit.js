"use strict";

const fVisitForm = document.querySelector(".quiz--fvisit");
const fVisitResult = document.querySelector(".quiz--result02El");
const fVisitP = document.querySelector(".p--answer02El");
const btn02El = document.querySelector(".btn--2");
const fVisitA02El = document.querySelector(".fv01--implicate");
const fVisitB02El = document.querySelector(".fv02--police");
const fVisitC02El = document.querySelector(".fv03--anna");
const fVisitD02El = document.querySelector(".fv04--blood");
const story02El = document.querySelector(".story--2");
const btnNextStory02El = document.querySelector(".btn--next02El");
const containerNextStory02El = document.querySelector(
  ".container-btn--next02El"
);
const containerBtn02El = document.querySelector(".container-btn--2");

function btnStory02() {
  grnHouseP.innerHTML = "";
  fVisitP.innerHTML = "";
  // let p = document.createElement("p");
  if (fVisitC02El.checked === true && currentAttempt === 1) {
    fVisitP.innerHTML += `Correct Answer! It was Anna! Click below to begin the next story!`;
    fVisitP.classList.remove("choice--incorrect");
    fVisitP.classList.add("choice--correct");
    fVisitResult.appendChild(fVisitP);
    currentScore += pointGiven05;
    totalScoreEl.textContent = currentScore;
    fVisitA02El.disabled = true;
    fVisitB02El.disabled = true;
    fVisitC02El.disabled = true;
    fVisitD02El.disabled = true;
    containerBtn02El.classList.toggle("hidden");
    containerNextStory02El.classList.toggle("hidden");
    // story02El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story03El.classList.toggle("hidden");
  } else if (fVisitC02El.checked === true && currentAttempt === 2) {
    fVisitP.innerHTML += `Correct Answer! It was Anna! Click below to begin the next story!`;
    fVisitP.classList.remove("choice--incorrect");
    fVisitP.classList.add("choice--correct");
    fVisitResult.appendChild(fVisitP);
    currentScore += pointGiven03;
    totalScoreEl.textContent = currentScore;
    // story02El.classList.toggle("hidden");
    fVisitA02El.disabled = true;
    fVisitB02El.disabled = true;
    fVisitC02El.disabled = true;
    fVisitD02El.disabled = true;
    containerBtn02El.classList.toggle("hidden");
    containerNextStory02El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story03El.classList.toggle("hidden");
  } else if (fVisitC02El.checked === true && currentAttempt === 3) {
    fVisitP.innerHTML += `Correct Answer! It was Anna! Click below to begin the next story!`;
    fVisitP.classList.remove("choice--incorrect");
    fVisitP.classList.add("choice--correct");
    fVisitResult.appendChild(fVisitP);
    currentScore += pointGiven01;
    totalScoreEl.textContent = currentScore;
    // story02El.classList.toggle("hidden");
    fVisitA02El.disabled = true;
    fVisitB02El.disabled = true;
    fVisitC02El.disabled = true;
    fVisitD02El.disabled = true;
    containerBtn02El.classList.toggle("hidden");
    containerNextStory02El.classList.toggle("hidden");
    storyTurnEl.textContent = turn01El;
    // story03El.classList.toggle("hidden");
  } else if (
    fVisitA02El.checked === true ||
    fVisitB02El.checked === true ||
    fVisitD02El.checked === true
  ) {
    fVisitP.innerHTML += `Wrong! Try again!`;
    fVisitP.classList.remove("choice--correct");
    fVisitP.classList.add("choice--incorrect");
    fVisitResult.appendChild(fVisitP);
    currentAttempt++;
    currentPotentialPoints -= pointTaken02;
    attemptTurnEl.textContent = currentAttempt;
    potentialPoints.textContent = currentPotentialPoints;

    console.log(`Wrong answer try again`);
  }
  if (currentAttempt > 3) {
    fVisitP.innerHTML = "";
    fVisitP.innerHTML += `Good try. It looks like you couldn't solve this mystery. Click below to begin the next story!`;
    currentAttempt--;
    fVisitA02El.disabled = true;
    fVisitB02El.disabled = true;
    fVisitC02El.disabled = true;
    fVisitD02El.disabled = true;
    attemptTurnEl.textContent = 3;
    potentialPoints.textContent = 0;
    containerNextStory02El.classList.toggle("hidden");
    containerBtn02El.classList.toggle("hidden");
  }
}
function nextStory02El() {
  story02El.classList.toggle("hidden");
  story03El.classList.toggle("hidden");
  turn01El++;
  storyTurnEl.textContent = turn01El;
  init();
}

btn02El.addEventListener("click", btnStory02);
btnNextStory02El.addEventListener("click", nextStory02El);
