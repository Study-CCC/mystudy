// webpack 是 node 写出来的
let path = require("path")
let HtmlWebpackPlugin = require("html-webpack-plugin")

// 创建一个创建实例对象
 const htmlPlugin = new HtmlWebpackPlugin({
     template:path.join(__dirname,'./src/index.html'),  //源文件
     filename:'index.html'    //生成的内存首页名称
 })

module.exports={
    mode:"development",   // 模式
    // entry:"./src/app.js",  // 入口
    // output:{
    //     filename:'bundle.js',         // 打包后的文件名
    //     path:path.resolve('dist')     //路径绝对要是一个绝对路径
    // }
    plugins:[
        htmlPlugin
    ]
}