// Day 3 — Temperature Analyzer with User Input
// Concepts: functions, loops, async input (readline) and recursion 101

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ---------- Logic functions ----------

function calculateAverage(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}

function findMin(values) {
  let min = Infinity;
  for (let i = 0; i < values.length; i++) {
    if (values[i] < min) min = values[i];
  }
  return min;
}

function findMax(values) {
  let max = -Infinity;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) max = values[i];
  }
  return max;
}

function classifyClimate(avg) {
  if (avg > 30) return "Hot";
  if (avg >= 18) return "Warm";
  return "Cold";
}

// ---------- User Input Handling ----------

let temperatures = [];

rl.question("How many temperatures? ", (countInput) => {
  const count = Number(countInput);

  if (isNaN(count) || count <= 0) {
    console.log("Please enter a valid number.");
    rl.close();
    return;
  }

  askTemperature(0, count);
});

function askTemperature(index, total) {
  if (index === total) {

    const avg = calculateAverage(temperatures);
    const min = findMin(temperatures);
    const max = findMax(temperatures);
    const climate = classifyClimate(avg);

    console.log("\nTemperatures:", temperatures);
    console.log("Average:", avg.toFixed(2));
    console.log("Min:", min);
    console.log("Max:", max);
    console.log("Climate:", climate);

    rl.close();
    return;
  }

  rl.question(`Enter temperature ${index + 1}: `, (input) => {
    const temp = Number(input);

    if (isNaN(temp)) {
      console.log("Invalid number, try again.");
      askTemperature(index, total);
    } else {
      temperatures.push(temp);
      askTemperature(index + 1, total);
    }
  });
}