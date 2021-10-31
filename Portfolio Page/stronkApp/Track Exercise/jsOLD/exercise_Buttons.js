// "use strict";
// // Add Exercise to Modal
// const btn_AddExercise = document.querySelector(".btn--add-Exercise");
// const btn_CloseAddExerciseModal = document.querySelector(
//   ".btn--closeAddExerciseModal"
// );
// btn_CloseAddExerciseModal.addEventListener("click", function () {
//   resetTrackExercise();
//   resetCreateNewWorkoutModals();
// });

// const resetCreateNewWorkoutModals = function () {
//   workoutNameP.innerHTML = "";
//   workout_Name.classList.remove("hidden");
//   modal_createNewWorkout.classList.add("hidden");
//   workout_Name.classList.add("hidden");
//   btnEnterWorkoutName.classList.remove("hidden");
//   exerciseContainer.classList.add("hidden");
//   titleCreateWorkout.classList.remove("hidden");
// };
// // Next set and next exercise
// const btn_NextSet = document.getElementsByClassName("btn--NextSet");
// const btn_NextExercise = document.getElementsByClassName("btn--NextExercise");
// const p_NextSet = document.getElementsByClassName("p--nextSet");
// // Close exercise
// const btn_CloseExercise = document.getElementsByClassName(
//   "btn--close-exercise"
// );

// // Create Container
// const btn_Create = document.querySelector(".btn--create");
// const create_Container = document.querySelector(".what-to-create--container");
// const btn_CreateWorkout = document.querySelector(".btn--createWorkout");
// const btn_CreateWorkoutGroup = document.querySelector(
//   ".btn--createWorkoutGroup"
// );

// const modal_createNewWorkout = document.querySelector(
//   ".modal--createNewWorkout"
// );
// const modal_createNewWorkoutGroup = document.querySelector(
//   ".modal--createNewWorkoutGroup"
// );

// const btn_Cancel_workoutGroupName = document.querySelector(
//   ".btn--workoutGroupName-cancel"
// );
// const btn_Cancel_workoutName = document.querySelector(
//   ".btn--workoutName-cancel"
// );
// const btn_OK_workoutGroupName = document.querySelector(
//   ".btn--workoutGroupName-ok"
// );
// const btn_AddExercise_workoutName = document.querySelector(
//   ".btn_AddExercise_workoutName"
// );
// const workoutNameP = document.querySelector(".workout--name-p");

// const btnEnterWorkoutName = document.querySelector(".btn--createWorkoutName");

// btnEnterWorkoutName.addEventListener("click", function () {
//   workoutNameP.innerHTML = workout_Name.value;
//   workout_Name.classList.add("hidden");
//   btnEnterWorkoutName.classList.add("hidden");
//   exerciseContainer.classList.remove("hidden");
//   titleCreateWorkout.classList.add("hidden");
//   exerciseMessage.innerHTML = `Please add exercises to ${workout_Name.value}`;
// });

// btn_AddExercise.addEventListener("click", function () {
//   pushExerciseDataToArray();
//   const div = document.createElement("div");
//   div.classList.add("exercise-list");
//   for (let i = 0; i < exerciseGroup.name.length; i++) {
//     //     div.innerHTML = `
//     //       <div class="exercise--group">
//     //       <p id="timeElm"></p>
//     //       <p class="restTimer"></p>
//     //       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 btn--close-exercise" viewBox="0 0 20 20" fill="currentColor">
//     //   <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
//     // </svg>
//     //       <div class="exercise--name">Exercise: ${inputExercise.value}</div>
//     //       <div class="exercise--reps">Reps: ${Number(inputReps.value)}</div>
//     //       <div class="exercise--sets">Set: ${Number(
//     //         exerciseGroup.sets.min[i]
//     //       )} of ${Number(inputSets.value)}</div>
//     //       <div class="exercise--rest">Rest: ${Number(
//     //         inputRest_Minutes.value
//     //       )}m ${Number(inputRest_Seconds.value)}s</div>
//     //       <p class="p--nextSet">Next Set</p>
//     //       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 btn--NextSet ns${i}" viewBox="0 0 20 20" fill="currentColor">
//     //   <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
//     // </svg>
//     // </svg>
//     //       <p class="p--nextExercise">Next Exercise</p>
//     //       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 btn--NextExercise" viewBox="0 0 20 20" fill="currentColor">
//     //   <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
//     // </svg>
//     //       </div>`;
//     // div.innerHTML = `
//     //     <span class="btn--close-exercise">&#10005;</span>
//     //     <input type="radio" name="active" class="btn--ActiveExercise" />
//     //     <div class="exercise-list--Name">Exercise:</div>
//     //     <div class="exercise-list--Sets">Sets:</div>
//     //     <div class="exercise-list--Reps">Reps:</div>
//     //     <div class="exercise-list--Rest">Rest:</div>`;
//   }

