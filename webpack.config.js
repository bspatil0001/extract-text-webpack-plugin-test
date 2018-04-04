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
    filename: 'main.js',
    publicPath: '/assets'
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
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // }
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       MiniCssExtractPlugin.loader,
      //       "css-loader"
      //     ]
      //   },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         bypassOnDebug: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        loader: 'file-loader?name=/img/[name].[ext]'
      }
      // {
      //   test: /\.(png|jp(e*)g|svg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       name: 'images-test/testste.[ext]'
      //     }
      //   }]
      // }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //     filename: "styletest.css",
    //     chunkFilename: "styletest.css"
    //   })
    new ExtractTextPlugin('bundle.css')
  ]
}

module.exports = config;
