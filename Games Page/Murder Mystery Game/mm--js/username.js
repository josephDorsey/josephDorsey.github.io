"use strict";

const usrName = document.querySelector(".user--input");
const btnUsrName = document.querySelector(".button--user");
const usrBox = document.querySelector(".user--box");
// const playerName = document.querySelector(".player--name");

function playerEntry() {
  let userNameStored = usrName.value;
  usrName.value = "";
  let playerName = document.querySelector(".player--name");
  let playerBox = document.querySelector(".player--box");
  let p = document.createElement("p");
  p.innerHTML += "Player:  " + userNameStored;
  // playerName.innerHTML += "<p>Player:  " + userNameStored + "</p>";

  p.classList.add("player--style");
  playerName.appendChild(p);
  // playerName.classList.add(".player--style");
  usrBox.classList.toggle("hidden");
  playerBox.classList.toggle("hidden");
}

const enterKey = function (e) {
  if (e.key === "Enter" && !usrBox.classList.contains("hidden")) {
    playerEntry();
    // usrBox.classList.toggle("hidden");
  }
};
btnUsrName.addEventListener("click", playerEntry);
document.addEventListener("keydown", enterKey);
