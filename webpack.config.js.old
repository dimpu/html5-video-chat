const path = require('path');
var webpack = require('webpack');


module.exports = {
 	entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // 'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
    
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/client/index.js',
    // the entry point of our app
	],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public/' 
  },
  	module: {
		loaders: [
      {
            test: /\.js|jsx$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src'),
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
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};