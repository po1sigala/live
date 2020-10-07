# Unit 13: Object Relational Mapping (ORM)

## Overview:

Using a database is an important part of any application that requires us to collect data. When our application grows in size and we start to collect large amounts of data, as a developer we may have to migrate our database or use multiple different types of databases. It is not an easy task to compare data across databases or migrate from one database to another. Object-relational mapping makes this task much more manageable by giving us away to interact with our database using JavaScript.

There are many different ORM tools at our disposal but for this unit we will be using Sequelize. Sequelize is a popular JavaScript ORM that utilizes Object oriented programming. With Sequelize we can now communicate with our Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server using Node.js.

Not only can we now use JavaScript to communicate with our database but we can also make relationships between our data easier to recognize and leverage. This allows us to connect our data and see how it interacts with each other much better than we could with plain SQL

## Key Topics

The following topics will be covered in this unit:

* [Sequelize](https://sequelize.org/master/)

  * [Models](https://sequelize.org/master/manual/model-basics.html)

  * [Type definition](https://sequelize.org/master/manual/model-basics.html#data-types)

  * [Seeding](https://sequelize.org/master/manual/migrations.html)
  
  * [Associations](https://sequelize.org/master/manual/assocs.html)

  * [Querying](https://sequelize.org/master/manual/model-querying-basics.html)

  * [Method instances](https://sequelize.org/master/manual/model-instances.html)

  * [Validation and Constraints](https://sequelize.org/master/manual/validations-and-constraints.html)

* [Environmental variables](https://www.npmjs.com/package/dotenv)

* [Async / Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

* [Try / Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

* [HTTP Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

* [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Learning Objectives

You will be employer-ready if you are able to:

* Connect to a database using Sequelize and environment variables

* Create and configure a Sequelize model

* Perform CRUD operations with Sequelize methods

* Write a script to seed a database with initial data

* Convert asynchronous code to synchronous code using `async / await`

* Utilize `try/catch` to catch errors

* Ensure HTTP requests respond with the correct status code

* Utilize validation tools on a Sequelize model

* Utilize `bcrypt` to encrypt a password

* Automate functionality using Sequelize hooks

* Create and run a custom method on a Sequelize instance

* Implement and know when to use different Sequelize associations to relate data for one-to-one, one-to-many, and many-to-many relationships

* Use a combination of Sequelize methods and plain SQL syntax to perform sub-queries

* Enforce code styling for an application using ESLint

* Deploy an application with a MySQL database to Heroku


## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the `📹 Let's Code` video(s) for tips and tricks on how to solve the algorithm.

* [01: Double Triple Map](./03-Algorithms/01-double-triple-map)

* [02: Array Intersection](./03-Algorithms/02-array-intersection)

  * [📹 @TODO]()

* [03: Squares of a Sorted Array](./03-Algorithms/03-squares-of-a-sorted-array)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* @TODO LINK TO ASSESSMENT

## Homework

In the homework for this unit, you will be creating an e-commerce back end. You will be given a working Express API that you will have to configure using Sequelize. Once finished we should be able to connect to our database and have functioning CRUD commands.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](../../../01-Class-Content/13-ORM/04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](http://bit.ly/CodingCS).

## Heads-Up

In the next unit, we will be returning to full stack app developement by learning about an architecture called Model, View, Controller (MVC). We will be learning handlebars which is a templating engine. Finally, we will touching on the topic of front end authentication.

## Resources

Here are some additional resources to help solidify the topics covered in this unit:

* [📖 Eslint Git Guide](./Activities/27-Evr_Eslint/README.md)

* [📹 @TODO! Code Review]()


---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
