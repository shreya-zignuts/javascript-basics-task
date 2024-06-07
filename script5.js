//question 5 
//Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// (example: [1, 2, 3] and subset length is 2 →  [[2, 1], [3, 1], [3, 2], [3, 2, 1]])

function getSubsetsWithFixedLength(arr, subsetLength) {
    const result = [];

    // Helper function to generate subsets
    function helper(start, subset) {
        // If the subset length is greater than or equal to the desired length, add it to the result
        if (subset.length >= subsetLength) {
            result.push([...subset]);
        }

        // Recursively build subsets
        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]); // Add the current element to the subset
            helper(i + 1, subset); // Recurse with the next element
            subset.pop(); // Remove the last element to backtrack
        }
    }

    helper(0, []); // Initialize the helper function with the starting index and an empty subset

    // Separate subsets by length and reverse them in-place
    const sameLengthSubsets = [];
    const greaterLengthSubsets = [];

    // Iterate over the generated subsets
    for (let i = 0; i < result.length; i++) {
        const subset = result[i];
        if (subset.length === subsetLength) {
            subset.reverse(); // Reverse the subset
            sameLengthSubsets.push(subset); // Add to same length subsets
        } else if (subset.length > subsetLength) {
            subset.reverse(); // Reverse the subset
            greaterLengthSubsets.push(subset); // Add to greater length subsets
        }
    }

    // Combine results and return
    return sameLengthSubsets.concat(greaterLengthSubsets);
}

// Import the prompt-sync module to allow for user input
const prompt = require("prompt-sync")();

// Accept user input
const userInputArray = prompt("Enter the array elements separated by commas (e.g., 1,2,3): ");
const userInputSubsetLength = prompt("Enter the subset length: ");

// Convert user input to array and number
const array = userInputArray.split(',').map(element => parseInt(element.trim(), 10));
const subsetLength = parseInt(userInputSubsetLength.trim(), 10);

// Get the subsets
const subsets = getSubsetsWithFixedLength(array, subsetLength);

// Print the result
console.log(subsets);

