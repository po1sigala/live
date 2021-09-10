// const path = require('path');

const config = {
  entry: './public/assets/js/app.js',
  output: {
    path: `${__dirname}/public/dist`,
    filename: 'bundle.js',
  },
  mode: 'development',
};

module.exports = config;
