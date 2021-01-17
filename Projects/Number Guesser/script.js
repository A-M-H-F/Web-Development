let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
  
const compareGuesses = (human, computer, target) => {
    const humanG = Math.abs(target - human)
    const computerG = Math.abs(target - computer)
    // return humanG <= computerG;
    if (humanG <= computerG) {
      return true;
    } else {
      return false
    }
};
  
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
};
  
const advanceRound = () => currentRoundNumber++;
  



// console.log(compareGuesses(5, 4, 9))




