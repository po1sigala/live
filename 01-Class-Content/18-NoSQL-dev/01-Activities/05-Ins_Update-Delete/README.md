# Instructor Demo: MongoDB Compass - Update and Delete

* Open Compass on your local machine to do the following:

  * 🔑 To work with our local MongoDB server, we first have to make a connection. By default, the local MongoDB instance runs on localhost with default port `27017`. We will use the default connection at `localhost:27017` to connect to Compass.  

  * With a MongoDB server installed locally and running, we click on `Connect` on the `New Connection` page to connect to the localhost on port `27017`. 
  
  > Note: You do not need to paste a connection string in the box since you are using the default setting. Simply click `Connect`.

  * At the bottom left of the Home screen, we click on `MONGOSH BETA` to open a MongoDB shell. 

* Open the MongoDB shell to do the following: 

  * 🔑 To create a database, we select the new database using the `USE` command and give it a name. The `USE` command performs two common functions. If the database already exists, the `USE` command selects the existing database for use. If the database does not yet exist, `USE` creates the database as well as selects it for use.

    ```sh
    use mygroceryDB;
    ```

  * 🔑 We use the `insertOne()` method to insert a single document into our new collection, `groceryCollection`.

    ```sh
    db.groceryCollection.insertOne();
    ```

  * 🔑 To add our data, we define an object that contains the fields and values that we want to store and pass the object into our `insertOne()`. Then we click `enter` to insert the data.

  * Make sure you note the generated `ObjectId(STRING-VALUE-HERE`. We will use this unique identifier to delete this record later on. 

    ```sh
    db.groceryCollection.insertOne( {"item": "banana", "department": "produce"} );
    ```

  * 🔑 To update the document we just created, we use the `updateOne()` method.

    * The first object we add is key pair that we want to use to find the document, or the filter. In this case, we are going to use the filter to find the document by it's item name. This information is important so that only the document that you want updated is changed. 

    * Then, we use the MongoDB update operator `$set` to set our new value, updating our document. 

    ```sh
    db.groceryCollection.updateOne({"item": "banana"}, {$set: { "item" : "apple"}})
    ```

  * 🔑 To delete the document we just updated, we use the `deleteOne()` method.

    * It is important that you provide filter information so that only the document we want deleted is deleted. 
    
    * In this case, only the document with the item name of `apple` will be deleted. If there happens to be more than one document with the item of `apple`, only the first one will be deleted. 
    
    ```sh
    db.groceryCollection.deleteOne( {"item": "apple"})
    ```

    * A better way to do this is to use the unique identifier, the `_id`. Replace the `item` field with `_id` and paste the ObjectID you noted above as the key-pair value. 

    ```sh
    db.groceryCollection.deleteOne({ "_id" : ObjectId("YOUR-UNIQUE_ID")} )

  * 🔑 To verify that the document has been deleted, we can use the `find` method. If successful, no documents should be returned. 

    ```sh
    db.groceryCollection.find({})
    ```

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
