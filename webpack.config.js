var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: [
		"./src/index.js"
	],
	devtool: 'source-map',
	output: {
		path: path.resolve("./out"),
		filename: "bundle.js"
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
}