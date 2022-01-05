const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  // The devServer config is for the webpack-dev-server. The hot option is for hot module replacement,
  // which is a feature that allows you to update a module without refreshing the page.
  devServer: {
    hot: true,
    static: './dist',
    open: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: './index.html',
    }),
    // The InjectManifest plugin will generate a list of URLs to precache and add
    // that precache manifest to an existing service worker file. It will otherwise leave the file as-is.
    
    new InjectManifest({
      swSrc: './src/sw.js',
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
