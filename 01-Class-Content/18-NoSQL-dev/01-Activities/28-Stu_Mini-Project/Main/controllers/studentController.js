const { Student, Assignment } = require('../models');

// Aggregation function
const headCount = async () =>
  Student.aggregate()
    .count('studentCount')
    .then((numberOfStudents) => numberOfStudents);

// Aggregation function for getting the avg of their grades

const grade = async () =>
  Student.aggregate([
    {
      $group: {
        _id: '$id',
        AverageGrade: { $avg: { $ifNull: ['$assignments', 0] } },
      },
    },
  ]);

module.exports = {
  // Get all students
  getStudents(req, res) {
    Student.find()
      .then(async (students) => {
        const studentObj = {
          students,
          headCount: await headCount(),
        };
        return res.json(studentObj);
      })
      .catch((err) => res.status(500).json(err));
  },
  // Get a single student
  getSingleStudent(req, res) {
    Student.findOne({ _id: req.params.studentId })
      .select('-__v')
      .then(async (student) =>
        !student
          ? res.status(404).json({ message: 'No student with that ID' })
          : res.json({
              student,
              grade: await grade(),
            })
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
