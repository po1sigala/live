const { Student, Assignment } = require('../models');

// TODO: Add an aggregate function to determine the amount of students

// TODO: Add an aggregate function to get the students overall grade

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
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single student
  getSingleStudent(req, res) {
    Student.findOne({ _id: req.params.studentId })
      .populate('assignments')
      .select('-__v')
      .then(async (student) =>
        !student
          ? res.status(404).json({ message: 'No student with that ID' })
          : res.json({
              student,
              grade: await grade(req.params.studentId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
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
