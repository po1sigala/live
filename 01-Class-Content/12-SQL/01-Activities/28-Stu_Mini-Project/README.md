# Unit 12 Mini-Project: Movie Database

In this mini-project, you will build Rest API routes for creating, retrieving, and deleting movies from a MySQL database.

## User Stories

* As a user, I want to create a new database. 

* As a user, I want to store movie names and reviews in the database in two separate table.

* As a user, I want to see a list of all movies.

* As a user, I want to be able to create and delete a movie. 

* As a user, I want to return a list of all the reviews and the associated movie name. 

## Acceptance Criteria

* It's done when the `movie_db` is created and contains a `movies` and `reviews` table.

* It's done when the `movie_db` has been seeded with data. 

* It's done when the `/api/movies` route renders a list of all movies.

* It's done when the `/api/add-movie` route successfully adds a movie when tested using Insomnia. 

* It's done when the `/api/update-review` route successfully updates a movie when tested using Insomnia. 

* It's done when the `/api/movie/:id` route deletes a route when tested using Insomnia. 

---

## Assets

Design the following database schema containing two tables:

![Image of schema containing two tables](./assets/image_1.png)

---

## Notes

To test your routes you will use Insomnia. If you have not already, you will need to [download Insomnia](https://insomnia.rest/download).

Refer to the documentation: 

[Insomnia Docs on Getting Started](https://support.insomnia.rest/category/152-using-insomnia)

[Express Docs on Routing](https://expressjs.com/en/guide/routing.html)

[MySQL Docs on Joins](https://dev.mysql.com/doc/refman/8.0/en/join.html)

[NPM Docs on MySQL2](https://www.npmjs.com/package/mysql2)

## 💡 Hints

* How can you link your `movies` and `reviews` tables?

* How can you execute a query in an Express server using the MySQL2 NPM package? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you add a route to update a review?

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
