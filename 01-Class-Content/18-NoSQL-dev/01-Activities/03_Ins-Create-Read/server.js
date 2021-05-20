const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3001;
let db;

let connectionStringURI = `mongodb://localhost:27017/sampleDB`

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    });
  });

app.use(express.json())

app.post('/create', function (req, res) {
  db.collection('myCollection').insertOne({ text: req.body.text }, function (
    err,
    results
  ) {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/read', function (req, res) {
  db.collection('myCollection')
    .find()
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});
