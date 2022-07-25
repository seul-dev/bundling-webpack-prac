const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader'],
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'common.css',
    // })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    port: 8080,
  },
};
