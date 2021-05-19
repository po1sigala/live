// Import Mongoose
const { Schema, model, connect } = require('mongoose');

connect('mongodb://localhost/commentExample');

const commentSchema = new Schema({
  text: String,
  username: String,
});

const CommentModel = model('comment', commentSchema);

const postSchema = new Schema({
  text: String,
  username: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
});

// Create a virtual property `fullName` with a getter and setter
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

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

newComment.save();
newPost.comments.push(newComment._id);

newPost.save();

console.log('🚀 newPost.commentCount', newPost.commentCount);
