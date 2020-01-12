const http = require('http')
var server = http.createServer()
server.on("request",(req,res)=>{
    console.log("收到客户端请求了");
    // 可以写多个write,但是最后要以end结束
    /*res.write("hello")
    res.write("node")
    res.end()*/
    res.end('hello node')  // 更简单
})
server.listen("3000",()=>{
    console.log("服务器启动成功");
})