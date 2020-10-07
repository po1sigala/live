# Unit 13 Instructor Overview: Object Relational Mapping (ORM)

## Overview

In this unit, you will use the ORM library, Sequelize, to connect to and seed a database. You will create and configure Sequelize models that connect to the Sequelize instance, use validation tools, use `bcrypt` to encrypt a password, include hooks, include custom methods, and use SQL in literals. You will learn how to relate data between SQL tables using Sequelize associations and how to model relationships. You will use RESTful routes to map HTTP verbs to CRUD actions and build custom routes that map to instance methods. 

You will use `async/await` instead of promises and `try/catch` to specify what to do if an exception is thrown. 

Refer to the [Class Content Unit Overview](../../../01-Class-Content/13-ORM/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* Take some time to read through the Sequelize docs to (re)familiarize yourself with the library. Focus on implementing hooks, validations, and associations.

* You will be using MySQL in all of the activities for this unit. Be sure to have your MySQL server up and running. Go ahead and create the databases listed in each activity ahead of time, or prepare todemonstrate it live in class.

* The first activity in this unit, `01-Ins_Sequelize-Setup`, hardcodes the database credentials in the `connection.js` file. Every subsequent activity uses a `.env` file. Make sure you create one or rename the existing `.env.EXAMPLE` file before demonstrating each activity.

* All of the activities will be using Insomnia Core to test the routes, instead of relying on a front end. Be sure to have it installed and ready for all activities.

## Career Connection

* Remind students that related Career Services material can be found in their [Career Connection folder](../../../01-Class-Content/13-ORM/04-Career-Connection/README.md).

* If you'd like more information on Career Services, visit the [Career Services resources page](http://bit.ly/CodingCS).

## Heads-Up

* In Unit 14, students will put everything they've learned together to create their first full-stack application with handlebars, MVC architecture, and front-end authentication.

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

  * [13.1 Lesson Plan](01-Day_Basics/13.1-LESSON-PLAN.md)

  * [13.2 Lesson Plan](02-Day_Authentication/13.2-LESSON-PLAN.md)
  
  * [13.3 Lesson Plan](03-Day_Relationships/13.3-LESSON-PLAN.md)

### Homework

  * [Unit 13 Homework](../../../01-Class-Content/13-ORM/02-Homework)

### Slide Decks

  * [Unit 13: Slide Deck](https://docs.google.com/presentation/d/1_0n8JjM6cgmDyUfqGC6crF47JItD0mn9vzvQeYqZ5OE/edit?usp=sharing)

### Algorithms

  * [01: Double Triple Map](../../../01-Class-Content/13-ORM/03-Algorithms/01-double-triple-map/)
  * [02: Array Intersection](../../../01-Class-Content/13-ORM/03-Algorithms/02-array-intersection/)
  * [03: Squares of a Sorted Array](../../../01-Class-Content/13-ORM/03-Algorithms/03-squares-of-a-sorted-array/)


### Resources

  * [Sequelize Docs](https://sequelize.org/master/)
  * [Bcrypt](https://www.npmjs.com/package/bcrypt)
  * [dotenv](https://www.npmjs.com/package/dotenv)

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.


