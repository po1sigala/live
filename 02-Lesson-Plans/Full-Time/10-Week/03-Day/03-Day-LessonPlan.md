## 10.3 - Continuing React State (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../04-Day/04-Day-LessonPlan.md)

## Overview

In this class, we will be introducing students to the concept of React Hooks. We will further expand on their introduction to managing component state and cover side effects, global state, and pure functions. We will introduce three of the most common built-in Hooks: `useState`, and `useEffect`. Once students have experience creating each one, they will create their own Custom Hooks.

## Instructor Notes

- `Summary: Complete activities 19-React/01-Activities/22-Ins_IntroReactRouter/ through 20-react/01-Activities/05-Ins_CustomHook.`

- As in previous lessons, you will want to scaffold out a React application with Create React App at the beginning of class and suggest students do the same. The activities we go over today will only include the applications `src` folder which you will replace in your React app's boilerplate to avoid repetitive installs. It's recommended that you completely restart the dev server between activities.

- Today's lesson will feature more instructor led demonstrations than the previous class, be sure to spend some time before class reviewing the examples.

## Learning Objectives

- Articulate the term "effect" in the broader sense of programming.

- Utilize React's most common built-in Hooks: `useState`, and `useEffect`.

- Transform a React application that manages state with a class component into an application that uses functional components with React Hooks.

- Create a custom reusable Hook that follows the 2 rules of Hooks.

## Slides

