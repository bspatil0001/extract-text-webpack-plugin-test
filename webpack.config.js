// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

extractSass = new ExtractTextPlugin({
    filename: "Css/test.css",
    // allChunks: true
  })

const config = {
  devtool: '#eval-source-map',
  entry: './script.js',
  cache: false,
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  mode: 'development',
  node: {
    dns: "mock",
    fs: "empty",
    net: "empty",
    tls: "empty",
    path: true,
    url: false
  },
  module: {
    rules: [{
        test: /\.js/,
        exclude: '/(node_modules)/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       MiniCssExtractPlugin.loader,
      //       "css-loader"
      //     ]
      //   },
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //     filename: "styletest.css",
    //     chunkFilename: "styletest.css"
    //   })
    extractSass
  ]
}

module.exports = config;
