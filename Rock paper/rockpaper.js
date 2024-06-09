const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ["rock", "paper", "scissors", "snake", "water"];
const computerChoiceProbabilities = {
  rock: 0.4,
  paper: 0.1,
  scissors: 0.2,
  snake: 0.2,
  water: 0.1
};

function getComputerChoice() {
  const rand = Math.random();
  let cumulativeProbability = 0;
  for (const choice in computerChoiceProbabilities) {
    cumulativeProbability += computerChoiceProbabilities[choice];
    if (rand < cumulativeProbability) {
      return choice;
    }
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "snake")) ||
    (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "snake" || computerChoice === "water")) ||
    (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "snake")) ||
    (userChoice === "snake" && (computerChoice === "water" || computerChoice === "paper")) ||
    (userChoice === "water" && (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

rl.question("Enter your choice (rock, paper, scissors, snake, water): ", (userChoice) => {
  if (!choices.includes(userChoice)) {
    console.log("Invalid choice. Please choose from rock, paper, scissors, snake, or water.");
    rl.close();
    return;
  }

  const computerChoice = getComputerChoice();
  console.log(`Computer chooses: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));

  rl.close();
});
