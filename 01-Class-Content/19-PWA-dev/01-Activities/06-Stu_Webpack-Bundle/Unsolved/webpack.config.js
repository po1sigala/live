const config = {
  // Multiple entry points 
  entry: {
    main: './assets/app.js',
    cost: './assets/cost.js',
  },
  output: {
    filename: '[entry].bundle.js',
    path: path.resolve(_dirname, 'dist'),
  },
  mode: 'development',
};

module.exports = config;
