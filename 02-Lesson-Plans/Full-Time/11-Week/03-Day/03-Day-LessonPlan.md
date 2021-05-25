# XX.X Full-Time Lesson Plan: { @TODO Descriptive and Professional Title of This Day's Topics }  (Note: Full-Time Wednesday LP using PT odd unit's .3/even unit's .1 LPs)

## Overview

n this class, students will be introduced to complex state management within their apps. They will learn about key state management concepts like providers, consumers, reducers, and actions. Students will also work in groups to refactor a fully functioning MERN-stack app to use a GraphQL API built with Apollo Server and Apollo Client.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` through `08-Stu_Actions`.

* Be sure to create a practice React app before class, by navigating to `01-Class-Content/22-State/01-Activities` and running the following command:

  ```sh
  npx create-react-app 00-practice-app
  ```

* Once your practice React app has been created, you might encounter some issues regarding conflicting versions of `eslint`. If this is the case, also run the following:

  ```sh
  echo "SKIP_PREFLIGHT_CHECK=true" > .env
  ```

* Install the [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for your browser. It is used in the first instructor demo.

* Inform students that not every React application calls for the use of complex state management. Explain that it might be beneficial only when data needs to be accessible by many components at different nesting levels.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Identify use cases for Redux.

* Implement Redux to manage state in a React application.

* Implement the Stripe payment platform in a MERN-stack application.

* Explain and implement the Context API.

## Slide Deck

* [Unit 22 Slide Deck](https://docs.google.com/presentation/d/1j5Y-MLor_nfMfQA3Znt_MOTRPAVRbsRFGFFt38iN6p4/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project      | 0:05     |
| 10:05AM| 2   | Student Do: Mini Project           | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project    | 0:10     |
| 11:15AM| 4   | Introduce Homework                 | 0:05     |
| 11:20AM| 5   | FLEX                               | 0:30     |
| 11:50PM| 6  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:00PM| 7  | BREAK                               | 0:30     |
| 12:30PM| 8  | Instructor Demo: Providers          | 0:05     |
| 12:35PM| 9  | Student Do: Providers               | 0:15     |
| 12:50PM| 10 | Instructor Review: Providers        | 0:10     |
| 1:00PM | 11 | Instructor Demo: Consumers          | 0:05     |
| 1:05PM | 12 | Student Do: Consumers               | 0:15     |
| 1:20PM | 13 | Instructor Review: Consumers        | 0:10     |
| 1:30PM | 14 | Instructor Demo: Reducers           | 0:05     |
| 1:35PM | 15 | Student Do: Reducers                | 0:15     |
| 1:50PM | 16 | Instructor Review: Reducers         | 0:10     |
| 2:00PM | 17 | Instructor Demo: Actions            | 0:05     |
| 2:05PM | 18 | Student Do: Actions                 | 0:15     |
| 2:20PM | 19 | Instructor Review: Actions          | 0:10     |
| 2:30PM | 20 | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini-Project (5 min)

* Navigate to `28-Stu_Mini-Project/Solved` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `localhost:3000/` in your browser and demonstrate the following:

  * 🔑 As developers, we are often asked to take an existing, functional app and update it to incorporate a new technology. Our task is to convert the app from using an existing RESTful API to an app that uses a GraphQL API built with Apollo Server and Apollo Client.

  * 🔑 When we open the homepage `localhost:3000/` route, we see a list of technologies.

  * 🔑 When we navigate to `localhost:3000/matchup`, we are presented with a form for the user to input matchup choices.

  * 🔑 When we click on the `Create Matchups` pages, we navigate to a new page at `localhost:3000/matchup/<id>`. That page shows only the information for our new matchup.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We use Apollo Client to set up our React.js front end to send requests and Apollo Server on the back end to create a GraphQL API.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Unit 21 Mini-Project: Tech Matchup App

  In this mini-project, you are given a fully functioning MERN-stack application that allows users to create a matchup between two technologies and vote on their favorite technology. The application currently uses a RESTful API. You will need to refactor it to use a GraphQL API built with Apollo Server and Apollo Client. You will also use React Router's `<Switch>` component in the routes.

  ## User Stories

  Work with your group to resolve the following issues:

  * As a user, I want to see a list of matchups.

  * As a user, I want to be able to create a matchup between two technologies.

  * As a user, I want to be able to vote for one of the two technologies in the matchup.

  * As a user, I want to see the current number of votes for each technology in the matchup.

  * As a user, if I reach a page that doesn't exist, I want to see a 404 page.

  ## Acceptance Criteria

  The mini-project is complete when the following criteria are met:

  * The `/` homepage route renders a list of technologies.

  * The `/matchup` route renders a form to choose two technologies to create a matchup.

  * The `/matchup/:id` route renders a matchup to vote on.

  * An Apollo Server is set up to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

  * Apollo Client is set up so that requests can communicate with an Apollo Server.

  * A 404 page `NotFound` is rendered if the user tries to access a page that doesn't exist.

  ---

  ## 💡 Hints

  * After implementing GraphQL on the server, what tool can you use to test the queries and mutations?

  * How can we use `<Switch>` to render the `NotFound` page?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Incorporate user authentication so that only logged-in users can create and vote on matchups.

  ---
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Mini-Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `const server = new ApolloServer()`

  * ✔️ `typeDefs`

  * ✔️ `resolvers`

  * ✔️ `ApolloClient`

  * ✔️ `ApolloProvider`

  * ✔️ `useQuery()`

  * ✔️ `useMutation()`

  * ✔️ `<Switch>`

* Open `28-Stu_Mini-Project/Main/server/server.js` in your IDE and explain the following:

  * We add the `ApolloServer` class to the `server.js` file. We also import the `schemas` directory which holds our `typeDef` and `resolver` files:

    ```js
    const { ApolloServer } = require('apollo-server-express');
    const { typeDefs, resolvers } = require('./schemas');
    ```

  * 🔑 Next, we create a new instance of the `ApolloServer` class, which gives us access to the core functionality needed to implement our GraphQL API. We also pass in our `typeDefs` and `resolvers`, which are used to define the shape of our data and the functionality needed to retrieve it:

    ```js
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    ```

* Open `28-Stu_Mini-Project/Main/server/schemas/typeDefs.js` in your IDE and explain the following:

  * To define our data, we import `gql` from `apollo-server-express` and create a variable called `typeDefs`:

    ```js
    const { gql } = require('apollo-server-express');
    const typeDefs = gql
    ```

  * 🔑 Then, we add our type definitions. An object type is used to define an object that the client may need to interact with, such as a `Matchup`:

    ```js
    type Matchup {
      _id: ID!
      tech1: String!
      tech2: String!
      tech1_votes: Int
      tech2_votes: Int
    }
    ```

  * 🔑 We use a Query type to define the entry point for our data. The `Tech` query provides an entry point for an array of all the Tech objects. The `matchup` entry point uses an argument to point to a single matchup object:

    ```js
    type Query {
      tech: [Tech]
      matchups(_id: String): [Matchup]
    }
    ```

  * 🔑 We use a mutation type to provide an entry point to modify our data. The `createMatchup` mutation creates a new `Matchup` object. The `createVote` mutation modifies the vote count on an existing `Matchup` object:

    ```js
    type Mutation {
      createMatchup(tech1: String!, tech2: String!): Matchup
      createVote(_id: String!, techNum: Int!): Matchup
    }
    ```

* Open `28-Stu_Mini-Project/Main/server/schemas/resolvers.js` in your IDE and explain the following:

  * To write the functions needed to populate our data, we first import our existing models:

     ```js
     const { Tech, Matchup } = require('../models');
     ```

  * 🔑 Then, we use the models to read and write data from our MongoDB database. For each query or mutation to work, we must write an associated function:

    ```js
    tech: async () => {
      return Tech.find({});
    }
    ```

* Open `28-Stu_Mini-Project/Main/client/src/App.js` in your IDE and explain the following:

  * Now that we have the GraphQL API set up on our back end, we can use `Apollo Client` to provide the front-end functionality needed to send requests and handle returned data.

  * 🔑 We start by importing the `ApolloClient` and `InMemoryCache` classes from `apollo/client` as well as the `ApolloProvider` component:

    ```js
    import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
    ```

  * 🔑 This will create a new instance of the `ApolloClient` class. This will give us the key functionality that we need to interact with our GraphQL API:

    ```js
    const client = new ApolloClient({
      uri: '/graphql',
      cache: new InMemoryCache(),
      );
    ```

  * 🔑 We then wrap the `ApolloProvider` component around our app so that we can access the functionality we need in our components:

    ```js
    <ApolloProvider client={client}>
    ...
    </ApolloProvider>
    ```

* Open `28-Stu_Mini-Project/Main/client/src/utils/queries.js` in your IDE and explain the following:

  * 🔑 We write a query in the GraphQL query language. To work with our hooks, we then wrap our query with a `gql` function and export it:

    ```js
    export const QUERY_TECH = gql`
      query tech {
      tech {
        _id
        name
      }
    }
    `;
    ```

* Open `28-Stu_Mini-Project/Main/client/src/utils/mutations.js` in your IDE and explain the following:

  * We follow the same process to write and export our mutations, making sure our entry point and fields match our schema exactly and that a variable is declared to hold data that we will need to pass back to our mutation:

    ```js
    export const CREATE_MATCHUP = gql`
      mutation createMatchup($tech1: String!, $tech2: String!) {
      createMatchup(tech1: $tech1, tech2: $tech2) {
        _id
        tech1
        tech2
      }
    }
    `;
    ```

* Open `28-Stu_Mini-Project/Main/client/src/pages/Matchup.js` in your IDE and explain the following:

  * 🔑 In the component where we want the query and mutation to execute, we import the query and mutation as well as the `useQuery()` and `useMutation` hooks:

    ```js
    import { useMutation, useQuery } from '@apollo/client';
    import { QUERY_TECH } from '../utils/queries';
    import { CREATE_MATCHUP } from '../utils/mutations';
    ```

  * 🔑 We apply the `useQuery()` hook to the query. This will execute the query when the page renders, and return a JSON object that can be used to populate the page:

    ```js
    const { loading, data } = useQuery(QUERY_TECH);
    ```
  
  * 🔑 When we apply the `useMutation()` hook to the imported mutation, it does not execute right away. Instead, it returns a mutation function that we can apply in our code:

    ```js
    const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);
    ```

  * 🔑 We apply the `createMatchup` mutation function inside the form submit handler to fire when the button is clicked and the form is submitted. When the mutation is executed, a JSON object is returned:

    ```js
    const { data } = await createMatchup({
        variables: { ...formData },
      });
    ```

* Open `28-Stu_Mini-Project/Main/client/src/App.js` in your IDE and explain the following:

  * 🔑 We use a `<Switch>` component to wrap our routes. When we use `<Switch>`, the first -- and only the first -- match of a route will be rendered. This will render our nested routes properly:

    ```js
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/matchup">
        <Matchup />
      </Route>
      <Route exact path="/matchup/:id">
        <Vote />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use hooks to retrieve and modify data from our GraphQL API?

  * 🙋 We use the `useQuery()` and `useMutation()` hooks to send requests to our GraphQL API and handle the returned data. The data is returned in a JSON object, which can then be used to display information on our page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo Docs on Apollo Client](https://www.apollographql.com/docs/react/why-apollo/), the [Apollo Docs on Apollo Server](https://www.apollographql.com/docs/apollo-server/), and the [React Router Docs on Switch](https://reactrouter.com/web/api/Switch,) and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Homework (5 min)

* Navigate to `02-Homework/Main` in your command line and run `npm install` and `npm run develop`.

* **Note** If you get an `eslint` preflight check error when running the Homework demo, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. You can also avoid the error by running the Homework demo from the class repo, to avoid conflicting `eslint` installations.

* Open `localhost:3000` in your browser and demonstrate the following:

  * For this week's homework, we are taking an existing book search engine that was built using a RESTful API and refactor it to use a GraphQL API.

  * When the app loads, we are presented with an option to "Search for Books" as well as an option to "SignUp/Login".

  * When we enter a word and click on the search button, a list of related books is returned, including the book’s title, author, description, image, and a link to that book on the Google Books site.

  * If we are logged in when we execute a search, we are also presented with an option to save the book to our account.

  * This app is a great way to practice the skills to build a secure, data-driven site that provides a personalized account for each user.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to implement a GraphQL API in a full-stack MERN app.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We will use `Apollo Server` to set up our back end and `Apollo Client` to set up our front end to send requests. We will also write queries and mutations using the GraphQL query language, and use JWT to provide user authentication.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Most modern apps require developers to handle user input and store data. Increasingly, apps are also personalized, with each user having access to their own data stored in accounts. This homework is an opportunity to practice the fundamental skills of implementing a GraphQL API in a full-stack MERN app and using authentication to personalize the experience for each user.

* Ask TAs to direct students to the Homework Requirements found in `02/Homework/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this unit or getting started on the homework.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [Unit 22 slide deck](https://docs.google.com/presentation/d/1j5Y-MLor_nfMfQA3Znt_MOTRPAVRbsRFGFFt38iN6p4/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **State Management in React**

    * This unit will be an introduction to state management using React and Redux. In today's class, we will cover providers, consumers, reducers, and actions.

  * **Pure vs. Impure Functions**
  
    * We need to understand the difference between the two because this distinction relates to the way state is managed by React and Redux.
  
  * **Let’s Talk About Pure Functions**

    * Pure functions keep data passed to the function untouched by the function itself.

    * **Pure functions:**

      * Are straightforward with singular intention.

      * Yield the same result when passed the same arguments -- every time.

      * Store modified data in new variables.

    * **Impure functions:**

      * Include side effects like database and network calls.

      * Often modify the values that are passed in.

  * **Impure and Pure Examples**
  
    * Pure function -- Regardless of what number we pass in, we will get a predictable result every time.

    * Impure function -- The data that gets passed to impure functions can be mutated. Impure functions might include calls to a database or API, possibly returning something unexpected.
  
  * **Creating Pure Functions**
  
    * Creating pure functions is an effective technique to apply to all of your JavaScript, but it is especially useful when creating React components.
  
  * **React Hooks and Context API**

    * React manages state through a combination of Hooks and the Context API.

    * React Context enables us to share data globally and follows a very similar design pattern to Redux, a similar but separate library.

    * A good use for the Context API would be making a user’s account information available to all subscribing components.
  
  * **Redux**
  
    * Redux is another library that helps us manage the state of complex applications.

    * Redux requires a lot of boilerplate code, but its utility increases exponentially with an application’s complexity.

    * Instead of learning about the Redux library, we will focus on the concepts and design patterns that Redux uses.
  
  * **The React Parts**
  
    * Today we will cover three core React state components. Some of these will overlap with Redux:

      * **Providers** allow child components to subscribe to context changes.

      * **Consumers** allow for consumption of the data made available by the provider.

      * **Reducers** take the current state and the desired action and return a new copy of the state object.
  
  * **The Redux Parts**

    * We will also cover three core Redux concepts:

      * **Actions** are declarative objects that define what the store should do to the state.

      * **Reducers** handle all actions by taking in the previous state and returning a new state object.

      * **Store** grants the entire application access to the reducer function and the global state.
  
  * **The Principles of Redux**
  
    * Redux comprises three core principles.
  
  * **Principle 1: State Tree**

    * Every stateful aspect of your application can be represented by a single JavaScript object, known as the **state tree**.
  
  * **Principle 2: Read-Only**

    * The state tree is **read-only** -- meaning that to change the state tree, you need to dispatch an action.

    * The action describes the change that the state will undergo, in a declarative manner.
  
  * **Principle 3: Pure Functions**
  
    * Try to make your reducers pure functions. It is considered bad practice to use side effects inside reducer functions.

  * **Mini-Project**

    * For this unit's mini-project, you will build a digital garage!

* Navigate to `28-Stu_Mini-Project/Main` in your command line and run `npm install` and `npm start`.

* Open `28-Stu_Mini-Project/Main` in your browser to demonstrate the following:

  * In this assignment, we will build a digital garage, replacing React Hooks with Redux.
  
  * This will be a fun way to implement Redux into an application and provide global state to the components.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to implement Redux into an existing application and how to manage complex state.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This project expands on the React Hooks concepts that we have already learned. Using Redux, we will no longer be restricted to declaring state on a per-component basis.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Complex state management is a valuable skill to employers because many large-scale web applications use some state management framework. If you encounter this concept in job interviews or other parts of the application process, you will be prepared to address it!

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 9. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 12. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 15. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 18. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
@TODO © YEAR Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.