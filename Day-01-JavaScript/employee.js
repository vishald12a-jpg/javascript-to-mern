let employeeName = "Arun";
let salary = 40000;
let experience = 3;
let performance = 4;

function evaluateEmployee(name, baseSalary, exp, perf) {
    // 1. Determine Experience Level
    let experienceLevel = "";
    if (exp <= 1) {
        experienceLevel = "Beginner";
    } else if (exp <= 4) {
        experienceLevel = "Intermediate";
    } else {
        experienceLevel = "Experienced";
    }

    // 2. Determine Performance Description
    let performanceRating = "";
    if (perf === 5) {
        performanceRating = "Excellent";
    } else if (perf === 4) {
        performanceRating = "Very Good";
    } else if (perf === 3) {
        performanceRating = "Good";
    } else if (perf === 2) {
        performanceRating = "Needs Improvement";
    } else {
        performanceRating = "Poor";
    }

    // 3. Promotion Condition (experience >= 2 AND performance >= 4)
    let isEligibleForPromotion = (exp >= 2 && perf >= 4);

    // 4. Bonus Calculation (10% bonus if performance >= 4)
    let bonus = 0;
    if (perf >= 4) {
        bonus = baseSalary * 0.10;
    }
    let finalSalary = baseSalary + bonus;

    // Display Results
    console.log("--- Employee Evaluation Report ---");
    console.log("Name:", name);
    console.log("Experience Level:", experienceLevel);
    console.log("Performance:", performanceRating);
    console.log("Eligible for Promotion:", isEligibleForPromotion);
    console.log("Bonus Amount:", bonus);
    console.log("Final Salary (with bonus):", finalSalary);
}

// Run the function
evaluateEmployee(employeeName, salary, experience, performance);