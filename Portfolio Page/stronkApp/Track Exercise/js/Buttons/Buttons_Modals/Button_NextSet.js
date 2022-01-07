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

// let count = JSON.parse(localStorage.getItem("current_Exercise_Count")) || 0;

let count =
  JSON.parse(
    localStorage.getItem(
      `workoutName_${temp_Workout_Name[workoutName_Count]}_Count`
    )
  ) || 0;
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
const current_Exercise_List = document.querySelector(
  ".current-exercise-number"
);
const exercise_Completed = document.querySelector(".exercise-completed");

// btn_NextSet.addEventListener("click", function () {
//   clearInterval(interval);
//   modal_Exercise_Info.display = "none";
//   restTimer_Time.innerHTML = "Begin Rest!";
//   restTimerModal.style.display = "grid";
//   convertTime(
//     exerciseGroup.rest.minutes[count],
//     exerciseGroup.rest.seconds[count]
//   );
//   interval = setInterval(intervalFunction, 1000);
//   if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
//     exerciseGroup.sets.min[count]++;
//     localStorage.setItem(
//       `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Min`,
//       JSON.stringify(exerciseGroup.sets.min)
//     );
//     exercise_Completed.classList.add("hidden");
//     labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
//     labelWeight.style.visibility = "hidden";
//     labelRest.style.visibility = "hidden";
//     labelReps.style.visibility = "hidden";
//     labelSets.style.visibility = "hidden";
//     labelNextSet.style.visibility = "hidden";
//     btn_NextSet.style.visibility = "hidden";
//     btn_EditSelect.style.visibility = "hidden";
//     btn_toggleExerciseList.style.visibility = "hidden";
//     btn_CloseActiveModal.style.visibility = "hidden";
//     // setTimeout(function () {
//     //   labelWeight.style.visibility = "visible";
//     //   labelRest.style.visibility = "visible";
//     //   labelReps.style.visibility = "visible";
//     //   labelSets.style.visibility = "visible";
//     //   labelNextSet.style.visibility = "visible";
//     //   btn_NextSet.style.visibility = "visible";
//     //   btn_EditSelect.style.visibility = "visible";
//     //   btn_toggleExerciseList.style.visibility = "visible";
//     //   btn_CloseActiveModal.style.visibility = "visible";
//     //   restTimerModal.style.display = "none";
//     // }, 3000);
//   }
//   if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
//     localStorage.setItem(
//       `workoutName_${temp_Workout_Name[workoutName_Count]}_Sets_Min`,
//       JSON.stringify(exerciseGroup.sets.min)
//     );
//     // btn_NextExercise.classList.remove("hidden");
//     // labelNextExercise.classList.remove("hidden");
//     // btn_NextSet.classList.toggle("hidden");
//     // labelNextSet.classList.toggle("hidden");
//     console.log(`You've finished your set! begin next exercise`);
//     exercise_Completed.classList.remove("hidden");
//     // btn_NextExercise.classList.toggle("hidden");
//     // labelNextExercise.classList.toggle("hidden");
//   }

//   console.log(labelSets.innerHTML, exerciseGroup.sets.min);

//   // for (let i = 0; i < exerciseGroup.sets.min.length; i++) {
//   //   exerciseGroup.sets.min[i]++;
//   //   labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[i]} / ${exerciseGroup.sets.max[i]}`;

//   //   if (exerciseGroup.sets.min[i] === exerciseGroup.sets.max[i]) {
//   //     btn_NextSet.classList.toggle("hidden");
//   //     labelNextSet.classList.toggle("hidden");
//   //     console.log(`You've finished your set! begin next exercise`);
//   //     btn_NextExercise.classList.toggle("hidden");
//   //     labelNextExercise.classList.toggle("hidden");
//   //   }
//   //   console.log(labelSets.innerHTML, exerciseGroup.sets.min);
//   //   break;
//   // }
//   // localStorage.setItem("current_Exercise_Count", JSON.stringify(count));
//   localStorage.setItem(
//     `workoutName_${temp_Workout_Name[workoutName_Count]}_Count`,
//     JSON.stringify(count)
//   );
//   console.log(`next set`);
// });

// btn_NextExercise.addEventListener("click", function () {
//   // count_Set++;

