const webpack = require("webpack");
const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    },
  },

  devtool: "source-map",
  devServer: {
    port: 8000,
    hot: true,
    contentBase: "./src",
    watchContentBase: true,
    historyApiFallback: true,
    // writeToDisk: true
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
};

function useBabelLoader() {
  return {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  };
}
