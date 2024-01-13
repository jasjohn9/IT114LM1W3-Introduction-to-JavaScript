/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var v1 = 1
console.log(v1)
var v1 = 5

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let x1 = 0
if (x1 === 0){
    let x1 = 55
    console.log(x1)
}

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const c1 = 5
console.log(c1)
/*c1 = 5
console.log(c1)
If you try reassigning the value of the variable, it will result in a TypeError: Assignment to constant variable.
*/



// Checkpoint 1.1 What is the difference between var, let, and const?
/* Answer: 
    -var declarations are globally scoped or function scoped while let
    and const are block scoped.
    - var variables can be updated and re-declared within its scope; 
    let variables can be updated but not re-declared; 
    const variables can neither be updated nor re-declared.
*/


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const ao1 = 99 + 8
const ao2 = 110 - 22
const ao3 = 10 * 9
const ao4 = 99 / 8

// Checkpoint 1.2 What operators did you use?
// Answer: Addition (+), Subtraction (-), Multiplication (*), Division (/)
// Your code here
console.log(ao1)
console.log(ao2)
console.log(ao3)
console.log(ao4)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
console.log(mystring)
// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation operator (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a1 = true && true; // t && t returns true
const o1 = true || true; // t || t returns true
const n1 = !true; // !t returns false

console.log(a1)
console.log(o1)
console.log(n1)

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND (&&), Logical OR (||), Logical NOT (!)

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
// in
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

//instanceof
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer:  
// Your code here