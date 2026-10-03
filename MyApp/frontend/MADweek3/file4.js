// 1. IMPORT FUNCTION WITH OBJECT DESTRUCTURING

import {
    greet
} from "./file3.js";


// Create object
const person = {
    name: "Kausar",
    age: 26
};


// Pass object to function
greet(person);


// 2. IMPORT FUNCTION WITH ARRAY DESTRUCTURING

import {
    showScores
} from "./file3.js";


// Create array
const scores = [
    90,
    85,
    95
];


// Pass array to function
showScores(scores);


// 3. ARRAY CREATED DIRECTLY IN FUNCTION CALL

showScores([
    90,
    85,
    87
]);


// Extra values are ignored
showScores([
    90,
    85,
    87,
    99,
    100
]);


// 4. IMPORT FUNCTION THAT RETURNS OBJECT


import {
    getStudent
} from "./file3.js";


// Destructure returned object
let {
    id,
    name
} = getStudent();


// Display values
console.log(id, name);


// Rename variables
let {
    id: studentId,
    name: studentName
} = getStudent();


// Display renamed variables
console.log(
    studentId,
    studentName
);

// 5. FUNCTION RETURNING OBJECT

import {
    getUser
} from "./file3.js";


// Destructure returned object
const {
    name: userName,
    age: userAge,
    city
} = getUser();


// Display values
console.log(
    userName,
    userAge,
    city
);

// 6. FUNCTION RETURNING ARRAY

import {
    getScores
} from "./file3.js";


// Destructure returned array
const [
    math,
    english,
    science
] = getScores();


// Display values
console.log(
    math,
    english,
    science
);

// 7. RETURNED ARRAY WITH EXTRA VARIABLE


const [
    mathMarks,
    englishMarks,
    scienceMarks,
    MAD
] = getScores();

console.log(
    mathMarks,
    englishMarks,
    scienceMarks,
    MAD
);