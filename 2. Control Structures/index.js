/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) {
    console.log(`The random number ${randomNumber} is more than fifty`)
}
else {
    console.log(`The random number ${randomNumber} is less than fifty`)
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0) {
    console.log(`The random number ${randomNumber} is even`)
}
else {
    console.log(`The random number ${randomNumber} is odd`)
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log(`The random number is divisible by both 3 and 5: fizzbuzz`)
}
else if (randomNumber % 5 === 0) {
    console.log(`The random number is multiple of 5: buzz`)
}
else if (randomNumber % 3 === 0) {
    console.log(`The random number is multiple of 3: fizz`)
}
else {
    console.log(`The random number is divisble by both 3 and 5`)
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd"
console.log("toDisplay", toDisplay)

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements are used wen you want to execute different blocks of code based on the value
// of an expression. It's a more concise way to handle multiple conditions compared to using a series of
// if-else statements.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
let i = 0
for (i = 1; i <= 10; i++) {
    console.log(i)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
i = 0
while (i < list.length) {
    console.log(list[i])
    i++
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The primary difference between a while loop and a do-while loop in JavaScript is that a while
// loop checks the condition before the loop body is executed, while a do-while loop checks the condition
// after the loop body is executed.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (i = 0; i < list.length; i++) {
    console.log(list[i])
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (let value of list) {
    console.log(value)
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function(value){
    console.log(value)
})

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for...of when iterating over values in iterable objects like arrays,
// for...in for enumerating object properties, and
// forEach for concise iteration over array elements, keeping mid that
// for...in may include inherited properties and is less suitable for arrays. 

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing
// const denominator = 0 // test zero

try {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error(`Error Message: ${error.message}`)
} finally {
    console.log("Cleaning up resources...")
}