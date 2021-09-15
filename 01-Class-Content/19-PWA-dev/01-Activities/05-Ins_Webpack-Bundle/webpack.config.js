const path = require('path');

// Create a config object that contains the entry point and bundle location
const config = {
  // Create the main entry
  entry: {
    main: './assets/app.js',
    weekly: './assets/weekly.js',
  },
  // In production mode, a content hash would also be created for version control
  output: {
    filename: '[name].bundle.js', // => main.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  // Production mode is the default
  mode: 'development',
};

module.exports = config;
