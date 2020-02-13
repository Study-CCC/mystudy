var Koa = require("koa")
var router = require("koa-router")()
var app = new Koa()
var render = require("koa-art-template")
var path = require("path")
render(app,{ 
    root:path.join(__dirname,'views'),  // 视图位置
    extname:'.html',    // 后缀名
    debug:process.env.NODE_ENV!== 'production'  // 是否开启调式模式
   });
   var list ={
       tit:"aaa",
       h:"<h1>111</h1>",
       arr:[1,2,3]
   }
router.get("/",async(ctx,next)=>{
    await ctx.render("index",{list})
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen("3000",()=>{
    console.log("服务器启动了");
})