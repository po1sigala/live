const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import workbox-webpack-plugin
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    hot: true,
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev.to Posts',
      template: './index.html',
    }),
    // The GenerateSW plugin will create a service worker file for you
    // and add it to the webpack asset pipeline. Good for precaching assets and when you have simple configurations.
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
