//Arithmetic operators
let salary = 30000;
let bonus = 5000;

console.log(salary + bonus);
console.log(salary - bonus);
console.log(salary * 2);
console.log(salary / 2);
console.log(10 % 3);
console.log(2 ** 3);

//Assignment operators
let total = 100;

total += 20;
console.log(total); // 120

total -= 10;
console.log(total); // 110

total *= 2;
console.log(total); // 220

//Comparison operators
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 8);   // false
console.log(10 === 10); // true
console.log(10 !== 5);  // true

//Logical operators
let isLoggedIn = true;
let role = "RECRUITER";

if (isLoggedIn && role === "RECRUITER") {
    console.log("Job creation allowed");
}