var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var routers = require('./routers')
app.engine('html',require('express-art-template'))
app.use('/public',express.static('./public/'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routers)
app.listen('3000',()=>{
    console.log('服务器启动成功');
})
