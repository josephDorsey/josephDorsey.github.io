STRONK APP NOTES

# Why does my for loop keep adding each iteration to the exercise pool instead of the current one?

## The problem

ex.

```
shrugs
shrugs bench
shrugs bench deadlift
```

So originally whenever I would push the button it would have the createOption element print out every iteration instead of just printing it once like this:

```
shrugs
bench
deadlift
```

to fix this remedy we had an issue with the for loop. I needed to move the createOption declaration out of the for loop block and into the global area of the pushToWordBank function.

```
btn_PushToWordBank.addEventListener("click", function () {
for (let i = 0; i < userExercises.barbell.length; i++) {
  const createOption = document.createElement("option");
      createOption.innerHTML = `${userExercises.barbell[i]}`;
      select_Barbell_Exercises.appendChild(createOption);
}
}
```

to be like this:

```
btn_PushToWordBank.addEventListener("click", function () {
  const createOption = document.createElement("option");
for (let i = 0; i < userExercises.barbell.length; i++) {
      createOption.innerHTML = `${userExercises.barbell[i]}`;
      select_Barbell_Exercises.appendChild(createOption);
}
}
```

This allows it to print it out one at a time to the exercises array.

# How to fix issue with items not saving to localStorage unless all the arrays are full?

## window onload

Today i learned about a great thing called `window.onload`. It's a great way to help store localStorage data on reload.

The code below will rerun every time the page loads, so the select divs will have their items reinputted every load.

```
window.onload = function() {
for (let i = 0; i < exercises_Barbell.length; i++) {
    // exerciseGroup.exerciseEquipment.barbell.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Barbell[i]}`;
    select_Barbell_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Dumbbell.length; i++) {
    // exerciseGroup.exerciseEquipment.dumbbell.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Dumbbell[i]}`;
    select_Dumbbell_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Rope.length; i++) {
    // exerciseGroup.exerciseEquipment.rope.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Rope[i]}`;
    select_Rope_Exercises.appendChild(createOption);
  }

  for (let i = 0; i < exercises_Body.length; i++) {
    // exerciseGroup.exerciseEquipment.rope.length
    const createOption = document.createElement("option");
    createOption.innerHTML = `${exercises_Body[i]}`;
    select_Body_Exercises.appendChild(createOption);
  }
}
```

## Array resetting on page reload issues

To fix the issue of the arrays not saving on reload. We have to change our array:

```
const exercises_Body = [];
```

To one that has the JSON.parse of the localStorage item or parse if empty.

```
const exercises_Body = JSON.parse(localStorage.getItem("exercises_Body")) || [];
```

The code above says if there are no items just parse an empty array. This is how we get around the undefined parse issue we were getting in the beginning.

# (DELETE BUTTON NOTES) How to delete an array item without knowing the index

First we need to try to be able to look for the item in the array. Ill need to find it by doing a code like this:

```
exercises_Rope.splice(i, 1);
      select_Rope_Exercises.options[i].remove();
      localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));
