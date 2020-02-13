var Koa = require("koa")     // npm i 
var router =  require("koa-router")()   // 需npm i
var views = require("koa-views")     // npm i koa-views
var bodyParser = require("koa-bodyparser")    // npm i koa-bodyParser
var static = require("koa-static")
var app = new Koa()
var common = require("./module/getPostData")

// 配置ejs模板引擎
app.use(views("views",{
    extension:"ejs"
}))
// 配置post bodyParser中间件
app.use(bodyParser());
//配置静态web服务的中间件
app.use(static(__dirname,"./static"))
router.get("/",async (ctx,next)=>{
    await ctx.render("post")
})
router.post("/post",async (ctx,next)=>{
    // var data = await common.getPostData(ctx)    // 原生js获取post请求
    // console.log(typeof ctx.request.body);
    ctx.body = ctx.request.body;
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000,()=>{
    console.log("服务器启动成功");
}) 