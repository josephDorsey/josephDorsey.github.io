"use strict";

let count = 0;
let count_Set = 0;

// Next Set
const btn_NextSet = document.querySelector(".btn--next-set");
const labelNextSet = document.querySelector(".label-btn-next-set");
const btn_NextExercise = document.querySelector(".btn--next-exercise");
const labelNextExercise = document.querySelector(".label-btn-next-exercise");

btn_NextSet.addEventListener("click", function () {
  exerciseGroup.sets.min[count_Set]++;
  labelSets.innerHTML = `Set: ${exerciseGroup.sets.min[count_Set]} / ${exerciseGroup.sets.max[count_Set]}`;

  if (exerciseGroup.sets.min[count_Set] === exerciseGroup.sets.max[count_Set]) {
    btn_NextSet.classList.toggle("hidden");
    labelNextSet.classList.toggle("hidden");
    console.log(`You've finished your set! begin next exercise`);
    btn_NextExercise.classList.toggle("hidden");
    labelNextExercise.classList.toggle("hidden");
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

  console.log(`next set`);
});

btn_NextExercise.addEventListener("click", function () {
  count_Set++;
  for (let i = 0; i < exerciseGroup.workoutList.length; i++) {
    btn_NextSet.classList.toggle("hidden");
    labelNextSet.classList.toggle("hidden");
    btn_NextExercise.classList.toggle("hidden");
    labelNextExercise.classList.toggle("hidden");
    count++;
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

function nextSet() {
  i = i + 1;
  i = i % exerciseGroup.sets.min.length;
  return exerciseGroup.sets.min[i];
}

function nextExercise() {
  i = i + 1;
  i = i % exerciseGroup.workoutList.length;
  return exerciseGroup.workoutList[i];
}

function previousExercise() {
  if (i === 0) {
    i = exerciseGroup.workoutList.length;
  }
  i = i - 1;
  return exerciseGroup.workoutList[i];
}
