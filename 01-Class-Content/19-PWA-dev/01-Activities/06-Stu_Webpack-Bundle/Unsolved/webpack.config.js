const path = require('path');

const config = {
  // Multiple entry points 
  entry: {
    main: './assets/app.js',
    cost: './assets/cost.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};

module.exports = config;
