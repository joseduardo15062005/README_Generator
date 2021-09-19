// TODO: Include packages needed for this application
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  rl.question("What is your name?", (name) => {
    console.log(name);
    rl.close();
  });
}

// Function call to initialize app
init();
