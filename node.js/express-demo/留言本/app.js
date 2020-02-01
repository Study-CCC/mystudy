var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.engine('html',require('express-art-template'))
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
//对body-parser进行配置
app.use( bodyParser.urlencoded({extended: true}) )
//设置完毕之后，会在req对象上面新增一个req.body的一个对象

// 将express页面默认存在views改为存在view
app.set('views','./view/')
app.use('/public',express.static('./public/'))
app.get('/',(req,res)=>{
    // res.send('hello express')
     res.render('index.html',{
         comments
     })
})
app.get('/post',(req,res)=>{
    res.render('post.html')
})
app.post('/pinglun',(req,res)=>{
    // console.log(req.body)
    var comment = req.body
    comment.dateTime = '2015-10-16'
    comments.unshift(comment)
    res.redirect('/')
})
app.get("*",(req,res)=>{
    res.render('404.html')
})

app.listen('3000',()=>{
    console.log('server is running')
})