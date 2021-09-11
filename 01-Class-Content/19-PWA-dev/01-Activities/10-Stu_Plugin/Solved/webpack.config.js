const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

const config = {
  entry: './public/assets/js/app.js',
  output: {
    path: `${__dirname}/public/dist`,
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = config;
