# Unit 21 & 22 Instructor Overview: MERN and State

## Overview

In Unit 21, students will apply their knowledge of MongoDB, Express.js, React.js, and Node.js to develop the tools needed to build a full-stack MERN app.

Students will learn how to use React Router to add dynamic client-side routing to apps, which makes it possible for users to bookmark URLs and use the browser’s forward and back buttons. They'll also learn GraphQL, an open-source data query and manipulation language for APIs that provides declarative data fetching. Finally, students will add authentication to a MERN app by using a JSON Web Token.

In Unit 22, you will introduce complex state management techniques and review the key tools needed to build a MERN-stack app with routing and authentication. Students will also be introduced to the Stripe payment platform.

Refer to the Class Content Unit Overview for [Unit 21](../../../01-Class-Content/21-MERN/README.md) and [Unit 22](../../../01-Class-Content/22-State/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to GraphQL and the MERN framework may face. 

* Some activities in Unit 21 rely on the GraphQL Playground. Students do not need to install a separate tool to access this technology. To use the GraphQL Playground, simply start the app by using `npm install`, `npm run seed`, and `npm start` and then point to `localhost:3001/graphql` in the browser. 

* For a refresher on how to use the GraphQL Playground, see the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

* The `17-Ins_Apollo-Cache` uses Apollo Client Developer Tools to visualize the in-memory cache. If you haven't yet, install the [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US). Once installed, open Chrome DevTools and navigate to the >> arrow on the toolbar to see additional tools available. Click on `Apollo` to open the interface. 

* For the React activities, be sure to create a practice React app before class by navigating to `01-Class-Content/22-State-dev/01-Activities` and running `npx create-react-app 00-practice-app`.

* Before class, install the [React developer tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). It will be used in the Unit 22 `O1-Ins_Providers` demo.

* If you get an `eslint` preflight check error when running the Homework demo, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. The error can also be avoided by running the Homework from the class repo to avoid conflicting `eslint` installations. 

* In the state management activities in Unit 22, emphasis is placed on having the students refer to the documentation. Explain that on the job, it is important to be able to use documention to find information on specific issues and then apply that information to their own code. 

* Many of the activities in Unit 22 allow students to review the skills needed for final projects. Because the code and activities will be familiar, encourage students to use activity time to explore the code, ask questions, and build on their existing skills. Encourage students who need an additional challenge to explore the Bonus.

## Career Connection

* Remind students that related career services material can be found in their [Career Connection folder for Unit 21](../../../01-Class-Content/21-MERN/04-Career-Connection/README.md) and [Career Connection folder for Unit 22](../../../01-Class-Content/22-State/04-Career-Connection/README.md).

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

In Units 23 and 24, students will begin work on their final projects. These projects are student-driven; they will be responsible for forming their own teams, brainstorming app ideas, and developing a full-stack app. Encourage students to start forming groups and brainstorming ideas for their apps, and be prepared to help anyone who is struggling to find a group or project idea.

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

  * [11.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

  * [11.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)
  
  * [11.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

  * [11.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)
  
  * [11.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Homework

  * [Unit 21 Homework](../../../01-Class-Content/21-MERN/02-Homework)

  * [Unit 22 Homework](../../../01-Class-Content/22-State/02-Homework)

### Slide Decks

  * [Unit 21: MERN](https://docs.google.com/presentation/d/1JU962_gt2iOMECVdvLcsxRs9IwNirB6d6fed4Y1RlG8/edit?usp=sharing)

  * [Unit 22: State](https://docs.google.com/presentation/d/1j5Y-MLor_nfMfQA3Znt_MOTRPAVRbsRFGFFt38iN6p4/edit?usp=sharing)

### Algorithms

Unit 21:

  * [01: Plus One](../../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

  * [02: One Edit Away](../../../01-Class-Content/21-MERN/03-Algorithms/02-one-edit-away)

  * [03: Caesar Cipher](../../../01-Class-Content/21-MERN/03-Algorithms/03-caesar-cipher)

    * 📹 [Let's Code Caesar Cipher!](https://2u-20.wistia.com/medias/bcfetr7mvf)
  
Unit 22:

  * [01: Roman Numeral to Int](../../../01-Class-Content/22-State/03-Algorithms/01-roman-to-int)

  * [02: Rotation Point](../../../01-Class-Content/22-State/03-Algorithms/02-rotation-point)

    * 📹 [Let's Code Rotation Point!](https://2u-20.wistia.com/medias/92nkaslwg8)

  * [03: Simplify Path](../../../01-Class-Content/22-State/03-Algorithms/03-simplify-path)
 
### Resources

* [Using the GraphQL Playground in a MERN Application](https://coding-boot-camp.github.io/full-stack/apis/graphql-playground-guide)

* [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)

* [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/)

* [Apollo Docs on queries and mutations](https://graphql.org/learn/queries/)

* [Apollo Docs on writing query resolvers](https://www.apollographql.com/docs/tutorial/resolvers/)

* [GraphQL Docs on passing arguments](https://graphql.org/graphql-js/passing-arguments/)

* [Apollo Docs on mutations](https://www.apollographql.com/docs/react/data/mutations/)

* [Apollo Docs on updating data with mutations](https://www.apollographql.com/docs/tutorial/mutations/)

* [Apollo Docs on fetching data with queries](https://www.apollographql.com/docs/tutorial/queries/)

* [React Router quick start guide](https://reactrouter.com/web/guides/quick-start)

* [Introduction to JSON Web Tokens](https://jwt.io/introduction)

* [Apollo Docs on authentication](https://www.apollographql.com/docs/apollo-server/security/authentication/)

* [GitHub Docs on GitHub Actions](https://docs.github.com/en/actions)

* [Context API documentation](https://reactjs.org/docs/context.html)

* [Redux documentation](https://redux.js.org/)

* [Stripe documentation](https://stripe.com/docs)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