```

## .splice(i, 1)

First, we use `.splice(i, 1)` on the array that has our exercises. Since we are used a for loop to create the options list. We need to loop the options as well. When using the delete button we sometimes might not know the index of the option we want to delete which is why we use splice.

The position of the element we are trying to find isn't determined yet until the loop runs and then it will cut it on the iteration we want it to. In this case it will take out only one element.

## .remove()

Second, we need to delete the option that contains this array item. To do so we use `.remove()`

If we use `select_Rope_Exercises.options[i].remove()` it will remove the current iteration of the selected option.

## finally we set the localStorage item back

After making our change we need to update our localStorage of the removed array item.

```
localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));
```

# Next Set, Next Exercise and Previous Exercise

This is an example of the next set code:

```
btn_NextSet.addEventListener("click", function () {
  restTimerModal.style.display = "grid";
  if (exerciseGroup.sets.min[count] < exerciseGroup.sets.max[count]) {
    exerciseGroup.sets.min[count]++;
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
    setTimeout(function () {
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
    }, 3000);
  }
  if (exerciseGroup.sets.min[count] === exerciseGroup.sets.max[count]) {
    setTimeout(function () {
      btn_NextExercise.classList.remove("hidden");
      labelNextExercise.classList.remove("hidden");
    }, 3000);
    btn_NextSet.classList.toggle("hidden");
    labelNextSet.classList.toggle("hidden");
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

  console.log(`next set`);
});
```

This is an example of the next exercise code:

```
btn_NextExercise.addEventListener("click", function () {
  // count_Set++;
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
```

In both instances the variable `count` was used instead of using a loop. I declared it outside of the code block in the global state.

# Rest Timer modal

# How to delete localStorage items

I was having an issue where I could not delete the localStorage items that were strings that had more than one item in them. To work around this I had to do the following:

```
exerciseGroup.sets.min = [];
localStorage.setItem(`workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Min`)
localStorage.removeItem(`workoutName_${exerciseGroup.workoutName[workoutName_Count]}_Sets_Min`)
```

So the idea is to set the item that we were previously trying to delete back to empty. Then save it to the localStorage, and then remove it from the localStorage. This seemed to be the workaround.

# How to save a spliced index to a new array

```
arr.splice(1,1).pop();
```

Note that in the example above, `splice` is chained with `pop` because `splice` always returns an `array`, so pop is used to extract the single value from `array` returned by `splice`.

# How to remove duplicates from an array using a Set

A `Set` is a collection of unique values. To remove duplicates from an array:

First, convert an array of duplicates to a `Set`. The new `Set` will implicitly remove duplicate elements.
Then, convert the set back to an array.
The following example uses a `Set` to remove duplicates from an array:

```
let exercises_Barbell = ["Bench Press","Bench Press","Front Squat","Hip Thrust","Standing Calf Raise","Row","Deadlift","Overhead Press","Good Mornings","Shrugs","Landmine Row (T-Bar)","Squat"];
let exercises_Barbell_unique = [..new Set(chars)];
console.log(exercises_Barbell_unique);
```

The output would become:

```
["Bench Press","Front Squat","Hip Thrust","Standing Calf Raise","Row","Deadlift","Overhead Press","Good Mornings","Shrugs","Landmine Row (T-Bar)","Squat"];
```

Thus removing the extra bench press exercises that was in the array.

# Exercise Modal Notes

## How to add exercises from different arrays with the same name to display their relevant equipment name

## How to make INPUT="SEARCH" filter to show only the inputted exercise

```
let filter, a, equipment, txtValue;
function searchExercise() {
  filter = input_Search_Exercise.value.toUpperCase();
  for (let i = 0; i < exercises_Radio_Label.length; i++) {
    a = exercises_Radio_Label[i];
    equipment = equipment_Ul[i];
    txtValue = a.innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      exercises_Radio_Label[i].style.display = "";
      exercises_Radio[i].style.display = "";
      equipment_Ul[i].style.display = "";
    } else {
      exercises_Radio_Label[i].style.display = "none";
      exercises_Radio[i].style.display = "none";
      equipment_Ul[i].style.display = "none";
    }
  }
}
```

First things first. We had to declare 4 variables to make this event possible. `filter, a, equipment, txtValue`.

1. Create a function called searchExercise
2. Assigned `filter` the `input_Search_Exercise.value` and made it .toUpperCase();

3. Then created a for loop for the exercises_Radio_Label array

4. Assigned `a` the current iteration of the for loop: `a = exercises_Radio_Label[i]`.

5. Assigned `equipment` the current iteration of the for loop `equipment = equipment_Ul[i]`

6. Assigned `txtValue` the innerHTML of `a`.

7. This is where we started using `indexOf`. `indexOf` is very useful in terms of being able to search for things in arrays or input fields. So the idea is here is that if the input value is greater than -1 then show what was being searched. If its -1 (meaning that its false and doesn't contain the searched exercise) it will hide all exercises.

8. And then we go to the html and attach this function as an onkeyup event:

```
<input type="search" class="input--exercise-search" onkeyup="searchExercise()">
```

This makes it so every time we type in the input field it will be constantly adjusting if the input is in the array or not.

## Continued --- How to make it search for equipment names

## How to dynamically create exerciseName, workoutName, reps, sets, weight

```
const createWorkout = function (workoutName) {
  exerciseObject[`${workoutName}`] = new Object();
};
const createExercise = function (
  workoutName,
  exerciseName,
  sets,
  reps,
  weight
) {
  exerciseObject[`${workoutName}`][`${exerciseName}`] = new Object();
  exerciseObject[`${workoutName}`][`${exerciseName}`].sets = [];
  exerciseObject[`${workoutName}`][`${exerciseName}`].reps = [];
  testObject[`${workoutName}`][`${exerciseName}`].weight = [];
  for (let i = 0; i < sets; i++) {
    exerciseObject[`${workoutName}`][`${exerciseName}`].sets.push(
      Number(`${i + 1}`)
    );
    exerciseObject[`${workoutName}`][`${exerciseName}`].reps.push(Number(reps));
    exerciseObject[`${workoutName}`][`${exerciseName}`].weight.push(
      Number(weight)
    );
  }
};


```

## How to make appending new set to list only append once

```
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
```

I found this method to be better than using the for loop for btn_addSet because for whatever reason it kept adding more divs on each press. Ex. Button click #1 = 1 row, Button click #2 = 2 rows etc.

## How to update input fields on change (weight and reps)

```
function updateWeight() {
  for (
    let i = 0;
    i <
    exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
      `${tempWorkoutList[tempEN_Count]}`
    ].weight.length;
    i++
  ) {
    addSet_Count = i;
    exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
      `${tempWorkoutList[tempEN_Count]}`
    ].weight.splice(addSet_Count, 1, Number(input_Weight[addSet_Count].value));

    console.log(
      `Updating!`,
      exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
        `${tempWorkoutList[tempEN_Count]}`
      ].weight
    );
  }
}
```

This makes it so no matter which input field we are correcting it updates it to the correct index in the objects array.

## How to have addSet_Count equal the currently checked radio button

```
const setAddSetCount = function () {
  for (let i = 0; i < radio_ExerciseList.length; i++) {
    if (radio_ExerciseList[i].checked === true) {
      addSet_Count = i;
    }
  }
};
document.body.addEventListener("click", setAddSetCount);

