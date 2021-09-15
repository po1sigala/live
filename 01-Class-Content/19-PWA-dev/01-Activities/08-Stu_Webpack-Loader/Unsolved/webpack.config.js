const path = require('path');

const config = {
  entry: './assets/js/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  // TODO: Add the module for loader rules
};

module.exports = config;
