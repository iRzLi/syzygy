const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/syzygy.tsx',
    output: {
        path: path.join(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'ts', 'tsx', '*']
    },
    module: {
        rules: [
            {
                test: [/\.tsx?$/, /\.ts?$/],
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
                {
                    loader: 'ts-loader'
                }
                ]
            },
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'eval-source-map'
};