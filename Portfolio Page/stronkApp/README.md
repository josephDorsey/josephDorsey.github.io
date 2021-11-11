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

# Window onload and How to fix issue with items not saving to localStorage unless all the arrays are full?

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

To fix the issue of the arrays not saving on reload. We have to declare our once array:

```
const exercises_Body = [];
```

To one that has the JSON.parse of the localStorage item or parse if empty.

```
const exercises_Body = JSON.parse(localStorage.getItem("exercises_Body")) || [];
```

The code above says if there are no items just parse an empty array. This is how we get around the undefined parse issue we were getting in the beginning.

# How to delete an array item without knowing the index

First we need to try to be able to look for the item in the array. Ill need to find it by doing a code like this:

```
userExercises.barbell.indexOf("Bench Press")
0
```

this yields 0 because it is the first element in the array.

So maybe make a code like this?

```

const findIndexOfBarbell = function() {
  <!-- select_Barbell_Exercises.options[0].value = "Bench Press"
  select_Barbell_Exercises.options[0].selected -->
  for (let i = 0; i < select_Barbell_Exercises.options.length) {

  }

  if (select_Barbell_Exercises.options[i].selected &&
  select_Barbell_Exercises.options[i].value === userExercises.barbell[i]) {
    console.log(`test`);
  }

}
userExercises.barbell.indexOf("Bench Press")

JSON.parse(localStorage.exercises_Barbell)[0] === select_Barbell_Exercises.options[0].value


```

if ()

#
