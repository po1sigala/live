# Instructor Demo: MongoDB Compass

* MongoDB Compass is the GUI for MongoDB and is a great way to explore a database and interact with data in a visual way. 

* Open Compass on your local machine to do the following:

  * 🔑 To work with our local MongoDB server, we first have to make a connection. By default, the local MongoDB instance runs on localhost with default port `27017`. We will use the default connection at `localhost:27017` to connect to Compass.  

  * With a MongoDB server installed locally and running, click on the `Connect` button under `New Connection` at the center of the page.
  
  > Note: You do not need to paste a connection string in the text box since you are using the default setting. Simply click on the `Connect` button to connect and proceed to the next screen.

  * At the top left of the next screen under `host`, we see that we have successfully connected to `localhost:27017`.

  * The built-in MongoDB shell is located the bottom left of the Local screen. Click on `MONGOSH` to open a new MongoDB shell.

* Open the MongoDB shell to do the following: 

  * 🔑 To create a database, we select the new database using the `USE` command and give it a name. The `USE` command performs two common functions. If the database already exists, the `USE` command selects the existing database for use. If the database does not yet exist, `USE` creates the database as well as selects it for use.

  * To create a new `shelterDB` we enter, `useshelterDB;` after the prompt. 

    ```sh
    use shelterDB;
    ```

  * 🔑 Data in MongoDB databases is stored in one or more collections. Just like creating a database, we do not have to use a special command to create the collection. Instead, we can simply give the new collection a name and insert data in a single step.

    * We start our command with `db.` This `db` refers to the current database in use. We then entire the name of the collection we want to use. Since `petCollection` doesn't exist yet, it will be automatically created when the command is executed.

    * We use the `insertOne()` method to insert a single document into our new collection, `petCollection`.

      ```sh
      db.petCollection.insertOne();
      ```

  * 🔑 Before executing the command, we fist must add our data. We define an object that contains the fields and values that we want to store and pass the object into our `insertOne()`.

    ```sh
    db.petCollection.insertOne({ pet: "dog", breed: "chihuahua"});
    ```

  * Now that our command is complete, we click `enter` to insert the data.

  * When a document has been successfully created, an object is returned. If we have not explicitly included a value for the `_id` field, the inserted ID that MongoDB creates for us is included in this object. 

    ```sh
    { 
     acknowledged: true,
     insertedId: ObjectId("{Unique-ID-String-Here}") 
    }
    ```

  * 🔑 To fetch the document we just created, we use the same syntax with the `find()` method. Notice that when our new document is returned, an `_id` has been inserted into the document.

    ```sh
    db.petCollection.find();
    ```

* Scroll up to the top of the page, and do the following to explore our data using Compass's interface:

  * When we click on the `Refresh` located the top of the Compass screen underneath `Local`, the `shelterDB` database we just created should appear on the list of available databases. 

  * We click on the arrow to the left of the `shelterDB` database to open it and click on the `petCollection` collection that appears below.

  * Once the `petCollection` is opened, the new document that we created appears in the Documents tab on the right of hte screen. 
  
  * Using the visual interface we can explore, modify, and even delete the data using the `Find` and edit buttons on the page. In the next steps, we will learn to perform these CRUD operations within our app. 

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
