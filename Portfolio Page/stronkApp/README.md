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

Say you have an Array var arr = ['foo', 'bar', 'baz'];.
If you want to dynamically choose items from this Array, you'll need a new variable. Let's call this i and give it a default value var i = 0;

So far, arr[i]; // "foo" (i === 0)
Next and Previous

Now, lets write a function to choose the next item by modifying i. We may want to consider what we want to happen when i is bigger than (or equal to) arr.length as well.

function nextItem() {
i = i + 1; // increase i by one
i = i % arr.length; // if we've gone too high, start from `0` again
return arr[i]; // give us back the item of where we are now
}

Next, lets do the reverse, this time we might want to consider what should happen for negative i

function prevItem() {
if (i === 0) { // i would become 0
i = arr.length; // so put it at the other end of the array
}
i = i - 1; // decrease by one
return arr[i]; // give us back the item of where we are now
}

So far,

nextItem(); // "bar" (i === 1)
prevItem(); // "foo" (i === 0 as we did `0 + 1 - 1`)
// also
prevItem(); // "baz" (decreased on 0)
nextItem(); // "foo" (increased at end of arr)
