// 1. IMPORT NAMED VARIABLES


import {
    name,
    age
} from "./file1.js";

console.log("Name:", name);
console.log("Age:", age);



// 2. IMPORT OBJECT

import {
    person
} from "./file1.js";

console.log(person.name);
console.log(person.age);



// 3. IMPORT FUNCTION


import {
    myFun
} from "./file1.js";

myFun("Kausar");



// 4. IMPORT ARRAYS


import {
    numbers,
    colors
} from "./file1.js";

console.log(numbers);
console.log(colors);

console.log(numbers[2]);
console.log(colors[1]);


// 5. IMPORT MULTIPLE VARIABLES


import {
    username,
    cgpa
} from "./file1.js";

console.log(username);
console.log(cgpa);



// 6. RENAME NAMED EXPORT USING "as"


import {
    score as points
} from "./file1.js";

console.log(points);


// 7. IMPORT DEFAULT EXPORT


import introduce from "./file1.js";

introduce();