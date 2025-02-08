const PLAYER_POKEMON = ["charmander", "squirtle", "bulbasaur"];
const COMPUTER_POKEMON = ["litten", "popplio", "rowlet"];
const TYPES = ["fire", "water", "grass"];
const FIRE = "Fire beats Grass.";
const WATER = "Water beats Fire.";
const GRASS = "Grass beats Water.";

let playerScore = 0;
let computerScore = 0;
let gameOn = true;

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");
const againBtn = document.createElement("button");
const scoreSection = document.querySelector(".score-sec");
const computerPokemon = document.querySelector("#opp-pokemon");
const playerPokemon = document.querySelector("#player-pokemon");
const messageUpdate = document.querySelector(".msg")
const gameMessage = document.createElement("p");
const computerLife = document.querySelectorAll(".computer-life ul li");
const playerLife = document.querySelectorAll(".player-life ul li");

messageUpdate.appendChild(gameMessage);

console.log(playerLife[playerScore]);
function getComputerChoice() {
	return TYPES[Math.floor(Math.random() * 3)];
}

function playRound(computer, player) {
	updatePokemon(computer, player);
	if (computer == player) {
        gameMessage.textContent = "It's a tie!";
	} else if (computer == "fire") {
		if (player == "water") {
			computerLife[playerScore].setAttribute("style", "color: black;");
			playerScore++;
            gameMessage.textContent = `You Win! ${WATER}`;
		} else {
			playerLife[computerScore].setAttribute("style", "color: black;");
			computerScore++;
            gameMessage.textContent = `You Lose! ${FIRE}`;
		}
	} else if (computer == "water") {
		if (player == "fire") {
			playerLife[computerScore].setAttribute("style", "color: black;");
			computerScore++;
            gameMessage.textContent = `You Lose! ${WATER}`;
		} else {
			computerLife[playerScore].setAttribute("style", "color: black;");
			playerScore++;
            gameMessage.textContent = `You Win! ${GRASS}`;
		}
	} else {
		if (player == "fire") {
			computerLife[playerScore].setAttribute("style", "color: black;");
			playerScore++;
            gameMessage.textContent = `You Win! ${FIRE}`;
		} else {
			playerLife[computerScore].setAttribute("style", "color: black;");
			computerScore++;
            gameMessage.textContent = `You Lose! ${GRASS}`;
		}
	}
	if(playerScore == 5 || computerScore == 5){
		finalizeScore();
	}
}

function finalizeScore(){
	gameOn = false;
	againBtn.textContent = "Again?";
	againBtn.setAttribute("style", "width: fit-content; height: fit-content; padding: 10px 15px;")
	messageUpdate.appendChild(againBtn);
	if(playerScore == 5){
		gameMessage.textContent = "You Win!";
	}else {
		gameMessage.textContent = "You Lose!";
	}
}

function resetGame() {
	gameOn = true;
	messageUpdate.removeChild(againBtn);
	playerScore = 0;
	computerScore = 0;
	playerLife.forEach((life) => {
		life.setAttribute("style", "color: red;");
	})
	computerLife.forEach((life) => {
		life.setAttribute("style", "color: red;");
	})
	playerPokemon.src = "";
	computerPokemon.src = "";
	gameMessage.textContent = "";
}

function updatePokemon(computer, player) {
	computerPokemon.src = `./images/${COMPUTER_POKEMON[TYPES.indexOf(computer)]}.png`;
	computerPokemon.setAttribute("style", "height: 40%; width: auto; align-self: flex-start; transform: scaleX(-1);");

	TYPES.forEach((type) => {
		if (type == player) {
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
			const playerChoice = button.id;
			const computerChoice = getComputerChoice();
			playRound(computerChoice, playerChoice);
		}
	});
});

againBtn.addEventListener("click", () => {
	console.log("again button clicked");
	resetGame();
});
