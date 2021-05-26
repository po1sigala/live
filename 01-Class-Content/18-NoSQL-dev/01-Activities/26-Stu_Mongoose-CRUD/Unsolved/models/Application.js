const { Schema, model } = require('mongoose');
const Tag = require('./Tag');

// Schema to create Post model
const applicationSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    tags: [Tag],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per application
applicationSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Application model
const Application = model('application', applicationSchema);

module.exports = Application;
