const f = require('fs');

const allElfCalories = f.readFileSync('./input.txt').toString().split('\n');

const elfCombinedCalories = [];
let accumulatedCalories = 0;
allElfCalories.forEach((calorie) => {
    if(calorie === '') {
        elfCombinedCalories.push(accumulatedCalories);
        accumulatedCalories = 0;
    } else {
        accumulatedCalories += Number(calorie);
    }
});

elfCombinedCalories.sort((a,b)=> b-a);


console.log(elfCombinedCalories[0] + elfCombinedCalories[1] + elfCombinedCalories[2]);