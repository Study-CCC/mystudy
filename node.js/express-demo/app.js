var express = require('express')
var app = express()

// 通过路径获取路径下的资源
app.use("/a/",express.static("./a/"))
app.use("/node_modules/",express.static("./node_modules/"))
app.get("/",(req,res)=>{
    res.send("hello express")
})
app.get("/about",(req,res)=>{
    // 路径传递的参数
    console.log(req.query)
    res.send("about")
})
app.listen("3000",()=>{
    console.log("app is running at port 3000")
})