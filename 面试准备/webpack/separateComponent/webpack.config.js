const MiniCssExtractPlugin = require('mini-css-extract-plugin')  // extract-text-webpack-plugin仅仅支持webpack3.x版本的
module.exports = {
    entry: {
        index: './index.js',
        bar:'./bar.js'
    },
    output: {
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin('[name].css')
    ]
}