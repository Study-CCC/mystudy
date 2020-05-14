const webpack = require('webpack')
module.exports={
    entry: 
    './src/a.js'
,
    output:{
        filename:'bundle.js'
    },
    mode:'production',
    devServer:{
        publicPath:'/dist',
    },
    plugins:[
        new webpack.DefinePlugin({
            ENV:JSON.stringify('production'),
            // ENV:'production'
        })
    ]
}