// const validator = require('webpack-validator');
const path = require('path');
var webpack = require('webpack');

// const config = {

// 	entry: [
// 	    'webpack-dev-server/client?https://localhost:3443',
//         'webpack/hot/dev-server',
// 		path.join( __dirname, 'src/index.js')
// 	],
// 	output: {
// 		path: path.join( __dirname, 'dist'),
// 		filename: 'index.js',
// 		publicPath: '/dist',		
// 	},

// 	module: {
// 		loaders: [
// 			{
// 				test: /\.js|jsx$/, loaders: ['react-hot', 'babel'],
// 				exclude: /node_modules/
// 			},
// 			{
// 				test: /\.css$/, loaders: ['style', 'css']
// 			}
// 		]
// 	},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin()
// 	],
// 	devServer: {
// 		inline: true,
// 		hot: true,
// 		contentBase: './dist'
// 	}
// };

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  	module: {
		loaders: [
			{
				test: /\.js|jsx$/, loaders: ['react-hot-loader', 'babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/, loaders: ['style-loader', 'css-loader']
			}
		]
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		inline: true,
		hot: true,
		contentBase: './dist'
	}
};