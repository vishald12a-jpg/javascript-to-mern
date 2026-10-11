console.log(" 1. Check positive, negative or zero");

let num1 = -5;

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

console.log(" 2. Check even or odd");

let num2 = 7;

if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


console.log("3. Find the largest of two numbers");

let a = 15;
let b = 25;

if (a > b) {
    console.log("Largest:", a);
} else {
    console.log("Largest:", b);
}


console.log("4. Find the largest of three numbers");

let x = 10;
let y = 45;
let z = 25;

if (x >= y && x >= z) {
    console.log("Largest:", x);
} else if (y >= x && y >= z) {
    console.log("Largest:", y);
} else {
    console.log("Largest:", z);
}


console.log("5. Calculate a grade");

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


console.log("6. Print numbers 1–10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("7. Print even numbers from 1–20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


console.log("8. Calculate the sum from 1–100");

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum (1-100):", sum); // Expected: 5050


console.log("9. Print the multiplication table of 5");

let tableNum = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

console.log("10. Calculate factorial of 5");

let factNum = 5;
let factorial = 1;

for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}

console.log("Factorial of 5:", factorial); // Expected: 120

console.log("11. Count even numbers from 1–50");

let evenCount = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}

console.log("Total even numbers between 1 and 50:", evenCount); // Expected: 25
