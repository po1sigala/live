const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/authorListDB`;


let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('authorList').deleteMany({});
    // Adds data to database
    db.collection('authorList').insertOne(data, function (err, res) {
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
  author: 'Dr. Seuss',
  // Embedded document
  books: [
    { title: 'Oh the Places You Will Go!', price: 10 },
    { title: 'Cat in the Hat', price: 5 },
    { title: 'Green Eggs and Ham', price: 4 },
  ],
};

app.use(express.json());

app.get('/price-less-than-20', function (req, res) {
  db.collection('authorList')
    .find({ 'price': { $lte: 20 } })
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});
