const connection = require('../config/connection');
const { Course, Student } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Course.deleteMany({});
  await Student.deleteMany({});

  const students = [];
  const assignments = getRandomAssignments(20);

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    students.push({
      first,
      last,
      github,
      assignments,
    });
  }

  await Student.collection.insertMany(students);

  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(students);
  console.table(assignments);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
