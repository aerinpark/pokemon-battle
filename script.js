const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let gameOn = true;

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#score");

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let humanChoice = (prompt("Rock, Paper or Scissors?")).toLowerCase();
    while(true){
        if (CHOICES.includes(humanChoice)){
            return humanChoice;
        }
        humanChoice = prompt("Invalid input. Rock, Paper or Scissors?");
    }
}

function updateScore(){
    score.textContent = `${computerScore} : ${humanScore}`;
}

function playRound(computer, human){
    if (computer == human){
        console.log("It's a tie!");
    } else if (computer == "rock"){
        if (human == "paper"){
            humanScore++;
            console.log("You Win! Paper beats Rock.");
        }else {
            computerScore++;
            console.log("You Lose! Rock beats Scissors.");
        }
    } else if (computer == "paper"){
        if (human == "rock"){
            computerScore++;
            console.log("You Lose! Paper beats Rock.");
        }else {
            humanScore++;
            console.log("You Win! Scissors beats Paper.");
        }
    } else {
        if (human == "rock"){
            humanScore++;
            console.log("You Win! Rock beats Scissors.");
        }else {
            computerScore++;
            console.log("You Lose! Scissors beats Paper.");
        }
    }
    updateScore();
    if(humanScore >= 5 || computerScore >= 5){
        gameOn = false;
        if(computerScore >= 5){
            score.textContent = "You Lose!";
        }else {
            score.textContent = "You Win!";
        }
    }
}

// The game is initiated when any of the buttons is clicked.
// Once either human or computer score reaches 5 the game ends. 
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(gameOn){
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(computerChoice, humanChoice);
        }
    });
});
