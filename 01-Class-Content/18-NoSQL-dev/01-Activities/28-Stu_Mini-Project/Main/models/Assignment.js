const { Schema, model } = require('mongoose');

const assignmentSchema = new Schema(
  {
    assignmentName: {
      type: 'String',
      default: () => 'Unnamed Assignment',
    },
    score: {
      type: Number,
      required: true,
      min_value: 0,
      max_value: 100,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Assignment = model('grade', assignmentSchema);

module.exports = Assignment;
