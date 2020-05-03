const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        { 
          test: /\.html$/ , 
          exclude: /node_modules/,
          use: {
            loader: 'html-loader' 
          }
        },
        { 
          test: /\.(css|sass|scss)$/,
          use: [{
            loader: 'style-loader'
          },{
            loader: 'css-loader' 
          },{
            loader: 'sass-loader'
          }]
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
      })
    ]
  };