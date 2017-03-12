const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '.tmp/scripts'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: path.resolve(__dirname, 'app/scripts'),
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery.js')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
