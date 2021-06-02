const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
  },
  {
    assignmentName: {
      type: 'String',
      default: () => 'Unnamed Assignment',
    },
  },
  {
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

module.exports = assignmentSchema;
