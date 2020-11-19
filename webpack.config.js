const path = require('path')

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    apirequest: './src/scripts/ApiRequests.js'
  },

  output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   }, 

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}