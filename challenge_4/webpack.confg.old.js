const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'budle.js'
  },
  devServer: {
    port: 3010,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}