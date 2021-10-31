"use strict";
const newExercise = {
  exercise: "",
  sets: {
    min: 1,
    max: "",
  },
  reps: "",
  rest: "",
};

const exerciseGroup = {
  workoutGroup: "",
  workoutName: "",
  name: [],
  sets: {
    min: [],
    max: [],
  },
  reps: [],
  rest: {
    minutes: [],
    seconds: [],
  },
  addSubtractRest: 30,
  increaseSet: 1,
};

const grouped = [];
const unGrouped = [];
