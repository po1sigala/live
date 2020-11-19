# Unit 14 Instructor Overview: Model-View-Controller (MVC)

## Overview

In this unit, you will use the separation of concerns principle and the MVC framework to build out fullstack web apps. You will use Handlebars.js features including, expressions, built-in helpers, cutsom helpers, and partials to build static templates that can render dynamic data. You will use front end logic to make requests and pass data to the back end. You will begin by using hardcoded data and transition to using seed data with Sequelize and MySQL. You will use the routes in the Controller to manipulate data in the Model, to serialize Sequelize objects before sending them to the View, and create your own custom middleware for user authentication. You will also incorporate sessions and cookies using the Sequelize store. Prettier will be introduced prior to starting on the mini project.

Refer to the [Class Content Unit Overview](../../../01-Class-Content/14-MVC/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* Take some time to read through the Handlebars.js docs and the express-handlebars docs to (re)familiarize yourself with the template engine. This unit uses express-handlebars, so the Handlebars.js docs may not have all of the answers. Focus on expressions, built-in helpers, custom helpers, and partials.

* This unit introduces students to the template engine, Handlebars.js. The intention is not so much for students to learn Handlebars.js because it will be useful in their career, but instead, it is an introduction to template engines, preparation for React.js, and a way to emphasize the MVC framework.

* You will be using MySQL for the majority of this unit's activities. Be sure to have your MySQL server up and running. You can create the databases ahead of time, or demonstrate it live in class.

* Starting with `07-Ins_Data-Serialization`, each activity requires a `.env` file. Make sure you create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* Be prepared to remind students how to start their MySQL server on Day 1. They will need to use it starting with `08-Stu_Data-Serialization`.

* You'll need to install the ESLint and Prettier VS Code extensions to properly demonstrate both libraries for Day 3.

* If the students struggle with the `Everyone Do: Prettier` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end. 

## Career Connection

* Remind students that related Career Services material can be found in their [Career Connection folder](../../../01-Class-Content/14-MVC/04-Career-Connection/README.md).

* If you'd like more information on Career Services, visit the [Career Services resources page](http://bit.ly/CodingCS).

## Heads-Up

* Next unit, students will work on their group project. Everything related to Project #2 will be done on Day 1 of Project week. In the meantime, start thinking about possible project groups and preparing for information to go out to students.

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

  * [14.1 Lesson Plan](01-Day_Handlebars/14.1-LESSON-PLAN.md)

  * [14.2 Lesson Plan](02-Day_Authentication/14.2-LESSON-PLAN.md)
  
  * [14.3 Lesson Plan](03-Day_Review/14.3-LESSON-PLAN.md)

### Homework

  * [Unit 14 Homework](../../../01-Class-Content/14-MVC/02-Homework)

### Slide Decks

  * [Unit 14: MVC](https://docs.google.com/presentation/d/1rb2QnbKkUfmwqfUEpdQjV8x6S18ShB1BRdLggIVq6yU/edit?usp=sharing)

### Algorithms

  * [01: Common Element](../../../01-Class-Content/14-MVC/03-Algorithms/01-common-element/)

  * [02: Permutation SubString](../../../01-Class-Content/14-MVC/03-Algorithms/02-permutation-substring/)

  * [03: Concert Flyer]()

    * [📹 Concert Flyer]()

### Resources

  * [Sequelize Docs](https://sequelize.org/master/)

  * [Handlebars.js](https://handlebarsjs.com/)

  * [express-handlebars](https://www.npmjs.com/package/express-handlebars)

  * [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

  * [Express.js Session Cookie Docs](https://github.com/expressjs/session#cookie)

  * [Express.js Docs on Using Middleware](https://expressjs.com/en/guide/using-middleware.html)

  * [ESLint](https://eslint.org/docs/user-guide/configuring)

  * [Prettier](https://prettier.io/docs/en/index.html)

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
