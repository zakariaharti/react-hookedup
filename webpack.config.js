const CleanPlugin = require('clean-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname,'build'),
    library: 'react-awesome-notifications',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts','.tsx','.js','.jsx']
  },
  module: {
    rules: [
       {
         test: /\.(tsx|ts)?$/,
         use: 'awesome-typescript-loader',
         exclude: '/node_modules'
       }
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    })
  ]
}
