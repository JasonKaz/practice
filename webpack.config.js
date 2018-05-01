const path = require("path");
const webpack = require("webpack");
const copyWebpack = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  watch: true,
  output: {
    filename: "bundle.js",
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
  plugins: [copyWebpack(["./src/static/index.html", "./node_modules/react/umd/react.development.js", "./node_modules/react-dom/umd/react-dom.development.js"])],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
