let path = require("path")
let htmlWebpackPlugin = require("html-webpack-plugin")
let htmlPlugin = new htmlWebpackPlugin({
    filename:"index.html",
    template:path.join(__dirname,'./src/index.html')
})
module.exports={
    mode:"development",
    plugins:[
        htmlPlugin
    ],
    module:{    //所有第三方模块的配置规则
        rules:[   // 第三方匹配规则
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},    // 千万别忘记添加 exclude 排除项
            {test: /\.css$/,use:['style-loader','css-loader?modules&localIdentName[path][hash:6]']},
            {test: /\.ttf|woff|woff2|eot|svg$/,use:'url-loader'}   // 打包处理 字体文件的loader
            
        ]
    },
    resolve:{
        extensions:['.js','.jsx','json'],  // 表示这几个文件的后缀名可以省略不写
        alias:{"@":path.join(__dirname,'./src')}
    }
}