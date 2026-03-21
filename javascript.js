

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
