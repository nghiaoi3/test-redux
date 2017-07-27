
module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:    ['es2016', 'react', 'stage-0']

        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};

/*
var webpack = require("webpack");

module.exports = {
  entry: './app/index.js',
  target: 'node',  
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:    ['es2016', 'react', 'stage-0']

        },
        test: /\.jsx?$/,
        exclude: /node_modules/
        
      }
      
    ],
    /* rules: [
    { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
    */
 