//   // document.body.appendChild(div);
//   for (let i = 0; i < btn_NextSet.length; i++) {
//     btn_NextSet[i].addEventListener("click", new_nextSet);
//   }

//   resetTrackExercise();
// });

// const new_nextSet = function () {
//   for (let i = 0; i < exerciseGroup.sets.min.length; i++) {
//     if (exerciseGroup.sets.min[i] === exerciseGroup.sets.max[i]) {
//       console.log(`You completed this exercise, move on to the next exercise!`);
//       exerciseList[i].style.backgroundColor = "green";
//       btn_NextSet[i].classList.add("hidden");
//       p_NextSet[i].classList.add("hidden");
//       exerciseList[i].classList.add("hidden");
//       continue;
//     } else if (exerciseGroup.sets.min[i] < exerciseGroup.sets.max[i]) {
//       exerciseGroup.sets.min[i] += 1;
//       exerciseList_Sets[
//         i
//       ].innerHTML = `Set: ${exerciseGroup.sets.min[i]} of ${exerciseGroup.sets.max[i]}`;
//       console.log(
//         `button ${i + 1} clicked and has a value of ${
//           exerciseGroup.sets.min[i]
//         }`
//       );
//       break;
//     }
//   }
// };

// const nextSet = function () {
//   if (setsRadio.checked === true) {
//     // divSets.textContent = `Sets: ${++newExercise.sets.min}/${inputSets.value}`;
//     resetSet();
//     timer(inputRest.value);
//     console.log(`pressed!`);
//   }
// };

// // COME BACK TO FIX
// // btn_NextSet.addEventListener("click", nextSet);
// // btn_NextSet.addEventListener("click", nextSet);
// // for (let i = 0; i > btn_NextSet.length; i++) {
// //   btn_NextSet[i].addEventListener("click", nextSet);
// // }

// btn_Create.addEventListener("click", function () {
//   create_Container.classList.toggle("hidden");
//   modal_createNewWorkout.classList.add("hidden");
//   modal_createNewWorkoutGroup.classList.add("hidden");
//   workout_Name.classList.remove("hidden");
//   workout_Name.value = "";
// });

// btn_CreateWorkout.addEventListener("click", function () {
//   modal_createNewWorkout.classList.toggle("hidden");
//   modal_createNewWorkoutGroup.classList.add("hidden");
//   create_Container.classList.toggle("hidden");
//   workout_Name.classList.remove("hidden");
// });

// btn_CreateWorkoutGroup.addEventListener("click", function () {
//   modal_createNewWorkoutGroup.classList.toggle("hidden");
//   modal_createNewWorkout.classList.add("hidden");
//   create_Container.classList.toggle("hidden");
// });

// // btn_Cancel_workoutName.addEventListener("click", function () {
// //   modal_createNewWorkout.classList.toggle("hidden");
// // });

// btn_Cancel_workoutGroupName.addEventListener("click", function () {
//   modal_createNewWorkoutGroup.classList.toggle("hidden");
// });

// // btn_AddExercise_workoutName.addEventListener("click", function () {
// //   unGroupedWorkoutsContainer.classList.remove("hidden");
// //   unGrouped.push(workout_Name.value);
// //   const div = document.createElement("div");
// //   for (let i = 0; i < unGrouped.length; i++) {
// //     div.className = `unGroupedWorkout--${i}`;
// //     div.innerHTML = `<a href="#">${workout_Name.value}</a>`;
// //   }
// //   unGroupedWorkoutsContainer.appendChild(div);
// //   modal_createNewWorkout.classList.toggle("hidden");
// //   console.log(exerciseGroup, unGrouped);
// // });
// btn_OK_workoutGroupName.addEventListener("click", function () {
//   groupedWorkoutsContainer.classList.remove("hidden");
//   grouped.push(workoutGroup_Name.value);
//   const div = document.createElement("div");
//   for (let i = 0; i < grouped.length; i++) {
//     div.className = `groupedWorkout--${i}`;
//     div.innerHTML = `<a class="groupName${i}" href="#">${workoutGroup_Name.value}</a>`;
//   }
//   groupedWorkoutsContainer.appendChild(div);
//   modal_createNewWorkoutGroup.classList.toggle("hidden");
//   console.log(exerciseGroup, grouped);
// });
// // function addIDToNewDiv(x) {
// //   for (let i = 0; i < 25; i++) {
// //     const div = document.createElement("div");
// //     div.id = "exercise" + i;
// //     div.className = `${x}`;
// //     test.appendChild(div);
// //     console.log(div);
// //   }
// //
