const path = require('path');
// The HTML plugin is imported
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Create a config object that contains the entry point and bundle location
const config = {
  // Default name for entry point is main
  entry: './assets/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Production mode is the default setting
  mode: 'development',
  plugins: [
    // This plugin uses the current index.html file and inserts the bundle.
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Demo'
    }),
  ],
};

module.exports = config;
