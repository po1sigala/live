const Tag = require('../models/Tags');

module.exports = {
  getTags(req, res) {
    Tag.find({})
      .then((tags) => res.json(tags))
      .catch((err) => res.status(500).json(err));
  },
  getSingleTag(req, res) {
    Tag.findOne({ _id: req.params.tagId })
      .select('-__v')
      .populate('posts')
      .then((tag) =>
        !tag
          ? res.status(404).json({ message: 'No tag with that ID' })
          : res.json(tag)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createTag(req, res) {
    Tag.create(req.body)
      .then((tag) => {
        return Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $push: { tags: tag._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Tag created, but found no post with that ID' })
          : res.json('Created the tag 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
