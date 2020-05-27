module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "public/static/bundle.js"
  },
  resolve: {
    extensions: [".js", ".marko"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "@marko/webpack/loader"
      }
    ]
  }
};