CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());