[Introduction to React Hooks](https://docs.google.com/presentation/d/1mnPdZODvhGs0j6s4EEuATbmQjFM7XpzFxrUnsOzNsGE/edit?usp=sharing)

## Time Tracker

[10.3 Time Tracker](https://docs.google.com/spreadsheets/d/1ASbpL8oT5cczjoafZYe3-aoT4F1aL3c8TClOOUrV-XQ/edit?usp=sharing)

---

### 1. Instructor Do: Introduce React Router (20 mins)

- Explain that so far we've just been working with React applications with only one page of content, but in the real world, web applications have multiple &mdash; often complex &mdash; pages and routes.

- For example, what if we deployed the previous activity's portfolio website and we wanted to share a URL with someone that they could use to visit the `About` "page"? Currently we don't have a way to do that. The user would still have to navigate to the `About` "page" on their own from scratch every time since the URL in our address bar doesn't actually change as we click through the tabs.

- This may seem trivial now, but what if our application was as large as Amazon.com? What if we wanted to share the URL to a page containing one of millions of different products with someone? How would we get users to where we intend for them to go?

- Explain that thankfully we don't have to code out our own solution to this problem. One of the most popular React companion libraries out today is [React Router](https://reacttraining.com/react-router/).

- Slack out the [link](https://reacttraining.com/react-router/) to the React Router home page and give the class the following overview:

  - React Router is a library made up of special components for conditionally rendering other components based on the current URL path.

  - How React Router works under the hood isn't fundamentally different from the previous example we coded out where we conditionally rendered certain components based on our component state using if/else statements.

  - React Router has modules for routing React applications on the web, in native applications, and on the server. In our case, we're going to be working with React Router on the web.

  - While a little intimidating at first, the [React Router Documentation](https://reacttraining.com/react-router/web/guides/philosophy) is some of the best for any library we've covered so far, full of concise and helpful examples.

  - We won't have enough time to teach _all_ of React Router, nor will students need to know all of the library. Instead we'll be going over the fundamental ~20% of syntax that they're likely going to be using 80% of the time. After that, students should feel more comfortable going through the official documentation for answers.

- Replace your React application's `src` folder with [22-Ins_IntroReactRouter/src](../../../../01-Class-Content/19-React/01-Activities/22-Ins_IntroReactRouter/src).

- This example uses Bootstrap, so if you haven't already, add the Bootstrap CDN to your `index.html` file.

  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"
  />
  ```

- Run the following command in your terminal to install React Router:

  ```
  npm install react-router-dom
  ```

  - Point out that as mentioned earlier, React Router can be used in a variety of different environments. Since we're going to be routing our application on the web, more specifically, to the HTML DOM, we need to install the `react-router-dom` library.

- Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.

- Open your browser to [localhost:3000](http://localhost:3000) and demonstrate the rendered application.

  - At first it may not seem different from the previous example, but point out how the URL in the address bar changes as we click through the navigation items.

  - Also point out how we have a `/contact` and `/contact/learn` page. Point out how `/contact/learn` displays all of the same content as the `/contact` route, but also displays another nested component.

    ![React Router View](Images/16-React-Router-View.png)

  - To demonstrate that we can get back to a particular page via a specific url, navigate to the `/contact/learn` route and copy the entire URL in your address bar. Close this application's tab and paste the URL in a brand new tab; you should be taken back to the expected page.

- Now open up `src/App.js` and begin walking the class through the new code.

  ![React Router Code](Images/17-React-Router-Code.png)

  - Point out how we're importing two components from the `react-router-dom` library: `BrowserRouter` and `Route`. Explain that by importing `BrowserRouter` _as_ `Router`, we're renaming this component to be `Router` inside of this file. Renaming this component is totally optional but a convention used in the React Router documentation.

  - Explain that the `BrowserRouter` (`Router`) component is like the brain of our application's router. We wrap our entire application with this component &mdash; without it, none of the routes we define will work. On its own `Router` doesn't do anything to our application's styles or functionality. It's primarily for setting up any additional configuration we want to give our React Router via props we attach. The default configuration it provides is fine for our purposes, so we don't need to do anything other than include it.

  - Inside of `Router` component, we have a `div` element wrapping our other components. Explain that the `Router` component can only have a single child element, so we wrap the rest of our application's code inside of a `div`.

    - Feel free to demonstrate the code breaking if you were to remove this `div`. Let students know that if they forget this rule, they'll receive a helpful error message reminding them that `Router` can only have one child element.

  - Point out the following:

    - We no longer need a `PortfolioContainer` component. In the previous example, the `PortfolioContainer` component was responsible for keeping track of our application's `currentPage` state. Now that we have React router handling this, we no longer need to do so ourselves.

    - We're importing the `Route` component from `react-router-dom`. Explain that at a minimum, this component expects a `path` prop and a `component` prop. When the pathname in the browsers address bar matches the `Route` component's `path` prop, the specified component will be rendered.

    - We're specifying that the `NavTabs` component should always be rendered regardless of the application's current route.

    - Below the `NavTabs` we render a `Route` component. When the `path` is set to "/", render the `Home` component.

      - Point out the `exact` prop present on this `Route` component. Explain that this means this `Route` will _only_ render the `Home` component when the path is _exactly_ "/".

        - Demonstrate what happens if we were to remove this `exact` prop and navigate to any of the other pages.

        - Both `Route` components would render. Explain the `path` prop means "render if the route _starts_ with this path". By adding the additional `exact` prop, we're saying that we only want this `Route` to render if the path is an _exact_ match.

        - Explain that unlike routes in express, React Router will, by default, render routes inclusively rather than exclusively. This means if two or more routes match the same path, both will render.

    - Go into the `NavTabs.js` file and walk through this component's new code.

      ![NavTabs](Images/18-NavTabs.png)

      - We're importing a `Link` component from the `react-router-dom` library and using that in place of regular anchor tag elements.

      - Explain that the `Link` component navigates our application to another route when clicked, just like an anchor tag. But the `Link` component prevents our entire React application from reloading when we go to different URLs. Instead, only the components that need to change will change.

      - The `Link` component also has some additional functionality, such as allowing us to pass props into the component rendered at the specified route if we wanted to.

      - We can treat this component exactly the same as we would a regular anchor tag, except we'd use the `to` prop rather than `href` to specify the path we want to navigate to.

      - Explain that we can utilize `useLocation` and `location.pathname` in order to get the path we're currently on if we need it. In our case we're using it to determine which `a` element should have the "active" class and be highlighted. (Explain that `useLocation` is a utility from React Router which allows our component to update if the location changes. We'll be digging more into the _Hooks API_ in the next unit.)

  - Go back to the `App` component and once more explain how each `Route` component is rendering its component. Inform students that the major takeaway here is that when the path in the address bar matches the path specified on a `Route` component's `path` prop, the component passed in is rendered.

  - Explain that now we're going to go over the code that renders the nested `/contact/learn` route.

  - Open up the `src/components/pages/Contact.js` and go through the code.

    ![Contact Learn](Images/19-Contact-Learn.png)

    - Point out that the start of the component is nothing out of the ordinary &mdash; we're just rendering some lorem ipsum.

    - Further down below, we're utilizing another `Route` component which only renders the `Learn` component if the route matches `${props.match.url}/learn`.

    - Explain that any component we render using the `Route` component (such as this `Contact` component) is automatically passed a `match` prop object containing information about the `Route` component that rendered it. We can access `props.match.url` to get the path which rendered this route.

      - Using `props.match.url` might be a good idea as opposed to just hard coding `/contact/learn` into the `path` prop (which would also work). This way if we update a route higher up in our application, we don't need to update all of the other nested route `path` props.

### 2. Partners Do: Pupster App (45 mins)

- Slack out `06-Stu_PupsterApp/Solved`

- In this activity students will work with partners to create a full React application from scratch complete with routing and AJAX requests to the [Dog Ceo API](https://dog.ceo/dog-api/).

- **Instructions:** [README](../../../../01-Class-Content/19-React/01-Activities/23-Stu_PupsterApp/README.md)

### 3. Instructor Do: Review Pupster (15 mins)

- As a class, go over [23-Stu_PupsterApp/Solved](../../../../01-Class-Content/19-React/01-Activities/23-Stu_PupsterApp/Solved) version of the previous activity. The most important points to cover are:

  - How each route is rendering each component.

  - How we used axios to create an API helper file.

  - Our use of `componentDidMount` to make the initial call to the dog.ceo API for the `Discover` component.

- Take a few moments to answer any lingering questions.

- Congratulate the class on making it halfway through React! Remind them that this is a difficult subject but they've already come a long way.

### 4. Review Unit 19 (30 mins)

### 5. Break (30 mins)

### 6. Instructor Do: Hooks Slide and Discussion (20 mins)

- Welcome the students to the second main focus of this unit: React Hooks.

- Open the [slide deck](https://docs.google.com/presentation/d/1mnPdZODvhGs0j6s4EEuATbmQjFM7XpzFxrUnsOzNsGE/edit?usp=sharing)

1. **Discuss Managing State**: Take a moment to talk about managing state.

- Ask the students to discuss amongst each other how they've managed React state thus far.

* Ask them what is one of the biggest issues of sharing state between Class and Functional components.

2. **React Hooks `useState`**: Today's class will discuss two react hooks, one of them being `useState`, which offers a way for functional components to manage state directly without having to get the data through props drilling.

3.**Class Components vs Functional Components**: Class components paired with the `setState` method is the most common way to manage state.

- Benefits:

* Setting state will force the component to re-render. This ensures that the component and all of its children will be up-to-date with the latest state.

- Drawbacks:

* Since state only flows in one direction, all components that need to use the state must be children of the stateful component.

- Updating state from deep within the component hierarchy is often difficult.

* You are forced to use the keyword `this` and use a class component.

- The `useState` hook is another tool that can be used to manage state through Functional Components.

* Benefits:

- No need to receive state from props as a Child Component.

* Easier to read and debug due to less code.

- No need to use this

* Access to "Hook"

- Drawbacks:

* Will need to use other “Hooks” to manage complex levels of state.

- As of React 16.8, Facebook recommends to use functional components whenever possible.

4. **Hooks**: Hooks are functions that let you "hook into" React state and lifecycle features from function components.

- React has no plans to deprecate class components, but Hooks can do everything a class component can and more.

5. **The 2 Hooks**: We will be covering two different kind of Hooks.

- `useState` allows you to use state in a functional component.

* `useEffect` replaces lifecycle methods like `componentDidMount` and `componentDidUpdate`.

- An **effect**, also commonly referred to as a **side effect**, is a term used to describe the result of affecting the “outside world”.

* This includes, but is not limited to: Data fetching, subscribing to events, and changes to the DOM.

- We will be covering the built-in Hooks `useState` and `useEffect` but emphasize that there are many more Hooks. The strong developer community around React has created a plethera of different Custom Hooks that you can plug into your applications.

* Custom Hooks can be any reusable function, often built from logic extracted from existing functions.

6. **2 Rules of Hooks**: There are 2 rules of Hooks that must be complied with:

- Only call Hooks from top-level components. This means **never** call Hooks from within loops, conditionals, or nested functions.

* It is important that Hooks are always called in the same order, like component lifecycle methods.

- It is also what makes it possible for React to store the state of Hooks when using useState or useEffect.

7. **2 Rules of Hooks**

- Hooks may only be called from React components. **Never** call a Hook from a regular JavaScript function.

* This makes it so that all stateful logic is easy to find for the developer.

### 7. Instructor Do: useState Demo (10 mins)

- Run `08-Ins_useState` by copying the `src` folder into your prepared CRA application. Navigate to http://localhost:3000/ in your browser and demonstrate the following:

  - When the application loads, 'Status' is set to the default string, 'content'.

  - Clicking the 'Encourage Laziness' button changes 'Status' to 'lazy'.

  - Clicking the 'Fill with Determination' button changes 'Status' to 'determined'.

- Open [01-Ins_useState/src/App.js](../../../../01-Class-Content/20-react/01-Activities/01-Ins_useState/src/App.js) in your IDE and explain the following:

  - From React, we import `useState`.

  ```js
  import React, { useState } from "react";
  ```

  - `useState` is a built-in Hook that will _always_ return an array of two elements. The first returned element is a snapshot of the current state. The second returned element is a function that allows us to _overwrite_ the current state.

  - We destructure the array returned from `useState` into two variables: `developerState` and `setDeveloperState`, and initialize state with an object containing `mood`, `lifeLongLearner` and `excitementLevel` properties.

  ```js
  const [developerState, setDeveloperState] = useState({
    mood: "content",
    lifeLongLearner: true,
    excitementLevel: 9000,
  });
  ```

  - 📝 The function will _not_ merge with the existing state as `setState` does. This means that whatever is passed into useState will _overwrite_ the object that was previously there.

  - The `changeMood` function accepts a parameter, `mood`, and calls the `setDeveloperState` method:

  ```js
  const changeMood = (mood) => {
    setDeveloperState({
      mood: mood,
      lifeLongLearner: developerState.lifeLongLearner,
      excitementLevel: developerState.excitementLevel,
    });
  };
  ```

  - 📝 If we want to change _just one_ property, such as `mood`, with `setDeveloperState`, we need to update the entire object, not just the property in question. This is because `setDeveloperState` _overwrites_ the previous state, instead of merging it with the existing state, as `this.setState` does.

  - 💡To avoid repeating yourself, you can shorten this code by using the spread notation `...`. Like `setDeveloperState({...developerState, mood})`.

  - Setting the `onClick` attribute to an arrow function that _returns_ the function that we want to call when the button is clicked.

  ```js
  <button onClick={()=>changeMood("lazy")}>Encourage Laziness</button>
  <button onClick={()=>changeMood("determined")}>Fill with Determination</button>
  ```

  - If we were to pass it the function by itself, then the `changeMood` function would be _called_ directly, resulting in an infinite loop.

- Answer any questions before beginning the activity.

### 8. Students Do: useState Activity (15 mins)

Files: [09-Stu_useState/Unsolved](../../../../01-Class-Content/20-react/01-Activities/02-Stu_useState/Unsolved)

```md
In this activity we will practice using the useState hook in React.

## Instructions

- Replace your React application's src folder with [Unsolved/src](Unsolved/src).

- If you created a new React app, you will need to add the Bootstrap link to `index.html`.

- Start the application in dev mode by running `npm start` in your terminal.

- Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

- Update this application to accomplish the following:

- In `pages/Signup/index.js`, replace `NAME_HERE` and `PASSWORD_HERE` with code that will display both the name and password.

- The state of the Signup component should be handled by the useState Hook.

- When the value of an input field changes, the state should update, causing the component to render.

- Upon form submission, the `handleSubmit` method should `console.log` the username and password.
```

### 9. Instructor Do: Review useState Activity (10 mins)

- Run [02-Stu_useState/Solved](../../../../01-Class-Content/20-react/01-Activities/02-Stu_useState/Solved) by copying the `src` folder into your prepared CRA application. Navigate to http://localhost:3000/ in your browser and demonstrate the following:

  - Email and password values entered into the input fields are rendered in the DOM.

- Open `src/pages/Signup/index.js` and explain the following:

  - We import `useState` from `react`:

  ```js
  import React, { useState } from "react";
  ```

  - Using array destructuring, we initialize `username` and `password` variables for state and `setUsername` and `setPassword` setter methods, by invoking `useState` twice:

  ```js
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  ```

  - 🔑 Since we're not specifying a default value, we won't pass anything to `useState()`.

  - 🎗️ `useState` overwrites the current state instead of merging state like `this.setState` does.

  - In the `<input>` components in the `return` block, we use the `onChange` method to call our setter methods for username and password and pass each the value of the target that triggered the event:

  ```js
    <Col size="12">
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        onChange={e => setUsername(e.target.value)}
      />
    </Col>
  </Row>
  <Row className="form-group">
    <Col size="12">
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        name="password"
        onChange={e => setPassword(e.target.value)}
      />
    </Col>
  ```

- Some students may have tried to use the `value` attribute. Ask them why using `value` with `onChange` might be a bad idea.

- It all comes down to controlled input vs uncontrolled input.

  - **Controlled input** accepts its current value as a prop and has a callback that allows you to change its value. Whenever `onChange` updates its value, it's essentially the input controlling itself.

  - **Uncontrolled input** is an input that gets its value from somewhere else. In our case, if `value={username}`, then the input would be getting its value from the state.

  - The combination of the two would result in the component going from uncontrolled to controlled, which is considered bad practice.

### 10. Instructor Do: useEffect Demo (10 mins)

- Next, we will introduce students to the `useEffect` Hook.

  - Let the students know that effects, often referred to as side effects, are bits of code responsible for the modification of state, often in the "outside world". In React, effects are most commonly used for data fetching and manually changing the DOM.

  - For example, if one were to create a method that is responsible for creating a user, they could separate it into one regular method that creates the object/validates the data and one effect method that saves the user to a database.

- Open up [03-Ins_useEffect/App.js](../../../../01-Class-Content/20-react/01-Activities/03-Ins_useEffect/App.js) in your IDE.

  - Let the students know that `useEffect` is a method that takes two arguments.

  - The first argument is a function that you want to run after the component mounts.

  - The second argument is an array of dependencies, commonly referred to as "deps". Every time the component re-renders, the `useEffect` Hook will check to see if any of the values in its dependency array have changed. If they have, then the function that you supplied as the first argument of `useEffect` will run again. If not, React will skip the effect for that particular render.

  - Ex: If `[props.name]` is provided, then `useEffect` will run once upon initial page render, then once every subsequent render that is caused by a change in `props.name`.

  - When an empty array is provided, `useEffect` will only run when the component renders the first time.

  - Explain that if we supplied `developerState` as a dependency, it would cause an infinite loop. This is because every single time `developerState` would change, it would call `useEffect`, forcing `developerState` to change again.

  ```js
  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    const developer = getDeveloper();
    setDeveloperState(developer);
    console.log("Developer State:");
    console.log(developerState);
  }, []);
  ```

- Open your browser again and demonstrate that the state appears in the console once upon page render, then after every time a button is pressed.

  - Recall that the button click still uses the `useState` hook, which causes the component to re-render.

### 11. Students Do: useEffect Activity (20 mins)

Files: [04-Stu_useEffect/Unsolved/src/App.js](../../../../01-Class-Content/20-State/01-Activities/04-Stu_useEffect/Unsolved/src/App.js)

```md
In this activity we will practice using the useState and useEffect Hooks in React by transforming a stateful class component into a functional component with React Hooks.

## Instructions

- Replace your React application's src folder with [Unsolved/src](Unsolved/src).

- If you created a new React app, you will need to install axios and React Router.

- Start the application in dev mode by running `npm start` in your terminal.

- Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

- Update this application to accomplish the following:

- Create a functional component in place of the class component.

- Replace `this.state` and all instances of `this.setState` using the `useState` Hook.

- Update the component with the `useEffect` Hook to eliminate the need for `componentDidMount`.
```

### 12. Instructor Do: Review useEffect (10 mins)

- Run [04-Stu_useEffect/Unsolved](../../../../01-Class-Content/20-State/01-Activities/04-Stu_useEffect/Solved) by copying the `src` folder into your prepared CRA application. Navigate to http://localhost:3000/ in your browser and demonstrate the following:

  - The application immediately queries the Wikipedia API based on input.

- Open [04-Stu-useEffect/Solved/src/pages/Search/index.js](../../../../01-Class-Content/20-State/01-Activities/04-Stu_useEffect/Solved/src/pages/Search/index.js) and explain the following:

  - All of the states have been set up at the top of the file.

  ```js
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  ```

  - 📝 `search` is the only term provided with a default value. We could also create a single object to hold the values, but in using separate Hooks our code is more readable and manages state better. We pass `search` to the `useEffect` hook in the 'deps' array. `useEffect` will run when the component mounts, then after each time the value in the search input field changes.

  ```js
  useEffect(() => {
    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[1][0]);
        setUrl(res.data[3][0]);
      })
      .catch((err) => setError(err));
  }, [search]);
  ```

  - The `if(!search)` conditional ensures that we do not run a query if the input field is empty.

  - The `handleInputChange` method now simply uses our `setSearch` hook.

  ```js
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  ```

- Ask students the following questions:

  - ☝️ What was the point of this? (Feel free to make a bad pun here).

  - 🙋 Writing functional components is much cleaner. Using Hooks allows you to write fewer lines of code and manage your state in a less complex way. (No `this` keyword required!)

  - ☝️ If we use Hooks, can state be used by other components?

  - 🙋 No. The state used within a single component cannot be used by different components.

  - ☝️ Can you think of a concept that would allow us to share state across components?

  - 🙋 For now we can use props, but in the future they will learn a better way.

### 13. Instructor Do: Custom Hooks Demo (10 mins)

- Take a moment to ask the class to recite the two rules of Hook.

* Only call Hooks from top-level components. This means **never** call Hooks from within loops, conditionals, or nested functions.

- Hooks may only be called from React components. **Never** call a Hook from a regular JavaScript function.

* Next, introduce the class to the concept of custom Hooks. Remind the class that the two rules of Hooks still apply to custom Hooks.

- Custom Hooks can be practically anything! Custom Hooks are best suited to extract logic that may be repeated.

* Custom Hooks are a great way to keep your React functions pure.

- In addition to the two rules of Hooks, let students know that custom Hooks must start with the word `use` so that React can ensure that your code is adhering to the two rules of Hooks.

* Let students know that just as with `useState` and `useEffect`, different components that use the same custom Hook do **not** share the same state.

- Open [CustomHook Demo](../../../../01-Class-Content/20-state/01-Activities/05-Ins_CustomHook/) in your browser.

* Show students that when you change the value of the `status` input field, the corresponding section in the card updates.

- Open the console and demonstrate that every change in the status field causes the state object to be logged.

* Open [useUserStatus.js](../../../../01-Class-Content/20-state/01-Activities/05-Ins_CustomHook/src/utils/useUserStatus.js) in your IDE.

- The purpose of this Hook is to set the status of the Developer. The property of the `useUserStatus` will be an object with the properties `value` and a method for changing the value named `onChange`.

* Point out that the Custom Hook is a top level function. Within it we can use Hooks like `useEffect` and `useState`.

- We set `statusState` to an empty string.

```js
import { useState } from "react";

