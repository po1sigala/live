<<<<<<< HEAD
// Import the mysql package
const mysql = require('mysql');

// Connect to the ice_creamDB database using a localhost connection
=======
const mysql = require('mysql');

>>>>>>> c49247dba96cf559abec5076064d89253a25b3d7
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

<<<<<<< HEAD
  // Your MySQL username
  user: 'root',

  // Your MySQL password (leave blank for class demonstration purposes; fill in later)
  password: '',

  // Name of database
=======
  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '',
>>>>>>> c49247dba96cf559abec5076064d89253a25b3d7
  database: 'ice_creamDB',
});

connection.connect((err) => {
  if (err) throw err;
<<<<<<< HEAD
  console.log('connected as id ' + connection.threadId);
=======
  console.log(`connected as id ${connection.threadId}`);
>>>>>>> c49247dba96cf559abec5076064d89253a25b3d7
  connection.end();
});
