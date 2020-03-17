var Koa = require('koa')
var cors = require('koa2-cors');
var app = new Koa()
const router = require('./routers')
app.use(cors());
// router.get('/',()=>{
// })
// router.get('/abc',(ctx)=>{
//     ctx.body='1324'
//     db.search('id=0')
// })
app.use(router.routes())   /* 启动路由 */
app.listen('8080',()=>{
    console.log('服务端启动成功')
})