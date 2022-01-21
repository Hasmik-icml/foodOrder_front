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
>>>>>>> 280173969beb507aeb8fb32feb02c81f9f5fa99b
    ]
  },


  devtool: 'eval-source-map' //rule for bundled file easy debugging

};