const express = require('express')
const routers = express.Router()
const curd = require('./curd')
routers.get("/",(req,res)=>{
    curd.find((err,data)=>{
        // if(err) return res.status("500").
    })
    res.render("index.html")
})
routers.get("/index",(req,res)=>{
    res.render("index.html")
})
routers.get("/post",(req,res)=>{
    res.render("post.html")
})
module.exports=routers