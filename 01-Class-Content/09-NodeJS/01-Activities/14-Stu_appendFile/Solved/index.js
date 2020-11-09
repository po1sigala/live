// We import the `fs` module to enable interaction with the file system
const fs = require('fs');

// appendFile() takes in 3 arguments: path, data, and callback function
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
