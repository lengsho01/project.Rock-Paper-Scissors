




let humanScore = 0;
let computerScore = 0;
// get input from user using prompt
function getHumanChoice() {
  return prompt("Enter your choice (Rock, Paper, Scissors):");
}
// using math.random the get computer choice
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
// the logic of the game 
//  if there is a tie the loop repeat that round 
// here the real logic take place ...
function playRound(humanChoice, computerChoice) {
   if (humanChoice === computerChoice) {
    console.log("Replay!");
    playRound(getHumanChoice(), getComputerChoice());
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
// the loop section
for (let i = 0; i < 5; i++) {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log(`Round ${i+1}: Computer choice: ${computerChoice}, Your choice: ${humanChoice}`);
  playRound(humanChoice, computerChoice);
}
// outputs
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
  console.log("You win the game! 🎉");
} else if (computerScore > humanScore) {
  console.log("Computer wins the game!");
} else {
  console.log("It's a tie!");
}