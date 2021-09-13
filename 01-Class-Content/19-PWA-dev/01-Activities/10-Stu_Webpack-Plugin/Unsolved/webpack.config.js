const path = require('path');

const config = {
  entry: './assets/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Add the plugin using the index.html file
  mode: 'development',
};

module.exports = config;
