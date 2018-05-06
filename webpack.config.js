const path = require("path");
const webpack = require("webpack");
const copyWebpack = require("copy-webpack-plugin");
const cleanWebpack = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  watch: true,
  output: {
    filename: "www/bundle.js",
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
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
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
    new cleanWebpack(["dist"]),
    copyWebpack([
      "./src/app.js",
      { from: "./src/static/index.html", to: "www" },
      { from: "./node_modules/react/umd/react.development.js", to: "www" },
      { from: "./node_modules/react-dom/umd/react-dom.development.js", to: "www" },
      { from: "./spec/support/jasmine.json", to: "tests/" },
    ]),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
