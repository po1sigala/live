# 10.1 Full-Time Lesson Plan: Progressive Web Applications (PWA)

## Overview

In this class, you will introduce the concept of bundling an application using webpack and its impact on webpage performance. You'll also demonstrate how to configure webpack to incorporate even more performance improvements, lazy loading, and development-process improvements.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Lighthouse` through `14-Stu_WorkBox-Service-Workers`.

* You will use webpack for the majority of today's activities. The webpack activities only use the front end; there is no back end in any of the activities.

* If you haven't used webpack much previously, take a look at `webpack.config` and the `scripts` in the `package.json` files. This should prime you for the lecture.

* The first activity, `01-Ins_Lighthouse`, generates a Lighthouse report. Only performance is stressed, but it would be a good idea to mention accessibility, SEO, and best practices for further student investigation.

* The student activity `06-Stu_Webpack-Bundle` is a debugging activity that contains two errors. To fix the app, students must import the `path` module and add `name` in the output of the `webpack.config.js`.

* The `08-Stu_Webpack-Loader` activity uses ES modules to further demonstrate the use of Babel. All the other activities use CommonJS for modularization.

* The `08-Stu_Webpack-Loader` activity contains a mock API request. The interest rate is fake data; make a point to tell students that.

* If students ask why they are learning webpack, let them know that since the web is moving towards more advanced front-end applications, a compiler -- webpack -- is needed to process the code into a more performant format that can take advantage of modules, modern JavaScript, and bundles.

* Today's activities will require students to save and refresh the browser in order to see changes. The very nature of PWAs means that, by design, students will likely run into issues with cached assets interfering while debugging and testing.

  > **Important**: If you are having issues with cached assets, please use a private or incognito window to view the application.

* For Chrome users, you can open an incognito window by clicking the three dots in the top-right corner of the browser. From there, click the "New Incognito Window" button. You can also use hot keys to open an incognito window: on macOS, press Command + Shift + N; on Windows, press Control + Shift + N.

* In addition to using a private window, students can troubleshoot caching issues further by completely unregistering the service worker. This will allow the browser to cache the assets again. Details on how to do this will vary among browsers, but generally you can find the option to do this in the browser's developer tools.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live code the solutions to the activities. If not, use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Recognize which metrics in a Lighthouse audit affect page load times.

* Identify the main purpose of a module bundler such as webpack.

* Set up webpack’s dependencies in an application with npm scripts.

* Create a bundle and use it to provide interaction for a webpage.

* Compare webpack in development vs. production mode.

* Extend webpack’s functionality for non-JavaScript files, transpiling modern JavaScript for older browsers, and automate bundle output file names.

* Create an `index.html` file using a template with a webpack plugin to automate bundle insertion.

* Implement service workers to a web application.

## Slide Deck

