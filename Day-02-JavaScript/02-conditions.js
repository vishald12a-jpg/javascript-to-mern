//if and else
console.log("If and Else");
let marks = 85;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//if, else if and else

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

//Nested conditions
console.log("Nested Conditions`");
let experience = 3;
let performance = 4;

if (experience >= 2) {
    if (performance >= 4) {
        console.log("Eligible for promotion");
    } else {
        console.log("Performance improvement needed");
    }
} else {
    console.log("More experience required");
}

//The switch statement
console.log("Switch Statement`");
let role = "CANDIDATE";

switch (role) {
    case "CANDIDATE":
        console.log("Candidate dashboard");
        break;

    case "RECRUITER":
        console.log("Recruiter dashboard");
        break;

    case "ADMIN":
        console.log("Admin dashboard");
        break;

    default:
        console.log("Unknown role");
}

//Truthy and falsy values
console.log("Truthy and Falsy Values`");
let username = "";

if (username) {
    console.log("Username available");
} else {
    console.log("Username is empty");
}