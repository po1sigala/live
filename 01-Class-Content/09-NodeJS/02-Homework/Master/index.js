const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./api");
const generateMarkdown = require("./generateMarkdown");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },

  {
    type: "list",
    name: "color",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE", "GNU", "No License"]
  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then(({ github, color }) => {
    console.log("Searching...");

    api
      .getUser(github)
      .then(response =>
        api.getTotalStars(github).then(stars => {
          return generateMarkdown({
            stars,
            color,
            ...response.data
          });
        })
      )
  })
}

init();
