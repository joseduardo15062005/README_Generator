// TODO: Include packages needed for this application
const fs = require("fs");
const prompts = require("prompts");

const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input
const questions = [
  {
    type: "text",
    name: "title",
    message: `Title of your Project?`,
  },
  {
    type: "text",
    name: "description",
    message: `Describe your project?`,
  },
  {
    type: "text",
    name: "installation",
    message: `describe your project installation?`,
  },
  {
    type: "text",
    name: "usage",
    message: `Describe your project usage?`,
  },
  {
    type: "text",
    name: "contributing",
    message: `Describe your project Contributing?`,
  },
  {
    type: "text",
    name: "tests",
    message: `describe your project Tests?`,
  },
  {
    type: "text",
    name: "questions",
    message: `describe your project Questions?`,
  },
  {
    type: "select",
    name: "license",
    message: "Select a license for your project?",
    choices: [
      { title: "GNU AGPLv3", value: "agpl-3.0" },
      { title: "GNU GPLv3", value: "gpl-3.0" },
      { title: "GNU LGPLv3", value: "lgpl-3.0" },
      { title: "Mozilla Public License 2.0", value: "mpl-2.0" },
      { title: "Apache License 2.0", value: "apache-2.0" },
      { title: "MIT License", value: "mit" },
      { title: "Boost Software License 1.0", value: "bsl-1.0" },
      { title: "The Unlicense", value: "unlicense" },
    ],
    initial: 6,
  },
];
//Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`file README was generated succesfully.`);
  });
}

//Create a function to initialize app
function init() {
  let data = "";
  //Ask for the Project Title
  (async () => {
    const response = await prompts(questions);
    console.log(response);
    data = generateMarkdown(response);
    const fileName = `README-${response.title}.md`;
    writeToFile(fileName, data);
  })();
}

// Function call to initialize app
init();
