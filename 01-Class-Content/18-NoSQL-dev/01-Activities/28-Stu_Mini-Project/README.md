# Unit 18 Mini-Project: Student Statistics Backend

In this activity, you will build a student statistics application that uses Express.js, a MongoDB database, and the Mongoose ODM. The app must feature MongoDB aggregate functions to show statistics like the total number of students and a given students overall grade. This project back-end only project must be deployed using MongoDB Atlas and Heroku.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to be able to view all the students and get a total of the number of students enrolled.

* As a user, I want to be able to view a specific student's overall grade in the class using MongoDB operators and their score on each assignment.

* As a user, I want to be able to execute create, read, update, and delete operations on `courses`, `students`, and their `assignments`.

### Specifications

* The application must make use of a MongoDB database, the Mongoose ODM, and Express.js.

* The database must be seeded with sample data.

* The `Student` model should have a `GET` method that returns all students and also head count using MongoDB `aggregate` functions.

* The `Student` model should have a `GET` method that returns a single student and also the students overall grade using MongoDB `aggregate` functions.
  
* The project should make use of MongoDB operators like or `$addToSet`, `$unwind`, `$group` and `$avg`.

* The endpoint `api/students/<student id>` should be tested using Insomnia to ensure that the `aggregate` function returns the student's overall grade.

* The backend should be deployed using Heroku and MongoDB Atlas.

## 💡 Hints

* Be sure to run `npm run seed`, to seed your database before testing with Insomnia.

* Run `npm start:dev` to have the server automatically restart whenever changes are saved.

* How can we use the `$avg` [MongoDB operator](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/) to calculate the overall grade for a student?

* How can we use the information from the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) to help in deploying the mini-project?

## 🏆 Bonus

* What is the difference between Mongoose and MongoDB? What are the advantages and disadvantages of both?

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
