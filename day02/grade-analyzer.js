// Day 2 — Grade Analyzer mini-project
// Coreconcepts: loops, conditionals, one-dimensional arrays mi, max & average

const grades = [12, 9, 15, 8, 14];
const number_Of_Grades = grades.length;

let sum = 0;
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < number_Of_Grades; i++) {
  const grade = grades[i];

  sum += grade;

  if (grade < min) {
    min = grade;
  }

  if (grade > max) {
    max = grade;
  }
}

const average = sum / number_Of_Grades;

console.log("Grades:", grades);
console.log("Average:", average.toFixed(2));
console.log("Highest grade:", max);
console.log("Lowest grade:", min);

if (average >= 14) {
  console.log("Result: Excellent");
} else if (average >= 10) {
  console.log("Result: Pass");
} else {
  console.log("Result: Fail");
}