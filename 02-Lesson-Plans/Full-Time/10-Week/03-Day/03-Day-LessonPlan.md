# 10.3 Full-Time Lesson Plan: Introduction to React

## Overview

In today's lesson, you will introduce students to React. You'll start by guiding them through how to use the `create-react-app` utility to create a new React project. Then you'll teach them how to create React components and write JSX expressions to render elements to the page.

## Instructor Notes

* In this lesson, students will complete activities `23-Stu-Mini-Project` from Unit 19 through `08-Stu_JSX-expressions` in Unit 20.

* **Important:** To avoid errors due to conflicting versions of ESLint in `fullstack-ground`, navigate to `00-practice-app` in the command line and run the following command:

   ```sh
   echo "SKIP_PREFLIGHT_CHECK=true" > .env
   ```

* The first activity will walk students how to create a practice React app that they will used throughout the rest of the unit. That practice app will be called `00-practice-app`, but the name isn't as important as it's location. The `00-practice-app` directory will be created in the `01-Activities` directory.
  
* Each activity will rely on this practice app existing inside the `01-Activities` directory. Be sure to copy all activities to the student repo, including the `swap_tool` utility.

* To save time in class, students are expected to either copy the `Unsolved/src` directory from the activity folder to their practice React app. This can be done manually, or with `sswap`, a command line tool that is included in the activities directory. Simply navigate to the [`swap_tool`](../../../../01-Class-Content/20-React/01-Activities/swap_tool/README.md) directory and run `sswap`.

* Shortly after you review the slide deck, you'll demonstrate the mini-project. To prepare, make sure to run `yarn install` or `npm install` inside `01-Class-Content/20-React/01-Activities/28-Stu_Mini-Project/Main/bucket-list` before class begins.

* Several activities in this unit require students to import Bootstrap into the `/src/index.js` file. If students ask why their activities do not match the solution, check whether they've done this.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Explain and use the `create-react-app` command line utility to create new React projects.

* Explain and use JSX to render elements on the page.

* Isolate code into reusable components and explain the benefits of doing so.

* Explain and use Props to pass data to child React components.

## Slide Deck

