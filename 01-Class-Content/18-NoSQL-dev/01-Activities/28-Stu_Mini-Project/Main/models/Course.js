const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    inPerson: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    assignments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Assignment',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

courseSchema
  .virtual('headCount')
  .get(function () {
    return this.students.length;
  })
  .virtual('assignmentCount')
  .get(function () {
    return this.assignments.length;
  });
