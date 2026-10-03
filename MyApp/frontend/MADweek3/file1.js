// 1. NAMED EXPORT - VARIABLES


export const name = "Kausar";
export let age = 26;


// 2. NAMED EXPORT - OBJECT


export const person = {
    name: "Kausar",
    age: 26
};


// 3. NAMED EXPORT - FUNCTION


export function myFun(name) {
    console.log("Hi", name);
}


// 4. NAMED EXPORT - ARRAY


export const numbers = [10, 20, 30];

export const colors = ["red", "green", "blue"];


// 5. MULTIPLE NAMED VARIABLES


export let username = "Kausar";
export let cgpa = 3.6;


// 6. NAMED EXPORT - SCORE


export let score = 100;



// 7. DEFAULT EXPORT - FUNCTION


export default function introduce() {
    console.log("Hi, I am your course instructor");
}