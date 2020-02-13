var Koa = require("koa")
var router = require("koa-router")()
var app = new Koa()
var render = require("koa-art-template")
var path = require("path")
var list ={
    tit:"aaa",
    h:"<h1>111</h1>",
    arr:[1,2,3]
}
render(app,{ 
    root:path.join(__dirname,'views'),  // 视图位置
    extname:'.html',    // 后缀名
    debug:process.env.NODE_ENV!== 'production'  // 是否开启调式模式
   });
router.get("/",async(ctx,next)=>{
    // koa 设置中文cookie要先转换成base64运算符  new Buffer(str).toString("base64")
    ctx.cookies.set("userinfo","123",{
        maxAge:1000*60*10,      //多少毫秒后过期
        path:"/news",  
        // expires:new DataCue('2020-02-14'),   // cookie的失效时间
        // httpOnly:true                        // 是否仅在服务器端可使用           
    })
    var userinfo = ctx.cookies.get("userinfo")
    console.log(userinfo);
    
    await ctx.render("index",{list})
})
router.get("/news",async (ctx,next)=>{
    var userinfo = ctx.cookies.get("userinfo")
    console.log(userinfo);
    ctx.body="news"
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen("3000",()=>{
    console.log("服务器启动了");
})