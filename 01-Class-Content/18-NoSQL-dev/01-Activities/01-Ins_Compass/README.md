#  Instructor Demo: MongoDB Compass

* MongoDB Compass is the GUI for MongoDB and is a great way to explore a database and interact with data in a visual way. 

* Open Compass on your local machine to do the following:

  * To work with our local MongoDB server, we first have to make a connection. By default, the local MongoDB instance runs on localhost with default port `27017`. We will use the default connection at `localhost:27017` to connect to Compass.  

  *  With a MongoDB server installed locally and running, we click on `Connect` on the `New Connection` page to connect to the localhost on port `27017`. 
  > Note: You do not need to paste a connection string in the box since you are using the default setting. Simply click `Connect`.

  *  At the bottom left of the Home screen, we click on `MONGOSH BETA` to open a MongoDB shell. 

* Open the MongoDB shell to do the following: 

  * 🔑 To create a database, we select the new database using the `USE` command and give it a name. The `USE` command performs two common functions. If the database already exists, the `USE` command selects the existing database for use. If the database does not yet exist, `USE` creates the database as well as selects it for use.

    ```sh
    USE shelterDB
    ```

  * 🔑 Data in MongoDB databases is stored in one or more collections. Just like creating a database, we do not have to use a special command to create the collection. Instead, we can simply give the new collection a name and insert data in a single step. 
  
    *  We use the `insertOne()` method to insert a single document into our new collection, `petCollection`.

    * The `db` refers to the current database in use. Our database is `shelterDB`.

    * `petCollection` is the name of the collection we want to add data to. Since `collection1` doesn't exist yet, it will be automatically created.

    * `insertOne()` is the method we want to use.

    * We use this same syntax to add a document to both a new and existing collection. We can also use this same syntax to perform other tasks, such as fetching data. 

    ```sh
    db.petCollection.insertOne()
    ```

  * 🔑 To add our data, we define an object that contains the fields and values that we want to store and pass the object into our `insertOne()`. Then we click `enter` to insert the data.

    ```sh
    db.petCollection.insertOne({ pet: "dog", breed: "chihuahua"})
    ```

  * When a document has been successfully created, an object is returned. If we have not explicitly included a value for the `_id` field, the inserted ID that   MongoDB creates for us is included in this object. 

    ```sh
    { 
     acknowledged: true,
     insertedId: ObjectId("60a46fb6845ecbd2f2736329") 
    }
    ```

  * 🔑 To fetch the document we just created, we use the same syntax with the `find()` method. Notice that when our new document is returned, an `_id` has been inserted into the document.

    ```sh
    db.petCollection.find()
    ```

* On the Local page in Compass, do the following to explore our data using Compass's interface.

  * When we click on the `Refresh` at the top of the Compass screen and the `demoBD` database we just created should appear on the list of available databases. 

  *  We click on the arrow to the left of the `shelterDB` database to open it and click on the `petCollection` collection that appears below. 

  *  The new document that we created appears in the Documents tab.
  
  *  Using the visual interface we can explore, modify, and even delete the data using the `Find` and edit buttons on the page. In the next steps, we will learn to perform these CRUD operations within our app. 

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
