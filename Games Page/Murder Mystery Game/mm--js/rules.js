"use strict";

// Rules and Modal Definitions

const btnRulesModal = document.querySelector(".btn--rules");
const rulesModal = document.querySelector(".rules--modal");
const btnCloseRulesModal = document.querySelector(".close--rules--modal");

function modal() {
  rulesModal.classList.toggle("hidden");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !rulesModal.classList.contains("hidden")) {
    modal();
  }
});

btnCloseRulesModal.addEventListener("click", modal);
btnRulesModal.addEventListener("click", modal);
