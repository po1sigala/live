#  Instructor Demo: MongoDB Compass

* MongoDB Compass is the GUI for MongoDB and is a great way to explore a database and interact with data in a visual way. 

* Open Compass on your local machine to do the following:

  *  With a MongoDB server installed locally and running, we click on `Connect` to connect to the localhost. 
  > Note: You do not need to paste a connection string in the box. Simply click `Connect`.

  *  At the bottom left of the Home screen, we click on `MONGOSH BETA` to open a MongoDB shell. 

* Open the MongoDB shell to do the following: 

  * 🔑 To create a database, we select the new database using the `USE` command and give it a name. The `USE` command performs two common functions. If the database already exists, the `USE` command selects the existing database for use. If the database does not yet exist, `USE` creates the database as well as selects it for use.

    ```sh
    USE demoDB
    ```

  * 🔑 Data in MongoDB databases is stored in one or more collections. Just like creating a database, we do not have to use a special command to create the collection. Instead, we can simply give the new collection a name and insert data in a single step. 
  
  *  We use the `insertOne()` method to insert a single document into our new collection, `collection1`. We can also use `insertOne()` to add data to an existing collection using the same syntax.  

    ```sh
    db.collection1.insertOne({ pet: "dog", breed: "chihuahua"})
    ```

  * We define an object that contains the fields and values that we want to store and pass the object into our `insertOne()`. Then we click `enter`.

    ```sh
    db.collection1.insertOne({ pet: "dog", breed: "chihuahua"})
    ```

  * When a document have been successfully created, an object is returned. If we have not explicitly included a value for the `_id` field, the inserted ID that     MongoDB creates for us is included in this object. 

    ```sh
    { acknowledged: true,
     insertedId: ObjectId("60a46fb6845ecbd2f2736329") 
    }
    ```

  * To find all the documents in the collection, we use `find()`. Notice that when our new document is returned, an `_id` has been inserted into the document.

    ```sh
    db.collection1.find()
    ```

* On the Local page in Compass, do the following to explore our data using Compass's interface.

* When we click on the `Refresh` at the top of the Compass screen and the `demoBD` database we just created should appear on the list of available databases. 

*  We click on the arrow to the left of the `demoBD` database to open it and click on the `collection1` collection that appears below. 

*  The new document that we created appears in the Documents tab.
  
*  Using the visual interface we can explore, modify, and even delete the data using the `Find` and edit buttons on the page. In the next steps, we will learn to perform these CRUD operations within our app. 

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
