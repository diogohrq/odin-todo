const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		hot: false,
	},
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/html/template.html',
		}),
    new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
		],
	},
};