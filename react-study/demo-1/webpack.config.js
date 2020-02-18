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
    ]
}