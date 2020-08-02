const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: './main.js',
    output: {
      path: path.join(__dirname, "dist"),
      filename: 'main.js'
    },
    resolve: {
      modules: [
        "node_modules/",
        path.resolve(__dirname, "src")
      ],
      extensions: [
        '.ts', '.tsx', '.ejs', '.mjs', '.js', '.wasm', '.json', '.webpack.js', '.web.js'
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { babelrc: true }
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
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
          test: /\.(woff|woff2|eot|ttf|svg|png|jpg)$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        }
      ]
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new HtmlWebPackPlugin({
        template: "./index.ejs"
      })
    ]
  };