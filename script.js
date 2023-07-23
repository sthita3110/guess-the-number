"use strict";
/*
DOCUMENT OBJECT MODEL: structured representation of HTML documents allows javascript to access HTML documents and styles to manipulate them.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when no input
  if (!guess) {
    displayMessage("💢 No Number!");
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when guess is not equal
  else if (guess != secretNumber) {
    if (score > 1) {
      const msg = guess > secretNumber ? "🔼 Too High!" : "🔽 Too Low!";
      displayMessage(msg);
      //   document.querySelector(".message").textContent = msg;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😥 Alas! You Lost the Game");
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").textContent = secretNumber;
      //   document.querySelector(".message").textContent =
      //     "😥 Alas! You Lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  //   document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
