const path = require("path");
module.exports = {
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./public_html/js"),
  },
  mode: "development",
  devServer: {
    devMiddleware: {
      mimeTypes: { phtml: 'text/html' },
    },
    static: {
      directory: path.join(__dirname, "public_html"),
    },
    compress: true,
  },
};
