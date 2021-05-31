const { Student, Assignment } = require('../models');

module.exports = {
  // Get all students
  getStudents(req, res) {
    Student.find()
      .then((students) => res.json(students))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single student
  getSingleStudent(req, res) {
    Student.findOne({ _id: req.params.studentId })
      .select('-__v')
      .then((student) =>
        !student
          ? res.status(404).json({ message: 'No student with that ID' })
          : res.json(student)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new student
  createStudent(req, res) {
    Student.create(req.body)
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a student and associated apps
  deleteStudent(req, res) {
    Student.findOneAndDelete({ _id: req.params.studentId })
      .then((student) =>
        !student
          ? res.status(404).json({ message: 'No student with that ID' })
          : Assignment.deleteMany({ _id: { $in: student.assignments } })
      )
      .then(() => res.json({ message: 'Student and grades deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
