//question 4
//Write a JavaScript function to find the first not repeated character.
// (example: 'abacddbec' → ‘e’)

function findFirstNotRepeated(str){
    // Iterate through each character in the string
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        // Check if the character is unique by comparing its first and last index in the string
        if(str.indexOf(char) === str.lastIndexOf(char)){
            return char;  // Return the first non-repeated character
        }
    }
    return null;  // Return null if no unique character is found
}

// Accept user input
const prompt = require("prompt-sync")();
let input = prompt('Enter a String : ');
let result = findFirstNotRepeated(input);
console.log(result);  // Output the result
    