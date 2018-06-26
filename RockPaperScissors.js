var playerChoice = "";
var choices = ["rock", "paper", "scissors"];
var computerChoice = "";

var rockButton = document.querySelector(".rockButton");
rockButton.addEventListener("click", function () {
    playerChoice="rock";
    computerPlay();
});

var paperButton = document.querySelector(".paperButton");
paperButton.addEventListener("click", function () {
    playerChoice="paper";
    computerPlay();
});

var scissorsButton = document.querySelector(".scissorsButton");
scissorsButton.addEventListener("click", function () {
    playerChoice="scissors";
    computerPlay();
});

function computerPlay(arr) {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    gameRound();
};

function gameRound () {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
        console.log("tie");
        } else if (computerChoice === "scissors") {
        console.log("win");
        } else if (computerChoice === "paper") {
        console.log("lose");
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
        console.log("lose");
        } else if (computerChoice === "scissors") {
        console.log("tie");
        } else if (computerChoice === "paper") {
        console.log("win");
        }
    } if (playerChoice === "paper") {
        if (computerChoice === "rock") {
        console.log("win");
        } else if (computerChoice === "scissors") {
        console.log("lose");
        } else if (computerChoice === "paper") {
        console.log("tie");
        };
    }
}
