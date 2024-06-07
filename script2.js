
//question 2
//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// (example: 'Web Development Tutorial' → 'Development')

function findlongestword(str){
    // Split the input string into an array of words
    let words = str.split(' ');

    // Initialize a variable to store the longest word found so far
    let longestword = '';

    // Iterate through each word in the array
    for(let i = 0; i < words.length; i++){
        // Check if the current word is longer than the current longest word
        if(words[i].length > longestword.length){
            // If so, update the longest word
            longestword = words[i];
        }
    }
    
    // Return the longest word found
    return longestword;
}

// Import the prompt-sync module to allow for user input
const prompt = require("prompt-sync")();

// Accept user input
let input = prompt('Enter a string : ');

// Call the findlongestword function with the user's input and store the result
let longestword = findlongestword(input);

// Output the longest word to the console
console.log(longestword);



