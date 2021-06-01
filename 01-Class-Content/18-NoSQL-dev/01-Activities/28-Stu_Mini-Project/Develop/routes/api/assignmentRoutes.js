const router = require('express').Router();
const {
  getAssignments,
  getSingleAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment,
  addScore,
  removeScore,
} = require('../../controllers/assignmentController.js');

// /api/assignments
router.route('/').get(getAssignments).post(createAssignment);

// /api/assignments/:assignmentId
router
  .route('/:assignmentId')
  .get(getSingleAssignment)
  .put(updateAssignment)
  .delete(deleteAssignment);

// /api/assignments/:assignmentId/scores
router.route('/:assignmentId/scores').post(addScore);

// /api/assignments/:assignmentId/scores/:scoreId
router.route('/:assignmentId/scores/:scoreId').delete(removeScore);

module.exports = router;