const useUserStatus = () => {
  let [statusState, setStatus] = useState("");

  return {
    status: {
      value: statusState,

      onChange: (e) => setStatus(e.target.value),
    },
  };
};

export default useUserStatus;
```

- Open [App.js](../../../../01-Class-Content/20-state/01-Activities/05-Ins_CustomHook/src/App.js) and explain the following:

* The `useEffect` hook is **only** being used to show the status every time that `stateStatus` changes.

```js
import React, { useState, useEffect } from "react";

import "./App.css";

import useUserStatus from "./utils/useUserStatus";

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 1000,

    lifeLongLearner: true,

    name: "Riley",
  });

  const { statusState, status } = useUserStatus();

  useEffect(() => {
    console.log(statusState);
  }, [statusState]);

  return (
    <div className="card">
      <div>Name: {developerState.name}</div>

      <div>Status: {statusState}</div>

      <div>Lifelong learner: {developerState.lifeLongLearner.toString()}</div>

      <div>Excitement Level: {developerState.excitementLevel}</div>

      <div className="btn-group">
        <form className="form-group">
          <label htmlFor="status">Enter your Status: </label>

          <input className="form-control mb-4" id="status" {...status} />
        </form>

        <button
          onClick={() =>
            setDeveloperState({
              ...developerState,

              excitementLevel: developerState.excitementLevel + 1000,
            })
          }
          className="btn btn-success"
        >
          Increase Excitement Level
        </button>

        <button
          onClick={() =>
            setDeveloperState({
              ...developerState,

              excitementLevel: developerState.excitementLevel - 1000,
            })
          }
          className="btn btn-success"
        >
          Decrease Excitement Level
        </button>
      </div>
    </div>
  );
}

