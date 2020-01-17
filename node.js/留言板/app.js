var fs = require("fs")
var http = require("http")
var url=require("url")
var template = require("art-template")
var server = http.createServer()

server.on("request", (req, res) => {
    var urlR = url.parse(req.url,true)
    var resUrl = urlR.pathname
    // console.log(resUrl)
    if (resUrl === "/") {
        fs.readFile("./view/index.html", (err, data) => {
            if (err) console.log("404 not find");
            else {
                var htmlStr = template.render(data.toString())
                res.end(htmlStr)
            }
        })
    }else if(resUrl.indexOf("/public")===0){
        fs.readFile(`.+${{resUrl}}`,(err,data)=>{
            if(err) console.log("404 not found");
            else res.end(data)
        })
    }
})
server.listen("3000", () => {
    console.log("服务器启动成功");
})