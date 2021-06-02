const express = require('express');
const db = require('./config/connection');
// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all departments
app.get('/all-departments', function(req, res) {
  // Using model in route to find all documents that are instances of that model
  Department.find({}, function(err, result) {
    if (err) throw err;
    if (result) {
      res.json(result)
    } else {
      console.log("Uh Oh, something went wrong")
    }
  });
});

// Finds one finds the first instance of a matching document 
app.get('/find-one-department', function(req, res) {
  // Using model in route to find all documents that are instances of that model
  Department.findOne({name: "Wine"}, function(err, result) {
    if (err) throw err;
    if (result) {
      res.json(result)
    } else {
      console.log("Uh Oh, something went wrong");
      res.json(err);
    }
  });
});

// Finds first instance of document matching parameter and deletes 
// For demo, use 'Wine' as URL param
app.delete('/find-one-delete/:department', function(req, res) {
  Department.findOneAndDelete({ name: req.params.department }, function (err, result) {
    if (err) throw err;
    if (result) {
      res.json(result);
      console.log('Deleted: ' + result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.json(err);
    }
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
