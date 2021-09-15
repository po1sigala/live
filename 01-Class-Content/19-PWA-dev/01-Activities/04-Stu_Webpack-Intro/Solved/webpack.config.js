// Webpack configuration object
const config = {
  entry: './assets/app.js', // entry point
  output: {
    path: `${__dirname}/dist`, // output file
    filename: 'bundle.js',
  },
  mode: 'development', // Mode setting
};
// Make this object available
module.exports = config;
