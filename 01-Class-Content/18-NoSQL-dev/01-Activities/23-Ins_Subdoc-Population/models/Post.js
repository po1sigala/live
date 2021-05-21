const { Schema, model } = require('mongoose');

// Schema to create User model
const postSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    meta: {
      upvotes: Number,
      bookmarks: Number,
    },
    text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per user
postSchema
  .virtual('upvotes')
  // Getter
  .get(function () {
    return this.meta.upvotes;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const result = v ? (this.meta.upvotes += 1) : 1;
    return result;
  });

const Post = model('post', postSchema);

module.exports = Post;
