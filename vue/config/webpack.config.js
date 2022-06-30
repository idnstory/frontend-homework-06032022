const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, '../', 'src'),
  entry: [
    '@babel/polyfill',
    'app.js'
  ],
  resolve: {
    extensions: ['.js', '.scss', '.vue'],
    alias: {
      scss: resolve(__dirname, '../', 'src', 'scss'),
      img: resolve(__dirname, '../', 'src', 'img')
    },
    modules: [
      resolve(__dirname, '../src'),
      resolve(__dirname, '../node_modules/')
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      favicon: resolve(__dirname, '../', 'src', 'img', 'haezoom-favicon.ico')
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-transform-shorthand-properties',
              '@babel/plugin-transform-parameters',
              '@babel/plugin-transform-arrow-functions'
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[path][name].[ext]?[hash]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[path][name].[ext]?[hash]'
          }
        }
      }
    ]
  }
}
