const router = require('express').Router();
const {
  addComment,
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);

router.route('/:postId/comments/').post(addComment);

module.exports = router;
