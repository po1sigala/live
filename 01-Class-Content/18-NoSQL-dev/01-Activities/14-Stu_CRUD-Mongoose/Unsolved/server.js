const express = require('express');
const db = require('./config/connection');
// Require model
const {Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new department
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

// Finds first instance of document that meets criteria, in this case with the name "Kids"
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

// Finds one department provided in URL param and deletes
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

app.post('/find-one-update/:department', function(req, res) {
  // TODO: Write route that finds the first instance of document with name of 'Kids'
  // and replaces it with value in URL param
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
