"use strict";

const exercise_Name = document.querySelector(".exercise-name");
const exercise_Weight = document.querySelector(".exercise-weight");
const exercise_Sets = document.querySelector(".exercise-sets");
const exercise_Reps = document.querySelector(".exercise-reps");
const exercise_Minutes = document.querySelector(".exercise-minutes");
const exercise_Seconds = document.querySelector(".exercise-seconds");
const btn_PushDataToArray = document.querySelector(".btn--push-data-to-array");

const resetDataInfoPush = function () {
  exercise_Name.value = "";
  exercise_Weight.value = "";
  exercise_Sets.value = "";
  exercise_Reps.value = "";
  exercise_Seconds.value = "";
  exercise_Minutes.value = "";
};

btn_PushDataToArray.addEventListener("click", function () {
  const div = document.createElement("div");
  btnMain_ToggleExerciseList.innerHTML = `Exercises (${
    exerciseGroup.name.length + 1
  })`;
  exerciseEditExercise_Title.innerHTML = `Exercise: ${exercise_Name.value}`;
  // workoutNameP.innerHTML = workout_Name.value;
  // exerciseGroup.workoutName = workout_Name.value;
  exerciseGroup.name.push(exercise_Name.value);
  exerciseGroup.weight.push(exercise_Weight.value);
  exerciseGroup.sets.min.push(1);
  exerciseGroup.sets.max.push(Number(exercise_Sets.value));
  exerciseGroup.reps.push(Number(exercise_Reps.value));
  exerciseGroup.rest.minutes.push(Number(exercise_Minutes.value));
  exerciseGroup.rest.seconds.push(Number(exercise_Seconds.value));
  console.log(exerciseGroup);

  // labelExercise.innerHTML = `Exercise: ${exercise_Name.value}`;
  // labelWeight.innerHTML = `Weight: ${exercise_Weight.value}-lbs`;
  // labelSets.innerHTML = `Set: 1 / ${exercise_Sets.value}`;
  // labelReps.innerHTML = `Reps: ${exercise_Reps.value}`;
  // labelRest.innerHTML = `Rest: ${exercise_Minutes.value}m ${exercise_Seconds.value}s`;

  for (let i = 0; i < exerciseGroup.name.length; i++) {
    div.innerHTML = `
  <input type="radio" class="exercise-list-radio"/>
  <label>Exercise ${i + 1}: ${exerciseGroup.name[i]}</label>
  `;
  }
  exercise_List.appendChild(div);
  resetDataInfoPush();
});
