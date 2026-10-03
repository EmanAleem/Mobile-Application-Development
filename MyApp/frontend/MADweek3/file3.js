// 1. FUNCTION PARAMETER DESTRUCTURING - OBJECT

export function greet({ name, age }) {

    console.log(
        "Hello " + name + ", you are " + age
    );
}


// 2. FUNCTION PARAMETER DESTRUCTURING - ARRAY


export function showScores([math, english, science]) {

    console.log(
        "Math:", math,
        "English:", english,
        "Science:", science
    );
}


// 3. FUNCTION RETURNING AN OBJECT


export function getStudent() {

    return {
        id: 6766,
        name: "Kausar",
        age: 26
    };
}

// 4. FUNCTION RETURNING AN OBJECT

export function getUser() {

    return {
        name: "Kausar",
        age: 26,
        city: "Islamabad"
    };
}

// 5. FUNCTION RETURNING AN ARRAY


export function getScores() {

    return [90, 85, 95];
}