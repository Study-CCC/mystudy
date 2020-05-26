const http = require('http')
const server = http.createServer()

server.on('request',(req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html;charset=utf8')
        res.setHeader('Content-Length',100)   // 过大的话会导致传输失败
        res.write('helloWorld')
        res.end()
    }
})
server.listen('8000',()=>{
    console.log('服务器访问成功')
}
    )