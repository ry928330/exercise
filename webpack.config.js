/*
 * @Author: ryyyyy
 * @Date: 2021-02-26 09:50:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-30 07:57:02
 * @Description: Do not edit
 * @FilePath: /demo/webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const mode = process.env.NODE_ENV;

module.exports = {
    mode,
    entry: {
        index: path.join(__dirname, './src/index.js'),
        // search: path.join(__dirname, './src/search.js') 
    },
    output: {
        filename: 'js/[name].[hash:4].js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules:[{
            test: /\.txt$/,
            use: 'raw-loader'
        },{
            test: /\.jsx?$/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, 'css-loader']
        },{
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader', 'sass-loader', 'postcss-loader']
        }, 
        {
            test: /\.(gif|png|jpeg|jpg|woff|ttf|eot)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    limit: 10000, //10k一下就采用base64
                    generator: function(content, mimetype, encoding, resourcePath) {
                        console.log(content, resourcePath, 2333)
                    },
                    // publicPath: '../images'
                }
            }]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'html-webpack',
            template: path.join(__dirname, './resources/template_index.html')
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'search.html',
        //     title: 'html-webpack',
        //     template: path.join(__dirname, './resources/template_search.html')
        // }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:4].css',
            chunkFilename: '[id].css',
        }),
        new CopyWebpackPlugin(
            [{
                from: path.join(__dirname, './src/resources'),
                to: './images'
            }]
        ),
        new webpack.DefinePlugin({
            test: true,
            ryyyyy: JSON.stringify(true),
            "process.env": {
                NODE_ENV: JSON.stringify(mode)
            }
        })
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //           module: 'react',
        //           entry: 'https://unpkg.com/react@16/umd/react.development.js',
        //           global: 'React',
        //         },
        //         {
        //             module: 'react-dom',
        //             entry: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
        //             global: 'ReactDOM'
        //         }
        //     ],
        // })
    ],
    devServer: {
        // hot: true,
        open: true,
        inline: true,
        port: 3197
    },
    devtool: 'eval-cheap-module-source-map'
}