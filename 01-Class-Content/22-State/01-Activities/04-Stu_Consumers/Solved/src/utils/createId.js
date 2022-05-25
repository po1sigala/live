// Generate unique ID for each student
const createId = (students) => {
  // Create id variable for new student
  let id;

  // If there are any entries in the students array already
  if (students.length) {
    // Create array of all ids currently assigned to students
    const ids = students.map((s) => s.id);

    // Sort array so that highest number is last
    ids.sort((a, b) => a - b);

    // Store highest number, plus 1, in id variable
    id = ids[ids.length - 1] + 1;
  } else {
    // If students array is empty, assign new student an id of 1
    id = 1;
  }

  return id;
};

export default createId;
