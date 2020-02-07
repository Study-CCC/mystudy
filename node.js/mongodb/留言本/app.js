const express = require('express') 
const app = express()
const bodyParser = require('body-parser')
const routers = require('./routers')
app.engine('html',require('express-art-template'))
app.use("/public",express.static("./public/"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routers)
app.listen("3000",()=>{
    console.log("服务器启动成功");
})