* [Unit 20 Slide Deck](https://docs.google.com/presentation/d/1V5th9cgx_YcKZDC6kcJJHwrOc-3Ql6JB3AXoW3_Jqkk/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                        | Duration |
|---     |---  |---                                   |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project        | 0:05     |
| 10:05AM| 2   | Student Do: Mini Project             | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project      | 0:10     |
| 11:15AM| 4   | Introduce Homework                   | 0:05     |
| 11:20AM| 5   | FLEX                                 | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity       | 0:10     |
| 12:00PM| 7   | BREAK                                | 0:30     |
| 12:30PM| 8   | Instructor Demo: Create React App    | 0:05     |
| 12:35PM| 9   | Student Do: Create React App         | 0:15     |
| 12:50PM| 10  | Instructor Review: Create React App  | 0:10     |
| 1:00PM | 11  | Instructor Demo: Render Elements     | 0:05     |
| 1:05PM | 12  | Student Do: Render Elements          | 0:15     |
| 1:20PM | 13  | Instructor Review: Render Elements   | 0:10     |
| 1:30PM | 14  | Instructor Demo: Components          | 0:05     |
| 1:35PM | 15  | Student Do: Components               | 0:15     |
| 1:50PM | 16  | Instructor Review: Components        | 0:10     |
| 2:00PM | 17  | Instructor Demo: JSX Expressions     | 0:05     |
| 2:05PM | 18  | Student Do: JSX Expressions          | 0:15     |
| 2:20PM | 19  | Instructor Review: JSX Expressions   | 0:10     |
| 2:30PM | 20  | END                                  | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini Project (5 min) 

* Welcome students to class.

* Run the following commands from the command line: 

  * `npm install`

  * `npm start`

* Navigate to [localhost:3000](http://localhost:3000) in your browser and point out the following:

  * Newsy is a news aggregator app that allows us to search for articles classified by topic, then save our favorites.

  * The home page of the application has some default topics, but we can create your own or remove the default topics.

  * Clicking on one of the topics causes the page to display a list and allows us to save each article to our favorites.

  * Saving a couple of articles to our favorites causes the button to update to a _remove_ button.

  * Navigate to the favorites page in your browser and point out the following:

    * The favorites we selected are listed.

    * The favorites data was stored in IndexedDb, since we are not using a local database for this application.

* Answer any questions before allowing students to start the mini project.

### 2. Student Do: Mini Project (60 min)

* Direct students to the activity instructions found in `23-Stu_Mini-Project/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # PWA Mini-Project

  In this activity we will take an existing news aggregator application and transform it into a PWA that can be installed on a user's device. We will also utilize webpack's minify and chunking features to help reduce the total size of the application.

  ## Instructions

  * Open the [Unsolved](Unsolved) folder and study the existing contents, specifically in the `package.json` file at the root of the application. 

  * We use a library called `if-env` to check what Node environment we're in when we start our app. If we're in development, then we'll execute the `npm run start:dev` script.

  * We use another library called `concurrently` in development so we can run two processes at once. One for our Express server and one for Webpack. This way we don't have to start and stop the server every time something changes.

  * Install dependencies by running `npm install` at the project root. This will also install the once in the `client` directory.

  * Start the app by running `npm start` from the project root.

  * Once the app starts open your browser to [localhost:3000](http://localhost:3000).

  * Open [index.js](Unsolved/assets/js/index.js).

  * There are 3 main sections in this application:

    * A section that allows you to manage a list of topics.

    * A section that displays different articles of a given topic. This page will also allow you to save articles to your favorites.

    * A favorites page to view a list of the user's favorite articles. This page also allows the user to remove articles from their favorites.

  ### Part 1

  * Using the `webpack.config.js` from the previous activities, update the `webpack.config.js` file that uses a babel loader and the necessary plugins to transform the application to a PWA.

  * Create an entry point for each file in `assets/js`.

  * Create a `service-worker.js` and make sure to cache all of the bundle files.

  ### Part 2

  * Take a moment to study the contents of `index.js`:

    1. `renderTopics()` renders all of the topics to the page using `createTopics`.

    2. `topicData` is an array of predefined topics to populate the page with.

    3. `createElement()` allows you to create a document element using the a string of its type, and object containing its attributes, and children elements.

  * Since `createElement` is a general purpose function that we can use throughout our application, we are going to create a separate file to keep it in named `domMethods`. By doing this, we will be able to import `createElement` into any component we would like without duplicating code.

  * Take a moment to study the contents of `topic.js`:

    1. Remove the `createElement` function and modify the file to use the `createElement` from `domMethods.js`.

    2. Extract the code necessary for indexedDb into its own file and be sure to import it into `topic.js`.

    3. Extract the `loadArticles` function to a new file called API and be sure to import any of its dependencies.

  * Take a moment to study the contents of `favorites.js`:

    1. Remove the all function declarations for utilities, indexedDb, API, and domMethods.

    2. Using ES6 syntax, import all necessary functions.

  ### Hints

  * You will **not** have to modify any files that are not in the `client` folder.

  * Ask the instructor or a TA if you're having difficulty understanding any of the activity requirements.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Mini Project (10 min)  

* Open `index.js` in your IDE and point out the following:

  * All of the functions pertaining to the `home` page are in `index.js`.

  * `createElement` is brought in from the `domMethods.js` file.

* Open `domMethod.js` in your IDE and point out the following:

  * It is not entirely necessary for us to understand exactly how every line in `createElement` works. 
  
  * It is valuable to get practice working with code we do not fully understand because new developers almost always start their careers working with an unfamiliar codebase.

  * The `createElement` function returns a DOM element and has the following parameters:

  1. A string that represents the type of element.

  2. An object containing all of the attributes to add to the element.

  3. 1 or more children elements to be appended to the element.

  * The `createArticle` function uses a ternary expression to render a `Save to Favorites` button or a `Remove from Favorites` button depending on whether the article is already part of the user's favorites.

  * `loadPage` is a callback passed to the `createElement`. The actual function will either use the results from an AJAX request or the results from IndexedDb to render the page, depending on which function was passed through as a callback.

  ```js
  !favorite
    ? createElement(
      "button",
      {
        class: "button button--primary",
        onclick: () => {
          useIndexedDb("articles", "ArticleStore", "put", {
            source,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            _id
          });
          loadPage();
        }
      },
      "Save to Favorites"
    )
  ```

  * `createPlaceholders()` displays placeholders so that content is rendered on the page while the user waits for results from the AJAX request. Although they will only display on the page for a few seconds, they play a significant role in increasing the user's experience on the site.

  ```js
  // Create and return 4 placeholder articles
  function createPlaceholders() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 4; i++) {
      const placeholder = createPlaceholder();
      fragment.appendChild(placeholder);
    }

    return fragment;
  }

  // Returns markup for a placeholder article
  function createPlaceholder() {
    return createElement(
      "div",
      { class: "article-skeleton" },
      createElement(
        "div",
        { class: "article-skeleton__header" },
        createElement("div", { class: "article-skeleton__title" }),
        createElement("div", { class: "article-skeleton__published" })
      ),
      createElement(
        "div",
        { class: "article-skeleton__content" },
        createElement("div", { class: "article-skeleton__image" }),
        createElement("div", { class: "article-skeleton__text" }),
        createElement("div", { class: "article-skeleton__text" }),
        createElement("div", { class: "article-skeleton__text" }),
        createElement("div", { class: "article-skeleton__text" }),
        createElement("div", { class: "article-skeleton__text" })
      )
    );
  }
  ```

* Open `topic.js` in your IDE and explain the following:

  * When the `Topic` page is opened, `useIndexedDb` is called to check if any of the articles have been favorited. This is necessary so that articles that have already been saved to the user's favorites can display a `Remove from Favorites` button.

    ```js
    import { useIndexedDb } from "./indexedDb";
    import { loadArticles } from "./API";
    import { renderArticles } from "./domMethods";
    // Call renderArticles on page load
    function loadPage() {
      useIndexedDb("articles", "ArticleStore", "get").then(results => {
        const favorites = results;
        loadArticles().then(data => {
          const mappedData = data.map(article => {
            article.favorite = false;
            favorites.forEach(fav => {
              if (article._id === fav._id) {
                article.favorite = true;
              }
            });
            return article;
          });
          renderArticles(mappedData, loadPage);
        });
      });
    }

    loadPage();
    ```

* Open `service-worker.js` in your IDE and point out the following:

  * Each html file should be cached with its respective bundle.

    ```js
    const FILES_TO_CACHE = [
      '/',
      '/index.html',
      '/favorites.html',
      '/topic.html',
      '/assets/css/style.css',
      '/dist/app.bundle.js',
      '/dist/favorites.bundle.js',
      '/dist/topic.bundle.js',
      'https://fonts.googleapis.com/css?family=Istok+Web|Montserrat:800&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    ];
    ```

* Open `webpack.config.js` in your IDE and point out the following:

  * There are 3 different entry points created for each app. 

  * Each bundle will include all dependencies brought into each entry file with ES6 `import`.

    ```js
    entry: {
        app: "./assets/js/index.js",
        favorites: "./assets/js/favorites.js",
        topic: "./assets/js/topic.js"
      },
      output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
      },
    ```

  * Although most of the configuration can vary, depending on the app, it's important that the icon `src` points to a valid path to an icon for the application.

    ```js
    plugins: [
      new WebpackPwaManifest({
        fingerprint: false,
        name: "Newsy app",
        short_name: "Newsy",
        description: "An application that allows you to view different news articles and save your favorites.",
        background_color: "#01579b",
        theme_color: "#ffffff",
        "theme-color": "#ffffff",
        start_url: "/",
        icons: [{
          src: path.resolve("assets/images/icons/android-chrome-192x192.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons")
        }]
      })
    ]
    ```

* If time permits, ask the students if there are any parts of the application that they would like to spend more time going over. 

  * Some students may be frustrated with the amount of time they needed to spend refactoring code so that it could be easily chunked by webpack.

  * If this is the case, remind students that one of the main motivations behind chunking is reducing the bundle size of your code. While there are many strategies one can take to split up their code, it is important that it's split in a way that makes the code reusable and clear in purpose. Sometimes this means large amounts of refactoring functions. This is time well spent since they are making their code easier to test and easier for other developers to work with.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Homework (5 min)

* Navigate to `02-Homework/Main` from the command line and run `npm start`.

* Navigate to <http://localhost:3001> in Chrome and demonstrate the following:

    * We are given a Budget Tracker app that we will convert into a PWA to allow for offline access and functionality. 

    * We can add expenses and deposits to our budget with or without a connection.

    * When we enter a transaction offline, the app will update the total when brought back online.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What recently acquired skills will help us build this challenge?

    * 🙋 Service workers and PWA web manifest will help us implement offline functionality to this app.

    * ☝️ How are these skills relevant to a career in web development?

    * 🙋 PWAs blend the benefits of a traditional browser experience with those of a mobile application. PWAs can ensure applications work without an internet connection by using the Service Worker and Cache APIs to cache assets and API responses. Having the skills to build or convert to PWAs is crucial in this day and age. 

    * ☝️ How will this challenge improve your portfolio?

    * 🙋 It will show employers your ability to measure and optimize the performance of web applications. 

* Ask TAs to direct students to the Homework Requirements found in `02-Homework/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this unit or getting started on the homework.

