const PLAYER_POKEMON = ["charmander", "squirtle", "bulbasaur"];
const COMPUTER_POKEMON = ["litten", "popplio", "rowlet"];
const TYPES = ["fire", "water", "grass"];
const FIRE = "Fire beats Grass.";
const WATER = "Water beats Fire.";
const GRASS = "Grass beats Water.";

let humanScore = 0;
let computerScore = 0;
let gameOn = true;

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");
const againBtn = document.createElement("button");
const scoreSection = document.querySelector(".score-sec");
const computerPokemon = document.querySelector("#opp-pokemon");
const playerPokemon = document.querySelector("#player-pokemon");
const gameMessage = document.querySelector(".msg");

function getComputerChoice() {
	return TYPES[Math.floor(Math.random() * 3)];
}

function playRound(computer, human) {
	updatePokemon(computer, human);
	if (computer == human) {
        gameMessage.textContent = "It's a tie!";
	} else if (computer == "fire") {
		if (human == "water") {
			humanScore++;
            gameMessage.textContent = `You Win! ${WATER}`;
		} else {
			computerScore++;
            gameMessage.textContent = `You Lose! ${FIRE}`;
		}
	} else if (computer == "water") {
		if (human == "fire") {
			computerScore++;
            gameMessage.textContent = `You Lose! ${WATER}`;
		} else {
			humanScore++;
            gameMessage.textContent = `You Win! ${GRASS}`;
		}
	} else {
		if (human == "fire") {
			humanScore++;
            gameMessage.textContent = `You Win! ${FIRE}`;
		} else {
			computerScore++;
            gameMessage.textContent = `You Lose! ${GRASS}`;
		}
	}
}

function resetGame() {
	gameOn = true;
	scoreSection.removeChild(againBtn);
	humanScore = 0;
	computerScore = 0;
}

function updatePokemon(computer, human) {
	computerPokemon.src = `./images/${COMPUTER_POKEMON[TYPES.indexOf(computer)]}.png`;
	computerPokemon.setAttribute("style", "height: 40%; width: auto; align-self: flex-start; transform: scaleX(-1);");

	TYPES.forEach((type) => {
		if (type == human) {
			playerPokemon.src = `./images/${
				PLAYER_POKEMON[TYPES.indexOf(type)]
			}.png`;
			playerPokemon.setAttribute("style", "height: 40%; width: auto; align-self: flex-end;");
		}
	});
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
