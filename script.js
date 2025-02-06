const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 5;
let gameOn = true;

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");
const againBtn = document.createElement("button");
const scoreSection = document.querySelector(".score-sec");

function getComputerChoice() {
	return CHOICES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
	let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
	while (true) {
		if (CHOICES.includes(humanChoice)) {
			return humanChoice;
		}
		humanChoice = prompt("Invalid input. Rock, Paper or Scissors?");
	}
}

function updateScore() {
	score.textContent = `${computerScore} : ${humanScore}`;
}

function playRound(computer, human) {
	if (computer == human) {
		console.log("It's a tie!");
	} else if (computer == "rock") {
		if (human == "paper") {
			humanScore++;
			console.log("You Win! Paper beats Rock.");
		} else {
			computerScore++;
			console.log("You Lose! Rock beats Scissors.");
		}
	} else if (computer == "paper") {
		if (human == "rock") {
			computerScore++;
			console.log("You Lose! Paper beats Rock.");
		} else {
			humanScore++;
			console.log("You Win! Scissors beats Paper.");
		}
	} else {
		if (human == "rock") {
			humanScore++;
			console.log("You Win! Rock beats Scissors.");
		} else {
			computerScore++;
			console.log("You Lose! Scissors beats Paper.");
		}
	}
	updateScore();
	if (humanScore >= 5 || computerScore >= 5) {
		gameOn = false;
		if (computerScore >= 5) {
			score.textContent = "You Lose!";
		} else {
			score.textContent = "You Win!";
		}
		againBtn.textContent = "Again?";
		scoreSection.setAttribute(
			"style",
			"display: flex; gap: 20px; align-items: center;"
		);
		scoreSection.style.display = "flex";
		scoreSection.appendChild(againBtn);
	}
}

function resetGame() {
	gameOn = true;
	scoreSection.removeChild(againBtn);
	humanScore = 0;
	computerScore = 0;
	score.textContent = "0 : 0";
}

// The game is initiated when any of the buttons is clicked.
// Once either human or computer score reaches 5 the game ends.
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (gameOn) {
			const humanChoice = button.id;
			const computerChoice = getComputerChoice();
			playRound(computerChoice, humanChoice);
		}
	});
});

againBtn.addEventListener("click", () => {
	console.log("again button clicked");
	resetGame();
});
