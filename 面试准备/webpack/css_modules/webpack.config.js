module.exports = {
    entry: './index.js',
    output:{
        filename:'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{test: /\.css$/,
            use: ['style-loader',
                {loader:'css-loader',
                options:{
                        modules:true,
                        localIdentName:'[name]_[local]_[hash:base64:5]'
                }}],
                exclude:'/node_modules/'
        
        }]
    }
}