* Unit 19 was a packed unit with many new concepts. If your class ran out of time to cover any activities fully, take this time to review them.

* Ask students if they have any questions about PWA or Webpack before started a new unit.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1V5th9cgx_YcKZDC6kcJJHwrOc-3Ql6JB3AXoW3_Jqkk/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **React**:

    * This unit is all about React, which is a powerful JavaScript library for building user interfaces.

  * **What Is React?**
  
    * React is one of the most powerful, in-demand front-end JavaScript libraries available today.

    * React is a library that helps you create complex and responsive single-page applications.

    * React is widely popular and well supported by the developer community.

    * Created by the developers at Facebook.

    * Makes code reusable and divides things into components.

  * **What Problem Does React Solve?**

    * DOM operations are quite expensive in terms of performance, so React creates a **virtual DOM (VDOM)**.

    * The VDOM is a representation of the page structure in memory. It tracks what needs to be updated and only updates those specific things.

    * React is not opinionated like many other frameworks. It gives the developer the freedom to use Javascript the way they want to use it.

  * **Can You Give Me an Example?**

    * Facebook’s UI is a great example of React in action.
  
    * Each section of the page is a component that has tons of real-time updates happening every second.

    * The component design pattern allows Facebook to add a search bar and messenger to nearly every page that the user visits.

  * **Facebook's UI Complexities**

    * Facebook buzzes with interactive options, live-updating data, and tightly interacting elements. This poses a challenge to simple DOM.

  * **Why Separate UI Components?**

    * Logically decompose a UI into unique parts.

    * Easily reuse these parts without rewriting code.

    * Separate components are easier to test.

    * Helps isolate bugs, saving time.
  
  * **What Are Props?**
  
    * **Props** are a specialized type of parameter passed into a React component that help define attributes in the user interface, similar to DOM attributes.

    * Props allow data to be passed from a parent component to a child component.

    * **Props** is short for **properties** and refers to an normal JavaScript object that contains key-value pairs.

  * **How Is This Different Than Regular DOM Manipulation?**
  
    * In JavaScript, the application’s state and UI are updated independently of each other.

    * With React, whenever the application’s state changes, the DOM updates to reflect it.

    * With React, the UI is a pure function of the application’s state.
  
  * **How Do We Handle Constant Data Changes?**
  
  * **Rapid Data Changes in Plain Vanilla Javascript**
  
    * JavaScript is fast, but whenever we update the DOM, the browser needs to recalculate the CSS, update the layout, and repaint the webpage. This can be a slow process.

  * **Rapid Data Changes in React**

    * React’s virtual DOM serves as an intermediary and avoids unnecessary trips to the DOM. It updates only what has been changed.

  * **What Is the Virtual DOM?**

    * The virtual DOM is an ideal representation of the user interface kept in memory. It is synced with the actual DOM through a process called **reconciliation**.

    * We tell React what state the UI should be in, and React ensures that the DOM matches the internal state.

    * We isolate the attribute changes, event handling, and other DOM manipulation that we would otherwise use when building an app.

  * **Can We Get a Visualization, Please?**
  
    * **Virtual DOM** is a JavaScript object that models the real DOM.

    * Whenever some part of the application’s state changes, the virtual DOM receives the UI updates first.

    * Then the virtual DOM is compared to the real DOM.

    * React then updates with the smallest number of changes.

  * **What Are the Pros and Cons?**

    * **Pros**
  
      * Reusable components.

      * UI updates in response to state change, reducing DOM manipulation code needed.

      * Can build applications on web, server, and native applications.

      * Easier to learn and more popular than other front-end JavaScript libraries and frameworks.

    * **Cons**

      * React is a view library concerned with rendering user interfaces. You have to pull in other libraries to accomplish things like HTTP requests.

      * Can require more configuration than other libraries.

  * **What Tooling Is Needed?**

    * Babel and Webpack

  * **What Is Webpack?**
  
    * Webpack lets you modularize front-end code the same way you do in Node with CommonJS modules (require, module.exports).

    * Webpack also lets you apply various transformations on your assets via plugins.

  * **What Is Babel?**

    * Babel lets you transpile next-generation JavaScript (ES6, ES7, ES8) into ES5 JavaScript that most browsers understand.
  
  * **How Do We Learn React?**
  
    * React was designed to help create snappy single-page applications, but learning it can be daunting at first. Don’t worry -- we will break it down into small digestible topics and take things one step at a time.

    * You can try the following to learn React:

      * Read the official documentation and practice with the provided examples.

      * Reverse-engineer finished code to see how something was accomplished.

      * Build something from scratch.

      * Debug a broken React app.

      * And most importantly, ask questions!

