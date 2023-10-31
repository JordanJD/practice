const f = require('fs');

const elfCalories = f.readFileSync('./input.txt').toString().split('\n');

const e = [];
let a = 0;
// todo: loop a single time and at empty string check if accumulated calories greater than last 
elfCalories.forEach((v) => {
    if(v === '') {
        e.push(a);
        a = 0;
    } else {
        a += Number(v);
    }
});
const largest = e.reduce((acc,v) => {
    return v > acc? v : acc;
}, 0);

console.log(largest);