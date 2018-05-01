const path = require("path");
const webpack = require("webpack");
const copyWebpack = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: false,
    port: 3000,
    compress: true,
    inline: true,
    host: "localhost",
    watchOptions: {
      poll: false,
    },
  },
  plugins: [
    copyWebpack([
      {
        from: "./src/static/index.html",
        to: "./",
      },
    ]),
  ],
};
