
let computerSelection
let playerSelection

function playRound() {

function computerPlay() {
  let choice = ["Rock", "Paper", "Scissors"]
  return choice[Math.floor(Math.random() *choice.length)]
    } 
    
  computerSelection = computerPlay();
  playerSelection = prompt ("Rock, Paper, Scissors?");

  if (computerSelection == "Rock" && playerSelection.toLowerCase() == "rock") {
    return ("Draw! Rock against Rock");
  } 
  else if (computerSelection  == "Paper" && playerSelection.toLowerCase() == "rock") {
    return ("You Lose! Paper beats Rock");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "rock") {
    return ("You Win! Rock beats Scissors");
  } 
  else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "paper") {
    return ("You Win! Paper beats Rock");
  } 
  else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "paper") {
    return ("Draw! Paper against Paper");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "paper") {
    return ("You Lose! Scissor beats Paper");
  } 
  else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "scissors") {
    return ("You Lose! Rock beats Scissors");
  } 
  else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "scissors") {
    return ("You Win! Scissors beats Paper");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "scissors") {
    return ("Draw! Scissors against Scissors");
  } 
}

console.log (playRound(playerSelection, computerSelection));
