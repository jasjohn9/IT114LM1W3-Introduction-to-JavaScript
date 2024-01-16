/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(`1st Item: ${numbers[0]}`)
console.log(`5th Item: ${numbers[4]}`)
console.log(`Last Item: ${numbers[numbers.length - 1]}`)

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let minResult = Math.min(...numbers)
let maxResult = Math.max(...numbers)

let sum = 0
for (let i = 0; i<= (numbers.length - 1); i++){
    sum += numbers[i]
}
let aveNum = sum / numbers.length

console.log(`Lowest Number: ${minResult}`)
console.log(`Highest Number: ${maxResult}`)
console.log(`Average Result: ${aveNum}`)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L = {
    courseCode : "IT114L",
    name : "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units : 1,
    numberOfStudents : 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = "Job Lipat"
console.log(`\nIT114L Professor name: ${IT114L.professorName}`)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const courses = [
    {
      courseCode: 'IT114L',
      name: 'WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)',
      units: 1,
      professorName:'Job Lipat'
    },
    {
      courseCode: 'IT114',
      name: 'WEB SYSTEMS AND TECHNOLOGIES',
      units: 2,
      professorName: 'Mark Anthony Hernandez'
    },
    {
      courseCode: 'IT133',
      name: 'TECHNOPRENEURSHIP',
      units: 3,
      professorName: 'Khristian Kikuchi'
    }
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let tUnits = 0

for (let i = 0; i < courses.length; i++) {
  tUnits += courses[i].units
}

console.log(`Total number of units this term: ${tUnits}`)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: In Python, the equivalent of objects is lists. Lists are versatile data structures that can store a collection of items.
// You can compare lists by checking for equality or by comparing specific elements within the lists.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
const numbersCopy = [...numbers, 99]; // Creates a copy of the array with an additional number
console.log(`\nOriginal numbers array: ${numbers}`);
console.log(`Copied numbers array with an additional number: ${numbersCopy}`);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
const { courseCode: it114lCode, units: it114lUnits, ...rest } = IT114L;
console.log(`\nIT114L Course Code: ${it114lCode}`);
console.log(`IT114L Units: ${it114lUnits}`);
console.log(`Rest of the IT114L Object:`, rest);