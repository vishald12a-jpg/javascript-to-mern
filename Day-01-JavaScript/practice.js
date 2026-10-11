//Problem 1: Variable Declaration & Printing

let name = "Vishal D.";
let age = 21;
let department = "Computer Science";
let cgpa = 8.5;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Is Student:", isStudent);

//Problem 2: Basic Arithmetic Operations

let num1 = 20;
let num2 = 6;

console.log("Addition:", num1 + num2);          // 20 + 6
console.log("Subtraction:", num1 - num2);       // 20 - 6
console.log("Multiplication:", num1 * num2);    // 20 * 6
console.log("Division:", num1 / num2);          // 20 / 6
console.log("Remainder:", num1 % num2);         // 20 % 6 (Modulus)

//Problem 3: Check Positive, Negative, or Zero
let number = -8;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Problem 4: Check Even or Odd
let number = 7
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Problem 5: Largest of Three Numbers
let a = 15;
let b = 42;
let c = 27;

let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log("Largest number:", largest);

//Problem 6: Calculate Grade from Marks
let marks = 82;
let grade = "";

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else if (marks >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Grade:", grade);

//Problem 7: Print Numbers 1–20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//Problem 8: Print Only Even Numbers from 1–50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Problem 9: Calculate the Sum of 1–100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);

//Problem 10: calculateSalary() Function
function calculateSalary(basicSalary, bonusPercentage) {
    let bonusAmount = basicSalary * (bonusPercentage / 100);
    let finalSalary = basicSalary + bonusAmount;
    return finalSalary;
}

// Example usage: Basic salary = 50000, Bonus = 15%
let total = calculateSalary(50000, 15);
console.log("Final Salary:", total);