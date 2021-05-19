// Import Mongoose
const { Schema, model, connect } = require('mongoose');

// Create a connection and create an example database
connect('mongodb://localhost/commentExample');

// Schema for what makes up a comment
const commentSchema = new Schema({
  text: String,
  username: String,
});

// Initialize the Comment model
const CommentModel = model('comment', commentSchema);

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

// Initialize our Post
const PostModel = model('post', postSchema);

// Create a post
const newPost = new PostModel({
  text: 'This is a test post',
  username: 'coolperson',
});

// Create a comment
const newComment = new CommentModel({
  text: 'This is a test comment',
  username: 'otherPerson',
});

// Save the comment to the database and push the ID to the comments array
newComment.save();
newPost.comments.push(newComment._id);

// Save the post to the database
newPost.save();

// Invoke our commentCount method
console.log('🚀 newPost.commentCount', newPost.commentCount);
