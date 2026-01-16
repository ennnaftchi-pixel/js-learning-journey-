console.log("Day 1 setup complete");
// This is a simple Node.js program that reads a number from the user and checks if it's positive, negative, or zero.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout});

rl.question("Please enter a number: ", (input)=>{
  const x = Number(input);

  if (x>0) { console.log("The number is positive");} 
  else if (x<0) { console.log("The number is negative");} 
  else if (x===0) { console.log("The number is zero");} 
  else { console.log("That's not a valid number");}

  rl.close();
});
