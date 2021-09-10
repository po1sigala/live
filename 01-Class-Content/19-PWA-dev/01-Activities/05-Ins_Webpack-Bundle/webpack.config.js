const config = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development"
};

module.exports = config;
