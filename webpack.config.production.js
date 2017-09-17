var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'public/index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
				test: /\.css$/, loaders: ['style-loader', 'css-loader']
			}
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};