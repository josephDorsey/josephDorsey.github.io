"use strict";
// Rest Timer

const restTimerModal = document.querySelector(".rest-timer-modal");
const restTimer_Title = document.querySelector(".rest-timer-title");
const restTimer_Time = document.querySelector(".rest-timer-h3");
const btn_CancelRest = document.querySelector(".btn--cancel-rest");

let timeLeft;
let timeLeftMil;
let interval;
const convertTime = function (minutes, seconds) {
  let timerMinutesConvertedToSeconds = minutes * 60;
  timeLeft = timerMinutesConvertedToSeconds + seconds;
  console.log(`You have ${timeLeft * 1000} seconds of time`);
  timeLeftMil = timeLeft * 1000;
  return timeLeft, timeLeftMil;
};

const intervalFunction = () => {
  console.log(timeLeft);
  if (
    timeLeft < 1 &&
    !(exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count])
  ) {
    clearInterval(interval);
    labelWeight.style.visibility = "visible";
    labelRest.style.visibility = "visible";
    labelReps.style.visibility = "visible";
    labelSets.style.visibility = "visible";
    labelNextSet.style.visibility = "visible";
    btn_NextSet.style.visibility = "visible";
    btn_EditSelect.style.visibility = "visible";
    btn_toggleExerciseList.style.visibility = "visible";
    btn_CloseActiveModal.style.visibility = "visible";
    restTimerModal.style.display = "none";
  }
  if (
    timeLeft < 1 &&
    exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]
  ) {
    restTimer_Time.innerHTML = "";
    clearInterval(interval);
    labelWeight.style.visibility = "visible";
    labelRest.style.visibility = "visible";
    labelReps.style.visibility = "visible";
    labelSets.style.visibility = "visible";
    // labelNextSet.style.visibility = "visible";
    // btn_NextSet.style.visibility = "visible";
    btn_EditSelect.style.visibility = "visible";
    btn_toggleExerciseList.style.visibility = "visible";
    btn_CloseActiveModal.style.visibility = "visible";
    btn_NextExercise.classList.remove("hidden");
    labelNextExercise.classList.remove("hidden");
    btn_NextSet.classList.add("hidden");
    labelNextSet.classList.add("hidden");
    restTimerModal.style.display = "none";
  }
  timeLeft--;
  restTimer_Time.innerHTML = timeLeft;
};
btn_CancelRest.addEventListener("click", function () {
  clearInterval(interval);
  restTimer_Time.innerHTML = "";
  if (!(exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count])) {
    labelWeight.style.visibility = "visible";
    labelRest.style.visibility = "visible";
    labelReps.style.visibility = "visible";
    labelSets.style.visibility = "visible";
    labelNextSet.style.visibility = "visible";
    btn_NextSet.style.visibility = "visible";
    btn_EditSelect.style.visibility = "visible";
    btn_toggleExerciseList.style.visibility = "visible";
    btn_CloseActiveModal.style.visibility = "visible";
    restTimerModal.style.display = "none";
  }
  if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
    btn_NextExercise.classList.remove("hidden");
    labelNextExercise.classList.remove("hidden");
    btn_NextSet.classList.add("hidden");
    labelNextSet.classList.add("hidden");
    restTimerModal.style.display = "none";
    labelWeight.style.visibility = "visible";
    labelRest.style.visibility = "visible";
    labelReps.style.visibility = "visible";
    labelSets.style.visibility = "visible";
    btn_EditSelect.style.visibility = "visible";
    btn_toggleExerciseList.style.visibility = "visible";
    btn_CloseActiveModal.style.visibility = "visible";
  }
});

let count = JSON.parse(localStorage.getItem("current_Exercise_Count")) || 0;
let count_Set = 0;

// Next Set
const btn_NextSet = document.querySelector(".btn--next-set");
const labelNextSet = document.querySelector(".label-btn-next-set");
const btn_NextExercise = document.querySelector(".btn--next-exercise");
const btn_PreviousExercise = document.querySelector(".btn--previous-exercise");
const labelNextExercise = document.querySelector(".label-btn-next-exercise");
const labelPreviousExercise = document.querySelector(
  ".label-btn-previous-exercise"
);

