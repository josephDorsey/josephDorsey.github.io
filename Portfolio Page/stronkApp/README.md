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

# Window onload

Today i learned about a great thing called `window.onload`. It's a great way to help store localStorage data on reload.

So i also fixed the issue where the arrays would reset every time the page would load. So in order to do this. We implement the first wrong function we had because on reload it would add every iteration back to the empty array on reload.

```
window.onload = function() {
userExercises.barbell = JSON.parse(localStorage.exercises_Barbell);
  exercises_Barbell = JSON.parse(localStorage.exercises_Barbell);

  for (let i = 0; i < userExercises.barbell.length; i++) {
    const createOption = document.createElement("option");

    createOption.innerHTML = `${userExercises.barbell[i]}`;
    select_Barbell_Exercises.appendChild(createOption);
  }
}
```
