const express = require('express')
const routers = express.Router()
const curd = require('./curd')
routers.get("/",(req,res)=>{
    curd.find((err,data)=>{
       if(err) return res.status(500).send('server is error')
       else res.render('index.html',{students:data})
    })
})
routers.get("/students",(req,res)=>{
    curd.find((err,data)=>{
        if(err) return res.status(500).send('server is error')
        else res.render('index.html',{students:data})
     })
})
routers.get("/students/edit",(req,res)=>{
    curd.findOne(req.body,(err,data)=>{
        // console.log(req.body);
        if(err) return res.status(500).send('server is error')
        else res.render('edit.html',{student:data})
    })
})
routers.post("/students/edit",(req,res)=>{
    curd.updata(req.body,(err)=>{
        if(err) return res.status(500).send('server is error')
        else res.redirect("/")
    })
})
routers.get("/students/new",(req,res)=>{
    res.render("new.html")
})
routers.post("/students/new",(req,res)=>{
    curd.add(req.body,(err)=>{
        if(err) return res.status(500).send('server is error')
        else res.redirect("/")
    })
})
routers.get("/students/delete",(req,res)=>{
    curd.delete(req.query._id,()=>{
        // console.log(req.query._id)
        res.redirect("/")
    })
})
module.exports=routers