#!/usr/bin/env node

const inquirer = require("inquirer");

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

/* Because this will be a CLI app that will most likely live inside the 
20-React/01-Activities directory, we can assume that all the activity directories will
be in the parent of the current directory */
const parentDir = path.resolve(__dirname, "..");

// Logger methods
const error = (msg) => console.log(chalk.red(msg));
const success = (msg) => console.log(chalk.green(msg));
const info = (msg) => console.log(chalk.yellow(msg));

//  Helper function to get a list of directories in a directory
const getDirectories = (srcpath) =>
  fs
    .readdirSync(srcpath)
    .filter(
      (file) =>
        fs.statSync(path.join(srcpath, file)).isDirectory() &&
        !file.startsWith(".") &&
        file !== "node_modules"
    );

// Helper function to check if a directory is a react project
const isReactApp = (dir) => {
  const packageJson = path.join(dir, "package.json");
  if (fs.existsSync(packageJson)) {
    const packageObj = JSON.parse(fs.readFileSync(packageJson));
    if (packageObj.dependencies && packageObj.dependencies.react) {
      return true;
    }
  }
  return false;
};

// Variable to hold the first react app found of all the directories
const reactApp = getDirectories(parentDir).find((dir) =>
  isReactApp(path.join(parentDir, dir))
);
info(`Practice app found: ${reactApp}`);

// Check if there is no practice app to copy to
if (!reactApp) {
  error(`You don't seem to have a practice React App to copy to.`);
  error(`Please run ${info("npx create-react-app 00-practice-app")} first.`);
  process.exit(1);
}

// Choices for the inuquirer prompt
const otherFolders = getDirectories(parentDir).filter(
  (dir) => dir !== reactApp
);

inquirer
  .prompt([
    {
      type: "confirm",
      name: "replaceSrc",
      message: "Replace the src directory?",
      default: false,
    },
    {
      type: "list",
      name: "srcToCopy",
      message: `What directory contains the src/ directory you want to copy to ${reactApp}?`,
      choices: otherFolders,
      when: (answers) => answers.replaceSrc,
    },
  ])
  .then((answers) => {
    if (answers.replaceSrc) {
      // Bool that is true if there is a unsolved folder in srcToCopy
      const hasUnsolved = fs.existsSync(
        path.join(parentDir, answers.srcToCopy, "Unsolved")
      );

      // Directory to copy from depending on whether this is an activity or a ins demo (hasUnsolved)
      const srcToCopy = hasUnsolved
        ? `${answers.srcToCopy}/Unsolved/src`
        : `${answers.srcToCopy}/src`;

      // Full paths to the directories
      const reactAppPath = path.join(parentDir, reactApp, "src");
      const srcToCopyPath = path.join(parentDir, srcToCopy);

      // Delete everything inside the react app's src directory
      try {
        fs.removeSync(reactAppPath);
      } catch (err) {
        error(`Error deleting ${reactAppPath}`);
        error(err);
        process.exit(1);
      }

      info(`Copying ${srcToCopy} to ${reactApp}/src`);

      // Copy the src directory
      try {
        fs.copySync(srcToCopyPath, reactAppPath);
        success(`Copied:\n${srcToCopyPath} \n${reactAppPath}`);
      } catch (err) {
        error(`Error copying ${srcToCopyPath} to ${reactAppPath}`);
        error(err);
      }
    } else {
      error(`Nothing to do.`);
    }
  });
