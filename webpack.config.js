var webpack = require('webpack');
var path = require('path');
 
var config = {
  mode : "development",
  entry: './src/test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module : {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"],
                        plugins: [
                          "@babel/plugin-proposal-class-properties"
                        ],
                        
                    }
                }
            ],
        }
    ]
  }
};
 
module.exports = config;