const CHOICES = ["rock", "paper", "scissors"];

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