btn_NextSet.addEventListener("click", function () {
  clearInterval(interval);
  restTimer_Time.innerHTML = "Begin Rest!";
  restTimerModal.style.display = "grid";
  convertTime(
    exerciseGroup.rest.minutes[count],
    exerciseGroup.rest.seconds[count]
  );
  interval = setInterval(intervalFunction, 1000);
  if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
    exerciseGroup.sets.min[count]++;
    localStorage.setItem(
      "exercises_Sets_Min",
      JSON.stringify(exerciseGroup.sets.min)
    );
    labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
    labelWeight.style.visibility = "hidden";
    labelRest.style.visibility = "hidden";
    labelReps.style.visibility = "hidden";
    labelSets.style.visibility = "hidden";
    labelNextSet.style.visibility = "hidden";
    btn_NextSet.style.visibility = "hidden";
    btn_EditSelect.style.visibility = "hidden";
    btn_toggleExerciseList.style.visibility = "hidden";
    btn_CloseActiveModal.style.visibility = "hidden";
    // setTimeout(function () {
    //   labelWeight.style.visibility = "visible";
    //   labelRest.style.visibility = "visible";
    //   labelReps.style.visibility = "visible";
    //   labelSets.style.visibility = "visible";
    //   labelNextSet.style.visibility = "visible";
    //   btn_NextSet.style.visibility = "visible";
    //   btn_EditSelect.style.visibility = "visible";
    //   btn_toggleExerciseList.style.visibility = "visible";
    //   btn_CloseActiveModal.style.visibility = "visible";
    //   restTimerModal.style.display = "none";
    // }, 3000);
  }
  if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
    localStorage.setItem(
      "exercises_Sets_Min",
      JSON.stringify(exerciseGroup.sets.min)
    );
    // btn_NextExercise.classList.remove("hidden");
    // labelNextExercise.classList.remove("hidden");
    // btn_NextSet.classList.toggle("hidden");
    // labelNextSet.classList.toggle("hidden");
    console.log(`You've finished your set! begin next exercise`);
    // btn_NextExercise.classList.toggle("hidden");
    // labelNextExercise.classList.toggle("hidden");
  }

  console.log(labelSets.innerHTML, exerciseGroup.sets.min);

  // for (let i = 0; i < exerciseGroup.sets.min.length; i++) {
  //   exerciseGroup.sets.min[i]++;
  //   labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[i]} / ${exerciseGroup.sets.max[i]}`;

  //   if (exerciseGroup.sets.min[i] === exerciseGroup.sets.max[i]) {
  //     btn_NextSet.classList.toggle("hidden");
  //     labelNextSet.classList.toggle("hidden");
  //     console.log(`You've finished your set! begin next exercise`);
  //     btn_NextExercise.classList.toggle("hidden");
  //     labelNextExercise.classList.toggle("hidden");
  //   }
  //   console.log(labelSets.innerHTML, exerciseGroup.sets.min);
  //   break;
  // }
  localStorage.setItem("current_Exercise_Count", JSON.stringify(count));
  console.log(`next set`);
});

btn_NextExercise.addEventListener("click", function () {
  // count_Set++;
  if (count === 0) {
    labelPreviousExercise.classList.toggle("hidden");
    btn_PreviousExercise.classList.toggle("hidden");
  } else if (count > 0) {
    labelPreviousExercise.classList.remove("hidden");
    btn_PreviousExercise.classList.remove("hidden");
  }
  restTimer_Time.innerHTML = "";
  btn_NextSet.style.visibility = "visible";
  labelNextSet.style.visibility = "visible";
  btn_NextSet.classList.remove("hidden");
  labelNextSet.classList.remove("hidden");
  // btn_NextExercise.classList.toggle("hidden");
  // labelNextExercise.classList.toggle("hidden");
  for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
    count++;
    localStorage.setItem("current_Exercise_Count", JSON.stringify(count));
    exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[count]}`;
    labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
    labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[count]}m ${exerciseGroup.rest.seconds[count]}s`;

    if (count === exerciseGroup.workoutList.length) {
      exerciseEditExercise_Title.innerHTML = `Exercise:`;
      labelExercise.innerHTML = `Exercise: `;
      labelWeight.innerHTML = `Weight: `;
      labelSets.innerHTML = `Set: `;
      labelRest.innerHTML = `Rest: `;
      labelReps.innerHTML = `Reps: `;
      console.log(`no more exercises`);
    }
    console.log(`Exercise: ${exerciseGroup.workoutList[count]}`);
    break;
  }
});

btn_PreviousExercise.addEventListener("click", function () {
  // count_Set++;
  restTimer_Time.innerHTML = "";
  btn_NextSet.style.visibility = "visible";
  labelNextSet.style.visibility = "visible";
  btn_NextSet.classList.remove("hidden");
  labelNextSet.classList.remove("hidden");
  // btn_NextExercise.classList.toggle("hidden");
  // labelNextExercise.classList.toggle("hidden");
  for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
    count--;
    localStorage.setItem("current_Exercise_Count", JSON.stringify(count));
    exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
    labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[count]}`;
    labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
    labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[count]}m ${exerciseGroup.rest.seconds[count]}s`;

    if (count === 0) {
      labelPreviousExercise.classList.toggle("hidden");
      btn_PreviousExercise.classList.toggle("hidden");
    }
    console.log(`Exercise: ${exerciseGroup.workoutList[count]}`);
    break;
  }
});
// function nextSet() {
//   i = i + 1;
//   i = i % exerciseGroup.sets.min.length;
//   return exerciseGroup.sets.min[i];
// }

// function nextExercise() {
//   i = i + 1;
//   i = i % exerciseGroup.workoutList.length;
//   return exerciseGroup.workoutList[i];
// }

// function previousExercise() {
//   if (i === 0) {
//     i = exerciseGroup.workoutList.length;
//   }
//   i = i - 1;
//   return exerciseGroup.workoutList[i];
// }
