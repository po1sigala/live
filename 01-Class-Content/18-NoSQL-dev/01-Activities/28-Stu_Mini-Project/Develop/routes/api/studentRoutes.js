const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
} = require('../../controllers/studentController');

// /api/students
router.route('/').get(getStudents).post(createStudent).delete(deleteStudent);

// /api/students/:studentId
router.route('/:studentId').get(getSingleStudent);

module.exports = router;
