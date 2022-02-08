"use strict";

const container_AllExercises = document.querySelector(
  ".container--all-exercises"
);

const exercises_Div = document.getElementsByClassName("exercises-all-div");
const exercises_Radio_Label = document.getElementsByClassName(
  "exercises-radio-label"
);

const input_Search_Exercise = document.querySelector(
  ".input--exercises-search"
);
const equipment_Ul = document.getElementsByClassName("ul--exercise-equipment");
const exercises_Radio = document.getElementsByClassName("exercises-radio");
let all_Exercises = [];
let all_Exercises_unique;

let filter, a, equipment, txtValue;
function searchExercise() {
  filter = input_Search_Exercise.value.toUpperCase();
  for (let i = 0; i < exercises_Radio_Label.length; i++) {
    a = exercises_Radio_Label[i];
    equipment = equipment_Ul[i];
    txtValue = a.innerHTML;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      exercises_Radio_Label[i].style.display = "";
      exercises_Div[i].style.display = "";
      exercises_Radio[i].style.display = "";
      equipment_Ul[i].style.display = "";
      exercises_Div[i].style.borderBottom = "1px solid black";
    } else {
      exercises_Radio_Label[i].style.display = "none";
      exercises_Radio[i].style.display = "none";
      equipment_Ul[i].style.display = "none";
      exercises_Div[i].style.display = "none";
      exercises_Div[i].style.borderBottom = "0";
      container_AllExercises.style.borderTop = "0";
    }
  }
}
