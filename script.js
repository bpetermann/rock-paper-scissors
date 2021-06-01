
let computerSelection;
let playerSelection;
let yourCount = 0;
let cpuCount = 0;

function game(){


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
    cpuCount++;
    return ("You Lose! Paper beats Rock");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "rock") {
    yourCount++;
    return ("You Win! Rock beats Scissors");
  } 
  else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "paper") {
    yourCount++;
    return ("You Win! Paper beats Rock");
  } 
  else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "paper") {
    return ("Draw! Paper against Paper");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "paper") {
    cpuCount++;
    return ("You Lose! Scissor beats Paper");
  } 
  else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "scissors") {
    cpuCount++;
    return ("You Lose! Rock beats Scissors");
  } 
  else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "scissors") {
    yourCount++;
    return ("You Win! Scissors beats Paper");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "scissors") {
    return ("Draw! Scissors against Scissors");
  } 
}

console.log (playRound(playerSelection, computerSelection));
console.log (playRound(playerSelection, computerSelection));
console.log (playRound(playerSelection, computerSelection));
console.log (playRound(playerSelection, computerSelection));
console.log (playRound(playerSelection, computerSelection));


if (yourCount >= 3){
  console.log ("You Win!")
  alert ("You Win!")
}
else if(cpuCount >= 3)
{
  console.log ("You Lose!")
  alert ("You Lose!")
}
else {
  console.log ("Draw! Nobody Wins")
  alert ("Draw! Nobody Wins")
}

}

console.log (game())