'use strict';

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 3000
  }
}
