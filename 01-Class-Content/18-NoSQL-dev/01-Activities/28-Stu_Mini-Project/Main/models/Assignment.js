const { Schema, model } = require('mongoose');
const Score = require('./Score');

const assignmentSchema = new Schema(
  {
    assignmentName: {
      type: 'String',
      default: () => 'Unnamed Assignment',
    },
    scores: [Score],
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
