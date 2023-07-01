const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 0; // tie
  } else if (playerSelection == rock) {
    if (computerSelection == scissors) {
      return 1; // player win
    } else {
      return 2; // computer win
    }
  } else if (playerSelection == paper) {
    if (computerSelection == rock) {
      return 1; // player win
    } else {
      return 2; // computer win
    }
  } else if (playerSelection == scissors) {
    if (computerSelection == paper) {
      return 1; // player win
    } else {
      return 2; // computer win
    }
  }
}

function getComputerChoice() {
  const choices = [rock, paper, scissors];
  const i = Math.floor(Math.random() * 3);
  return choices[i];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Choose rock, paper, or scissors", "rock");
    result = playRound(playerChoice, getComputerChoice());
    if (result == 1) {
      playerScore += 1;
      console.log("Player won");
    } else if (result == 2) {
      computerScore += 1;
      console.log("Computer won");
    } else {
      console.log("Tie.");
    }
  }
  console.log("Final score: ");
  console.log("Player " + playerScore + ", Computer " + computerScore);
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins.");
  } else {
    console.log("Tie.");
  }
}

game();
