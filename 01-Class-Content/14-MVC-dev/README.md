# Unit 14: Model-View-Controller (MVC)

## Overview:

As our full-stack web applications scale, we will need to address several issues related to that growth: organization of the codebase, ongoing development and maintenance, and continued collaboration. So far, our applications are easily managed as they only consist of a handful of files. We _could_ limit the code base to these few files, but as we add functionality to our application, each of those files would grow in length to hundreds, if not thousands, of lines of code composed of unnecessarily complicated logic. Imagine how difficult it would be to resolve merge conflicts! 

In this unit we will modularize our applications following the MVC paradigm. Short for Model View Controller, MVC is an architectural pattern that structures our codebase in three distinct sections according to a software design philosophy known as the _separation of concerns_.  

Up to this point, we’ve been serving static HTML files to our client based on its requests. This approach is suitable for very small applications, but what happens when our application begins to grow and we need hundreds or even thousands of unique pages? Rather than hard code the HTML for many, many pages, we can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. This is the View layer in the MVC framework. The template engine we will learn and implement in this unit is Handlebars.js.

The Model is the data layer of our application. It is concerned with the structure of our database and the logic used to retrieve that data. We will implement Sequelize as our ORM for querying our database. 

Last, but not least, is the Controller. We can think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update or delete data, and then returns the results of that query to the user via the View layer. We are already familiar with these operations in our Express.js apps, but we will now separate our client-side and server-side routes from one another.

MVC may not be immediately intuitive, or obviously useful on a small scale, but becomes very useful when working collaboratively or adapting an application to changing technical needs. Team members no longer need to work on top of each other as concerns are separated into distinct sections and components of the stack can be swapped in and out without dramatically affecting the codebase. For example, if we want to migrate our database from MySQL to PostgreSQL, we simply need to update our ORM. The same is true for the View layer; we can easily implement a template engine other than Handlebars.js or migrate to a front-end framework such as React. 

## Key Topics

The following topics will be covered in this unit:

* [Model-View-Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

  * [Model](https://sequelize.org/master/class/lib/model.js~Model.html)

* [Handlebars.js](https://www.npmjs.com/package/express-handlebars)

  * [Expressions](https://handlebarsjs.com/guide/expressions.html)

  * [Built-in Helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

  * [Partials](https://handlebarsjs.com/guide/partials.html#basic-partials)

  * [Custom Helpers](https://www.npmjs.com/package/express-handlebars#helpers)

* Sessions and Cookies

  * [express-session](https://www.npmjs.com/package/express-session)

  * [Connect Session Store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize) 

  * [Express.js Session Cookie](https://github.com/expressjs/session#cookie)

* [Express.js Middleware](https://expressjs.com/en/guide/using-middleware.html)

* [ESLint](https://eslint.org/docs/user-guide/configuring)

* [Prettier](https://prettier.io/docs/en/index.html)

## Learning Objectives

You will be employer-ready if you are able to:

* Explain and implement MVC modularization in a full-stack web application

* Explain the interactions between the Model, View, and Controller

* Explain separation of concerns and its benefits

* Render dynamic HTML using the Handlebars.js template engine

* Dynamically pass data to other helpers or components using built-in helpers

* Use data serialization to simplify objects in order to work with necessary properties only

* Implement Handlebars.js partials to reuse a Handlebars.js template.

* Utilize custom helper functions to format data in a Handlebars.js template.

* Create and read a session on a server using `express-sessions`. 

* Explain how cookies and sessions work together.

* Implement middleware function in Express.js for user authentication. 

* Explain the purpose of ESLint

* Explain and add Prettier to an existing project

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the `📹 Let's Code` video(s) for tips and tricks on how to solve the algorithm.

* [01: Common Element](../../01-Class-Content/14-MVC/03-Algorithms/01-common-element)

* [02: Permutation Substring](../../01-Class-Content/14-MVC-dev/03-Algorithms/02-permutation-substring)

* [03: Concert Flyer](../../01-Class-Content/14-MVC-dev/03-Algorithms/03-concert-flyer)

  * 📹 Let's Code {@TODO Add Algo video link}

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [Unit 14 Technical Interview Questions](https://forms.gle/ETRxZ6CtutAfpwpg6)

## Homework

For this unit's homework, you will be building a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the `express-session` npm package for authentication.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](../../01-Class-Content/14-MVC/04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](http://bit.ly/CodingCS).

## Heads-Up

Next week, you will start working on your second group project! You will be assigned to your project groups and receive the project requirements. Be sure to look over the project requirements carefully and brainstorm project ideas with your group early on.

## Resources

Here are some additional resources to help solidify the topics covered in this unit:

* 📹 Code Review: N/A

* 📖 Git Guide: N/A

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
