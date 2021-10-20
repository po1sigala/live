# 09.4 Full-Time Lesson Plan: Introduction to Mongoose

## Overview

In this class, you will introduce students to Mongoose, a Node.js package that provides a schema-based solution that you can use to model your Node.js application data. Students will build upon their knowledge of MongoDB and learn about how Mongoose makes it easier to handle data from the database.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_Cursor-Methods` through `20-Stu_Aggregates`.

* Today's activities do not have a front end and all routes will be tested using Insomnia. Please make sure you have Insomnia installed locally prior to class. Refer to the [Insomnia installation docs](https://insomnia.rest/download) as needed.

* As we continue to work with MongoDB, Mongoose will be the focus of today's activities. Reassure students that Mongoose is simply a "wrapper" around MongoDB that uses a schema to map to a MongoDB collection and makes it easier to manage relationships among data. This relationship is similar to how Sequelize works with MySQL.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Limit, sort, and skip documents using MongoDB methods.

* Define the structure of the database with schema, and use validators.

* Create a model to map to the MongoDB document.

* Execute CRUD queries using Mongoose.

* Explain how instance methods perform some action on a specific instance of a Model.

* Create and manipulate a document that is nested within another document.

* Access MongoDB's aggregate framework through Mongoose.

## Time Tracker

| Start  | #   | Activity Name                             | Duration |
|---     |---  |---                                        |---       |
| 10:00AM| 1   | Instructor Demo: Cursor Methods           | 0:05     |
| 10:05AM| 2   | Student Do: Cursor Methods                | 0:15     |
| 10:20AM| 3   | Instructor Review: Cursor Methods         | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity            | 0:10     |
| 10:40AM| 5   | Instructor Demo: Models-Schemas           | 0:05     |
| 10:45AM| 6   | Student Do: Models-Schemas                | 0:15     |
| 11:00AM| 7   | Instructor Review: Model-Schemas          | 0:10     |
| 11:10AM| 8   | Instructor Demo: CRUD Mongoose            | 0:05     |
| 11:15AM| 9   | Student Do: CRUD Mongoose                 | 0:15     |
| 11:30AM| 10  | Instructor Review: CRUD Mongoose          | 0:10     |
| 11:40AM| 11  | FLEX                                      | 0:20     |
| 12:00PM| 12  | BREAK                                     | 0:30     |
| 12:30PM| 13  | Instructor Demo: Instance Methods         | 0:05     |
| 12:35PM| 14  | Student Do: Instance Methods              | 0:15     |
| 12:50PM| 15  | Instructor Review: Instance Methods       | 0:10     |
| 1:00PM | 16  | Instructor Demo: Subdocuments             | 0:05     |
| 1:05PM | 17  | Student Do: Opening Subdocuments          | 0:15     |
| 1:20PM | 18  | Instructor Review: Subdocuments           | 0:10     |
| 1:30PM | 19  | Instructor Demo: Aggregates               | 0:05     |
| 1:35PM | 20  | Student Do: Creating Aggregates           | 0:15     |
| 1:50PM | 21  | Instructor Review: Aggregates             | 0:10     |
| 2:00PM | 22  | FLEX                                      | 0:30     |
| 2:30PM | 23  | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Cursor Methods (5 min) 

* Open `09-Ins_Cursor-Methods/server.js` in your IDE and explain the following:

  * In the `GET` route, we see a number of methods that are working to constrain the data that is actually returned.

  * `find()` is used to first return all the documents in the `letterList` collection.

    ```js
    .find()
    ```

  * 🔑 Then, chained to `find()`, we add `sort()` to order the data by a field in ascending or descending order. We use 1 to sort in ascending order and -1 to sort in descending order.

    ```js
    .sort({ letter: 1 })
    ```

  * 🔑 To skip a certain number of documents and not include them in the results, we  use `skip()`. The number added as a parameter equals the number of documents that we want to skip. Using `skip()`, all the documents after the last one skipped will be returned.

    ```js
    .skip(1)
    ```

  * 🔑 Finally, to set a maximum number of results to return, we use `limit()` and set a number as the parameter, such as 10. This will limit the results to a maximum of 10.

    ```js
    .limit(10)
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are three methods we can use to change the data returned in a query?

  * 🙋 We can use `sort()` to sort the data in ascending or descending order, `skip()` to skip over a certain number of documents and exclude them, and `limit()` to set the maximum number of results returned.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Cursor-Methods/README.md`.

### 2. Student Do: Cursor Methods (15 min) 

* Direct students to the activity instructions found in `10-Stu_Cursor-Methods/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📖 Implement Sort and Skip to Change How Documents Are Returned

  Work with a partner to implement the following user story:

  * As a developer, I want to change the order in which read operations return documents.

  * As a developer, I want to omit documents from the list of returned documents and limit the returned number of documents.

  ## Acceptance Criteria

  * It is done when the documents are returned in descending order using MongoDB methods.

  * It is done when the results are limited to five documents.

  * It is done when documents that contain the largest five numbers are skipped.

  * It is done when routes are successfully tested and the results are returned in Insomnia.

  ## 📝 Notes

  Refer to the documentation:

  [MongoDB docs on Sort Results](https://docs.mongodb.com/manual/reference/method/cursor.sort/)

  [MongoDB docs on Skip Returned Results](https://docs.mongodb.com/manual/reference/method/cursor.skip/)


  ## 💡 Hints

  * Does MongoDB store documents in a particular order? What happens if there are duplicate values?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What method can we use to maximize performance and prevent MongoDB from returning more results than required for processing?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Cursor Methods (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with sorting, skipping, and limiting results using cursor methods? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `sort()`

  * ✔️ `skip()`

  * ✔️ `limit()`

* Open `10-Stu_Cursor-Methods/Solved/server.js` in your IDE and explain the following:

  * 🔑 We start with a working `GET` route that is currently finding all the documents in the `numbersList` collection. This route has been provided for us.

    ```js
    app.get('/read', (req, res) => {
      db.collection('numberList')
      .find()
      ...
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
     });
    ```

  * 🔑 To sort the data by the `number` field in descending order, we chain a `sort()` method after the `find()` method. Order matters here! We always want to fetch the data using `find()` before applying any cursor methods to constrain the data.

    ```js
    .find()
    .sort({ number: -1 })
    ```

  * 🔑 Next, we add `skip()`. Because we want to skip over the first 5 results, we set the parameter to 5.

    ```js
    .find()
    .sort({ number: -1 })
    .skip(5)
    ```

  * 🔑 Finally, we want to return a maximum of 5 documents, so we use `limit()`.

    ```js
    .find()
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    ```

  * Our completed `GET` route will return sorted documents that skip the first 5 documents and have a maximum limit of 5. While sort, skip, and limit can be used alone, these three methods are often used together to constrain results to tailor the returned results to only those we need.

    ```js
    app.get('/read', (req, res) => {
       db.collection('numberList')
      .find()
      .sort({ number: -1 })
      .skip(5)
      .limit(5)
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
     });
    ```

* In your command line, navigate to `10-Stu_Cursor-Methods/Solved` and run `npm install` and `node server` to demonstrate the following in Insomnia:

  * When we test the `GET` request with the route `localhost:3001/read`, we see that the results are sorted by the `number` field in descending order, 5 results are skipped, and the results are limited to 5.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `limit()` and `skip()` cursor methods?

  * 🙋 The `limit()` cursor methods sets a maximum number of documents that will be returned, whereas the `skip()` method excludes a certain number of documents and returns only the documents that come after them. Both methods are frequently used to constrain the data returned in a MongoDB query.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MongoDB docs on cursor methods](https://docs.mongodb.com/manual/reference/method/js-cursor/), and attend Office Hours to ask for help.

  * Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 mins)

* The topic of today's lesson is Mongoose, an Object Data Modeling (ODM) library for MongoDB. Using the prompts provided, discuss the usefulness of data modeling and ODMs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is data modeling? Or more specifically, what is an object-based data model?

  * 🙋 Generally speaking, Object Data Modeling is focused on how the data is represented. It isn't so much about what the data is, but more about how it is visualized and connected. Data modeling can help us handle large amounts of data efficiently and get the right data back quickly.

  * ☝️ Where have we seen something similar to this before?

  * 🙋 We saw something similar to this when we used Sequelize, an object-relational mapper (ORM), with our MySQL database. Mongoose is similar to Sequelize in that respect. Mongoose is an Object Data Modeling (ODM) library, also known as an Object Data Mapper, for MongoDB. Think of it like a wrapper around MongoDB which makes it easier to manage relationships among data.

  * ☝️ What are the benefits of using Mongoose with MongoDB?

  * 🙋 Mongoose makes it easier to use MongoDB because of its built-in structure and methods. The structure of Mongoose contains business logic that helps you organize your data. The built-in methods help automate common tasks and queries, which help you work more quickly and efficiently.

  * ☝️ Do we have to use Mongoose when working with MongoDB?

  * 🙋 Not at all! It is important to remember that Mongoose is simply a helpful tool for working with MongoDB databases, especially when compared to ORMs like Sequelize, which were more essential for relational databases. MongoDB has plenty of built-in features that help us organize, analyze, and keep track of our data on its own. However, Mongoose lets us handle the data more easily.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Models and Schema (5 min) 

* Open `11-Ins_Models-Schemas/config/connection.js` in your IDE and demonstrate the following:

  * 🔑 In order to implement Mongoose, we need to wrap it around our local connection to MongoDB. We use the `connect()` method to accomplish this.

    ```js
    mongoose.connect('mongodb://localhost:27017/mygroceryDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    ```

  * You'll notice some options that we are using in our `connect()` method. These are not crucial to understand, but if you want to know more about it, you can check out the [Mongoose docs on connections](https://mongoosejs.com/docs/connections.html#options). They fix the deprecation warnings regarding the MongoDB Node.js driver to make sure that the connection works. You can read more about this in the [Mongoose docs on deprecation warnings](https://mongoosejs.com/docs/deprecations.html).

* In your IDE, open `11-Ins_Models-Schemas/models/Item.js` and demonstrate the following:

  * 🔑 We need to define a schema for our model. Everything in Mongoose starts with a **schema**. Each schema maps to a MongoDB collection and defines the shape of the documents in that collection. We are using the `grocerySchema`.

    ```js
    const grocerySchema = new mongoose.Schema({
      item: { type: String, required: true },
      stockCount: Number,
      price: Number,
      inStock: Boolean,
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * Each key in the `grocerySchema` defines a property in our documents that will be cast to its associated `SchemaType`. For example, `item` is a property with the `String SchemaType`. It is also using a built-in validator, `required`, which means that this property must exist in order for the instance to be created.

    ```js
    item: { type: String, required: true }
    ```

  * Notice that `Number` and `Boolean` is shorthand for `{type: Number}` and `{type: Boolean}` for the `price` and `inStock` properties.

    ```js
    price: Number,
    inStock: Boolean,
    ```

  * 🔑 Now that we have our schema set up, we can compile our model. When we call the `model()` method on our schema, Mongoose will compile a model for us!

    ```js
    const Item = mongoose.model('Item', grocerySchema);
    ```

  * The first argument of the `model()` method is the singular name of the collection our model is for, which in our case is `Item`. Mongoose will look for the plural, lowercase version of the model name as the collection in our database, which in our case will be `items`.

  * The second argument of the `model()` method is the schema we are using, which is `grocerySchema`.

  * 🔑 To create a new document, we will use the `.create()` method on our model. We are using the model to create individual documents that have the properties as defined in our schema.

    ```js
    Item.create(
      {
        item: 'banana',
        stockCount: 10,
        price: 1,
        inStock: true,
      },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

* Open `11-Ins_Models-Schemas/server.js` in your IDE and demonstrate the following:

  * We need to require our `Item` model at the top of the file.

    ```js
    const { Item } = require('./models');
    ```

  * 🔑 In our GET route, we are using the model to `.find()` all documents that are instances of that model.

    ```js
    app.get('/all-items', (req, res) => {
      Item.find({}, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(result);
        }
      });
    });
    ```

  * We are using the `.find()` method on our `Item` model inside the GET route.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use a Mongoose model to create a new document?

  * 🙋 First, we would need to create a schema that defines the properties of the data we want to store. Then we would compile the model. Finally, we would create new documents based on the model we just created. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Models-Schemas/README.md`.

### 6. Student Do: Models and Schema (15 min) 

* Direct students to the activity instructions found in `12-Stu_Models-Schemas/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Models and Schemas Using Mongoose

  Work with a partner to add comments that describe the functionality of the code found in [models/Book.js](./Unsolved/models/Book.js) and [server.js](./Unsolved/server.js).

  ## 📝 Notes

  Refer to the documentation:

  [Mongoose docs on models](https://mongoosejs.com/docs/models.html)

  [Mongoose docs on schemas](https://mongoosejs.com/docs/guide.html)

  [Mongoose docs on validation](https://mongoosejs.com/docs/validation.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you design a custom validator using a validation function to suit your data's needs?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Models and Schema (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Mongoose models and schema? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `mongoose.Schema()`

  * ✔️ `mongoose.model()`

  * ✔️ `.create()`

  * ✔️ `.find()`

* Open `12-Stu_Models-Schemas/Solved/models/Book.js` in your IDE and explain the following:

  * 🔑 First, we are creating our `bookSchema`. We use the `Schema()` method to define the `bookSchema`. We specify the `SchemaType` and use validation to specify which properties are required.

    ```js
    const bookSchema = new mongoose.Schema({
      title: { type: String, required: true },
      author: { type: String, required: false },
      publisher: String,
      stockCount: Number,
      price: Number,
      inStock: Boolean,
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * 🔑 Next, we compile a model based on our `bookSchema`.

    ```js
    const Book = mongoose.model('Book', bookSchema);
    ```

  * 🔑 We create a new instance of the `Book` model. This instance includes all of the properties outlined in our schema.

    ```js
    Book.create(
      {
        title: 'Diary of Anne Frank',
        author: 'Anne Frank',
        publisher: 'Scholastic',
        stockCount: 10,
        price: 10,
        inStock: true,
      },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

  * But the next instance only includes the `title`, which is required, and the `author`, which isn't specifically required.

    ```js
    Book.create(
      { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

  * The last instance simply includes only the required property, which was `title`.

    ```js
    Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
      err ? handleError(err) : console.log('Created new document')
    );
    ```

  * This is a good example of the flexibility of NoSQL databases and how validators can be useful when specifying the type of data you want to have in the database. This allows better control of the quality of data that gets saved in your database.

* Open `12-Stu_Models-Schemas/Solved/server.js` in your IDE and explain the following:

  * First, we need to import our `Book` model.

    ```js
    const { Book } = require('./models');
    ```

  * Next, in our GET route, we are using the `.find()` method on our `Book` model to find all the books in our collection.

    ```js
    app.get('/all-books', (req, res) => {
      Book.find({}, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(result);
        }
      });
    });
    ```

* Run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * When we make a GET request to `localhost:3001/all-books`, we see all of our books returned in JSON format. Every book instance has a title, because it was required, but the other properties were optional.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some other Mongoose built-in validators?

  * 🙋 Numbers have `min` and `max` validators. Strings have `enum`, `match`, `minLength`, and `maxLength` validators.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on schemas](https://mongoosejs.com/docs/guide.html#definition), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: CRUD Mongoose (5 min) 

* Open the previous Instructor Demo file, `11-Ins_Models-Schemas/models/Item.js`, in your IDE and demonstrate the following:

  * When we execute CRUD operations with Mongoose, we will see how similar they are to regular MongoDB CRUD methods.

  * 🔑 When we create a new instance of a model, we can use `.create()` or `.save()`. We used `.create()` to create a document of the `Item` model.

    ```js
    Item.create(
      {
        item: 'banana',
        stockCount: 10,
        price: 1,
        inStock: true,
      },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

  * Another way to create a document is to use the `.save()` method, which we will demo next.

* Open `13-Ins_CRUD-Mongoose/server.js` in your IDE and demonstrate the following:

  * 🔑 We see a POST request being made to create a new `Department`. We will take the name of the new department from the params. Notice that we are using the `.save()` method to create this new document.

    ```js
    app.post('/new-department/:department', (req, res) => {
      const newDepartment = new Department({ name: req.params.department });
      newDepartment.save();
      if (newDepartment) {
        res.status(201).json(newDepartment);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    });
    ```

  * 🔑 We know we can use the `.find()` method to query the database to find all the documents that are instances of that model, but Mongoose also provides static helper functions for MongoDB CRUD operations. If we want to find one specific document, we can use the `.findOne()` method.

    ```js
    app.get('/find-wine-department', (req, res) => {
      Department.findOne({ name: 'Wine' }, (err, result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          console.log('Uh Oh, something went wrong');
          res.status(500).json({ error: 'Something went wrong' });
        }
      });
    });
    ```

  * In the preceding code block, we see a GET route to find the wine department. We are using the `.findOne()` method on the `Department` model and hardcoding the name of the department as Wine for now. This will return the first document with the name Wine.

  * 🔑 Another helper function that we can use for MongoDB CRUD operations is the `.findOneAndDelete()`. This will find the document and delete it from the database. This time, instead of hardcoding the name, we will use the URL params.

    ```js
    app.delete('/find-one-delete/:departmentName', (req, res) => {
      Department.findOneAndDelete(
        { name: req.params.departmentName },
        (err, result) => {
          if (result) {
            res.status(200).json(result);
            console.log(`Deleted: ${result}`);
          } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ error: 'Something went wrong' });
          }
        }
      );
    });
    ```

  * In the preceding code block, we see a DELETE route to find one department and delete it. The `.findOneAndDelete()` method will take in the name of the department from the params, query the database, and delete that document.

  * Now that we've seen the code, let's test these routes in Insomnia.

* Run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * First, let's create a new department. We will make a POST request to `localhost:3001/new-department/Snacks` to create a new Snacks department in Insomnia. If the request is successful, we should get the new document returned, similar to the following:

    ```json
    {
      "_id": "611d1fc95db4d4153d5d11fe",
      "name": "Snacks",
      "lastAccessed": "2021-08-18T14:57:13.184Z"
    }
    ```

  * Next, let's find the first Wine document. We will make a GET request to `localhost:3001/find-wine-department` in Insomnia. If the request is successful, we should get the first Wine document returned, similar to the following:

    ```json
    {
      "_id": "6115cecd9da5b53b2ac2e0d3",
      "name": "Wine",
      "lastAccessed": "2021-08-13T01:45:49.653Z",
      "__v": 0
    }
    ```

  * Finally, let's delete the Snacks department that we just created. We will make a DELETE request to `localhost:3001/find-one-delete/Snacks` in Insomnia. If the request is successful, we should get the deleted Snacks department returned, similar to the following:

    ```json
    {
      "_id": "611d1fc95db4d4153d5d11fe",
      "name": "Snacks",
      "lastAccessed": "2021-08-18T14:57:13.184Z",
      "__v": 0
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can check the [Mongoose docs on queries](https://mongoosejs.com/docs/queries.html) to use the helper functions for CRUD operations.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_CRUD-Mongoose/README.md`

### 9. Student Do: CRUD Mongoose (15 min) 

* Direct students to the activity instructions found in `14-Stu_CRUD-Mongoose/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📖 Implement CRUD Operations Using Mongoose

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to find a single document and update it by using a Mongoose CRUD method.

  ## Acceptance Criteria

  * It is done when I use a Mongoose CRUD method to select a single document with the `name` property of `Kids` and update it.

  * It is done when the updated document has an updated `name` property value that matches the value provided in the route parameter.

  * It is done when only the `name` property has been updated in the document and no other changes have been made.

  * It is done when I test the `POST` Route in Insomnia and the updated document is returned.

  ## 📝 Notes

  Refer to the documentation:

  [Mongoose docs on findOneAndUpdate()](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)

  ---

  ## 💡 Hints

  * How can you add an option to your Mongoose CRUD method so that the updated object is returned?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `insert()`, `insertMany()`, and `create()`? Why would you use one method over the other?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: CRUD Mongoose (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with CRUD operations in Mongoose? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `.findOneAndUpdate()`

* Open `14-Stu_CRUD-Mongoose/Solved/server.js` in your IDE and explain the following:

  * We had to find the document with the name Kids and update it to a different name of our choice. We were also given the Mongoose docs on how to use `.findOneAndUpdate()`.

  * 🔑 First, we use the `.findOneAndUpdate()` method on the `Genre` model.

    ```js
    Genre.findOneAndUpdate(
    ```

  * The first parameter is the condition; what are we looking for? We are looking for the document with the name Kids.

    ```js
    { name: 'Kids' },
    ```

  * The next parameter is update; what are we updating it to? We are updating the name to what the value of the URL param is.

    ```js
    { name: req.params.genre },
    ```

  * The last parameter is a bit tricky. We need to use an option to return the updated information, not the original document. To do that, we set the `new` option to `true`.

    ```js
    { new: true },
    ```

  * Finally, we need to add the callback function that handles our errors and returns the updated document.

    ```js
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }
    ```

* Run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * Let's make sure it works! We will make a POST request to `localhost:3001/find-one-update/History` to change the name of the genre to History, or whatever else you would like, in Insomnia.

  * If the request is successful, we should get the updated genre returned, similar to the following:

    ```json
    {
      "_id": "611d25f4886a0717e9d419d8",
      "name": "History",
      "lastAccessed": "2021-08-18T15:23:32.667Z",
      "__v": 0
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the two ways in which a Mongoose query can be executed?

  * 🙋 We can pass in a callback function, which will allow Mongoose to execute the query asynchronously and pass the results to the callback. Or we can use `.then` and use the query as a promise.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on queries](https://mongoosejs.com/docs/queries.html), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this unit.

* Ask students if they have any questions about Mongoose so far.

### 12. BREAK (30 mins)

### 13. Instructor Demo: Populate (5 min) 

* Change into `14-Ins-Populate` and start the server with `node server.js`. 

* Then, visit `/books` to see your books listed.

```js
[{
    "_id": "5cfbc820bc851f678c714b2c",
    "author": "Herman Melville",
    "title": "Moby Dick",
    "__v": 0
}, {
    "_id": "5cfbc83ebc851f678c714b2d",
    "author": "F. Scott Fitzgerald",
    "title": "The Great Gatsby",
    "__v": 0
}]
```

* Then visit `/library` to see your library data listed in JSON, including a list of `ObjectIds` in the book property. These are the `ObjectIds` associated with each book we've made.

```js
[{
    "books": ["5cfbc510fff60b62b1a9c318", 
              "5cfbc51cfff60b62b1a9c319", 
              "5cfbc820bc851f678c714b2c", 
              "5cfbc83ebc851f678c714b2d"],
    "_id": "5cfbc29cfff60b62b1a9c317",
    "name": "Campus Library",
    "__v": 0
}]
```

* Ask students, what if we want to see the data for all of the books stored in our library. We could go back to books, but what if we want to include all of the information about our library and our books, and query that data with just one call.

  * Answer: This is where `Mongoose`'s populate method comes in. Open the `/populated` route in your browser, and go to the books property. All of the books will be there.

  ```js
  [{
      "books": [{
          "_id": "5cfbc820bc851f678c714b2c",
          "author": "Herman Melville",
          "title": "Moby Dick",
          "__v": 0
      }, {
          "_id": "5cfbc83ebc851f678c714b2d",
          "author": "F. Scott Fitzgerald",
          "title": "The Great Gatsby",
          "__v": 0
      }],
      "_id": "5cfbc29cfff60b62b1a9c317",
      "name": "Campus Library",
      "__v": 0
  }] 
  ```

* How does this happen?

  * Show them the `Library.js` model, and how it has a reference to the `Book.js` model inside it's schema.

    ```js
    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;

    const LibrarySchema = new Schema({
      name: {
        type: String,
        unique: true
      },
      books: [
        {
          type: Schema.Types.ObjectId,
          ref: "Book"
        }
      ]
    });

    const Library = mongoose.model("Library", LibrarySchema);

    module.exports = Library;
    ```

  * Then show them the `index.js` file inside of the `models` folder.

    ```js
    module.exports = {
    Book: require("./Book"),
    Library: require("./Library")
    };
    ```

  * Explain that when working with multiple models, it's often useful to be able to require all of them at once, rather than individually. 
  
  * By exporting an object containing all of our models from the `index.js` file in the models folder, we can then require this object and access all of our models inside of `server.js`.

    ```js
    const db = require("./models");
    ```

  * Point out the `populate` method being used in `server.js`.

    ```js
    app.get("/populated", (req, res) => {
    db.Library.find({})
      .populate("books")
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
    });
    ```

  * Explain that here we are running `populate("books")` after finding books and before handling the result of the query in `.then`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `15-Stu-Populate/README.md`.

### 14. Student Do: Populate (15 min) 

* Direct students to the activity instructions found in `15-Stu-Populate/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Populate

  ## Instructions

  * Open `server.js` and update the `/populate` route to return `Users` populated with notes as JSON to the client.

  ## 💡 Hint(s)

  * Check out the `Note.js` and `User.js` models to see how the schemas there make the populate method possible.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Populate (10 min) 

* Open up `15-Stu-Populate/Solved/server.js`.

* Ask for a volunteer to to walk you through the solution.

```js
app.get("/populateduser", (req, res) => {
  db.User.find({})
    .populate("notes")
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});
```

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Opening IndexedDB (5 min) 

* Introduce the students to the Indexed Database API (IndexedDB) is a JavaScript application programming interface provided by web browsers for managing a NoSQL database of JSON objects in the client.

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ We access `indexedDB` via the `window` object.

  * ✔ We create a new IndexedDB connection using the `open` method and pass it a name for the DB and a version number.

  * ✔ Our request returns a result that we can then manipulate.

  ```js
  const request = indexedDB.open("firstDatabase", 1);
  
  request.onsuccess = event => {
    console.log(request.result);
  };
  ```

* Open `16-Ins_Opening_IndexedDB/index.html` in your browser and open your Chrome Developer tools and navigate to `Application` then `IndexedDB`.

  ![16-Ins_Opening_IndexedDB.png](Images/16-Ins_Opening_IndexedDB.png)

* Navigate into the `16-Ins_Opening_IndexedDB` directory and open `index.html` from the command line. Inside the `IndexedDB` tab we see that we now have a new database connection called `firstDatabase`.

* Ask the class the following question(s): 

  * ☝️ How many arguments does the `open` method take and what are they for?

  * 🙋 Two and the first one is the DB name, the second is the version number. The version number controls which version of the schema to use.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `17-Stu_Opening_IndexedDB/README.md`.

### 17. Student Do: Opening IndexedDB (15 min) 

* Direct students to the activity instructions found in `17-Stu_Opening_IndexedDB/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Requesting an IndexedDB Database

  In this activity, you will create a request for an indexedDB database and console.log the name of the db to the screen. 

  ## Instructions

  * Write code to request an IndexedDB database instance.
  * On success, log the name of the database to your console.

  ## 💡 Hint(s)

  * Use the [open](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) docs to learn about the arguments it takes.

  * You can `console.log` the `request` to so what attributes are available to you.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Opening IndexedDB (10 min) 

* Use the prompts and talking points below to review the following key point(s):

  * ✔ We first request our DB instance with `const request = window.indexedDB.open("firstDatabase", 1);`
  
  * ✔ In the `onsuccess` method we `console.log(request.result.name);` 

  ✔ The `onsuccess` method is called every time we make a request.

* Open `17-Stu_Opening_IndexedDB/Solved/index.html` in your IDE and explain the following point(s):

  * We first request our DB instance with `const request = window.indexedDB.open("firstDatabase", 1);`
  
  * In the `onsuccess` method we `console.log` the `name` of the `result`, which is the database name.

  ```js
  const request = window.indexedDB.open("firstDatabase", 1);
    request.onsuccess = event => {
    console.log(request.result.name);
  };
  ```

  * 🔑 Our `open` method takes two arguments, first the db name and then the version number. 

* Ask the class the following question(s):

  * ☝️ What happens when we call `open` on `indexedDB`?

  * 🙋 The call to the `open()` method returns a request object with a `result` (success) value that you handle as an event. 

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Creating Object Stores (5 min) 

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔ Object stores can be thought of as a "table" where we hold data.

  * ✔ Object stores can hold any data type.

  * ✔ Object stores are schema-less, unlike SQL databases.

  * ✔ We create our object stores in the `onupgradeneeded` method which is called when you change the db version. ie: From no database to 1, from 1 to 2 etc.

  * ✔ If the database doesn't already exist, it is created by the `open` operation, then an `onupgradeneeded` event is triggered.

*  Open `18-Ins_Creating_Object_Stores/index.html` in your IDE and explain the above points.

  ```js
  const request = window.indexedDB.open("todoList", 1);
  
  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("todoList");
  };

  request.onsuccess = event => {
    console.log(request.result);
  };
  ```

* Next open `18-Ins_Creating_Object_Stores/index.html` in your browser and open your Chrome Developer tools and navigate to `Application` then `IndexedDB`.

  ![18-Ins_Creating_Object_Stores.png](Images/18-Ins_Creating_Object_Stores.png)

* We navigate into the `20-Ins_Creating_Object_Stores` directory and open `index.html` from the command line. Inside the `IndexedDB` tab we see that we now have a new database connection called `todoList`.

* When we click on the database tab, we can see that we now have an empty object store called `todoList`.

* Ask the class the following question(s): 

  * ☝️ What is an object store?

  * 🙋 It's similar to an SQL table and where we store data in IndexedDB.

  * ☝️ What is the main difference between an object store and an SQL table?

  * 🙋 Object stores do not have schemas.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `19-Stu_Creating_Object_Stores/README.md`.

### 20. Student Do: Creating Object Stores (15 min) 

* Direct students to the activity instructions found in `19-Stu_Creating_Object_Stores/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Creating an Object Store

  In this activity, you will create an object store for your IndexedDB database.

  ## Instructions

  * Write code to request an IndexedDB database instance.
  * On success, log the result to your console.
  * Inside the `onupgradeneeded` method, create an object store for your database called `toDoList`.

  ## 💡 Hint(s)

  * Use the [open](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) docs to learn about the arguments it takes.
  * You can `console.log` the `request` to so what attributes are available to you.

  ## 🏆 Bonus

  * Use the [keyPath](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/keyPath) docs to research what a `keyPath` is and how to add it to your `objectStore`.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Creating Object Stores (10 min) 

* Use the prompts and talking points below to review the following key point(s):

  * ✔ We create the object store in the `onupgradeneeded` method.

* Open `19-Stu_Creating_Object_Stores/Solved/index.html` in your IDE and review the code snippet.

  ```js
  const request = window.indexedDB.open("todoList", 1);
    
  request.onsuccess = event => {
    console.log(request.result);
  };

  request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("todoList");
  };
  ```

* In your browser's DevTools, be sure to have deleted the "todoList" database from the list of IndexedDB in the Application tab before starting this activity!

* Ask the class the following question(s):

  * ☝️ What do we use object stores for? 

  * 🙋 To store our indexedDB data.

* Answer any questions before proceeding.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this unit.

* Ask students if they have any questions about IndexedDB or anything else covered so far in this unit.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
