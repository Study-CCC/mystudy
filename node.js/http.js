const http = require('http')
var server = http.createServer()
server.on("request",(req,res)=>{
    console.log("收到客户端的请求了");
    
})
server.listen("3000",()=>{
    console.log("服务器启动成功");
    
})