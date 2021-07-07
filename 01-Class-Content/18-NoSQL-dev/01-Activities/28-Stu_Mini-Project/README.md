# Unit 18 Mini-Project: Student Statistics Backend

In this activity, you will be starting with an existing codebase for a mostly-complete application. You will be adding aggregate methods to the `Student` controller to show a student's overall grade and the number of students. Finally, you will spend the remaining time deploying the application using MongoDB Atlas and Heroku.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to be able to view all the students and get a total of the number of students enrolled.

* As a user, I want to be able to view a specific student's overall grade in the class using MongoDB operators and their score on each assignment.

* As a user, I want to be able to execute create, read, update, and delete operations on `courses`, `students`, and their `assignments`.

### Specifications

* The application must make use of a MongoDB database, the Mongoose ODM, and Express.js.

* The database must be seeded with sample data.

* The `Student` controller should have a `headCount` aggregate function to get the number of students overall by making use of MongoDB aggregate operators.

* The `Student` controller should have a `grade` aggregate function that returns a single student and also the students overall grade using MongoDB aggregate operators.
  
* The project will require research of MongoDB operators like `$addToSet`, `$unwind`, `$group` and `$avg`.

* The endpoints `api/students/<student id>`, and `api/students/` should be tested using Insomnia to ensure that the aggregate functions return the student's overall grade and head count respectively.

* This backend application should be deployed using Heroku and MongoDB Atlas. Refer to the resources below for further instructions.

## 💡 Hints

* Be sure to run `npm run seed`, to seed your database before testing with Insomnia.

* Run `npm run dev` to have the server automatically restart whenever changes are saved.

* How can we use the `$avg` [MongoDB operator](https://docs.mongodb.com/manual/reference/operator/aggregation/avg/) to calculate the overall grade for a student?

* How can we use the information from the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) to help in deploying the mini-project?

## 🏆 Bonus

* What is the difference between Mongoose and MongoDB? What are the advantages and disadvantages of both?

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
