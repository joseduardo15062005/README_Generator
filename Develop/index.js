// TODO: Include packages needed for this application
const fs = require("fs");
const prompt = require("prompt");
const generateMarkdown = require("./utils/generateMarkdown");

prompt.start();

// TODO: Create an array of questions for user input

const questions = {
  properties: {
    title: {
      description: "Title of your Project?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Title must be only letters, spaces, or dashes",
      require: true,
    },
    description: {
      description: "Describe your project?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Description must be only letters, spaces, or dashes",
      require: true,
    },
    installation: {
      description: "describe your project installation?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Content must be only letters, spaces, or dashes",
      require: true,
    },
    usage: {
      description: "describe your project usage?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Content must be only letters, spaces, or dashes",
      require: true,
    },
    license: {
      description: "describe your project License?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Content must be only letters, spaces, or dashes",
      require: true,
    },
    contributing: {
      description: "describe your project Contributiong?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Content must be only letters, spaces, or dashes",
      require: true,
    },
    tests: {
      description: "describe your project Tests?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Content must be only letters, spaces, or dashes",
      require: true,
    },
    questions: {
      description: "describe your project Questions?",
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Content must be only letters, spaces, or dashes",
      require: true,
    },
  },
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  let fileContent = "";
  //TODO:Ask for the Project Title
  prompt.get(questions, function (err, result) {
    console.log("============Results======================");
    console.log(result);
    //Create the  file Markdown
    fileContent = generateMarkdown(result);

    console.log(fileContent);
    const fileName = `README-${result.title}.md`;
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) throw err;
      console.log(
        `file README for your project ${result.title} was generated succesfully.`
      );
    });
  });
}

// Function call to initialize app
init();
