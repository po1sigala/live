function Student(name, gradeYear) {
  let student = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    greet: function () {
      console.log(
        'My name is ' +
          student.name +
          ' and I am in ' +
          student.gradeYear +
          ' grade'
      );
    },
  };
}

const newStudent = Student('Dominique', '11th');
console.log(newStudent);
newStudent.greet();

module.exports = Student;
