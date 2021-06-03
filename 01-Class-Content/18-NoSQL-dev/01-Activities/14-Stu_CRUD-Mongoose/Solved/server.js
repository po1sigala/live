const express = require('express');
const db = require('./config/connection');
// Require model
const {Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/new-department/:department', function(req, res, err) {
  const newDepartment = new Department({ name: req.params.department });
  newDepartment.save();
  if (newDepartment) {
    res.json(newDepartment);
  } else {
    console.log("Uh Oh, something went wrong");
    res.json(err);
  }
});

// Finds all documents
app.get('/all-departments', function(req, res) {
  // Using model in route to find all documents that are instances of that model
  Department.find({}, function(err, result) {
    if (err) throw err;
    if (result) {
      res.json(result);
    } else {
      console.log("Uh Oh, something went wrong");
      res.json(err);
    }
  });
});

// Finds first document that meets criteria, in this case with the name property of "Kids"
app.get('/find-one-department', function(req, res) {
  Department.findOne({name: "Kids"}, function(err, result) {
    if (err) throw err;
    if (result) {
      res.json(result)
    } else {
      console.log("Uh Oh, something went wrong");
      res.json(err);
    }
  });
});

// Finds first document that matches and deletes 
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

// Finds the first document with the name of "Kids" and updates name to provided URL param value
app.post('/find-one-update/:department', function(req, res) {
  // Uses findOneAndUpdate() method on model
  Department.findOneAndUpdate(
    // Find first document with name of "Kids"
    { name: 'Kids' },
    // Replace name with value in URL param
    { name: req.params.department },
    // Sets to true so updated information is returned; Otherwise original document will be returned
    { new: true },
    function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result);
        console.log('Deleted: ' + result);
      } else {
        console.log('Uh Oh, something went wrong');
        res.json(err);
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
