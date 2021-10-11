"use strict";
const convertedInches_Summary = document.querySelector(
  ".convertedInches--summary"
);
// let feet, inches, convertedInches, heightSummary;
const convertFeetToInches = function () {
  feet = document.querySelector(".input--feet").value;
  inches = document.querySelector(".input--inches").value;
  convertedInches = Number(feet * 12) + Number(inches);
  // console.log(convertedInches);
  return (
    feet,
    inches,
    convertedInches,
    (convertedInches_Summary.textContent = `You are ${feet}'${inches}". When converted to inches you are a total of ${convertedInches} inches.`)
  );
};
// convertFeetToInches();
