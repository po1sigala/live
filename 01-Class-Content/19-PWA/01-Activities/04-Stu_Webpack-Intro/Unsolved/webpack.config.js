// Webpack configuration object
const config = {
  // entry point
  entry: './assets/app.js',
  output: {
    // output file
    path: `${__dirname}/dist`, 
    filename: 'bundle.js',
  },

  // Mode setting
  
  mode: 'development',
};
// Make this object available
module.exports = config;
