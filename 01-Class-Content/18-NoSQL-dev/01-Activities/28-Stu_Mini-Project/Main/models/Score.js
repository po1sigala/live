const { Schema, Types } = require('mongoose');

const scoreSchema = new Schema(
  {
    scoreId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    score: {
      type: Number,
      required: true,
      min_value: 0,
      max_value: 100,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = scoreSchema;