* [Unit 19 Slide Deck](https://docs.google.com/presentation/d/1mkVX8q7pIQM6giW6ArxB2pjAYFCp2BpjIu1x7MDR6dE/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                              | Duration |
|---     |---  |---                                         |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity             | 0:10     |
| 10:10AM| 2   | Instructor Demo: Lighthouse                | 0:05     |
| 10:15AM| 3   | Student Do: Lighthouse                     | 0:15     |
| 10:30AM| 4   | Instructor Review: Lighthouse              | 0:10     |
| 10:40AM| 5   | Instructor Demo: Webpack Intro             | 0:05     |
| 10:45AM| 6   | Student Do: Webpack Intro                  | 0:15     |
| 11:00AM| 7   | Instructor Review: Webpack Intro           | 0:10     |
| 11:10AM| 8   | Instructor Demo: Webpack Bundle            | 0:05     |
| 11:15AM| 9   | Student Do: Webpack Bundle                 | 0:15     |
| 11:30AM| 10  | Instructor Review: Webpack Bundle          | 0:10     |
| 11:40AM| 11  | Instructor Demo: Webpack Loader            | 0:05     |
| 11:45AM| 12  | Student Do: Webpack Loader                 | 0:15     |
| 12:00PM| 13  | BREAK                                      | 0:30     |
| 12:30PM| 14  | Instructor Review: Webpack Loader          | 0:10     |
| 12:40PM| 15  | Instructor Demo: Webpack Plugin            | 0:05     |
| 12:45AM| 16  | Student Do: Webpack Plugin                 | 0:15     |
| 1:00PM | 17  | Instructor Review: Webpack Plugin          | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity             | 0:10     |
| 1:25PM | 19  | Instructor Demo: Hot Module Replacement    | 0:05     |
| 1:30PM | 20  | Student Do: Hot Module Replacement         | 0:15     |
| 1:45PM | 21  | Instructor Review: Hot Module Replacement  | 0:10     |
| 1:55PM | 22  | Instructor Demo: WorkBox Service Workers   | 0:05     |
| 2:00PM | 23  | Student Do: WorkBox Service Workers        | 0:15     |
| 2:15PM | 24  | Instructor Review: WorkBox Service Workers | 0:15     |
| 2:30PM | 25  | END                                        | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1mkVX8q7pIQM6giW6ArxB2pjAYFCp2BpjIu1x7MDR6dE/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What is a PWA?**: PWA is a design pattern.

    * A Progressive Web App (PWA) is a design pattern that uses web technologies to build a fast, flexible web application that will perform like a native app on any device.

  * **Are PWAs dependent on a specific technology?**

  * **PWAs are focused on optimizations, not specific tech.**

    * PWAs do not rely on a single, specific technology. Instead, they use a variety of tools to build and optimize web applications to take advantage of features already available on the user’s device and browser.

  * **A PWA Is an Optimized Web App**

    * A PWA is simply a web app built using standard technologies that works in a browser and is optimized to improve performance and user experience.

  * **What makes an app a PWA?**

  * **PWA Design Pattern Optimizations**

    * PWA are optimized to be fast.

    * PWAs are optimized to work offline.

    * PWAs are installable by users directly on their devices.

    * PWAs are secure.

  * **PWAs Are Fast**

    * To give the user the look and feel of a native app, assets are bundled. This gives users a faster, more performant app.

  * **PWAs Work Offline**

    * A PWA also uses a service worker, which allows a user to access visited pages even if the app is offline.

  * **PWAs Are Installable**

    * A PWA uses a special set of instructions for the browser called a manifest.json, which adds a splash screen and makes the app installable directly on the user’s device.

  * **PWAs Are Secure**

    * A PWA works on a secure connection to help keep users and their data safe.

  * **What are the key benefits of PWAs?**

  * **Key Benefits of PWAs**

    * PWA is an adaptable design pattern with principles that can be applied to any web application.

    * PWAs focus on optimizing web applications to be faster and more performant.

    * PWAs enhance web applications by taking advantage of the user’s browser capability to provide a native app experience on any device.

    * PWAs are cost effective! With PWAs, there is no need to build a separate mobile and desktop application. A single app works for all devices.

    * PWAs can be directly installed by the user. There is no need for costly app stores!

    * PWAs deliver the speed and features that users expect in a modern app.

  * **Mini-Project**: The mini-project for this unit will be a contact directory app that uses service workers, IndexedDB, webpack, and has PWA functionality. We will also deploy the app to Heroku.

* Navigate to `28-Stu_Mini-Project/Main` in your command line and demonstrate the following:

  * We are going to build a contact directory that can work offline.

  * Run `npm install` from the command line to install the dependencies.

  * Run `npm start` from the command line to start the Express.js server.

  * Open the browser at http://localhost:3000/

  * Create two fake people to populate the contact cards.

  * In the DevTools/Network tab, set the Throttling option to Offline. Then refresh the page to see the contact cards persist on the webpage.

  * Install the PWA to display the app as a PWA.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning about webpack, bundlers, workbox, service workers, IndexedDB, PWAs, and offline functionality.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We will be using CRUD operations to persist and delete data. We will set up an Express.js server to display the user interface.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Not only do apps need to look impressive, they must also have low latency and load quickly. In the real world, connectivity can be unstable, so provisions must be made to preserve the app's functionality in order to retain users.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Lighthouse (5 min)

* In your browser, open the [Make My Trip website](https://www.makemytrip.com/).

* Open the DevTools and click on the `>>` on the menu at the right. Select `Lighthouse` from the drop-down.

* Select the `Performance`, `Progressive Web App`, `Best Practices`, `Accessibility` and `SEO` categories. For device, leave the default `mobile.` Leave any other options unchecked and click on `Generate Report'.

  * To get started, we'll focus on the main driver for high bounce rates, which are slow page loads.

* Briefly show some of the categories Lighthouse will audit for you. Scroll down to the **Performance** section and note that the overall score is rated very bad.

* Select the slide button to display the longer descriptions of the performance metrics.

* Examine "First Contentful Paint," "Time to Interactive," "Total Blocking Time," and "Speed Index."

* Follow the link in the [Time to Interactive](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_interactive) to show students how to obtain more information on the metric as well as information on any corrective actions they may wish to take to improve the metric.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we generate an audit report?

  * 🙋 Open the Lighthouse tab in DevTools, select the categories, then select the "Generate report" button.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Lighthouse/README.md`.

### 3. Student Do: Lighthouse (15 min)

* Direct students to the activity instructions found in `02-Stu_Lighthouse/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Analyze the Lighthouse Audit

  Work with a partner to identify the key metrics that need improvement using a Lighthouse audit.

  ## 📝 Notes

  1. Review the [Lighthouse audit](./Unsolved/assets/audit.png).

  2. Identify which metrics must be modified to improve the loading time of the website.

  3. Add comments to [audit.md](./Unsolved/audit.md).

  Refer to the documentation:

  * [Google docs on Lighthouse audits](https://developers.google.com/web/tools/lighthouse)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other ways can you run a Lighthouse audit besides from the browser?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Lighthouse (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Lighthouse? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Largest Contentful Paint

  * ✔️ Time to Interactive

* Open the [Lighthouse audit report for weather.com](./assets/audit.png) and note that the score can vary from report to report because the measurements are calculated in milliseconds and often depend on external factors such as third-party APIs, server load capacity, and internet connectivity.

* Open the `02-Stu_Lighthouse/Solved/audit.md`. Examine and explain the following questions and answers.

  * Which metrics are failing and what do they measure?

    * 🔑 **Time to Interactive:** Measures how much time until the webpage is fully functional.

    * 🔑 **Total Blocking Time:** Sum of all time periods between First Contentful Paint(FCP) and Time to Interactive. FCP marks the time at which the first text or image is painted.

    * **Speed Index:** Shows how quickly the contents of the page are visibly populated.

    * **Cumulative Layout Shift:** Measures the movement of visible elements within the viewport.

    * 🔑 **Largest Contentful Paint:** Marks the time at which the largest text or image is painted.

* List a corrective measure for each metric selected above.

  * 🔑 Time to Interactive: Defer or remove unneeded JavaScript.

  * 🔑 Total Blocking Time: Optimize JavaScript to reduce the amount that is loaded, parsed, and executed.

  * Speed Index: Reduce load on the call stack or the main thread.

  * 🔑 Largest Contentful Paint: Reduce render blocking JavaScript.

  * Cumulative Layout Shift: Always include size attributes on your images and video elements.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Are these metrics weighted equally in the performance score?

  * 🙋 No, certain metrics like Largest Contentful Paint and Total Blocking Time are weighted more heavily and have a more significant impact on the performance score.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Google docs on Lighthouse performance scoring](https://developers.google.com/web/tools/lighthouse), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Webpack Intro (5 min)

* Open `03-Ins_Webpack-Intro/package.json` in your IDE and demonstrate the following:

  * The `devDependencies` webpack and `webpack-cli` enable webpack to compile the bundles.

  * 🔑 To create the devDependencies, use the command `npm install -D webpack webpack-cli`. When they are installed, they will appear in the `package.json` as the following shows:

  * 🔑 It is also important that we add the scripts to enable webpack to run in development mode and production mode, as the following shows:

    ```json
    "scripts": {
      "watch": "webpack --watch",
      "build": "webpack --mode production"
    },
    ```

  * The `watch` script enables automatic rebundling when changes in the JavaScript files are detected.

  * The `build` script launches webpack in production mode. This mode is meant to run the app on client machines so it minifies and optimizes the assets on the application as well as much more.

* Open `03-Ins_Webpack-Intro/webpack.config.js` and note the following:

  ```js
  const config = {
    // Entry point for initial bundle for page load
    entry: './assets/app.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },
    // Production mode is the default
    mode: 'development',
  };
  ```

* Note that the `config` object defines the entry point as our main JavaScript file.

* The output point is in the `dist/` folder that will contain the JavaScript bundle.

* The mode is set to development, allowing auto bundling with the watch option.

* Navigate to `03-Ins_Webpack-Intro` directory and run the following command to create a bundle:

  ```bash
  npm run watch
  ```

* Open the `03-Ins_Webpack-Intro/index.html` file in your IDE to show the following script element at the bottom of the `<body>`:

  ```html
  <script type="text/javascript" src="dist/bundle.js"></script>
  ```

* Open `03-Ins_Webpack-Intro/index.html` in the browser and explain the markup is using the bundle to handle user interactivity for the webpage.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the significance of the `--watch` flag?

  * 🙋 Enables a background process that watches for JavaScript changes and creates a new bundle to persist changes to the bundle.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Webpack-Intro/README.md`.

### 6. Student Do: Webpack Intro (15 min)

* Direct students to the activity instructions found in `04-Stu_Webpack-Intro/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Add NPM Scripts to Implementation of Webpack

  Work with a partner to implement the following user story:

  * As a developer, I want to bundle the JavaScript file from the command line.

  * As a developer, I want to start webpack's watch mode from the command line.

  ## Acceptance Criteria

  * It is done when a production-ready bundle is created in the `dist/` folder from the command line using the command `npm run build`.

  * It is done when watch mode is initiated from the command line using the command `npm run watch`, as indicated in the screenshot below.

  ## 📝 Notes

  Refer to the documentation:

  * [Webpack docs on Watch mode](https://webpack.js.org/guides/development/#using-watch-mode)

  * [Webpack docs on NPM scripts](https://webpack.js.org/guides/getting-started/#npm-scripts)

  ## Assets

  The following image demonstrates that watch mode is currently on:

  ![The command line displays the watch webpack watch command.](./Assets/watch-terminal.png)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we implement watch mode in production?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Webpack Intro (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with webpack installation and creating bundles?

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ webpack.config.js

  * ✔️ webpack and webpack-cli packages

  * ✔️ npm scripts for production and development modes

* Open `04-Stu_Models/Solved/package.json` in your IDE and explain the following:

  * 🔑 The webpack and webpack-cli are installed as `devDependencies`.

    ```sh
    npm install -D webpack webpack-cli
    ```

  * 🔑 Add the npm scripts to run either the development mode or production mode of webpack from the terminal.

    ```sh
    "scripts": {
      "watch": "webpack --watch",
      "build": "webpack --mode production"
    },
    ```

  * The `--watch` flag enables auto bundling when JavaScript files are modified. This is useful in development mode, but not useful in production.

  * In the `build` script, selecting production mode for webpack minifies and optimizes the bundle in order to maximize performance, but is not useful when trying to debug in development mode.

  * Navigate to the `04-Stu_Webpack-Intro` directory in the terminal and run the following command to initiate the watch command.

    ```sh
    npm run watch
    ```

  * Verification that the watch mode is currently on can be found in the terminal.

  * Navigate to the `04-Stu_Webpack-Intro` directory in the terminal and run the following command to create a production-ready bundle.

    ```sh
    npm run build
    ```

  * Verification that the bundle has been minified for production mode can be seen in the terminal.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between production and development modes in webpack?

  * 🙋 Development mode allows for more legible code for debugging and auto bundling with the watch option. Production's priority is to optimize the bundle with minification along with a few more size saving measures.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋  We can refer to supplemental material, read the [webpack documentation on webpack modes](https://webpack.js.org/configuration/mode/#mode-production), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Webpack Bundle (5 min)

* Open `05-Ins_Webpack-Bundle/webpack.config.js` in your IDE and demonstrate the following:

  * 🔑 We are importing a core Node.js module, `path`, at the top of the file to enable the absolute path reference to be used for the current working directory.

    ```js
    const path = require('path');
    ```

  * 🔑 The `config` object has multiple entry points for a multi-page application and enables lazy loading.

    ```js
    entry: {
      main: './assets/app.js',
      weekly: './assets/weekly.js',
    },
    ```

  * We use multiple entry points to accommodate the `index.html` and `weekly-expense.html` files.

  * 🔑 A dynamic variable, `name`, is used to create multiple bundle names in the `output` property of the `config` object.

    ```js
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ```

    * The `name` variable will be replaced with the `main` and `weekly` keys assigned to the entry points.

  * Navigate to the `05-Ins_Webpack-Bundle` directory in the terminal and run the following command to install the webpack dependencies.

    ```bash
    npm install
    ```

  * Remain in the same directory and run the following command to create the bundles.

    ```bash
    npm run watch
    ```

  * Verify that multiple bundles with their respective names were created.

  * Open the `05-Ins_Webpack-Bundle/dist` directory to verify the bundles were created.

  * Open `index.html` in the IDE and identify the following:

    ```html
    <script type="text/javascript" src="dist/main.bundle.js"></script>
    ```

  * Open the `weekly-expense.html` in the IDE and identify the following:

    ```html
    <script type="text/javascript" src="dist/weekly.bundle.js"></script>
    ```

  * Point out that the bundle names in the `dist/` comply with the bundles we created.

  * Open the `index.html` in the browser and perform a basic transaction to demonstrate that this page is functioning properly.

  * Navigate to the `weekly-expense.html` to verify that this page also works.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we want multiple bundles?

  * 🙋 This allows the browser to only load and execute the JavaScript necessary for each webpage, which greatly reduce the page loading time.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Webpack-Bundle/README.md`.

### 9. Student Do: Webpack Bundle (15 min)

* Direct students to the activity instructions found in `06-Stu_Webpack-Bundle/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 The Bundle Command Fails

  Work with a partner to resolve the following issue:

  * As a developer, I should be able to create a bundle from the command line.

  ## Expected Behavior

  When a developer executes the build command from the command line, a bundle is created in the `dist/` folder.

  ## Actual Behavior

  When a developer executes the build command, an error message is displayed in the terminal.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. At the command line, execute the command `npm install` to download the web app's dependencies.

  2. At the command line, execute the command `npm run build` to create a bundle.

  3. Instead of a success message that states a bundle is created, an error message indicates the bundle process failed.

  ## Assets

  The following image confirms that a bundle was created by displaying a success message in the terminal:

  ![Command line successfully compiling our web application.](./Assets/chunks.png)

  ---

  ## 💡 Hints

  How are the bundles being generated?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What does chunking do for us?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Webpack Bundle (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with creating multiple webpack bundles? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

  * Navigate to `06-Stu_Webpack-Bundle/Unsolved` in the terminal and run the following command to create the bundles.

    ```sh
    npm run watch
    ```

  * Webpack will now successfully create two bundles, as noted in the terminal message.

  * Point out that a number of module dependencies are bound together to create the bundles.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important for `name` to be used to dynamically output bundle file names?

  * 🙋 Name is a reserve key word that tells webpack to use the property names in the `entry` property to create unique bundle file names.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [webpack docs on output file names](https://webpack.js.org/configuration/output/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Webpack Loader (5 min)

* Open `07-Ins_Webpack-Loader/assets/js/app.js` in your IDE and demonstrate the following:

  * We are using async/await to retrieve the subtract calculation in the `submit` function.

    ```js
    async function submit(e) {
      e.preventDefault();
      const total = await subtract(Number(balanceEl.innerText), priceEl.value);
      balanceEl.innerText = total;
      addToList(expenseEl.value, priceEl.value);
    }
    ```

  * 🔑 In order to maintain functionality of this code on older browsers such as Internet Explorer or Chrome version 57, we must use Babel to transpile our code to an older version of JavaScript that these older browsers can understand.

  * Open `07-Ins_Webpack-Loader/webpack.config.js` in your IDE to reveal the following.

    ```js
    entry: {...
    output: {...
    mode: {...
    module: {
      // Loaders
    }
    ```
  * A new property named `module` has been created.

  * Within the `module` property, we will add the `rules` array, which will contain a collection of loaders.

  * Loaders will extend webpack's bundling ability beyond JavaScript to other static assets such as style sheets.

    ```js
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
    ```

  * Notice in the `test` property, a regex is used to find the style sheets in the application.

  * Navigate to `07-Ins_Webpack-Loader` in the terminal to install these two loaders as `devDependencies`.

    ```sh
    npm install -D css-loader style-loader
    ```

  * Open `07-Ins_Webpack-Loader/assets/js/app.js` and examine the following at the top of the file.

    ```js
    import '../css/style.css';
    ```

  * Note that there is no `<link>` element in the `index.html` to connect the `style.css` file.

  * The `css-loader` and `style-loader` now link the style sheet through the bundle import statement.

  * Navigate to `07-Ins_Webpack-Loader` in the terminal and run `npm i && npm run watch` to create the bundles.

  * Open `07-Ins_Webpack-Loader/index.html` in the browser to demonstrate that webpack is still styled through the webpack bundle.

  * We will add another loader to allow Babel to transpile modern JavaScript into an older version of JavaScript for older browsers.

    ```js
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ```

  * Note in the configuration above that the `node_modules` are excluded.

  * 🔑 The `babel-loader` uses a preset and a plugin option in order to transpile the modern JavaScript into an older-browser-friendly JavaScript version.

  * Install the following packages as `devDependencies` in the `07-Ins_Webpack-Loader` directory.

    * `@babel/plugin-transform-runtime`

    * `@babel/core`

    * `@babel/preset-env`

    * `@babel/runtime`

    * `babel-loader`

  * 🔑 These packages support `babel-loader` and the preset and plugin options to transpile at runtime.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does webpack know which files need to be loaded for the style sheets?

  * 🙋 In the `test` property, a regex is used to find the file extensions `.css`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Webpack-Loader/README.md`.

### 12. Student Do: Webpack Loader (15 min)

* Direct students to the activity instructions found in `08-Stu_Webpack-Loader/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 "Get the Latest Interest" Button Does Not Work

  Work with a partner to resolve the following issues:

  * As a developer, I want to be able to use async/await with webpack.

  * As a user, I want to be able to get the latest interest rate when I click the appropriate button.

  ## Expected Behavior

  When I click the "Get the latest interest rate" button, an up-to-date interest rate should appear.

  ## Actual Behavior

  When a user clicks the "Get the latest interest rate" button, an error appears in the console.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. At the command line, execute the command `npm install` to download the web app's dependencies.

  2. At the command line, execute the command `npm run watch` to create a bundle.

  3. Note the illegal operation error.

  ## Assets

  The following image confirms that a bundle was created by displaying a success message in the terminal:

  ![Get the latest interest rate button in the web application.](./Assets/interest-button.png)

  ![The latest interest rate is displayed on the web application.](./Assets/interest.png)

  ---

  ## 💡 Hints

  Which plugins do we need for async/await to work in our browser?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What Babel plugin would allow object rest and spread operators to be used?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Webpack Loader (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with webpack loaders? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `path.resolve()`

  * ✔️ `dist`

* In the terminal, navigate to `08-Stu_Webpack-Loader/Unsolved` and run `npm i && npm run watch` to create the error. Examine the error to reveal the first bug.

  * The error message in the terminal indicates that the error is an illegal operation on a directory.  .

    ```sh
    [Error: EISDIR: illegal operation on a directory, mkdir '/'] {
      errno: -21,
      code: 'EISDIR',
      syscall: 'mkdir',
      path: '/'
    }
    ```

* 🔑 Navigate to the `08-Stu_Webpack-Loader/Solved/webpack.config.js` file and open in your IDE:

  * When we create a bundle, a directory is added to our code, the `dist` directory. We use `path.resolve()` to generate a `dist` folder that will hold our `index.html` and bundles. To run our app using the bundles, we will use the `index.html` inside the `dist` folder.

    ```js
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ```

  * Also notice that we need to properly configue Babel due to the async/await dependency:

    ```js
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/transform-runtime'], //insert the runtime
        },
      },
    },
    ```

* 🔑 Navigate to `08-Stu_Webpack-Loader/Solved/` in the terminal and run `npm install` and `npm run watch` to demonstrate that the error is now gone and the app is bundling as expected.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Do we need Babel to transpile our code in our current versions of Chrome?

  * 🙋 No, we don't, but companies whose customers use legacy systems might.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Babel docs on plugins](https://babeljs.io/docs/en/plugins), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Webpack Plugin (5 min)

* Navigate to `09-Ins_Webpack-Plugin` and run the commands `npm i && npm run watch`.

* Open `09-Ins_Webpack-Plugin/index.html` in your browser and demonstrate the following:

  * Create an expense and submit it to see that this functionality is broken.

* Open `09-Ins_Webpack-Plugin/dist/index.html` in the browser and create another expense.

  * Now it works! But how?

* Open `09-Ins_Webpack-Plugin/webpack.config.js` and examine the following:

  * A new `plugin` property contains a new instance of the `HtmlWebpackPlugin` class configured to use the `index.html` file as a template.

  * It's also configured to use the title `Webpack Demo`.

    ```js
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Demo'
      }),
    ],
    ```

  * 🔑 Note that the `HtmlWebpackPlugin` module is imported at the top of the `webpack.config.js` file.

    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ```

