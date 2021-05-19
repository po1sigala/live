const { Post, Comment } = require('../models');

module.exports = {
  getComments(req, res) {
    Comment.find()
      .then((comment) => res.json(comment))
      .catch((err) => res.status(500).json(err));
  },
  // get single comment by id
  getSingleComment(req, res) {
    Comment.findOne({ _id: req.params.commentId })
      .then((comment) => {
        if (!comment) {
          return res.status(404).json({ message: 'No comment with this id!' });
        }
        res.json(comment);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a comment
  createComment(req, res) {
    Comment.create(req.body)
      .then((comment) => {
        return Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $push: { comments: comment._id } },
          { new: true }
        );
      })
      .then((post) =>
        !post
          ? res
              .status(404)
              .json({ message: 'comment created, but no user with this ID' })
          : res.json({ message: 'comment created!' })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
