const { Schema, model } = require('mongoose');

// Schema for what makes up a post
const postSchema = new Schema({
  text: String,
  username: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
});

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