* After you run through the slides, preview the mini-project for the class. In the command line, navigate to `01-Class-Content/20-React/01-Activities/28-Stu_Mini-Project/Main/bucket-list` and demonstrate the following:

  * Run `npm install` and then `npm start` to begin the demonstration.

    * We will build a bucket-list app using React.

    * Building this app should be a fun exercise in using your newly acquired React skills.
  
    * You will be able to tell your friends and family about how you used React Hooks, components, state, and so many other cool React concepts!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What will we learn as we work on the mini-project?

  * 🙋 We are learning how to create a bucket-list app using React. The app lets users create, update, and delete bucket-list items and assign them a priority level.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 React represents a community-driven desire to make the web better and easier to use. It uses the latest JavaScript syntax and design patterns, which we have been introduced to in this course. With React, we are adding yet another tool to our developer tool kit.

  * ☝️ How does this project relate to your career goals?

  * 🙋 In recent years, React has become arguably the most sought-after skill by employers. It cannot be overstated how much value you can provide by knowing how to build single-page applications and create React apps from scratch.

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Create React App (5 min) 

* It's time to introduce the very useful `create-react-app` utility. Let students know that this useful command-line utility will create the skeleton of a React app for them. The only downside is that running it can take some time. For this reason, in this first activity we'll use it to create a practice React app that we will then reuse for the rest of the unit's activities. To make that work, we'll only need to swap out the `/src` file for each activity.

* In the command line, navigate to `01-Class-Content/20-React/01-Activities` and run the following command:

   ```sh
   npx create-react-app 00-practice-app
   ```

  * 🔑 When we run this command, the npm package runner, `npx`, will execute the latest version of the `create-react-app` utility.

  * 🔑 We can see that `create-react-app` runs a series of scripts to create a new directory, repository, and folder structure for a boilerplate React application.

  * We can deduce that the argument after `create-react-app` is the name of the application that we want to create.
  
  * This process might take some time to complete. When it's done, you will see a boilerplate application in the `00-practice-app` directory, with the following file structure (excluding `node_modules`):

     ```sh
     ├── README.md
     ├── package.json
     ├── public
     │   ├── favicon.ico
     │   ├── index.html
     │   ├── logo192.png
     │   ├── logo512.png
     │   ├── manifest.json
     │   └── robots.txt
     ├── src
     │   ├── App.css
     │   ├── App.js
     │   ├── App.test.js
     │   ├── index.css
     │   ├── index.js
     │   ├── logo.svg
     │   ├── reportWebVitals.js
     │   └── setupTests.js
     └── yarn.lock
     ```

  * If we change into `00-practice-app` and then run `npm start`, we can see that the application builds and automatically opens a browser window.
  
  * For each subsequent activity in this unit, we will remove the `/src` directory in `00-practice-app` and replace it with the `/src` directory in the activity's `/Unsolved` folder. Let's practice that now.

