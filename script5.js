//question 5 
//Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// (example: [1, 2, 3] and subset length is 2 →  [[2, 1], [3, 1], [3, 2], [3, 2, 1]])

function getSubsetsWithFixedLength(arr, subsetLength) {
    const result = [];

    function helper(start, subset) {
        if (subset.length >= subsetLength) {
            result.push([...subset]);
        }

        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);
            helper(i + 1, subset);
            subset.pop();
        }
    }

    helper(0, []);

    // Separate subsets by length and reverse them in-place
    const sameLengthSubsets = [];
    const greaterLengthSubsets = [];

    for (let i = 0; i < result.length; i++) {
        const subset = result[i];
        if (subset.length === subsetLength) {
            subset.reverse();
            sameLengthSubsets.push(subset);
        } else if (subset.length > subsetLength) {
            subset.reverse();
            greaterLengthSubsets.push(subset);
        }
    }

    // Combine results
    return sameLengthSubsets.concat(greaterLengthSubsets);
}

// Accept user input
const prompt = require("prompt-sync")();

const userInputArray = prompt("Enter the array elements separated by commas (e.g., 1,2,3):");
const userInputSubsetLength = prompt("Enter the subset length:");

// Convert user input to array and number
const array = [];
const inputArray = userInputArray.split(',');
for (let i = 0; i < inputArray.length; i++) {
    array.push(parseInt(inputArray[i], 10));
}
const subsetLength = parseInt(userInputSubsetLength, 10);

// Get the subsets
const subsets = getSubsetsWithFixedLength(array, subsetLength);

// Print the result
console.log(subsets);