* 🔑 Open the `09-Ins_Webpack-Plugin/package.json` and show that in the `devDependency` is the `html-webpack-plugin` package.

* Open the `09-Ins_Webpack-Plugin/index.html` file in the IDE and show that there is no `<script>` element to import the bundle.

  * The `title` is inserted through the `htmlWebpackPlugin` object.

    ```html
    <title><%= htmlWebpackPlugin.options.title %></title>
    ```

* Open the `09-Ins_Webpack-Plugin/dist/index.html` and examine the following:

  * Webpack has output an `index.html` file in the `dist/` folder using the `./index.html` in the root directory with the title from the `webpack.config.js` file and the dynamically named bundle.

  ```html
  <title>Webpack Demo</title>
  <script defer src="main.bundle.js"></script>
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When would the `HtmlWebpackPlugin` be highly useful?

  * 🙋 When there are many pages with lots of entry points and bundle names.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Webpack-Plugin`.

### 16. Student Do: Webpack Plugin (15 min)

* Direct students to the activity instructions found in `10-Stu_Webpack-Plugin/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Generate an HTML file to Serve Webpack Bundles

  Work with a partner to implement the following user story:

  * As a developer, I want to generate HTML files that contain references to the webpack bundles.

  ## Acceptance Criteria

  * It is done when I have successfully installed the `HtmlWebpackPlugin` to generate an HTML file.

  * It is done when the generated HTML file follows the template, `index.html`.

  * It is done when the generated HTML file has a generated page title.

  * It is done when I can generate an HTML file that contains the references to the webpack bundle.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The output of the loan calculator with a 300k loan.](./Assets/loan-calculator.png)

  ---

  ## 💡 Hints

  How do we ensure that the format of the HTML file that's generated follows our template, `index.html`?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Why must we use the `new` syntax with webpack plugins?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Webpack Plugin (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with webpack plugins? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `HtmlWebpackPlugin`

  * ✔️ `htmlWebpackPlugin.options.title`

  * ✔️ `template: ./index.html`

* Open `10-Stu_Webpack-Plugin/Solved/package.json` in your IDE and explain the following:

  * 🔑 In order to use the plugin, we must install the package `html-webpack-plugin` as a `devDependency`.

* Open `10-Stu_Webpack-Plugin/Solved/webpack.config.js` in your IDE and explain the following:

  * We must import the package into the `webpack.config.js` file.

    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ```

  * 🔑 We must add the `plugin` property to the `config` object.

    ```js
    plugins: [
    ],
    ```

  * 🔑 Add the `HtmlWebpackPlugin`.

    ```js
    plugins: [
      new HtmlWebpackPlugin({
    }),
    ],
    ```

  * 🔑 Configure the `HtmlWebpackPlugin` with the template and the title.

    ```js
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Loan Calculator'
      }),
    ],
    ```

