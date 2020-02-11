var Koa = require("koa")
var router = require("koa-router")()
var app = new Koa()

app.use(async (ctx,next)=>{
    console.log("1");
    next()
    console.log("5");  
})
app.use(async (ctx,next)=>{
    console.log("2");
    next()
    console.log("4");
})
router.get("/news",async (ctx,next)=>{
    ctx.body="news"
    console.log("3");
})
app.use(router.routes())  /* 启动路由 */
app.use(router.allowedMethods())
app.listen(3001,()=>{
    console.log("服务器启动成功");
})