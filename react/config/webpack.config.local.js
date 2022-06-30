const webpack = require('webpack')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const { resolve } = require('path')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'react-hot-loader/patch'
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: '/'
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8889,
    https: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    },
    static: {
      directory: resolve(__dirname, '../', 'src'),
    },
    historyApiFallback: true
  }
})
