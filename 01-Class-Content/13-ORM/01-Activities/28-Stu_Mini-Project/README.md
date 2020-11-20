# Unit 13 Mini-Project: Travel Planner

In this mini-project, you will work with a group to build an API using Node.js, Express.js, MySQL, and Sequelize, and you will deploy it to Heroku.

## User Stories

* As a traveller, I want to be able to create an account.

* As a traveller, I want to be able to create a new trip for myself using a location from a list.

* As a traveller, I want to be able to create and view location data.

* As a traveller, I want to be able to view all of the trips I'm taking, along with their locations.

## Acceptance Criteria

* It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia Core.

* It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia Core.

* It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia Core. 

* It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.

* It's done when the GET route `/api/locations` returns all location data in Insomnia Core.

* It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia Core.

* It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia Core. 

* It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia Core.

* It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.

* It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia Core.

* It's done when the API is successfully deployed to Heroku with a MySQL database.

## Specifications 

* Database models should have the following fields and associations:

  * `Traveller`

    * `id`: primary key

    * `name`
      
    * `email`

  * `Location`

    * `id`: primary key
    
    * `name`

  * `Trips`
      
    * `id`: primary key

    * `trip_budget` 
      
    * `traveller_amount`
      
    * `traveller_id`: foreign key that references `Traveller.id`
      
    * `location_id`: foreign key that references `Location.id`

  * Travellers have many trips, and trips belong to a traveller (one-to-many association).

    * If a traveller is deleted, all associated trips are also deleted.

  * Locations have many trips, and trips belong to a location (one-to-many association).

    * If a location is deleted, all associated trips are also deleted.

  * Travellers have many locations, and locations have many travellers through trips (many-to-many association).

## 📝 Notes

Refer to the documentation: 

* [Sequelize documentation on one-to-many relationships](https://sequelize.org/master/manual/assocs.html#one-to-many-relationships)

* [Sequelize documentation on many-to-many relationships](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships)

* [@TODO: Link to soon to exist Heroku JawsDB deploy guide]()

Use the following sample data as the request body POST `/api/trips` route:

  ```json
  {
    "trip_budget": 2000.50,
    "traveller_amount": 6,
    "traveller_id": 1,
    "location_id": 2
  }
  ```

---

## 💡 Hints

* What model association option can we set to automatically delete associated data? 

* How can we use the data in `Develop/seeds` to provide starter data for locations and travellers and not have to create it ourselves? 

* If we're deploying this to Heroku, can we work on this from within the class repository, or should we make a new GitHub repo?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Add validations to all of the model data.

* Create a password hashing and login system for travellers.

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.