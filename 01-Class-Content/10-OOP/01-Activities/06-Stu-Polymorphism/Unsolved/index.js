// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in javascript
  this.displayGrade = function (grade) {
    const input = grade;
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

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade();', John.displayGrade('A'));
