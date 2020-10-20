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
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // Logic here
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // Logic here
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30', 'A');
console.log('John.displayGrade();', John.displayGrade());
