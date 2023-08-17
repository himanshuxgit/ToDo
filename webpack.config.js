const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader', // Use babel-loader for transpiling
      },
    ],
  },
};
