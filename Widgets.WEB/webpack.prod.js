var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var helpers = require('./webpack.helpers');

console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = {
  entry: {
    'vendor': './Application/vendor.ts',
    'polyfills': './Application/polyfills.ts',
    'app': './Application/main-aot.ts' // AoT compilation
  },
  output: {
    path: __dirname + '/wwwroot/',
    filename: 'dist/[name].[hash].bundle.js',
    chunkFilename: 'dist/[id].[hash].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
  },
  module: {
    rules: [
        {
          test: /\.ts$/,
          loaders: [
              'awesome-typescript-loader',
              'angular-router-loader?aot=true&genDir=aot/'
          ]
        },
        {
          test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
          loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
        },
        {
          test: /favicon.ico$/,
          loader: 'file-loader?name=/[name].[ext]'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        }
    ],
    exprContextCritical: false
  },

  plugins: [
      new CleanWebpackPlugin(
          [
              './wwwroot/dist',
              './wwwroot/assets'
          ]
      ),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      }),
      new webpack.optimize.CommonsChunkPlugin(
          {
            name: ['vendor', 'polyfills']
          }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        template: 'Application/index.html'
      }),
      new CopyWebpackPlugin([
          { from: './Application/images/*.*', to: 'assets/', flatten: true }
      ])
  ]
};

