// Create a config object that contains the entry point and bundle location
const config = {
  // Default name for entry point is main
  entry: './assets/app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  // Production mode is the default
  mode: 'development',
};

module.exports = config;
