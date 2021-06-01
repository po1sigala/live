const { Assignment, Student } = require('../models');

module.exports = {
  getAssignments(req, res) {
    Assignment.find()
      .then((assignments) => res.json(assignments))
      .catch((err) => res.status(500).json(err));
  },
  // Gets a single assignment using the findOneAndUpdate method. We pass in the ID of the assignment and then respond with it, or an error if not found
  getSingleAssignment(req, res) {
    Assignment.findOne({ _id: req.params.assignmentId })
      .then((assignment) =>
        !assignment
          ? res.status(404).json({ message: 'No assignment with that ID' })
          : res.json(assignment)
      )
      .catch((err) => res.status(500).json(err));
  },
  createAssignment(req, res) {
    Assignment.create(req.body)
      .then((assignment) => {
        return Student.findOneAndUpdate(
          { _id: req.body.studentId },
          { $addToSet: { assignments: assignment } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Assignment created, but found no student with that ID',
            })
          : res.json('Created the assignment 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateAssignment(req, res) {
    Assignment.findOneAndUpdate(
      { _id: req.params.assignmentId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((assignment) =>
        !assignment
          ? res.status(404).json({ message: 'No assignment with this id!' })
          : res.json(assignment)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteAssignment(req, res) {
    Assignment.findOneAndRemove({ _id: req.params.assignmentId })
      .then((assignment) =>
        !assignment
          ? res.status(404).json({ message: 'No assignment with this id!' })
          : Student.findOneAndUpdate(
              { assignments: req.params.assignmentId },
              { $pull: { assignments: req.params.assignmentId } },
              { new: true }
            )
      )
      .then((student) =>
        !student
          ? res.status(404).json({
              message: 'Assignment deleted but no student with this id!',
            })
          : res.json({ message: 'Assignment successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  addScore(req, res) {
    Assignment.findOneAndUpdate(
      { _id: req.params.assignmentId },
      { $addToSet: { scores: req.body } },
      { runValidators: true, new: true }
    )
      .then((assignment) =>
        !assignment
          ? res.status(404).json({ message: 'No assignment with this id!' })
          : res.json(assignment)
      )
      .catch((err) => res.status(500).json(err));
  },
  removeScore(req, res) {
    Assignment.findOneAndUpdate(
      { _id: req.params.assignmentId },
      { $pull: { scores: { scoreId: req.params.scoreId } } },
      { runValidators: true, new: true }
    )
      .then((assignment) =>
        !assignment
          ? res.status(404).json({ message: 'No assignment with this id!' })
          : res.json(assignment)
      )
      .catch((err) => res.status(500).json(err));
  },
};
