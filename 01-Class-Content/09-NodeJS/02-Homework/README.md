# 09 Node.js and ES6+: Readme Generator

When creating an open source project on GitHub, it is important to provide a quality readme with information about the app&mdash;what the app does, how to use it, how to install it, how to report issues, and how to make contributions&mdash;so that other developers are more likely to use it and contribute to the success of the project. 

A command-line application will allow for quick and easy generation of a project readme. This will enable a project creator to spend more time working on the project itself instead of creating a readme.

Your task is to create a command-line application that dynamically generates a professional README.md from a user's input, using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a quality, professional readme contains. The application will be invoked with the following command:

```
node index.js
```

Because this is a command-line application that won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates the functionality of your application. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer.

## User Story

```
AS A developer
I WANT a readme generator
SO THAT I can quickly create a professional readme for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the readme
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the readme entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the readme and a notice is added to the section of the readme entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the readme entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the readme entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the readme
```

## Minimum Application Requirements

* Application adheres to the [Submission Requirements](#submission-requirements) in the next section.

* Application is functional.

* Application includes a GitHub repository with a unique name and a readme describing the project.

* The generated readme includes the following sections: 

  * Title

  * Description

  * Table of Contents

  * Installation

  * Usage
  
  * License

  * Contributing
  
  * Tests
  
  * Questions

* The generated readme includes one badge that's specific to the repository.

## Submission Requirements

Because this is a CLI app, you won't need to deploy it to Heroku. This time, though, you'll need to include a video showing us that you got the app working with no bugs. You should include a link to the video in your application's README.md file.

You'll also need to meet the following submission requirements:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/`.

* `node_modules` isn't tracked and uploaded to GitHub. (Hint: This is easy if you create your `.gitignore` file before installing dependencies with npm.)

* Repo _must_ include `package.json` with required dependencies. (Hint: Run `npm init` when you first set up the project before installing any dependencies.)

* Provide a video of the typical user flow through your application, including views of the prompts and the responses after their selection.

* Provide any other screenshots you deem necessary to help someone new to your application understand the purpose and function of it. In the future, this is how you'll communicate to potential employers and other developers what you built and why&mdash;and how it works.

  * Because screenshots (and well-written readmes) are extremely important in the context of GitHub, this will be part of the grading.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for the following two reasons:

* Your commit history is a signal to employers that you're actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase if you need to return to a previous state.

Adhere to the following guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you're fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self).

* Test your application before you commit to ensure functionality at every step in the development process.

We want you to have more than 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* A walkthrough video demonstrating the functionality of the application

* A sample README.md file for a project repository generated using your application

* The URL of the GitHub repository, with a unique name and a readme describing the project

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.