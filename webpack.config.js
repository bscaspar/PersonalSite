const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const VENDOR_LIBS = [
    'react', 'react-dom'
]


const config = {
    'mode': 'development',
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(
            ['build']
        ),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) //the NODE_ENV var comes from the package.json file where we can set it to "production". If not defined, webpack assumes not production. In production, it removes additional checks to optimize for speed and efficiency.
        })
    ],
    optimization: {
        splitChunks: {
        }
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}

module.exports = config;