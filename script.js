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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
