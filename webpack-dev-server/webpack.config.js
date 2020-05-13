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
    //activamos mode hot del lado de webpack
    hot: true,
    open:true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [
          // 
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server',

    }),
    // quitamos MiniCSSExtractPlugin ya que es mas lento que se extraiga el css,
    //que inyectarlo con el style loader,
    new webpack.HotModuleReplacementPlugin(),
  ]
}



