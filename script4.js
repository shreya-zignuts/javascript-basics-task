//question 4
//Write a JavaScript function to find the first not repeated character.
// (example: 'abacddbec' → ‘e’)

function findFirstNotRepeated(str){
        for(let i =0;i<str.length;i++){
            let char=str[i];
            if(str.indexOf(char)===str.lastIndexOf(char)){
                return char
            }
        }
        return null;
    }
    const prompt = require("prompt-sync")();
    let input4 = prompt('Enter a String : ');
    let result4 = findFirstNotRepeated(input4);
    console.log(result4);
    