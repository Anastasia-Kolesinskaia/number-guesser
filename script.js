let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
   return Math.floor(Math.random()*10) 
}

function compareGuesses(humanGuess, computerGuess, target) {
    let humanResult = Math.abs(target-humanGuess)
    let computerResult = Math.abs(target-computerGuess)
    return humanResult<=computerResult;
}

function updateScore(winner) {
    if (winner === 'computer') {
        computerScore ++
    }
    if (winner === 'human') {
        humanScore ++
    }
}

function advanceRound() {
    currentRoundNumber ++
}

