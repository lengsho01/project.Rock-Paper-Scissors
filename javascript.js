
// let humanScore = 0;
// let computerScore = 0;

// function getHumanChoice() {
//   return prompt("Enter your choice (Rock, Paper, Scissors):").toLowerCase();
// }

// function getComputerChoice() {
//   let options = ["rock", "paper", "scissors"];
//   return options[Math.floor(Math.random() * options.length)];
// }
// console.log(`computer choice:  ${getComputerChoice()} My choice: ${getHumanChoice()}`);
// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log("Match!");
//     humanScore++;
//   } else {
//     console.log("No match");
//     computerScore++;
//   }
//   console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
// }

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  return prompt("Enter your choice (Rock, Paper, Scissors):").toLowerCase();
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(`Computer choice: ${computerChoice}, Your choice: ${humanChoice}`);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Match!");
    humanScore++;
  } else {
    console.log("No match");
    computerScore++;
  }
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
