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
    db.collection('authorList').insertMany(data, function (err, res) {
      if (err) {
        return console.log(err);
      }
      console.log(res.ops);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    });
  });

// Data for document
const data = [
  {
    title: 'Good Omens',
    // One-to-many relationship
    // Each book has multiple authors
    authors: [
      { name: 'Neil Gaiman', featured: true },
      { name: 'Terry Pratchett', featured: true },
    ],
    details: { ISBN: 9780425132159, price: 10, total_in_stock: 10 },
  },
  {
    title: 'Heads You Lose',
    authors: [
      { name: 'Lisa Lutz', featured: false },
      { name: 'David Hayward', featured: false },
    ],
    // One-to-one embedded document relationship
    // Each book has one set of details
    details: { ISBN: 9780399157400, price: 20, total_in_stock: 8 },
  },
  {
    title: 'Between the Lines',
    authors: [
      { name: 'Jodi Picoult', featured: true },
      { name: 'Samantha Van Leer', featured: false },
    ],
    details: { ISBN: 9781451635751, price: 5, total_in_stock: 5 },
  },
];

app.use(express.json());

// Accessing embedded document with one-to-one relationship
app.get('/price-less-than-10', function (req, res) {
  db.collection('authorList')
    // Use dot notation to query on an embedded document
    .find({ 'details.price': { $lt: 10 } })
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});

// Accessing embedded document with one-to-many relationship
app.get('/featured-authors', function (req, res) {
  db.collection('authorList')
    // If you do not know the array index, use dot notation to access fields nested in arrays
    .find({ 'authors.featured': true })
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});
