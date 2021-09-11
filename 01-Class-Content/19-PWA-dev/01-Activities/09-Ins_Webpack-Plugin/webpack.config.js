const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './assets/js/app.js',
  output: {
    path: `${__dirname}/dist`,
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
