const f = require('fs');
const input = f.readFileSync('./input.txt').toString().split('\n');

/**
 * Rock A
 * Paper B
 * Scissors C
 * Lose = X, Draw = Y, Win = Z
 * Win = 6, Draw = 3, Loss = 0
 * Rock = 1, Paper = 2, Scissors = 3
 */

const Decision = {
    LOSE : 'X',
    DRAW: 'Y',
    WIN: 'Z'
}

const OpponentHand = {
    ROCK: 'A',
    PAPER: 'B',
    SCISSORS: 'C'
}

const GameScore = {
    WIN: 6,
    DRAW: 3,
    LOSE: 0
}

const HandScore = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3
}

// make entire outcomeMap using variable / maps / enum
const outcomeMap = {
    A: {
        X: 0 + 3,
        Y: 3 + 1,
        Z: 6 + 2
    },
    B: {
        X: 0 + 1,
        Y: 3 + 2,
        Z: 6 + 3
    },
    C: {
        X: 0 + 2,
        Y: 3 + 3,
        Z: 6 + 1
    }
}

const totalScore = input.reduce((accumulator, game) => {
    const [opponentHand, decision] = game.split(' ');
    return accumulator += outcomeMap[opponentHand][decision];
}, 0);

console.log(totalScore);