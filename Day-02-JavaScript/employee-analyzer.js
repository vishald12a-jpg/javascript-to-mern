// Step 1 — Define employee data
const employeeName = "Arun";
const salary = 40000;
const experience = 3;
const performance = 4;

// Step 2 — Determine experience level
function getExperienceLevel(years) {
    if (years <= 1) {
        return "Beginner";
    } else if (years <= 4) {
        return "Intermediate";
    } else {
        return "Experienced";
    }
}

// Step 3 — Determine performance rating
function getPerformanceRating(score) {
    if (score === 5) {
        return "Excellent";
    } else if (score === 4) {
        return "Very Good";
    } else if (score === 3) {
        return "Good";
    } else if (score === 2) {
        return "Needs Improvement";
    } else if (score === 1) {
        return "Poor";
    } else {
        return "Invalid performance score";
    }
}

// Step 4 — Check promotion eligibility
function isEligibleForPromotion(years, score) {
    return years >= 2 && score >= 4;
}

// Step 5 — Calculate bonus
function calculateBonus(baseSalary, score) {
    if (score >= 4) {
        return baseSalary * 0.10;
    }
    return 0;
}

// Step 6 — Calculate final salary
function calculateFinalSalary(baseSalary, score) {
    const bonus = calculateBonus(baseSalary, score);
    return baseSalary + bonus;
}

// Step 7 — Print the report
console.log("EMPLOYEE REPORT");
console.log("Name:", employeeName);
console.log("Salary:", salary);
console.log("Experience:", getExperienceLevel(experience));
console.log("Performance:", getPerformanceRating(performance));
console.log(
    "Promotion eligible:",
    isEligibleForPromotion(experience, performance)
);
console.log(
    "Bonus:",
    calculateBonus(salary, performance)
);
console.log(
    "Final salary:",
    calculateFinalSalary(salary, performance)
);