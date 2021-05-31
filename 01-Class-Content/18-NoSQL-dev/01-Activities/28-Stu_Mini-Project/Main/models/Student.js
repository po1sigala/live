const { Schema, model } = require('mongoose');

// Schema to create Student model
const studentSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    assignments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Assignment',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// TODO: Come back and build the calculate grade virtual
// TODO: Ideas for virtuals - get complete/incomplete assignments. Get letter grade. Get average.
// Create a virtual property `fullName` that gets and sets the user's full name
// userSchema
//   .virtual('getCurrentGrade')
//   // Getter
//   .get(function () {
//     return `${this.first} ${this.last}`;
//   })
//   // Setter to set the first and last name
//   .set(function (v) {
//     const first = v.split(' ')[0];
//     const last = v.split(' ')[1];
//     this.set({ first, last });
//   });

studentSchema.virtual('fullName').set(function (name) {
  const [first, last] = name.split(' ');
  return `${first} ${last}`;
});

// Initialize our User model
const Student = model('student', studentSchema);

module.exports = Student;
