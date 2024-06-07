//question 6
//Write a JavaScript function that reverses a number.
//  (example: 32243 → 34223)

function reversenumber(number){
    return parseInt(number.toString().split('').reverse().join('')); // first split the string, then reverses and then join again for reverse order string 
}
const prompt = require("prompt-sync")();
let input6 = prompt('Enter a Number : ');
let result6 = reversenumber(input6);
console.log(result6);