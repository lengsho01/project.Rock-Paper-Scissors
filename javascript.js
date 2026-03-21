
function getHumanChoice() {

    let getHumanChoice = prompt("Enter your choice please(Rock, Paper, Scissors):");
    return getHumanChoice;
    
}


function getComputerChoice() {

    let option = ["Rock", "Paper", "Scissors"];
    return option[Math.floor(Math.random()*option.length)];
    
}
console.log(getHumanChoice());
console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

if (/etHumanChoice() === getComputerChoice()) {
    humanScore++

    
} else {
    computerScore++
}
console.log("ComputerScore:", + computerScore)
console.log("HuumanScore:", + humanScore);