const path = require('path');

const config = {
  entry: './assets/app.js',
  output: {
    filename: '[name].bundle.js', // Dynamically named bundles
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};

module.exports = config;
