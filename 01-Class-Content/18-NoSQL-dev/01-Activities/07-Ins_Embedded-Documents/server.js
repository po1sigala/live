const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/groceryListDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('groceryList').deleteMany({});
    // Adds data to database
    db.collection('groceryList').insertOne(data, function (err, res) {
      if (err) {
        return console.log(err);
      }
      console.log(res.ops[0]);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    });
  });

// Data for document
const data = {
  department: 'produce',
  // Embedded document
  items: [
    { name: 'apple', type: 'Granny Smith', price: 4 },
    { name: 'apple', type: 'Red Delicious', price: 2 },
    { name: 'apple', type: 'Macintosh', price: 3 },
    { name: 'pear', price: 2 },
  ],
};

app.use(express.json());

app.get('/all-apples', function (req, res) {
  db.collection('groceryList')
    // Use dot notation for embedded document
    .find({ 'items.price': 2 })
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});