* Open `10-Stu_Webpack-Plugin/Solved/index.html` in your IDE and add the title using the plugin to the HTML template.

  ```html
  <title><%= htmlWebpackPlugin.options.title %></title>
  ```

* Navigate to `10-Stu_Webpack-Plugin/Solved` and run the command `npm run watch` to create a new bundle.

* Open `10-Stu_Webpack-Plugin/Solved/dist/index.html` in the IDE to see that the `index.html` file was created with the title and bundle.

* Open `10-Stu_Webpack-Plugin/Solved/dist/index.html` in the browser and check that the app functions properly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does webpack know where to insert the title in the `index.html` template?

  * 🙋 The `<%= %>` syntax with the reference to the `htmlWebpackPlugin.options.title` inserts the value into the correct location in the `index.html` template.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [webpack docs on HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/), and attend Office Hours to ask for help.

  * Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Progressive Web Apps and service workers first appeared in the browser in 2015. However, the concept was first discussed by Steve Jobs in 2007 just 18 days before the first iPhone shipped. At the time, Steve Jobs envisioned a way to create web applications that look and behave like native apps. The idea was to leverage the browser's native APIs to create a web application that could run on any device. We now know that history played out differently with the advent of the app store, but the concept remains relevant today.

* You can get a glimpse of this moment in history by watching the following video: ["One Last Thing" by Steve Jobs at Worldwide Developer Conference 07'](https://youtu.be/ZlE7dzoD6GA)

* It wasn't until 2015 that Google took that concept and gave it some life. The first Progressive Web App (PWA) specification was introduced at the Chrome Dev summit in 2015. Shortly after, developers started to use the specification to create web applications. Some of the most notable examples of PWAs are Twitter, Uber, and Google Maps, which all tout reduced data consumption of about 70% or more.

* Today, creating a PWA is a lot easier than it was back then, and is usually a lot more cost-effective than developing a mobile application. Google has created an amazing set of tools, called workbox, to help developers create a service worker with minimal effort.

* In this unit, you will learn about service workers and how to use them to cache assets, improve performance, and serve static assets. We will look at one that was made from scratch using plain Javascript, and another that was built on top of workbox.

* We will start with the project setup needed to replace modules on the fly, move on to learning how to generate a service worker using Workbox, and finally learn how to implement caching strategies that make your app faster, and if configured correctly, able to work offline.

### 19. Instructor Demo: Hot Module Replacement (5 min)

* In the terminal, navigate to `11-Ins_WebPack-HMR` and run `npm i && npm run dev`. This will install the dependencies and run the development server.

  * 🔑 When we run this application, we notice that there is a build process happening on the fly, but unlike other start scripts, this time we are not actually outputting the files to the `dist` directory.

  * 🔑 Instead, the files are built and sent directly to the browser. The Hot Module Replacement (HMR) will take care of appending a hash to the file name, and the browser will automatically refresh the page when the file changes. For example, this is an example of the file name that will be sent to the browser:

    ```bash
    index.be865f63154ff82e7d29.hot-update.js
    ```

* Open `webpack.config.js` in your IDE to demonstrate the following:

  * In this file, you can see that we have set up our webpack config to use Hot Module Replacement by adding a `devServer` options object with a attribute of `hot` set to `only`. This will reload the module without reloading the entire page.

  * 🔑 In development, not having to refresh the page is a benefit so that we can see the change in the browser immediately and also keep an eye on the HMR logs that are generated by webpack.

  * It is important to note that when using webpack, you don't need to install the Hot Module Replacement plugin. You can simply add the `hot` option to the `devServer` object in your webpack config.

  * 🔑 Under the hood, webpack calls on another developer dependency called `webpack-dev-server` when it parses the `devServer` object in the `webpack.config.js` file. You can see this package listed in the `devDependencies` section of the `package.json` file.

* Open the `src/css/style.css` file in your IDE to demonstrate the following:

  * Update the font or font weight of the `h1` element and save the file.

  * 🔑 Notice that when we update some of the content of a CSS file, we don't need to refresh the page to see the updates reflected in the browser.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We make sure that `webpack-dev-server` is set up to use Hot Module Replacement by adding a `devServer` object to our webpack config and updating our JavaScript to tell Webpack to accept the updated module.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_WebPack-HMR/README.md`.

### 20. Student Do: Hot Module Replacement (15 min)

* Direct students to the activity instructions found in `12-Stu_WebPack-HMR/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Add WebPack Development Server to a Project Using Hot Module Replacement (HMR)

  Work with a partner to implement the following user story:

  * As a developer, I want to add a `webpack-dev-server` to my project so that I can use Hot Module Replacement (HMR) to update the page without a full page refresh.

  * As a developer, I want to learn how to configure `webpack-dev-server` so that it can test my project in a way that allows my work to continue without much downtime.

  ## Acceptance Criteria

  * It is done when I have installed `webpack-dev-server` as a `devDependency`.

  * It is done when I have added a `dev` command to `package.json` that runs `webpack-dev-server --open`.

  * It is done when I have a `webpack.config.js` file in my project that includes the `devServer` property.

  * It is done when I have added a `hot` property to the `devServer` object in `webpack.config.js` and set its value to the default: `only`.

  * It is done when I have opened `Unsolved/src/index.js` and made the following changes:

    * Imported the CSS file from the CSS folder.

    * Added logic to accept Hot Module Replacement (HMR), as this is an optional feature.

  * It is done when I have modified or added some content to the `style.css` file. For example, I changed the `h1` font weight in the `style.css` file and saved it; and that change is reflected in the browser.

  ## 📝 Notes

  * If you encounter any issues with loading your most recent changes, try again in a private/incognito window.

  Refer to the documentation:

  * [Webpack docs on Hot Module Replacement (HMR)](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr)

  * [Webpack docs on webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

  ## 💡 Hints

  * What other options are available for the `devServer` property?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is another way to run `webpack-dev-server` without needing to add it to our `package.json` file?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.


### 21. Instructor Review: Hot Module Replacement (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Hot Module Replacement and how it can help us in development? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `webpack-dev-server`

  * ✔️ `hot: 'only'`

  * ✔️ `module.hot.accept()`

* Open `Solved/package.json` in your IDE and explain the following:

  * 🔑 Notice that we have added a `devDependencies` object to our `package.json` file. This object contains all of the dependencies that we need to run our development server.

  * 🔑 When creating a project, the `webpack-dev-server` package is best installed as a `devDependency`. The reason for this that it is only used in development and not in production.

  * Keeping your dependencies list to a minimum is a good way to keep your project size down. While this isn't as important for these simple demos, it is good practice and something you should consider when creating your own projects.

  * 🔑 In our scripts, we've also added a `dev` command to run `webpack-dev-server --open`. This command will run the `webpack-dev-server` and open the project in the browser. Optionally, if you don't like this behavior, you can use `--no-open` to prevent the browser from opening.

    ```json
    "scripts": {
      "dev": "webpack-dev-server --open",
      "build": "webpack"
    },
    ```

* Open `Solved/webpack.config.js` in your IDE to demonstrate the following:

  * Now that we have our script to start the server and have installed the `webpack-dev-server` package, we need to add a `devServer` object to our `webpack.config.js` file.

  * The `devServer` object contains all of the configuration options for our development server, which gets invoked by the `dev` command.

  * We added a `hot` property to the `devServer` object in `webpack.config.js` and set its value to `only`.

  * 🔑 The hot attribute is a `webpack-dev-server` feature that allows us to use HMR. Additionally, we set this value to `only` so that we can use HMR without a full page refresh, as shown in the finished `webpack.config.js` snippet.

    ```js
    module.exports = {
      // Truncated webpack.config.js
      devServer: {
        hot: true,
        static: './dist',
      },
    }
    ```

* Open `Solved/src/index.js` in your IDE to demonstrate the following:

  * 🔑 Even though we have set up HMR, it is by default an opt-in feature. In order to take advantage of it, we need to update the `index.js` file to accept hot modules.

  * This code is added at the bottom of the `index.js` file, but it can be added anywhere in the file. We first check to see if `module.hot` is defined. If it is, we accept hot modules by calling `module.hot.accept()` method, as shown in the following `index.js` snippet:

    ```js
    if (module.hot) {
      module.hot.accept((err) => {
        if (err) {
          console.error('Cannot apply HMR update.', err);
        }
      });
    }
    ```

  * You don't need to accept hot modules in every file, as changes will bubble up to a file that does accept hot modules. For example, if you make a change to `style.css` and save it, the changes will be reflected in the browser because `style.css` is imported in `index.js`. The same is true for JavaScript files.

* Navigate to `12-Stu_WebPack-HMR/Solved` in your terminal and run `npm i && npm run dev` and demonstrate the following:

  * With the development server running, we can now make changes to our `style.css` file and see the changes reflected in the browser.

  * In `Solved/src/css/style.css`, change the font weight of the `h1` element to `bold`. Notice that when you save, the page is updated in the browser without a full page refresh. You can also see the exact modules that were updated in the browser's console as you refresh the page, as shown in the following snippet:

    ```console
    log.js:24 [HMR] Waiting for update signal from WDS...
    index.js:519 [webpack-dev-server] Hot Module Replacement enabled.
    index.js:519 [webpack-dev-server] Live Reloading enabled.
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is knowing how to use Hot Module Replacement helpful when creating a webpack project?

  * 🙋 Using HMR prevents us from having to rebuild the entire project every time we make a change. It also allows us to make changes to the code without having to restart the server.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Webpack docs on Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Workbox Service Workers (5 min)

* Navigate to `13-Ins_WorkBox-Service-Workers` in your terminal, run `npm i && npm run dev`, and demonstrate the following:

  * 🔑 When we run the application, the first thing you will notice is that unlike the previous activities, this one doesn't use or require webpack. Instead, we see a simple message that our server is running on port `3000`.

  * This demo is a very simple page that contains a card with a title, a description, and an image. It also features a service worker that is running in the background.

  * 🔑 This demo is very similar to other simple Express applications that we have created in the past, with one key distinction. This application uses a service worker written in plain Javascript to cache the application's assets.

  * **Important**: There are two ways to create a service worker. One is to create it manually using the steps found on MDN, and the other is to use the [workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) plugin. While we will use workbox in the next activity, it is important that we take a look at how to create a service worker manually.

* Open `src/sw.js` in your IDE to demonstrate the following:

  * This is a service worker that runs in the background and caches the assets that we are using. Services respond to different events, much like a button or input field.

  * In the browser, you can click on the Application tab and see that the service worker is running and what status it is in.

  * There are generally three stages in the service worker life cycle:

    1. Install: When the service worker is installed, it will cache the assets that we are using.

    2. Activate: The phase in which the service worker is activated. This is the phase in which the service worker is ready to handle events.

    3. Claim: The phase when the service worker is claiming the clients that are using it.

  * This particular service worker is also a cache-first strategy, meaning that it will first check to see if the assets are in the cache before trying to fetch them from the network, as show in the following snippet:

    ```js
    self.addEventListener('fetch', (e) =>
      e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
    );
    ```

  * While knowing how to create a service worker from scratch can be beneficial, in this unit we are going to take a look at how to generate a service worker using workbox.

  * Service workers, regardless of whether or not they were made using plain Javascript or generated using workbox, all need to be registered at the entry point for your application. In our case, this file is `index.js`.

* Open `src/index.js` in your IDE to demonstrate the following:

  * Typically, all one needs to do in order to register a service worker is check to see if they are supported in the browser, and then use the `navigator.serviceWorker.register()` method to register the worker in the browser, as shown in the following code snippet:

    ```js
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./sw.js')
        .then((register) => console.log(register));
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do service workers do?

  * 🙋 Service workers are a way to cache assets that are used in the application, and are used to speed up the application's loading time.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_WorkBox-Service-Workers/README.md`.

### 23. Student Do: Workbox Service Workers (15 min)

* Direct students to the activity instructions found in `14-Stu_WorkBox-Service-Workers/README.md`, which are also shown below.

* To get a better understanding of how to create a service worker with a framework, we will be using the [workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) plugin for webpack.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of a Workbox Service Worker

  Work with a partner to add comments that describe the functionality of the code found in [index.js](./Unsolved/src/index.js) and [webpack.config.js](./Unsolved/webpack.config.js).

  ## 📝 Notes

  Refer to the documentation:

  * [Workbox Service Worker](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Why don't JavaScript modules work inside service workers?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: Workbox Service Workers (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with service workers in general? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `GenerateSW`

  * ✔️ `Workbox()`

* Open `Solved/webpack.config.js` in your IDE to demonstrate the following:

  * 🔑 To make workbox generate a service worker when the application is built, we will use the `GenerateSW` plugin.

  * 🔑 `GenerateSW` is a method that supports creating a new service worker file as part of the webpack build process.

  * 🔑 To use the `GenerateSW` plugin, we need to import it and add it to our webpack configuration. Because the entire plugin is rather large, we will destructure it into a variable called `generateSW`.

    ```js
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    // Import workbox-webpack-plugin
    const { GenerateSW } = require('workbox-webpack-plugin');
    ```

  * 🔑 In our exported object, we add a new entry to the `plugins` array that invokes the `GenerateSW` constructor, which accepts a configuration object.

  * 🔑 In our case, we added an option called `clientsClaim`, which instructs the service worker to claim the clients that are using it.

  * 🔑 Note that this aligns with the "claim" phase, or the last step in the service worker life cycle. This is similar to the `clients.claim()` method in our plain JavaScript service worker.

    ```js
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Dev.to Posts',
        template: './index.html',
      }),
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
    ```

  * In terms of webpack configuration, this is all we need to do to generate a service worker.

  * The setup is so much easier than writing a plain JavaScript service worker from scratch in the previous activity. This is the benefit of using workbox, and this is just the beginning of what workbox can do!

* Open `Solved/src/index.js` in your IDE to demonstrate the following:

  * Much like we did with the plain JavaScript service worker, we still need to register the service worker that gets created by `GenerateSW`.

  * 🔑 At the top of the file, we import a constructor called `Workbox` from the `workbox-window` library. This is a class that aids in handling service worker registration, updates, and reacting to service worker life-cycle events. The import should appear as it does in the following code snippet:

    ```js
    import { Workbox } from 'workbox-window';
    ```

  * 🔑 To register, we need to check to make sure service workers are supported in the browser. If they are, we use the `new Workbox()` constructor and assign it a variable called `wb`.

  * 🔑 The `wb` variable is an instance of the `Workbox` class, meaning that we inherit all of the methods and properties of the class, one of which is `wb.register()`. This method is used to register the service worker, as shown in the following code snippet:

    ```js
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/service-worker.js');
      logger('Service Worker', 'GenerateSW Service Worker is ready', wb);

      wb.register();
    }
    ```

  * 🔑 This method accepts a path to the service worker file. You may be wondering why we don't see a service worker file in the IDE. This is because we will be using the `webpack-dev-server` to build our application and serve it on the fly.

  * 🔑 When it comes time to actually building your application by using a command like `npm run build`, you will see a service worker file in the `dist` directory. The resulting files will look like this:

    ```sh
    .
    ├── index.bundle.js
    ├── index.html
    ├── service-worker.js
    └── workbox-9cb17bc4.js
    ```

  * Now that we have reviewed the service worker, let's test our application in the browser.

* Navigate to `14-Stu_WorkBox-Service-Workers/Solved` in your terminal and run `npm i && npm run dev`. This will install the dependencies and run the development server.

  * When we run the application, the browser will open automatically and we will be taken to a page featuring some articles from the web development site [Dev.to](https://dev.to).

  * Open the browser's developer tools to see the service worker registration. Additionally, you can see the messages coming from workbox itself with regards to registration, updates, and life cycle events.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between using workbox and plain JavaScript service workers?

  * 🙋 The benefits of using workbox is that it is so much easier to understand and use. It's a great way to get started with service workers without having to write a plain JavaScript service worker from scratch.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Workbox docs on GenerateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW), and attend Office Hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
