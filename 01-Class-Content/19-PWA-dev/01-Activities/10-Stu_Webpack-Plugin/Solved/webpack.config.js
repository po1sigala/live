const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './assets/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    // This plugin uses the current index.html file and inserts the bundles.
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = config;
