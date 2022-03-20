let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// console.log(generateTarget());

function getAbsoluteDistance(guessNum, targetNum) {
    return Math.abs(targetNum - guessNum);
}

// console.log(getAbsoluteDistance(1, 2));

function compareGuesses(userGuess, computerGuess, targetGuess) {
    if (userGuess < 0 || userGuess > 9) {
        alert("Please enter a number between 0 and 9");
    }

    const userDiff = getAbsoluteDistance(userGuess, targetGuess);
    const computerDiff = getAbsoluteDistance(computerGuess, targetGuess);

    return userDiff <= computerDiff;
}

// console.log(compareGuesses(1, 5, 4));
// console.log(compareGuesses(1, 5, 2));
// console.log(compareGuesses(1, 5, 3));

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

// updateScore('computer');
// updateScore('human');
// updateScore('human');
// console.log(humanScore);
// console.log(computerScore);

function advanceRound() {
    currentRoundNumber++;
}

// advanceRound();
// console.log(currentRoundNumber);