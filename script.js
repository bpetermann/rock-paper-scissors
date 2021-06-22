
let computerSelection;
let playerSelection;
let yourCount = 0;
let cpuCount = 0;
let result = ""

const playerScore = document.getElementById("playerScore")
playerScore.innerHTML = "Player Score: " + yourCount
const cpuScore = document.getElementById("cpuScore")
cpuScore.innerHTML = "Computer Score: " + cpuCount
const final = document.getElementById("result")


const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
playRound( "rock", computerSelection);
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
playRound( "paper", computerSelection);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
playRound( "scissors", computerSelection);
});


function playRound(playerSelection,computerSelection){

function computerPlay() {
  let choice = ["Rock", "Paper", "Scissors"]
  return choice[Math.floor(Math.random() *choice.length)]
    } 

  computerSelection = computerPlay();


  if (computerSelection == "Rock" && playerSelection.toLowerCase() == "rock") {
    result = ("Draw! Rock against Rock");
  } 
  else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "paper") {
    result =  ("Draw! Paper against Paper");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "scissors") {
    result =  ("Draw! Scissors against Scissors");
  } 
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "rock") {
    yourCount++;
    result =  ("You Win! Rock beats Scissors");
  } 
  else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "paper") {
    yourCount++;
    result =  ("You Win! Paper beats Rock");
  } 
  else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "scissors") {
    yourCount++;
    result =  ("You Win! Scissors beats Paper");
  }  
  else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "paper") {
    cpuCount++;
    result =  ("You Lose! Scissor beats Paper");
  } 
  else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "scissors") {
    cpuCount++;
    result =  ("You Lose! Rock beats Scissors");
  } 
  else if (computerSelection  == "Paper" && playerSelection.toLowerCase() == "rock") {
    cpuCount++;
    result = ("You Lose! Paper beats Rock");
  } 
  
  document.getElementById('result').innerHTML = result
  playerScore.innerHTML = "Player Score: " + yourCount
  cpuScore.innerHTML = "Computer Score: " + cpuCount
  scoreCheck()
  return
}

function scoreCheck(){
  if (yourCount >= 5){
  final.innerHTML = "You Win! Refresh page to play again."
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
else if(cpuCount >= 5)
{
  final.innerHTML = "You Lose! Refresh page to play again"
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
}