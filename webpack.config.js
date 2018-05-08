const path = require("path");
const webpack = require("webpack");
const copyWebpack = require("copy-webpack-plugin");
const cleanWebpack = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/www/index.tsx",
  },
  watch: true,
  devtool: "cheap-source-map",
  output: {
    filename: "www/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "awesome-typescript-loader" }],
      },
      {
        test: /\.js$/,
        use: [{ loader: "source-map-loader" }],
        enforce: "pre",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
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
    new cleanWebpack(["dist/www"]),
    copyWebpack([
      { from: "./src/www/static/index.html", to: "www" },
      { from: "./node_modules/react/umd/react.development.js", to: "www" },
      { from: "./node_modules/react-dom/umd/react-dom.development.js", to: "www" },
      //{ from: "./spec/support/jasmine.json", to: "tests/" },
    ]),
    new MiniCssExtractPlugin({ filename: "www/app.css" }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
