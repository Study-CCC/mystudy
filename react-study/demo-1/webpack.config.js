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
            {
                test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/    // 千万别忘记添加 exclude 排除项
            }
        ]
    }
}