// @author: Oggo Petersen
// Arquivo de configuração do Webpack para a prova de front-end da LighthouseIT.
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = ['angular', 'angular-route', 'd3', 'nvd3'];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        // Traduz código.
        use: 'babel-loader',
        test: /\.js$/
      },
      // Plugin que interpreta o css.
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // Loaders para html.
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              collapseWhitespace: true

            }
          }
        ]
      },
      // Loader para less.
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader"
        }]
      }
    ]
  },
  plugins: [
    // Evita código duplicado nos bundles.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};

module.exports = config;
