const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout});

rl.question("Please enter a number: ", (input) => {
  const num = Number(input);

  if (isNaN(num)) {
    console.log("Invalid input!");
    rl.close();
    return;}

  if (num > 0) { console.log("The number is positive");} 
  else if (num < 0) { console.log("The number is negative");} 
  else { console.log("The number is zero");}

  if (num % 1 === 0) { console.log("It’s an integer");} 
  else { console.log("It’s a decimal");}

  if (num > 0) { console.log("Doubled value:", num * 2);}
  else if (num < 0) { console.log("Absolute value:", Math.abs(num));}
  else { console.log("Converted to:", 100);}

  rl.close();});