const path = require('path');

// Create a config object that contains the entry point and bundle location
const config = {
  // Default name for entry point is main
  entry: './assets/js/app.js',
  output: {
    filename: '[name].bundle.js', // => main.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  // Production mode is the default
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          // Babel enables use of the latest JavaScript w/o needing browser polyfills
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ],
  },
};

module.exports = config;
