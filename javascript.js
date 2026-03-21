let humanScore = 0
let computerScore = 0

function getHumanChoice() {

    let getHumanChoice = prompt("Enter your choice please(Rock, Paper, Scissors):");
    return getHumanChoice;
    
}
console.log(getHumanChoice());

function getComputerChoice() {
    let option = ["Rock", "Paper", "Scissors"];
    return option[Math.floor(Math.random()*option.length)];
}
console.log(getComputerChoice());

let result1 = getHumanChoice();
let result2 = getComputerChoice();

if ( result1 === result2) {
    console.log("y")
} else {
    console.log("n")
}