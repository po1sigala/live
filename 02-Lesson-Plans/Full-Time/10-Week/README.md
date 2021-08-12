# Unit 19 & 20 Instructor Overview: Progressive Web Applications (PWA) and React

## Overview

In Unit 19, you will cover measuring and optimizing the performance of web applications. We will learn about PWAs, service workers, analyzing performance, and webpack.

In Unit 20, you will teach students how to create a React single-page application (SPA) from the ground up. Through this process, students will learn about components, state, props, React styling, and how to test React applications. They will also learn how to use `create-react-app` to scaffold their React apps. You will help them render elements in JSX and write JSX expressions. You will also help them understand more complex topics like React Hooks, fetching data, and creating fully functional React forms.

Refer to the Class Content Unit Overview for [Unit 19](../../../01-Class-Content/19-PWA/README.md) and [Unit 20](../../../01-Class-Content/20-React/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* We will be making use of the students' Project 2 in the first lesson of Unit 19. Ensure all students have a deployed project to work with.

* When working with PWAs, you may need to clear your storage periodically in order to see each iteration of activities. Do so in DevTools under `Application > Clear storage > Clear site data`.

* Webpack can be a difficult tool to get your head around, so be as clear as possible in your explanations and be ready to answer plenty of student questions. It is recommended that you review the webpack [docs](https://webpack.js.org/concepts). You may want to read [Why Webpack](https://webpack.js.org/concepts/why-webpack) so that you are prepared to answer student questions like "Why are we learning this?".

* Be sure to take some time to review the official React documentation, as there have been some important recent changes concerning React import statements. As of React version 17, it's no longer required to import React in order to process JSX. This unit, however, does still include the import statements, as this was a very recent change. 

* Make sure you're well-versed in React Hooks so that you can explain how they work to students, who might be confused at first about this different approach to building web app UIs.

* The homework for Unit 20 invites students to create an updated portfolio that demonstrates their newly acquired React skills. Students will be required to deploy their application to GitHub Pages for submission. Be sure to review the [React Docs on deployment](https://create-react-app.dev/docs/deployment/#github-pages) so that you can help students with their homework.

* Unit 20 uses `create-react-app` for the first activity to create a "practice" React app. This app will be used for the entire unit by swapping out only the `src/` directory before each activity.

* Make sure that you have installed `npx` so that you can demonstrate `create-react-app`. To check the installation, run `npx --version` in the command line. 

>> Important: The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

## Career Connection

* Remind students that related career services material can be found in their Career Connection folder for [Unit 19](../../../01-Class-Content/19-PWA/04-Important/CAREER-CONNECTION.md) and [Unit 20](../../../01-Class-Content/20-React/04-Career-Connection/README.md).

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

In Unit 21, you will introduce students to the GraphQL Playground. If you are new to the GraphQL and the GraphQL Playground, please refer to the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

Unit 22 will explore state management and the Context API. We'll also review the key concepts in React to help students prepare for their final projects and solidify their understanding of these more advanced skills. 

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

  * [10.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

  * [10.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)
  
  * [10.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

  * [10.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)
  
  * [10.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Homework

  * [Unit 19 Homework](../../../01-Class-Content/19-PWA/02-Homework)

  * [Unit 20 Homework](../../../01-Class-Content/20-React/02-Homework)

### Slide Decks

  * [Unit 20: React](https://docs.google.com/presentation/d/1V5th9cgx_YcKZDC6kcJJHwrOc-3Ql6JB3AXoW3_Jqkk/edit?usp=sharing)

### Algorithms

Unit 19:

  * [01: Is Armstrong](../../../01-Class-Content/19-PWA/03-Algorithms/01-is-armstrong)

  * [02: Max Profit](../../../01-Class-Content/19-PWA/03-Algorithms/02-max-profit)
  
  * [03: Smallest Difference](../../../01-Class-Content/19-PWA/03-Algorithms/03-smallest-difference)

Unit 20:

  * [01: Maximum Continuous Subarray](./../../../01-Class-Content/20-React/03-Algorithms/01-maximum-continuous-subarray)

  * [02: Merge Meeting Times](./../../../01-Class-Content/20-React/03-Algorithms/02-merge-meeting-times)

    * 📹 [Let's Code Merge Meeting Times!](https://2u-20.wistia.com/medias/rsyvzd1cxl)

  * [03: Int to Roman Numeral](./../../../01-Class-Content/20-React/03-Algorithms/03-int-to-roman)

### Resources

  * [React Docs: Getting Started](https://reactjs.org/docs/getting-started.html)

  * [Create React App Docs: Getting Started](https://create-react-app.dev/docs/getting-started/)

  * [React Docs on rendering elements](https://reactjs.org/docs/rendering-elements.html)

  * [React Docs on components and props](https://reactjs.org/docs/components-and-props.html)

  * [React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html)

    * [React Docs on JSX expressions](https://reactjs.org/docs/jsx-in-depth.html) 

  * [React Docs on state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) 

  * [React Docs on handling events](https://reactjs.org/docs/handling-events.html)

  * [React Docs on forms](https://reactjs.org/docs/forms.html)

  * [React Docs on Hooks](https://reactjs.org/docs/hooks-intro.html)

    * [React Docs on useState](https://reactjs.org/docs/hooks-state.html)

    * [React Docs on useEffect](https://reactjs.org/docs/hooks-effect.html)

  * [React Docs on styling](https://reactjs.org/docs/faq-styling.html)

  * [React Docs on conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

  * [React Docs on testing](https://reactjs.org/docs/testing.html)

  * [React Docs on lists and keys](https://reactjs.org/docs/lists-and-keys.html)          

  * [Create React App Docs on deployment](https://create-react-app.dev/docs/deployment)

  * [GitHub Docs on deploying to GitHub pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
