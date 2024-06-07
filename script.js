// question 1
//Write a JavaScript function that generates all combinations of a string.
// ( example : 'dog' → d,do,dog,o,og,g)

function generatecombinations(str){
    let combinations = [];
    let length = str.length;

    for(let i=0; i<length;i++){
        for(let j=i+1; j<=length; j++){
            const substring = str.slice(i, j);
            combinations.push(substring);
        }
    }
    return combinations;
}

let prompt = require("prompt-sync")();
let input = prompt("Enter a string : ");
let combinations = generatecombinations(input);
console.log(combinations);

