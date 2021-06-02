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
