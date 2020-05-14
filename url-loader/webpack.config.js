const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname,'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot: true,
    open: true,
    port: 90000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpg|png|svg|woff|gif|eot|ttf|mp4|webm$/,
        use: {
          loader:  'url-loader',
          options: {
            limit: 90000,
          },
        }
        // lo mas importante es su configuracion aqui:
        //dentro de loader.
        // la mas importan es limit, la cual recibira un numero
        //que contara LOS BYTES  que puede tener, básicamente de cualquier
        // binario que pueda cargar.
        // SE IMPORTARÁ EN UN FORMATO DE BASE 64,como uno de texto gigante
        // que agrupá inline, lo reduve el codigo.
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',
      template: path.resolve(__dirname, 'index.html')
    }),
  ]
}



