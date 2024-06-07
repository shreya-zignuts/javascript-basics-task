 //question 3
 //Write a JavaScript function to compute the factors of a positive integer.
//  (example : factor(15) → [1,3,5,15])

function factor(number){
    let factors = [];

    // Loop through numbers from 1 to the given number
    for(let i = 1; i <= number; i++){
        // If the number is divisible by the current iteration number,
        // it is a factor, so add it to the factors array
        if(number % i === 0){
            factors.push(i);
        }
    }
    return factors; // Return the array of factors
}

// Import the prompt-sync module to allow for user input
const prompt = require("prompt-sync")();

// Accept user input
let input = prompt('Enter a Number : ');

// Call the factor function with the user's input and store the factors
let factors = factor(input);

// Output the factors to the console
console.log(factors);