export default App;
```

### 14. Students Do: Custom Hooks (15 mins)

- Introduce [06-Stu_CustomHook/Unsolved](../../../../01-Class-Content/20-State/01-Activities/06-Stu_CustomHook/Unsolved)

- In this activity we will practice using Custom Hooks by creating a `useDebounce` Hook that will delay the invoking of a function for a given number of milliseconds.

```md
- Replace your React application's src folder with [Unsolved/src](Unsolved/src).

- Start the application in dev mode by running `npm start` in your terminal.

- Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

- Update this application to accomplish the following:

- Create a new Custom Hook called `useDebounce` that takes in the two parameters `value` and `delay`.

- Use `setTimeout` to handle the value of the debouncer.

- Update the `Search` page so that the useEffect Hook is listening for the value returned from the `useDebounce` Hook. Pass in a `delay` value of 500.

- The finished application should only search for a new article if there has been a period of 500 milliseconds without any user input.
```

### 15. Instructor Do: Review Custom Hooks (10 mins)

- Open [06-Stu_CustomHook/](../../../../01-Class-Content/20-State/01-Activities/06-Stu_CustomHook/) in your browser.

  - Type `software developer` into the Article Search Bar.

  - Point out that the article below the search bar only updated once you finished typing.

  - Slowly type out each letter of `software developer` and demonstrate that the API call occurs if there has been a period of over 500 milliseconds without any input changing.

- Open [06-Stu_CustomHook/Solved/src/utils/debounceHook.js](../../../../01-Class-Content/20-State/01-Activities/06-Stu_CustomHook/Solved/src/utils/debounceHook.js) in your IDE and point out the following:

  - We will use the `useEffect` and `useState` Hooks in our custom Hook.

  - Our Custom Hook starts with the word `use`.

  - `useDebounce` takes in two parameters: `value` and `delay`.

  - The state is controlled with a Hook at the top level of our `useDebounce` Hook.

  - We create a `setTimeout` method and set it to a variable called `handler` so that we may later `clearTimeout`.

  - We `return` a function that clears the timeout.

  - Inside the `useEffect` Hook, if a `return` statement is provided, then the function that is returned gets run every time the component unmounts **or** right before the next `useEffect` is called. This is known as a "cleanup" function because it is designed to tie up the loose ends in effects that are dependant on outside effects. In our case, the outside effect is the `handler` timeout we created.

  ```js
  import { useEffect, useState } from "react";

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value or delay changes
        return () => {
          clearTimeout(handler);
        };
      },
      // Only call the effect if value or delay changes.
      [value, delay]
    );

    return debouncedValue;
  };
  export default useDebounce;
  ```

- Open [06-Stu_CustomHook/Solved/src/utils/debounceHook.js](../../../../01-Class-Content/20-State/01-Activities/06-Stu_CustomHook/Solved/src/utils/debounceHook.js) in your IDE and point out the following:

  - The `debouncedSearchTerm` variable is set up **outside** of the `useEffect` Hook. We pass in the existing `search` variable that is tied to our component state and pass in 500 as our second parameter.

  - First, we will check to make sure that the input text is not empty.

  - Then we ensure that `debouncedSearchTerm` is not `undefined` or `null`.

  - `useEffect` receives `debouncedSearchTerm` so that it will only run when the debounced term changes instead of running whenever `search` changes.

```js
const debouncedSearchTerm = useDebounce(search, 500);

useEffect(() => {
  document.title = "Wikipedia Searcher";
  if (!search) {
    return;
  }
  if (debouncedSearchTerm) {
    API.searchTerms(search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticleState({
          title: res.data[1][0],
          url: res.data[3][0],
        });
      })
      .catch((err) => setError(err));
  }
}, [debouncedSearchTerm]);
```

### 16. Instructor Do: Recommend Material (0 mins)

- Recommend students go through the following material at home before next class if possible. These articles will help them better understand the material covered today in class.

- [Lifting State Up](https://facebook.github.io/react/docs/lifting-state-up.html)

- [Uncontrolled Components](https://facebook.github.io/react/docs/uncontrolled-components.html)

- [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

- [React Lifecycle Methods and When to Use Them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

- Congratulate the class on making it halfway through React! Remind them that this is a difficult subject but they've already come a long way.

### 17. End (0 mins)

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
