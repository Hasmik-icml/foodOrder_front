const path = require("path");
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  module: {
    rules: [{
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
            ]
          }
        }
      },
<<<<<<< HEAD
=======


>>>>>>> 287020e10c5062d2c771dc4d290432b89182c3c4
    ]
  },


  devtool: 'eval-source-map' //rule for bundled file easy debugging

};