const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        //use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
