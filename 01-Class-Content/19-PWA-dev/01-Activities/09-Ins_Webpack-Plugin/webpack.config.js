const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './assets/js/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    // This plugin uses the index.html and outputs the HTML file with the bundles inserted
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = config;
