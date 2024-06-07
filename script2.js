
//question 2
//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// (example: 'Web Development Tutorial' → 'Development')

function findlongestword(str){
    let words = str.split(' ');
    let longestword = '';

    for(let i=0; i<words.length; i++){
        if(words[i].length>longestword.length){
            longestword=words[i];
        }
    }
    return longestword;
}
const prompt = require("prompt-sync")();
 let input1 = prompt('Enter a string : ');
 let longestword = findlongestword(input1);
 console.log(longestword);


