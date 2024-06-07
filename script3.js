 //question 3
 //Write a JavaScript function to compute the factors of a positive integer.
//  (example : factor(15) → [1,3,5,15])

function factor(number){
    let factors = [];

    for(let i =1 ; i<=number; i++){
        if(number % i === 0){
            factors.push(i);
        }
    }
    return factors;
}
const prompt = require("prompt-sync")();
let input2 = prompt('Enter a Number : ');
let factors = factor(input2);
console.log(factors);
