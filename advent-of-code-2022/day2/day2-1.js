const f = require('fs');
const input = f.readFileSync('./input.txt').toString().split('\n');
const rpsMap = {
    'A': 'rock',
    'X': 'rock',
    'B': 'paper',
    'Y': 'paper',
    'C': 'scissors',
    'Z': 'scissors'
}
/**
 * Rock A, Y
 * Paper B, X
 * Scissors C, Z
 * Win = 6, Draw = 3, Loss = 0
 */

const score = input.reduce((totalScore, game) => {
    const [opponentHand, myHand] = [rpsMap[game.split(' ')[0]], rpsMap[game.split(' ')[1]]];
    if(myHand === 'rock') {
        totalScore+=1;
    }
    if(myHand === 'paper') {
        totalScore+=2;
    }
    if(myHand === 'scissors') {
        totalScore+=3;
    }

    if(myHand === opponentHand) {
        return totalScore += 3; // all draws
    }
    if(myHand === 'rock' && opponentHand === 'scissors' || myHand === 'scissors' && opponentHand === 'paper' || myHand === 'paper' && opponentHand === 'rock') {
        return totalScore += 6
    }

    return totalScore;
}, 0);

console.log(score);