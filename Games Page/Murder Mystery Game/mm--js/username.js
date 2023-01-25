"use strict";

const usrName = document.querySelector(".user--input");
const btnUsrName = document.querySelector(".button--user");
const usrBox = document.querySelector(".user--box");
const usrData = document.querySelector(".user--data");
// const playerName = document.querySelector(".player--name");

function playerEntry() {
  // let userNameStored = usrName.value;
  if (!usrName.value) {
    usrName.required = true;
  } else {
    scoreBoard.player = usrName.value;
    usrName.value = "";

    let playerName = document.querySelector(".player--name");
    let playerBox = document.querySelector(".player--box");
    let p = document.createElement("p");
    p.innerHTML += "Player:  " + scoreBoard.player;
    // playerName.innerHTML += "<p>Player:  " + userNameStored + "</p>";

    p.classList.add("player--style");
    playerName.appendChild(p);
    // playerName.classList.add(".player--style");
    usrBox.classList.add("hidden");
    playerBox.classList.remove("hidden");
  }
}

function enterKey(e) {
  if (e.key === "Enter" && !usrBox.classList.contains("hidden")) {
    playerEntry();
    // usrBox.classList.toggle("hidden");
  }
}
btnUsrName.addEventListener("click", playerEntry);
usrName.addEventListener("keydown", enterKey);
