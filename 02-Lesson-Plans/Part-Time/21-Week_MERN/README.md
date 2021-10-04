# Unit 21 Instructor Overview: MERN

## Overview

This week, students will apply their knowledge of MongoDB, Express.js, React.js, and Node.js to develop the tools needed to build a full-stack MERN app.

Students will learn how to use React Router to add dynamic client-side routing to apps, which makes it possible for users to bookmark URLs and use the browser’s forward and back buttons. They'll also learn GraphQL, an open-source data query and manipulation language for APIs that provides declarative data fetching. Finally, students will add authentication to a MERN app by using a JSON Web Token.

Refer to the [Class Content Unit Overview](../../../01-Class-Content/21-MERN/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* The activities in this unit will require some familiarity with GraphQL. If you've never worked with GraphQL or the GraphQL Playground, please refer to the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

>> Important: The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to GraphQL and the MERN framework may face.

* Some activities in this unit rely on the GraphQL Playground. Students do not need to install a separate tool to access this technology. To use the GraphQL Playground, simply start the app by using `npm install`, `npm run seed`, and `npm start` and then point to `localhost:3001/graphql` in the browser.

* For a refresher on how to use the GraphQL Playground, see the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

* The `17-Ins_Apollo-Cache` uses Apollo Client Developer Tools to visualize the in-memory cache. If you haven't yet, install the [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US). Once installed, open Chrome DevTools and navigate to the >> arrow on the toolbar to see additional tools available. Click on `Apollo` to open the interface.

* If you get an `eslint` preflight check error when running the Homework demo, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. The error can also be avoided by running the Homework from the class repo to avoid conflicting `eslint` installations.

* Apollo Server recently migrated to Apollo Server 3. This major-version release impacts how Apollo Server interacts in an Express environment. Apollo Server 2 is currently used in the activities. For the homework, students must **MUST** use the following script `npm install apollo-server-express@2.15.0` to follow the implementation used in class.  Alternately, students can complete the homework using the latest version of Apollo Server. Please refer to the [Apollo Server Docs on Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/#nodejs) and [Apollo Server Docs on Implementing Apollo Server Express with v3](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express). Note that Apollo Server 3 requires the use of `await server.start()` before calling `server.applyMiddleware`.

* If you find that students are struggling with the complexity of the unit, encourage them to look back on prior activities as a resources for homework preparation and self-study. You can also reassure them that there is time for review during next week's lessons.

## Career Connection

* Remind students that related career services material can be found in their [Career Connection folder](../../../01-Class-Content/21-MERN/04-Career-Connection/README.md).

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

During the next unit, we will build on the full-stack app development skills covered in this unit, as well as explore state management and the Context API. We'll also review the key concepts covered in this unit to help students prepare for their final projects and solidify their understanding of these more advanced skills.

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide deck, algorithms, and resources.

### Lesson Plans

* [21.1 Lesson Plan](./01-Day_GraphQL/21.1-LESSON-PLAN.md)

* [21.2 Lesson Plan](./02-Day_Front-End/21.2-LESSON-PLAN.md)
  
* [21.3 Lesson Plan](./03-Day_JWT/21.3-LESSON-PLAN.md)

### Homework

* [Unit 21 Homework](../../../01-Class-Content/21-MERN/02-Homework)

### Slide Deck

* [Unit 21: MERN](https://docs.google.com/presentation/d/1JU962_gt2iOMECVdvLcsxRs9IwNirB6d6fed4Y1RlG8/edit?usp=sharing)

### Algorithms
  
* [01: Plus One](../../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

* [02: One Edit Away](../../../01-Class-Content/21-MERN/03-Algorithms/02-one-edit-away)

* [03: Caesar Cipher](../../../01-Class-Content/21-MERN/03-Algorithms/03-caesar-cipher)

  * 📹 [Let's Code Caesar Cipher!](https://2u-20.wistia.com/medias/bcfetr7mvf)

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

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.