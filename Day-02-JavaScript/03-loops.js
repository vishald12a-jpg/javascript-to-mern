console.log("The for loop");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("The while loop");
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

console.log("The do while loop");
let count = 1;

do {
    console.log("Count is:", count);
    count++;
} while (count <= 3);

console.log("The for...of loop");
let skills = ["Java", "JavaScript", "React"];

for (const skill of skills) {
    console.log(skill);
}

console.log("Factorial of a number");
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}

console.log(factorial);