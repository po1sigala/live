const { Schema, model } = require('mongoose');
const Assignment = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    assignments: [Assignment],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