//   restTimer_Time.innerHTML = "";
//   btn_NextSet.style.visibility = "visible";
//   labelNextSet.style.visibility = "visible";
//   btn_NextSet.classList.remove("hidden");
//   labelNextSet.classList.remove("hidden");
//   // btn_NextExercise.classList.toggle("hidden");
//   // labelNextExercise.classList.toggle("hidden");
//   for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
//     count++;
//     if (count === 0) {
//       labelPreviousExercise.classList.add("hidden");
//       btn_PreviousExercise.classList.add("hidden");
//     } else if (count > 0) {
//       labelPreviousExercise.classList.remove("hidden");
//       btn_PreviousExercise.classList.remove("hidden");
//     }

//     if (count === exerciseGroup.workoutList.length - 1) {
//       btn_NextExercise.classList.add("hidden");
//       labelNextExercise.classList.add("hidden");
//       btn_NextExercise.style.display = "none";
//       labelNextExercise.style.display = "none";
//     }
//     localStorage.setItem(
//       `workoutName_${temp_Workout_Name[workoutName_Count]}_Count`,
//       JSON.stringify(count)
//     );
//     exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
//     labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
//     labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[count]}`;
//     labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
//     labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[count]}m ${exerciseGroup.rest.seconds[count]}s`;

//     if (count === exerciseGroup.workoutList.length) {
//       exerciseEditExercise_Title.innerHTML = `Exercise:`;
//       labelExercise.innerHTML = `Exercise: `;
//       labelWeight.innerHTML = `Weight: `;
//       labelSets.innerHTML = `Set: `;
//       labelRest.innerHTML = `Rest: `;
//       labelReps.innerHTML = `Reps: `;
//       console.log(`no more exercises`);
//     }
//     if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
//       labelNextSet.classList.remove("hidden");
//       btn_NextSet.classList.remove("hidden");
//       labelPreviousExercise.classList.remove("hidden");
//       btn_PreviousExercise.classList.remove("hidden");
//       exercise_Completed.classList.add("hidden");
//     }
//     if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
//       labelNextSet.classList.add("hidden");
//       btn_NextSet.classList.add("hidden");
//       labelPreviousExercise.classList.remove("hidden");
//       btn_PreviousExercise.classList.remove("hidden");
//       exercise_Completed.classList.remove("hidden");
//     }
//     current_Exercise_List.innerHTML = `Exercise (${count + 1} / ${
//       exerciseGroup.workoutList.length
//     })`;
//     console.log(`Exercise: ${exerciseGroup.workoutList[count]}`);
//     break;
//   }
// });

// btn_PreviousExercise.addEventListener("click", function () {
//   // count_Set++;
//   // if (count + 1 === exerciseGroup.workoutList.length) {
//   //   btn_NextExercise.style.display = "none";
//   // }
//   restTimer_Time.innerHTML = "";
//   btn_NextSet.style.visibility = "visible";
//   labelNextSet.style.visibility = "visible";
//   btn_NextSet.classList.remove("hidden");
//   labelNextSet.classList.remove("hidden");
//   // btn_NextExercise.classList.toggle("hidden");
//   // labelNextExercise.classList.toggle("hidden");
//   for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
//     count--;
//     if (count === 0) {
//       labelPreviousExercise.classList.add("hidden");
//       btn_PreviousExercise.classList.add("hidden");
//       btn_NextExercise.style.display = "block";
//       labelNextExercise.style.display = "block";
//     } else if (count > 0) {
//       labelPreviousExercise.classList.remove("hidden");
//       btn_PreviousExercise.classList.remove("hidden");
//       btn_NextExercise.style.display = "block";
//       labelNextExercise.style.display = "block";
//     }
//     if (count === exerciseGroup.workoutList.length - 1) {
//       btn_NextExercise.classList.add("hidden");
//       labelNextExercise.classList.add("hidden");
//       btn_NextExercise.style.display = "none";
//       labelNextExercise.style.display = "none";
//     }
//     localStorage.setItem(
//       `workoutName_${temp_Workout_Name[workoutName_Count]}_Count`,
//       JSON.stringify(count)
//     );
//     exerciseEditExercise_Title.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
//     labelExercise.innerHTML = `Exercise: ${exerciseGroup.workoutList[count]}`;
//     labelWeight.innerHTML = `Weight: ${exerciseGroup.weight[count]}`;
//     labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count]} / ${exerciseGroup.sets.max[count]}`;
//     labelRest.innerHTML = `Rest: ${exerciseGroup.rest.minutes[count]}m ${exerciseGroup.rest.seconds[count]}s`;

