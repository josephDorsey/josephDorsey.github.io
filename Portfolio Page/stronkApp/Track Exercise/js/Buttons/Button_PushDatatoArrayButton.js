"use strict";

const exercise_List = document.querySelector(".exercise-list");
const exercise_Name = document.querySelector(".exercise-name");
const exercise_Sets = document.querySelector(".exercise-sets");
const exercise_Reps = document.querySelector(".exercise-reps");
const exercise_Minutes = document.querySelector(".exercise-minutes");
const exercise_Seconds = document.querySelector(".exercise-seconds");
const btn_PushDataToArray = document.querySelector(".btn--push-data-to-array");

const resetDataInfoPush = function () {
  exercise_Name.value = "";
  exercise_Sets.value = "";
  exercise_Reps.value = "";
  exercise_Seconds.value = "";
  exercise_Minutes.value = "";
};

btn_PushDataToArray.addEventListener("click", function () {
  // workoutNameP.innerHTML = workout_Name.value;
  // exerciseGroup.workoutName = workout_Name.value;
  exerciseGroup.name.push(exercise_Name.value);
  exerciseGroup.sets.min.push(1);
  exerciseGroup.sets.max.push(Number(exercise_Sets.value));
  exerciseGroup.reps.push(Number(exercise_Reps.value));
  exerciseGroup.rest.minutes.push(Number(exercise_Minutes.value));
  exerciseGroup.rest.seconds.push(Number(exercise_Seconds.value));
  console.log(exerciseGroup);
  resetDataInfoPush();
});
