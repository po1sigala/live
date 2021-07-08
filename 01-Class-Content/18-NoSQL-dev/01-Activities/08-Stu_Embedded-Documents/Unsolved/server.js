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

app.use(express.json());

app.get('/price-less-than-20', function (req, res) {
  db.collection('authorList')
    .find({ 'price': { $lte: 20 } })
    .toArray(function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});
