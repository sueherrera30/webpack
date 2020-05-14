const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'js/[name].js',
  },
  devServer: {
    hot: true,
    open:true,
    port: 9000,
  },
  module: {
    rules: [
      // dentro de reglas agregamos un loader nuevo
      {
        test: /\.js$/,
        // si usas mas puedes usar corchetes.
        // asi comop esta, funciona, pero puedo agregarle reglas extras.
        //como sotortar react vue etc, pero mejor 
        //guardar en archivo propio: .babelrc, recibira un json.
        use: 'babel-loader',
        // no quiero que a estos no les agregues babel, como react modules.
        exclude: /node_modules/,
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',
      // le decimos que tome este archivo como template:
      template: path.resolve(__dirname, "index.html"),
    }),

    new webpack.HotModuleReplacementPlugin(),
  ]
}

