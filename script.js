// question 1
//Write a JavaScript function that generates all combinations of a string.
// ( example : 'dog' → d,do,dog,o,og,g)

function generatecombinations(str){
    // Initialize an empty array to store combinations
    let combinations = [];
    // Get the length of the input string
    let length = str.length;

    // Iterate over each character in the string
    for(let i = 0; i < length; i++){
        // Iterate over subsequent characters from the current character
        for(let j = i + 1; j <= length; j++){
            // Get the substring from index i to j
            const substring = str.slice(i, j);
            // Add the substring to the combinations array
            combinations.push(substring);
        }
    }
    // Return the array of combinations
    return combinations;
}

// Import the prompt-sync module to allow for user input
let prompt = require("prompt-sync")();

// Accept user input
let input = prompt("Enter a string : ");

// Call the generatecombinations function with the user's input and store the result
let combinations = generatecombinations(input);

// Output the combinations to the console
console.log(combinations);


