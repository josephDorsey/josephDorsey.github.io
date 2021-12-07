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
