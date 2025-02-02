const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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

function playRound(computer, human){
    if (computer == human){
        return "It's a tie!";
    } else if (computer == "rock"){
        if (human == "paper"){
            humanScore++;
            return "You Win! Paper beats Rock.";
        }else {
            computerScore++;
            return "You Lose! Rock beats Scissors.";
        }
    } else if (computer == "paper"){
        if (human == "rock"){
            computerScore++;
            return "You Lose! Paper beats Rock.";
        }else {
            humanScore++;
            return "You Win! Scissors beats Paper!";
        }
    } else {
        if (human == "rock"){
            humanScore++;
            return "You Win! Rock beats Scissors.";
        }else {
            computerScore++;
            return "You Lose! Scissors beats Paper.";
        }
    }
}

function playGames(){
    let rounds = 0;
    while (rounds < 5){
        const compt = getComputerChoice();
        const human = getHumanChoice();
        console.log(playRound(compt, human));
        rounds++;
    }
    console.log(`Final Score= Computer(${computerScore}):Player(${humanScore})`);
    if (computerScore > humanScore){
        console.log("You Lose!");
    }else if (computerScore == humanScore){
        console.log("It's a tie!");
    }else {
        console.log("You Win!");
    }
}

playGames();

