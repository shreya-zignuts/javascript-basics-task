//question 6
//Write a JavaScript function that reverses a number.
//  (example: 32243 → 34223)

function reversenumber(number){
    // Convert the number to a string, split the string into an array of characters,
    // reverse the array, join the array back into a string, and convert it back to an integer
    return parseInt(number.toString().split('').reverse().join('')); 
}

// Import the prompt-sync module to allow for user input
const prompt = require("prompt-sync")();

// Accept user input
let input = prompt('Enter a Number : ');

// Call the reversenumber function with the user's input and store the result
let result = reversenumber(input);

// Output the result to the console
console.log(result);
