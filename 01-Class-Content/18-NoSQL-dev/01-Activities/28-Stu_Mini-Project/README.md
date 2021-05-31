# Unit 18 Mini-Project: Student Statistics Backend

In this activity, you will build a student statistics application that uses Express.js, a MongoDB database, and the Mongoose ODM. The app must feature an aggregate method to show statistics like the total number of students. This back-end project must be deployed using MongoDB Atlas.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to be able to view overall statistics for a class (number of students, class topic, class frequency, etc.)

* As a user, I want to be able to view a specific student's overall grade in the class and their grade on each assignment.

* As a user, I want to be able to execute CRUD operations on courses, students, and their assignments.

### Specifications

* The application must make use of a MongoDB database, the Mongoose ODM, and Express.js.

* The application must be seeded with some sample data.

* The API should be tested using Insomnia since this project doesn't require creating a front end.

* There should be a `Course` model, a `Student` model, and an `Assignment` model.

* The project should make use of MongoDB operators like `$push` or `$addToSet`.

* The application should prevent the injection of duplicate ids.

* The backend should be deployed using Heroku and MongoDB Atlas.

## 💡 Hints

* How can we use the information from the [Full-Stack blog](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) to help in deploying the mini-project?

## 🏆 Bonus

* What is the difference between Mongoose and MongoDB? What are the advantages and disadvantages of both?

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
