#  Instructor Demo: MongoDB Compass

* MongoDB Compass is the GUI for MongoDB and is a great way to explore a database and interact with data in a visual way. 

* Open Compass on your local machine to do the following:

  * 🔑 With a MongoDB server that you have installed locally running, we click on `Connect` to the connect to the localhost. 

  * 🔑 At the bottom left of the screen, we click on `MONGOSH BETA` to open a MongoDB shell. At the prompt, we enter `USE` to create a new database followed by the database name. This same command can also be used to switch to an existing database. 

  ```sh
  USE demoDB
  ```

  * 🔑 Data in MongoDB databases are stored in collections. To create a collection and add a document we use the `insertOne()` method. To add a document to an existing collection, we use the same syntax. To insert many documents at the same time, we can use `insertMany()`. 

  ```sh
  db.collection1.insertOne({ pet: "dog", breed: "chihuahua"})
  ```

  * 🔑 When we create a new document, mongod automatically adds the _id field and assigns a unique ObjectId(). If our new document was successfully added to the collection, an object that contains the value of the inserted id will be returned.

  ```sh
  { acknowledged: true,
  insertedId: ObjectId("60a46fb6845ecbd2f2736329") }
  ```

  * 🔑 Once a document has been added, we click on the `Refresh` at the top of the screen and the `demoBD` database we just created should appear.

  * 🔑 We click on the arrow to the left of the `demoBD` database and click on the `demoDB` collection that appears below. 

  * 🔑 In the Documents tab, the data we just added should appear. Using the visual interface we can explore and modify the data. 

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