* Open `01-Ins_Create-React-App` and replace your newly created `00-practice-app/src` directory with the one found in `01-Ins_Create-React-App`.
  
  * After we replace the `/src` directory, we can see the browser refresh and load the new content.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How will we build a new React app for each subsequent activity?

  * 🙋 We will delete the `00-practice-app/src` directory and replace it with the one found in `Unsolved/src` for each activity.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to direct students to the activity instructions found in `02-Stu_Create-React-App/README.md`.

### 9. Student Do: Create React App (15 min) 

* Direct students to the activity instructions found in `02-Stu_Create-React-App/README.md`.

* Break students into pairs that will work together on this activity.

   ```md
   # 📐 Add Comments That Describe the Functionality of a React App

   ## Before We Begin
   
   Initializing a React application by using the `create-react-app` command-line utility can take some time. To save time throughout this unit, we will create one React application and only replace the `/src` files for each subsequent activity as we work on them. Before you add comments to the code, you will practice the workflow for creating a React app and updating your practice app for subsequent activities.
   
   To do this, follow these steps:

   1. In the command line, navigate to `20-React/01-Activities`.

   2. Run the command `npx create-react-app 00-practice-app`.

   3. After `create-react-app` has completed (which can take a few minutes), run the command `npm i bootstrap dotenv axios --save` to add dependencies that we will need in later activities.

   4. Copy the `/src` folder from `02-Stu_Create-React-App` and paste it into the root of `00-practice-app`.

   5. Run `npm start` to ensure that the source files were transplanted successfully.

   ## Activity

   Work with a partner to add comments that describe the functionality of the code in [00-practice-app/src](../00-practice-app/src).

   ## 📝 Notes

   Refer to the documentation: 

   [React Docs on Hello World](https://Reactjs.org/docs/hello-world.html)
   
   ---

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * What are some other flags that you can use with the `create-react-app` utility?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Create React App (10 min) 

* Before you review the activity, make sure that you replace the `/src` directory with the one found in `02-Stu_Create-React-App`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `create-react-app` and swapping out the `/src` files? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that you will review the solution with them to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `/src`

  * ✔️ `index.js`

  * ✔️ `App.js`

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * After we copy the `/src` directory, we notice that there are some comments in the `index.js` file for us to complete.
  
  * React is a JavaScript library that is used to build web application user interfaces.
  
  * 🔑 As of React version 17, the React library no longer requires us to add `import React from 'react` to transform JSX. However, most in-production React codebases still use them because this is a recent change, so in this unit we include the import React statements in the activities:

     ```js
     import React from 'react';
     ```

  * 🔑  The `React` module is an entry point to the React library, while `react-dom` provides access to DOM-specific methods:
  
     ```js
     import ReactDOM from 'react-dom';

     import App from './App';
     ```

  * 🔑  `ReactDOM.render()` takes a React component or tree of React components and eventually renders them to the DOM.
  
  * The first argument is the component we want to render (`<App />`), and second is the target element to render to (`#root`):
  
     ```js
     ReactDOM.render(<App />, document.getElementById('root'));
     ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * Here we see another file asking for comments regarding the `App` component.

  * 🔑  This function is a functional component that helps us split the UI into distinct parts.

  * In this case, we are returning another component, `<HelloReact/>`, from it:

     ```js
     import React from 'react';
     import HelloReact from './components/HelloReact';

     function App() {
       return <HelloReact />;
     }

     export default App;
     ```

* Open `00-practice-app/src/components/HelloReact.js` in your IDE and explain the following:

  * Here we have a component called `Hello`. Our task again is to provide comments that describe the functionality.

  * 🔑 Components are responsible for rendering some part of an application's UI.

  * Components let us split the UI into independent, reusable pieces and also think about each piece in isolation:

     ```js
     import React from 'react';

     function HelloReact() {
       const text = 'some text';

       return <p>Hello World! Here is {text}</p>;
     }

     export default HelloReact;
     ```
  
  * The curly braces allow us to pass values and expressions into the view. In this example, we are passing in the variable `text`.
  
  * JSX is a syntax extension to JavaScript that looks like HTML and is compiled to a widely supported ES5 syntax called Babel:
  
     ```jsx
     <p>Hello World! Here is {text}</p>
     ```
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we make sure that each component has access to the React library?

  * 🙋 In each React component, we must first import React at the top of the file.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs](https://reactjs.org/docs/hello-world.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Render Elements (5 min) 

* Begin by deleting the `00-practice-app/src` directory and replacing it with `03-Ins_Render-Element/src`.

* Run `npm start` from the command line in `00-practice-app`and demonstrate the following:

  * 🔑 When we run the app, we see that the page renders with some elements like a header, a `p` tag, and an unordered list.
  
  * We also see that the `/src` directory contains an `index.js` file, an `App.js`file , and a components folder like the previous example.

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * We see that `index.js` is the entry point for the application.

  * It imports `App` from `App.js` and uses `ReactDOM.render()` to render it to the element `#root`:
  
     ```js
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';

     ReactDOM.render(<App />, document.getElementById('root'));
     ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:
  
  * Investigating `App.js` allows us to see that this component returns some JSX, including another component called `Welcome`, denoted by the `<Welcome />` tag:

     ```js
     import React from 'react';
     import Welcome from './components/Welcome';

     export default function App() {
       return (
         <div>
           <Welcome />
         </div>
       );
     }
     ```

* Open `00-practice-app/src/components/Welcome.js` in your IDE and explain the following:

  * If we open the `Welcome.js` file, we see that it is directly exporting a component called `Welcome`:

     ```js
     export default function Welcome() {
     ```
  
  * Because it is possible to export more than one component from a file, we use the `default` keyword to tell React that this component should be imported if none is specified.

  * We can see several elements inside the `Welcome` component's return statement:
  
     ```js
     return (
       <div className="container">
         <h1>Hello students!</h1>
         <p>Today we will be learning about the following:</p>
         <ul className="parent">
           <li>React</li>
           <li>Components</li>
           <li>Props</li>
           <li>Babel</li>
         </ul>
       </div>
     );
     ```

  * 🔑 Notice that the JSX elements are wrapped in a single `parent` element.
  
  * Also note that we use `className` instead of `class` inside JSX, to avoid namespace issues with JavaScript `class` keywords.
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can start by creating a component, returning some JSX, and making sure that all the elements are enclosed in a single parent element.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Render-Element/README.md`.

### 12. Student Do: Render Elements (15 min) 

* Direct students to the activity instructions found in `04-Stu_Render-Element/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 🐛 App Renders a Blank Page

   Work with a partner to resolve the following issue(s):

   * As a user, I want to be able to see something rendered to the page when I visit the site.

   ## Expected Behavior

   The page should render an `h1` heading tag that introduces the creator; for example, `<h1>Hello! My name is <insert name here></h1>`.

   There should also be an unordered list of interests following the heading.

   ## Actual Behavior

   The page loads without errors, but the page is empty.

   ## Steps to Reproduce the Problem

   Because this is a new activity, we need to swap out the `/src` folder. Follow these steps to reproduce the problem:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

   3. Run `npm start` and navigate to the page.

   ## 💡 Hints

   Why do we need to import the React library in each component?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * Why is it important to wrap all JSX tags for a single component in a single parent tag?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Render Elements (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with rendering elements in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Parent elements

  * ✔️ `ReactDOM.render()`

  * ✔️ `export`

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * First, as with all React components, we must import React at the top of the component.

  * As we open the `App` component, we can see that `HelloDiv` is exported and rendered inside `App`:

     ```js
     import React from "react";
     import HelloDiv from "./components/HelloDiv";

     function App() {
       return <HelloDiv />;
     }

     export default App;
     ```

  * 🔑 We can see when we open `index.js` that `App` is getting exported and then rendered as the first argument to the `ReactDOM.render()` method.
  
  * 🔑 Also, we can see that the second argument getting passed to `ReactDOM.render()` is the real DOM element that the React app should render to:
  
     ```js
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';

     ReactDOM.render(<App />, document.getElementById('root'));
     ```

  * 🔑 Inside `HelloDiv.js`, similar to normal JavaScript functions, we want to have one return value. As a result, we need to wrap all the elements inside a parent element.
  
  * Again, we import React as with all other functional or class-based components:

     ```js
     import React from "react";

     function HelloDiv() {
       return (
         <div>
           <h1>Hey guys! Im a header!</h1>
           <h2>Things I like!</h2>
           <ul>
             <li>Peas</li>
             <li>Carrots</li>
             <li>Love</li>
           </ul>
         </div>
       );
     }

     export default HelloDiv;
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we avoid getting errors when rendering JSX elements from a component?

  * 🙋 We can wrap them in a single parent element or return an array of JSX elements with a key attribute.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on JSX elements](https://reactjs.org/docs/introducing-jsx.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Components (5 min) 

* Begin by deleting the `00-practice-app/src` directory and replacing it with `05-Ins_Component/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we start the React app, the page renders with the two components found in `/components`.
  
  * Remember that components are JavaScript functions that describe some part of the application's user interface. They usually return some JSX and can also be written as classes.

  * 🔑 Also note that in `App.js`, we are importing the two components `List` and `Nav` at the top of the file. The return statement includes a parent `div` that contains both the `Nav` and `List` components.
  
  * We can see that the `List` component has an attribute called users and is set to the value of `users`, one of the imports:

     ```js
     import React from 'react';
     import List from './components/List';
     import Nav from './components/Nav';

     import users from './users';

     export default function App() {
       return (
         <div>
           <Nav />
           <List users={users} />
         </div>
       );
     }
     ```

  * If we navigate into the `00-practice-app/src/components/Nav.js` file, we can see that this component seems responsible for returning JSX associated with the navigation bar for the page.
  
  * We also see that we have one style object, called `linkStyle`, that is being used for each link:

     ```js
     import React from 'react';

     export default function Nav() {
       const linkStyle = { border: '1px black', padding: '5px' };

       return (
         <nav className="main-header-menu">
           <section
             style={{
               display: 'flex',
               fontFamily: 'helvetica',
               flexDirection: 'row',
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
             }}
           >
             <div style={linkStyle}>
               <a href="#">Home</a>
             </div>
             <div style={linkStyle}>
               <a href="#">Login</a>
             </div>
             <div style={linkStyle}>
               <a href="#">Register</a>
             </div>
             <div style={linkStyle}>
               <a href="#">About</a>
             </div>
             <div style={linkStyle}>
               <a href="#">Contact</a>
             </div>
           </section>
         </nav>
       );
     }
     ```
  
  * If we open `00-practice-app/src/components/List.js`, we can see that this component is mapping over a list of users and rendering `li` elements for each user. The sole responsibility of the component is to return a list of users with the `map()` method.
  
  * The `List` component receives a `props` object. We use destructuring assignment to assign `users` to its own variable.
  
  * Passing `props` to the component allows us to use that data inside the return method.

  * 🔑 The `users` array is being passed to the `List` component as a **prop**:

     ```js
     import React from 'react';

     export default function List({ users }) {
       console.log('List -> users', users);
       return (
         <div className="container">
           <h1>Random Users:</h1>
           <ul className="list-group">
             {users.map((user) => (
               <li className="list-group-item" key={user.login.uuid}>
                 {`${user.name.first} ${user.name.last} (${user.login.username})`}
               </li>
             ))}
           </ul>
         </div>
       );
     }
     ```

  * 🔑 The `map()` method is very similar to a `forEach` loop. The key difference is that `map()` doesn't actually mutate the original data. Instead, it makes a copy of the data and returns a new array.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of using the `map()` method to render data inside a React component?

  * 🙋 The `map()` method allows us to render more than one of the same kind of element with a few lines of code. This is at the core of what it means to have DRY (Don't Repeat Yourself) code. We also have the benefit of leaving the initial data untouched as a result of `map()` returning a new array to work with.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Component/README.md`.

### 15. Student Do: Components (15 min) 

* Direct students to the activity instructions found in `06-Stu_Component/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 📖 Implement Map() Inside a Component

   ## Before We Begin

   Before you begin this activity, complete the following steps:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/src/) and paste it into [00-practice-app](../00-practice-app/).

   3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

      `import 'bootstrap/dist/css/bootstrap.min.css'` 
 
   ## Activity

   Work with a partner to implement the following user story:

   * As a developer, I want to be able to map over a list of data and render components for each piece of data.

   ## Acceptance Criteria

   * It's done when I have modified the `List` component so that inside its `ul` tags, one `li` tag renders for each item in the array of grocery objects being passed via props.

   * It's done when each `li` tag displays the `text` property of each grocery object using the `map()` method.

   ## 📝 Notes

   Refer to the documentation: 

   * [React Docs on lists and keys](https://facebook.github.io/react/docs/lists-and-keys.html)

   * [MDN Web Docs on map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

   ## 💡 Hints

   We only need to modify one file for the activity. Which one is it?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * How could we render a list of only the groceries that have NOT been purchased? Could we use the [filter() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to help us with this?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Components (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with mapping over data inside React components? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ React components

  * ✔️ `map()`

  * ✔️ Immutability

* Be sure to first copy the contents of `06-Stu_Component/Solved/Basic/src` to `00-practice-app` before explaining the following:

  * The assignment was to modify the `List` component so that inside its `ul`, one `li` tag renders for each item in the array of grocery objects being passed via props.

  * First we need to add Bootstrap to the `index.js` file to take advantage of some style classes:

     ```js
     import 'bootstrap/dist/css/bootstrap.min.css'
     ```

  * Next, if we open the `App.js` file, we can see that we are passing the list of groceries to the `List` component as a prop:

     ```js
     function App() {
       return <List groceries={groceries} />;
     }
     ```

  * Now let's look at the `List` component. This file is where we used `map()` to iterate over each grocery item and return a new array of `li` tags for each item.
  
  * When creating a collection of JSX elements using the `map()` method, we must provide a unique `key` attribute to the parent element that gets returned -- usually something specific to the data that you are working with, like an id. This `key` attribute allows React to track changes to the virtual DOM and select specific elements properly.
  
  * We write JavaScript inside JSX by using curly braces (`{}`):

     ```js
     return (
       <ul className="list-group">
         {props.groceries.map(item => (
           <li className="list-group-item" key={item.id}>
             {item.name}
           </li>
         ))}
       </ul>
     );
     ```

  * 🔑 Notice that `map()` returns an array of `li` items. Whenever we try to render an array that contains JSX, React knows to render each JSX element separately.
  
  * React also expects a `key` attribute to exist on each `li` element. This helps React determine which `li` is which.

  * Let's imagine that the user wanted to render a list of items that had not been purchased yet. We could do that using the `filter()` method:

     ```js
     function List(props) {
       const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

       return (
         <ul className="list-group">
           {notPurchased.map(item => (
             <li className="list-group-item" key={item.id}>
               {item.name}
             </li>
           ))}
         </ul>
       );
     }
     ```

  * With the `notPurchased` variable, we are setting it to an array of groceries where the `purchased` property is `false`, and mapping through that instead.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why can't we use something like `forEach` to render an array with React?

  * 🙋 React requires a return value, and `forEach` doesn't return anything. It simply iterates over elements in an array. The `map()` method, however, returns a new array of elements and leaves the original array intact.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: JSX Expressions (5 min) 

* Begin by deleting the `00-practice-app/src` directory and replacing it with `07-Ins_JSX-expressions/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we run this React app, the browser loads a page with some basic styling and what appear to be some JSX variables.

  * 🔑 Open `src/components/JSXVariables.js`. The point of this exercise is writing JSX expressions inside the components.
  
  * **JSX** stands for **JavaScript XML**. JSX allows us to write HTML in React code. It is identical to HTML in almost every way, except for how it is processed: JSX elements are converted to React elements when the code is run.
  
  * Here is an example of some JSX code:

     ```js
     const awesomeElement = <span>JSX is the best!</span>

     ReactDOM.render(awesomeElement, document.getElementById('root'));
     ```

  * Here is an example of the same code without JSX:

     ```js
     const awesomeElement = React.createElement('span', {}, 'JSX is the best!')
     ```

  * The first option is familiar: it is much like normal HTML. JSX is an extension of JavaScript and is translated into normal JavaScript when the code runs.
  
  * One cool thing about JSX is that we can write comments in it by using single curly braces. This might look similar to the expressions we used in Handlebars.js, but we are using a set of single curly braces instead of double curly braces:

     ```js
       return (
         <div className="main-container">
           <div className="container">
             <div className="jumbotron">
               {/* JavaScript expressions can be escaped inside of curly braces */}
     ```

  * We use the `name`, `num1`, and `num2` variables inside the JSX code. If we were to update one of these variables with a new value, the value would be reflected on the page:

     ```jsx
     <h2>My name is {name}. But you can call me...</h2>
     <h1>The JSX Boss!</h1>
     <hr />
     <h2>I can do math: {num1 + num2}.</h2>
     ```

  * We use these curly braces to get JavaScript variables inside the JSX view that React will ultimately render.

  * We can see that rendering variables like `name` is pretty straightforward, but we can also evaluate entire expressions that are inside JSX curly braces. Notice in the following code that we're producing random numbers and reversing `name` as well:

     ```jsx
     <h2>
       I can generate random numbers:
       {Math.floor(Math.random() * 10) + 1},
       {Math.floor(Math.random() * 10) + 1},
       {Math.floor(Math.random() * 10) + 1}.
     </h2>
     <h2>I can even reverse my name: {name.split('').reverse()}</h2>
     ```

  * Given these examples, we can deduce that an **expression** is any valid set of literals, variables, operators, or expressions that evaluates to a single value.

  * Any piece of data that we can assign to a variable is an **expression**. This doesn't include loops or conditionals, which we can deal with in various ways (which we'll cover later).

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first create a set of variables that we know are likely to change with each view that gets rendered. Then we would add that data to the view by using expressions inside the view.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_JSXexpressions/README.md`.

### 18. Student Do: JSX Expressions (15 min) 

* Direct students to the activity instructions found in `08-Stu_JSXexpressions/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 🏗️ Implement JSX Expressions

   ## Before We Begin

   Before you begin this activity, complete the following steps:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

   3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

     `import 'bootstrap/dist/css/bootstrap.min.css'`
   
   ## Activity

   Work with a partner to implement the following user story:

   * As a developer, I want to be able to use JSX expressions to render variables in my components.

   ## Acceptance Criteria

   * It's done when I create the JavaScript variables requested in [JSXVariables.js](../00-practice-app/src/components/JSXVariables.js).

   * It's done when I render a `name` variable that will hold my name.

   * It's done when I render the number of letters in the `name` variable.

   * It's done when I create a variable called `thoughts` that contains a string regarding my thoughts on React.

   ## 💡 Hints

   How can we use the [React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html) to help us while working with JSX?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * What other array methods are available to use on the `name` variable?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: JSX Expressions (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using JSX expressions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Curly braces

  * ✔️ Comments inside JSX

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * First we need to open the `index.js` file and import Bootstrap for styling:

     ```js
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```

* Next, open `00-practice-app/src/components/JSXVariables.js` in your IDE and explain the following:

  * First we add the requested variables near the top of the `JSXVariables.js` file:

     ```js
     const name = 'Christan';
     const thoughts = 'is amazing!!!'
     ```

  * We use these variables and methods inside the JSX expressions, using the curly braces:

     ```js
     function JSXVariables() {
       return (
         <div className="main-container">
           <div className="container">
             <div className="jumbotron">
               <h1>Hi! My name is ({name})</h1>
               <h2>My name has ({name.length}) letters</h2>
               <h2>I think React ({thoughts})</h2>
             </div>
           </div>
         </div>
       );
     }
     ```

  * 🔑 Notice how we can invoke methods directly inside the curly braces. We can also do things like reference the length of the name variable by using `{name.length}`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How is React different from jQuery or vanilla JavaScript in rendering variables on the page?

  * 🙋 Unlike vanilla JavaScript, we don't have to use special methods to set the `innerText` or `innerHTML` of the page. We can simply refer to the variable in curly braces.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
