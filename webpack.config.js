const webpack = require("webpack")
const path = require("path")
require("dotenv").config()
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: "development",

	entry: "./src/index",
	output: {
		filename: `[name] .js`,
		path: path.resolve(__dirname, "dist"),
	},

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@containers": path.resolve(__dirname, "src/containers"),
			"@ts": path.resolve(__dirname, "src/ts"),
			"@axios": path.resolve(__dirname, "src/axios"),
			"@controller": path.resolve(__dirname, "src/controller"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},

	devtool: "source-map",
	devServer: {
		port: process.env.PUBLIC_PORT,
		hot: true,
		contentBase: "./src",
		watchContentBase: true,
		historyApiFallback: true,
		proxy: { "/api/**": { target: `http://localhost:${process.env.SERVER_PORT}`, secure: false } },
	},

	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: "./src/public/index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: useBabelLoader(),
				exclude: /node_modules/,
			},
			{
				test: /\.(ts|tsx)$/,
				use: [useBabelLoader(), "ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpeg|gif|ico)$/,
				use: [`file-loader?name=assets/[name].[hash].[ext]`],
				exclude: /node_modules/,
			},
		],
	},
}

function useBabelLoader() {
	return {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env", "@babel/preset-react"],
		},
	}
}
