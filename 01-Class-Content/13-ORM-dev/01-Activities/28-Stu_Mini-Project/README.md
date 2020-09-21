# Unit 13 Mini Project: Travel Planner

In this mini project, you will work with a group to build an API using Node, Express, MySQL, and Sequelize and deploy it to Heroku.

## User Stories

* As a traveller, I want to be able to create an account.

* As a traveller, I want to be able to create a new trip for myself using a location from a list.

* As a traveller, I want to be able to create and view location data.

* As a traveller, I want to be able to view all of the trips I'm taking along with their locations.

### Acceptance Criteria

* It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia.

* It's done when the POST route `/api/travellers` successfully creates traveller data and returns a successful response in Insomnia.

* It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia. 

* It's done when the DELETE route `/api/travellers/:id` successfully removes a traveller, any trips associated with it, and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations` returns all location data in Insomnia.

* It's done when the POST route `/api/locations` successfully creates location data and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations/:id` returns a single location's data with its associated trips in Insomnia. 

* It's done when the DELETE route `/api/locations/:id` successfully removes a location, any trips associated with it, and returns a successful response in Insomnia.

* It's done when the POST route `/api/trips` successfully creates trip data between associated travellers and locations.

* It's done when the DELETE route `/api/trips/:id` successfully removes a trip and returns a successful response in Insomnia.

* It's done when the API is successfully deployed to Heroku with a MySQL database.

## Specifications 

* Database models should have these fields and associations:

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

  * Travellers have many Trips and Trips belong to a Traveller (One-To-Many association)

    * If a Traveller is deleted, all associated Trips are also deleted.

  * Locations have many Trips and Trips belong to a Location (One-To-Many association)

    * If a Location is deleted, all associated Trips are also deleted.

  * Travellers have many Locations and Locations have many Travellers through Trips (Many-To-Many association)

## 📝 Notes

Refer to the documentation: 

  * [Sequelize docs on One-To-Many relationships](https://sequelize.org/master/manual/assocs.html#one-to-many-relationships)

  * [Sequelize docs on Many-To-Many relationships](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships)

  * [@TODO: Link to soon to exist Heroku JawsDB deploy guide]()

Use this sample data as the request body POST `/api/trips` route:

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

* What model association option can we set to automatically deleted associated data? 

* How can we use the data in `Starter/seeds` to provide starter data for Locations and Travellers and not have to create it ourselves? 

* If we're deploying this to Heroku, can we work on this from within the class repository or should we make a new GitHub repo?

## 🏆 Bonus

If you have fully completed the above tasks, here is something you and your group can work through as an added challenge to further your knowledge:

  * Add validations to all of the model data.

  * Create a password hashing and login system for travellers.
