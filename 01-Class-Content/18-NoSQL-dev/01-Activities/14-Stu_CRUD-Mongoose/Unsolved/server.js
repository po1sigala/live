const express = require('express');
const db = require('./config/connection');
// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/new-department/:department', (req, res) => {
  const newDepartment = new Department({ name: req.params.department });
  newDepartment.save();
  if (newDepartment) {
    res.status(200).json(newDepartment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds all documents
app.get('/all-departments', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Department.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

// Find first document with name equal to "Kids"
app.get('/find-one-department', (req, res) => {
  Department.findOne({ name: 'Kids' }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

// Finds first document that matches and deletes
app.delete('/find-one-delete/:department', (req, res) => {
  Department.findOneAndDelete(
    { name: req.params.department },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }
  );
});

app.post('/find-one-update/:department', (req, res) => {
  // TODO: Write a route that will find the first instance of a document that contains a name with the value equal to 'Kids'
  // Update that name with the value given from the URL param
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
