var fs = require("fs")
var http = require("http")
var url=require("url")
var template = require("art-template")
var server = http.createServer()
var comments = [
    {
      name: '张三',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三2',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三3',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三4',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三5',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    }
  ]
server.on("request", (req, res) => {
    var urlR = url.parse(req.url,true)
    var resUrl = urlR.pathname
    // console.log(resUrl)
    if (resUrl === "/") {
        fs.readFile("./view/index.html", (err, data) => {
            if (err) res.end("404 not found");
            else {
                var htmlStr = template.render(data.toString(),{comments})
                res.end(htmlStr)
            }
            
        })
    }else if(resUrl.indexOf("/public")===0){
        fs.readFile(`.${resUrl}`,(err,data)=>{
            if(err) console.log("public not found");
            else res.end(data)    
            // console.log(`.${resUrl}`);
        })
    }else if(resUrl.indexOf("/post")===0){
        fs.readFile(`./view/post.html`,(err,data)=>{
            if(err) res.end("post not found");
            else{
                var htmlStr = template.render(data.toString())
                res.end(htmlStr)
            }
        })
    }else if(resUrl.indexOf("/pinglun")===0){
        // console.log(urlR);
        var comment = urlR.query
        comment.dateTime = '2020-01-16' 
        comments.unshift(comment)
        res.statusCode=302
        res.setHeader("location","/")
        // 一定要以end结尾
        res.end()
    }
})
server.listen("3000", () => {
    console.log("服务器启动成功");
})