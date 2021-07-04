'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    home: './src/js/Home.js',
    portfolio: './src/js/Portfolio.js',
    other: './src/js/Other.js',
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.scss']
  },

  module: {}
};
