/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
console.log("Given Numbers:", numbers);
const squares = numbers.map(number => number ** 2);
console.log("Squares:", squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log("Sum:", sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
console.log("\nGiven Words:", words);
// Your code here
const upperCased = words.map(word => word.toUpperCase());
console.log("Uppercased Words:", upperCased);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const wordsArray = words.filter(word => word.length > 4);
console.log("Words with more than four letters:", wordsArray);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const cString = words.reduce((accumulator, currentWord) => accumulator + currentWord, "");
console.log("Concatenated Words:", cString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// - map: Generates a new array by applying a specified function to each element in the existing array.
// - filter: Produces a new array containing elements that meet specific criteria based on a provided function.
// - reduce: Utilizes a function to systematically process each element in the array, progressively reducing them to a single value from left to right.