# Unit 13 Mini Project: Travel Planner

## Overview

In this mini project, you will work with a group to build an API using Node, Express, MySQL, and Sequelize and deploy it to Heroku.

## User Stories

* As a user, I want to be able to create an account.

* As a user, I want to be able to view all of the trips I'm taking along with their locations.

* As a user, I want to be able to create a new trip for myself using a location from a list.

* As a user, I want to be able to create and view location data.

### Acceptance Criteria

* It's done when the GET route `/api/users` returns all user data without associated trips in Insomnia.

* It's done when the POST route `/api/users` successfully creates user data and returns a successful response in Insomnia.

* It's done when the GET route `/api/users/:id` returns a single user's data with their associated trips and a list of locations in Insomnia. 

* It's done when the DELETE route `/api/users/:id` successfully removes a user and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations` returns all location data in Insomnia.

* It's done when the POST route `/api/locations` successfully creates location data and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations/:id` returns a single location's data with its associated trips in Insomnia. 

* It's done when the DELETE route `/api/locations/:id` successfully removes a location, any trips associated with it, and returns a successful response in Insomnia.

* It's done when the POST route `/api/trips` successfully creates trip data between associated users and locations.

* It's done when the DELETE route `/api/trips/:id` successfully removes a trip and returns a successful response in Insomnia.

* It's done when the API is successfully deployed to Heroku with a MySQL database.

## Specifications 

* Database models should have these fields and associations:

  * `User`
    * `id`: primary key
    * `name`
    * `email`

  * `Location`
    * `id`: primary key
    * `name`

  * `Trips`
    * `id`: primary key
    * `trip_date`
    * `traveller_amount`
    * `user_id`: foreign key that references `User.id`
    * `location_id`: foreign key that references `Location.id`

  * Users have many Trips and Trips belong to a User (One-To-Many association)

  * Locations have many Trips and Trips belong to a Location (One-To-Many association)

  * Users have many Locations and Locations have many Users through Trips (Many-To-Many association)

## 📝 Notes

* Refer to the documentation: 

  * [Sequelize docs on One-To-Many relationships](https://sequelize.org/master/manual/assocs.html#one-to-many-relationships)

  * [Sequelize docs on Many-To-Many relationships](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships)

  * [@TODO: Link to soon to exist Heroku JawsDB deploy guide]()

* Use this sample data as the request body for the POST routes:

  * @TODO: provide sample JSON body data

---

## 💡 Hints

* Build the models first and then the functionality that goes into the routes.

* After creating the models, run the seed file provided to load the database with data.

* Since you are deploying this to Heroku, build the application in its own personal repository.

## 🏆 Bonus

* Add validations to all of the model data.
