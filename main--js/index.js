"use strict";

const button_AboutMe = document.querySelector(".btn_AboutMe");
const button_Portfolio = document.querySelector(".btn_Portfolio");
const button_Contact = document.querySelector(".btn_Contact");
const button_Games = document.querySelector(".btn_Games");
const container_AboutMe = document.querySelector(".container--AboutMe");
const container_Portfolio = document.querySelector(".container--Portfolio");
const container_Contact = document.querySelector(".container--Contact");
const container_Games = document.querySelector(".container--Games");

button_AboutMe.addEventListener("click", function () {
  container_AboutMe.style.display = "";
  container_Portfolio.style.display = "none";
  container_Contact.style.display = "none";
  container_Games.style.display = "none";
  button_AboutMe.classList.add("nav--active");
  button_Portfolio.classList.add("nav--inactive");
  button_Contact.classList.add("nav--inactive");
  button_Games.classList.add("nav--inactive");
});
button_Portfolio.addEventListener("click", function () {
  container_Portfolio.style.display = "grid";
  container_AboutMe.style.display = "none";
  container_Contact.style.display = "none";
  container_Games.style.display = "none";
  button_AboutMe.classList.add("nav--inactive");
  button_Portfolio.classList.add("nav--active");
  button_Contact.classList.add("nav--inactive");
  button_Games.classList.add("nav--inactive");
});
button_Contact.addEventListener("click", function () {
  container_Portfolio.style.display = "none";
  container_AboutMe.style.display = "none";
  container_Contact.style.display = "grid";
  container_Games.style.display = "none";
  button_AboutMe.classList.add("nav--inactive");
  button_Portfolio.classList.add("nav--inactive");
  button_Contact.classList.add("nav--active");
  button_Games.classList.add("nav--inactive");
});
button_Games.addEventListener("click", function () {
  container_Portfolio.style.display = "none";
  container_AboutMe.style.display = "none";
  container_Contact.style.display = "none";
  container_Games.style.display = "grid";
  button_AboutMe.classList.add("nav--inactive");
  button_Portfolio.classList.add("nav--inactive");
  button_Contact.classList.add("nav--inactive");
  button_Games.classList.add("nav--active");
});