//     if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
//       labelNextSet.classList.remove("hidden");
//       btn_NextSet.classList.remove("hidden");
//       labelNextExercise.classList.remove("hidden");
//       btn_NextExercise.classList.remove("hidden");
//       exercise_Completed.classList.add("hidden");
//     }
//     if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
//       labelNextSet.classList.add("hidden");
//       btn_NextSet.classList.add("hidden");
//       exercise_Completed.classList.remove("hidden");
//     }
//     current_Exercise_List.innerHTML = `Exercise (${count + 1} / ${
//       exerciseGroup.workoutList.length
//     })`;
//     console.log(`Exercise: ${exerciseGroup.workoutList[count]}`);
//     break;
//   }
// });
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

const row_Div = document.getElementsByClassName("row");
const exercises_Row = document.getElementsByClassName("exercises-row");
const exercises_Row_Radio = document.getElementsByClassName(
  "exercises-row-radio"
);
const btn_addSet = document.getElementsByClassName("btn--add-set");
const btn_removeSet = document.getElementsByClassName("btn--remove-set");
const input_Weight = document.getElementsByClassName("input--weight");
const input_Reps = document.getElementsByClassName("input--reps");
const radio_ExerciseList = document.getElementsByClassName("exercise-list");
let addSet_Count;
let increaseSet = 1;

// function addSet() {
//   for (let i = 0; i < btn_addSet.length; i++) {
//     btn_addSet[i].addEventListener("click", function () {
//       addSet_Count = i;
//       exerciseObject[
//         `${temp_Workout_Name[workoutName_Count]}`
//       ][`${tempWorkoutList[addSet_Count]}`].increaseSet++;
//       count = i;
//       if (radio_ExerciseList[addSet_Count].checked === true) {
//         exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
//           `${tempWorkoutList[addSet_Count]}`
//         ].sets.push(
//           exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
//             `${tempWorkoutList[addSet_Count]}`
//           ].increaseSet
//         );
//         exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
//           `${tempWorkoutList[addSet_Count]}`
//         ].weight.push();
//         exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
//           `${tempWorkoutList[addSet_Count]}`
//         ].reps.push();

//         const div = document.createElement("div");
//         div.classList.add("exercises-row");
//         div.innerHTML = `
//         <img src="img/arrow-forward-outline.svg" class="current-set">
//         <img src="img/checkmark-circle-outline.svg" class="completed-set hidden">
//         <input name="exercises-row-radio" class="exercises-row-radio hidden" type="radio">
//         <p>${
//           exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
//             `${tempWorkoutList[addSet_Count]}`
//           ].increaseSet
//         }</p>
//         <input type="number" class="input--weight">
//         <input type="number" class="input--reps">
//         <p class="hidden">135</p>
//         <p class="hidden">10</p>
//         <img src="img/create-outline.svg" class="edit-set">
//             `;

//         row_Div[addSet_Count].appendChild(div);
//         console.log(`button ${i} clicked`);
//       }
//     });
//   }
// }
function addSet() {
  for (let i = 0; i < radio_ExerciseList.length; i++) {
    addSet_Count = i;
    if (radio_ExerciseList[addSet_Count].checked === true) {
      exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
        `${tempWorkoutList[addSet_Count]}`
      ].increaseSet++;

      exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
        `${tempWorkoutList[addSet_Count]}`
      ].sets.push(
        exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
          `${tempWorkoutList[addSet_Count]}`
        ].increaseSet
      );
      exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
        `${tempWorkoutList[addSet_Count]}`
      ].weight.push();
      exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
        `${tempWorkoutList[addSet_Count]}`
      ].reps.push();
      const div = document.createElement("div");
      div.classList.add("exercises-row");
      div.innerHTML = `
        <img src="img/arrow-forward-outline.svg" class="current-set">
        <img src="img/checkmark-circle-outline.svg" class="completed-set hidden">
        <input name="exercises-row-radio" class="exercises-row-radio hidden" type="radio">
        <p>${
          exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
            `${tempWorkoutList[addSet_Count]}`
          ].increaseSet
        }</p>
        <input type="number" class="input--weight">
        <input type="number" class="input--reps">
        <p class="hidden">135</p>
        <p class="hidden">10</p>
        <img src="img/create-outline.svg" class="edit-set">
            `;

      row_Div[addSet_Count].appendChild(div);
      console.log(`button ${i} clicked`);
    }
  }
}

for (let i = 0; i < btn_removeSet.length; i++) {
  btn_removeSet[i].addEventListener("click", function () {
    for (let i = 0; i < exercises_Row_Radio.length; i++) {
      if (exercises_Row_Radio[i].checked === true) {
        exercises_Row[i].remove();
        console.log(`Button ${i} pressed!`);
      }
    }
  });
}
