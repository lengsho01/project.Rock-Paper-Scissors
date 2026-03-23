# project.Rock-Paper-Scissors
This is my odin  Project.Rock Paper Scissors basically on JavaScript
    -Create a function named getComputerChoice.
    -return one of the following string values: “Rock”, “Paper” or “Scissors”. (using  Math.random to return the values)
    -test if the function return the expected values using console.log

    -Create another function named getHumanChoice.
    - return one of the valid choices depending on what the user inputs. (string values: “rock”, “paper” or “scissors”) using prompt method
    -test if the function return the expected values using console.log

    -Create two new variables named "humanScore" and "computerScore" in the global scope.
    -Initialize those variables with the value of 0.
    
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

if (getHumanChoice() === option) {
    humanScore++

    
} else {
    computerScore++
}
console.log("ComputerScore:", + computerScore)
console.log("HuumanScore:", + humanScore);

function playRound(humanchoice, ComputerChoice) {
    if (humanchoice === ComputerChoice) {
        console.log("match!");
        humanScore++;
    } else {
        console.log("no match");
        computerScore++;
    }
    console.log('Score - You: ${humanScore}, Computer: ${computerScore}');
}

