// Day 02 Review: Mini-Project — Static Temperature Analyzer

const temperatures = [18, 22, 27, 30, 25, 20, 16];
const numberOfTemperatures = temperatures.length;

let sum = 0;
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < numberOfTemperatures; i++) {
  const temp = temperatures[i];

  sum += temp;

  if (temp < min) {
    min = temp;
  }

  if (temp > max) {
    max = temp;
  }
}

const average = sum / numberOfTemperatures;

console.log("Temperatures:", temperatures);
console.log("Average Temperature:", average.toFixed(2));
console.log("Highest Temperature:", max);
console.log("Lowest Temperature:", min);

if (average >= 25) {
  console.log("Climate: Hot");
} else if (average >= 18) {
  console.log("Climate: Mild");
} else {
  console.log("Climate: Cold");
}