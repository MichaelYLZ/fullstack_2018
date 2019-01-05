const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    
  mode: 'production',
    
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.css$/,
          use: [MiniCssPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
      
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: 'src/index.html'
    }),
      
    new CleanPlugin(['dist']),
      
    new MiniCssPlugin(),
  ]
};