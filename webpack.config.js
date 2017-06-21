var webpack = require('webpack');
module.exports = {
    entry: [//设置入口
        './build/App.js'
    ],
    output: {//设置出口
        path: './js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
         test: /\.js$/,
         loader: 'jsx-loader',
        },
        ]
    }
};