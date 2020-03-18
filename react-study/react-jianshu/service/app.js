var Koa = require('koa')
var cors = require('koa-cors');
var app = new Koa()
var bodyParser = require('koa-bodyparser');
const router = require('./routers')
app.use(cors());
// router.get('/',()=>{
// })
// router.get('/abc',(ctx)=>{
//     ctx.body='1324'
//     db.search('id=0')
// })
app.use(bodyParser());
app.use(router.routes())   /* 启动路由 */
app.listen('8080',()=>{
    console.log('服务端启动成功')
})

