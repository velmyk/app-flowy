'use strict';

const   webpack = require('webpack');

const   NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: './cordova/www',
        publicPath: "/",
        filename: 'app.js'
    },
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js'] 
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        // progress: true,
        contentBase: './cordova/www/',
        // stats: 'errors-only',
        // quiet: false,
        host: 'localhost',
        port: 9005
    }
};