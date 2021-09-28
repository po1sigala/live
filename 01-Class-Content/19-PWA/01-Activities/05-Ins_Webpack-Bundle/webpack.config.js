const path = require('path');

// Create a config object that contains the entry point and bundle location
const config = {
  // Create the multiple entry points
  entry: {
    main: './assets/app.js',
    weekly: './assets/weekly.js',
  },
  // Multiple bundles are created dynamically according to the entry points
  output: {
    filename: '[name].bundle.js', // => main.bundle.js, weekly.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  // Production mode is the default
  // Development mode creates legible outputs
  mode: 'development',
};

module.exports = config;
