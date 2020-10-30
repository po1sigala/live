// Create a function.
const lesson = function () {
  // Store the locally scoped variables.  
  const title = 'Unit 17 - Computer Science';
  const description = 'CS for JS';

  // Return an inner function named 'information' creating a closure.
  return {
    information: function () {
    // Console logs the variables of the outer function.
      console.log(title, description);
    },
  };
};

const csForJS = lesson();
csForJS.information();
