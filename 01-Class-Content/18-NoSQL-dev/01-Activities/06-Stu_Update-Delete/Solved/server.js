const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/inventoryDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    });
  });

app.use(express.json());

app.post('/create', function (req, res) {
  db.collection('bookCollection').insertOne({"title": req.body.title, "author": req.body.author}, 
    function (err,results) {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', function (req, res) {
  db.collection('bookCollection')
    .find()
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});

//To delete an object, the numerical id string must be wrapped with ObjectID()
app.delete('/delete', function (req, res) {
  // Use .deleteOne() to delete one object
  db.collection('bookCollection').deleteOne(
    // This is the filter. The delete only the document that matches the _id provided in the request body
    { _id: req.body.id },
    function (err) {
      if (err) throw err;
      res.send('Document deleted')
    }
  );
});

// This version uses template literal
app.delete-example('/delete', function (req, res) {
  // Use .deleteOne() to delete one object
  db.collection('bookCollection').deleteOne(
  // This is the filter. The delete only the document that matches the _id provided in the request body
    { _id: `ObjectId(${req.body.id{color}})` },
    function (err) {
      if (err) throw err;
      res.send('Document deleted');
    }
  );
});
