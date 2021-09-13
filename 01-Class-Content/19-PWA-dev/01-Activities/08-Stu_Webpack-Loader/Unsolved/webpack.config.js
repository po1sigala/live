const path = require('path');

// Create the configuration object so webpack knows what to bundle and where to output the bundle
const config = {
  entry: './public/assets/js/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};

module.exports = config;
