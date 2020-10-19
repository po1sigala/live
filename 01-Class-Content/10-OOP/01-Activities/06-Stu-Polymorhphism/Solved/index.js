// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age, grade) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.grade = grade;

  // Method that will simulate method overloading in javascript
  this.displayGrade = function () {
    const input = this.grade;
    let response;
    if (!input) {
      throw new Error('no grade provided');
    }
    // Return a letter grade if a number grade was passed
    if (typeof input === 'number') {
      if (inRange(input, 90, 100)) {
        response = 'A';
      }
      if (inRange(input, 80, 89)) {
        response = 'B';
      }
      if (inRange(input, 70, 79)) {
        response = 'C';
      }
      if (inRange(input, 60, 69)) {
        response = 'D';
      }
      if (input < 60) {
        response = 'F';
      }

      return response;
    }
    // Return a range if a letter grade was passed
    if (typeof input === 'string') {
      switch (input) {
        case 'A':
          response = '90 - 100';
          break;
        case 'B':
          response = '80 - 89';
          break;
        case 'C':
          response = '70 - 79';
          break;
        case 'D':
          response = '60 - 69';
          break;
        case 'F':
          response = '0 - 59';
          break;
        default:
          response = '0';
          break;
      }
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30', 'A');
console.log('John.displayGrade();', John.displayGrade());
