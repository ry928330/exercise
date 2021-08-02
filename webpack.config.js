/*
 * @Author: ryyyyy
 * @Date: 2021-07-31 17:26:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-01 14:10:17
 * @Description: Do not edit
 * @FilePath: /personal-git/library-demo/webpack.config.js
 */
const path = require('path');
const mode = process.env.NODE_ENV;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin()
]

const output = {
  filename: 'main.js',
  path: path.join(__dirname, 'dist'),
}

console.log(mode, 11111)

if (mode != 'production') {
  plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'html-webpack',
        template: path.join(__dirname, './src/index.html')
    })
  )

  // Object.assign(output, {
  //   library: {
  //     type: 'umd',
  //     name: 'demo'
  //   }
  // })
}

module.exports = {
  mode: mode || 'development',
  entry: path.join(__dirname, './src/index.js'),
  output,
  devtool: 'eval-cheap-module-source-map',
  plugins,
  // optimization: {
  //   minimize: false
  // },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devServer: {
      open: true,
      inline: true,
      port: 3018
  },
}