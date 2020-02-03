var express = require('express')
var router = express.Router()
var students = require('./students')
router.get('/',(req,res)=>{  
    students.find((err,data)=>{
        if(err) return res.status(500).send('server is error')
        // console.log(data);
        res.render('index.html',{students:data})
    })
})
router.get('/students',function(req,res){  
    students.find((err,data)=>{
        if(err) return res.status(500).send('server is error')
        res.render('index.html',{students:data})
    })
})
router.get('/students/edit',(req,res)=>{
    students.findById(req.query.id,(err,data)=>{
        if(err) return res.status(500).send('server is error')
        res.render('edit.html',{student:data})
    })
})
router.post('/students/edit',(req,res)=>{
  var stu = req.body
  students.edit(stu,(err,data)=>{
      if(err) return res.status(500).send('server is error')
    //   console.log(stu);
      
      res.redirect('/')
  })
})
// 渲染添加页面
router.get('/students/new',(req,res)=>{
    res.render('new.html')
})
router.post('/students/new',(req,res)=>{
    var stu = req.body
    students.add(stu,(err)=>{
        if(err) return res.status(500).send('server is error')
        res.redirect('/')
    })
})
router.get('/students/delete',(req,res)=>{
    var index = req.query.id
    students.delete(index,(err)=>{
        if(err) return res.status(500).send('server is error')
        res.redirect('/')
    })
})
module.exports = router