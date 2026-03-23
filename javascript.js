
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
    console.log("Replay!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("Computer wins!");
    computerScore++;
  }
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playRound(humanChoice, computerChoice);
