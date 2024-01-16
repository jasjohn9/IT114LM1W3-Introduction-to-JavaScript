/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var vVariable = 1
var vVariable = 5
console.log(vVariable) 

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let lVariable = 10
lVariable = 20
console.log(lVariable) 

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const cVariable = 5
console.log(cVariable)

/*cVariable = 10
console.log(cVariable)
If you try reassigning the value of the variable, it will result in a TypeError: Assignment to constant variable.
Therefore the values in the keyword const can't reassigned.
*/

// Checkpoint 1.1 What is the difference between var, let, and const?
/* Answer: 
    var: Represents the traditional approach to variable declaration. Variables declared with var are function-scoped,
    meaning their accessibility is confined to the function in which they are defined.

    let: Introduces block-level scope to variables. Variables declared with let are limited to the block they are defined in, 
    whether it's a function, an if statement, or a loop.

    const: Implies immutability. Once assigned a value, constants cannot be reassigned or modified.
    They provide a way to declare variables that remain constant throughout their lifecycle.
*/


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const ao1 = 99 + 8
const ao2 = 110 - 22
const ao3 = 10 * 9
const ao4 = 99 / 8
let a = 10
let b = 5
let remainder = a % b
let incrementA = ++a 
let decrementB = --b 

// Checkpoint 1.2 What operators did you use?
// Answer: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%), Increment (++), Decrement (--)
// Your code here
console.log(ao1)
console.log(ao2)
console.log(ao3)
console.log(ao4)
console.log(remainder)
console.log(incrementA)
console.log(decrementB)
// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.

let sLength = mystring.length

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation operator (+), String Length
// Your code here
console.log(mystring)
console.log(sLength)

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
let num1 = 10;
let num2 = 5;

// Equality
console.log(`${num1} is equal to ${num2}: ${num1 == num2}`); // false

// Inequality
console.log(`${num1} is not equal to ${num2}: ${num1 != num2}`); // true

// Strict Equality (both value and type)
console.log(`${num1} is strictly equal to ${num2}: ${num1 === num2}`); // false

// Strict Inequality (either value or type is different)
console.log(`${num1} is not strictly equal to ${num2}: ${num1 !== num2}`); // true

// Greater than
console.log(`${num1} is greater than ${num2}: ${num1 > num2}`); // true

// Less than
console.log(`${num1} is less than ${num2}: ${num1 < num2}`); // false

// Greater than or equal to
console.log(`${num1} is greater than or equal to ${num2}: ${num1 >= num2}`); // true

// Less than or equal to
console.log(`${num1} is less than or equal to ${num2}: ${num1 <= num2}/n`); // false



// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: In JavaScript, the loose equality operator (`==`) attempts type coercion, leading the array `[]` to be coerced into a primitive value,
// which is an empty string `""`. Since an empty string is considered falsy, the comparison `[] == false` results in `true`.
// The strict equality operator (`===`) doesn't perform type coercion, so `[] === false` evaluates to `false`.
// Your code here
let emptyArray = []
let booleanValue = false

// Using loose equality (==)
let looseEqualityResult1 = emptyArray == booleanValue
// Using strict equality (===)
let strictEqualityResult1 = emptyArray === booleanValue