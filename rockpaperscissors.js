// using arrow function
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput==='paper' || userInput === 'scissors' || userInput === 'bomb')
    return userInput
    else
    console.log('Error')
  }
  //console.log(getUserChoice('paper'))
  //console.log(getUserChoice('hello'))
  
  // using function keyword
  function getComputerChoice() {
   randomNumber = Math.floor(Math.random() * 3)
   console.log(randomNumber)
   switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
    default:
      return "Invalid"
      }
  }
  //console.log(getComputerChoice());
  // using function expression
  const determineWinner = function(userChoice, computerChoice) {
  if(userChoice === 'bomb')
  return 'user Won!'
  if(userChoice === computerChoice) {
    return 'The game was a Tie';
  }
  if(userChoice === 'rock') {
     if(computerChoice === 'paper')
         return 'The compter won!';
    else {
      return 'you won!';
    }
   }
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  }
  // console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  // console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
  // console.log(determineWinner('paper', 'rock')); 
  
  function playGame() {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log("you threw :" + userChoice);
  console.log("the compter threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice ))
  }
  playGame();