```

This makes it so every time we click on the exercise via radio button the addSet_Count variable gets updated to the current iteration.

## How to hide the radio buttons for selecting the current exercise

we simply set the opacity to 0 and since we have it wrapped in a label whenever we click it the Row_Div is selected.

## Pseudo code for adding sets increment on most recent weight

```
<input type="number" class="input--reps"
        value="${
          exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
            `${tempWorkoutList[tempEN_Count]}`
          ].reps[0]
        }" onchange="updateReps()">
        <p class="hidden">135</p>
        <p class="hidden">10</p>
        <img src="img/create-outline.svg" class="edit-set">
        </div>
            `;
```

Instead of it being hardcoded to `0` we could create a variable that increments every time the addSet button is clicked. The goal is to have it so whenever the addSet button is clicked that the most recently added weight also has the previous amount of weight.

We would change it to look like:

```
<input type="number" class="input--reps"
        value="${
          exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
            `${tempWorkoutList[tempEN_Count]}`
          ].reps[exerciseObject[`${temp_Workout_Name[workoutName_Count]}`][
                `${tempWorkoutList[tempEN_Count]}`
              ].loopSet]
        }" onchange="updateReps()">
        <p class="hidden">135</p>
        <p class="hidden">10</p>
        <img src="img/create-outline.svg" class="edit-set">
        </div>
            `;
```

This is target the current iteration of the loopSet and then push that value down to the next set
