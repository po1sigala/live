const inquirer = require("inquirer");

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

const getDirectories = (srcpath) =>
  fs
    .readdirSync(srcpath)
    .filter(
      (file) =>
        fs.statSync(path.join(srcpath, file)).isDirectory() &&
        !file.startsWith(".") &&
        file !== "node_modules"
    );

// function to check if a directory is a react project
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

// console.log(getDirectories("../"));
const reactApp = getDirectories("../").find((dir) => isReactApp(`../${dir}`));

if (!reactApp) {
  console.log(
    chalk.red(`You don't seem to have a practice React App to copy to.`)
  );
  console.log(
    chalk.red(
      `Please run ${chalk.cyan("npx create-react-app 00-practice-app")} first.`
    )
  );
  process.exit(1);
}

const otherFolders = getDirectories(`../`).filter((dir) => dir !== reactApp);

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
      name: "srcDir",
      message: `What directory contains the src/ directory you want to copy to ${chalk.green(
        reactApp
      )}`,
      choices: otherFolders,
      when: (answers) => answers.replaceSrc,
    },
  ])
  .then((answers) => {
    if (answers.replaceSrc) {
      const srcDir = path.join(process.cwd(), answers.srcDir);
      const destDir = path.join(process.cwd(), reactApp);
      fs.copySync(srcDir, destDir);
    }
    console.log(chalk.green("Successfully updated the src directory!"));
  });
