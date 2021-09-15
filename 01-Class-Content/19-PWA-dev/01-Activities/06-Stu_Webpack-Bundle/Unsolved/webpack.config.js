
const config = {
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
