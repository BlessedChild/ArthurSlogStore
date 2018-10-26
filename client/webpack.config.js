const webpack = require('webpack');
const path = require('path');

// Lodas Encapsulate existing language（current ES* JavaScript） features into functions 
// and then use encapsulated functions to reduce development costs
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

// SourceMaps: 
// We can combine and compress our JavaScript and CSS files for our website
// but when we need to debug the code within those compressed files
// that is a problem
// So we need sourceMap
// a source map consists of a whole bunch of information
// that can be used to map the code within a compressed file back to it’s original source
// We can specify a different source map for each of your compressed files

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin
  ],
  devServer: {
    contentBase: './dist'
  }
}

module.exports = config;