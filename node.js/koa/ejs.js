var Koa = require("koa")
var router = require("koa-router")()
var views = require("koa-views")
var app = new Koa()

// 配置模板引擎中间件  --- 第三方中间件
app.use(views('views',{
    extension: 'ejs'    /*应用esj模板引擎 */
}))
// app.use(views('views',{map:{html:'ejs'}}))
let arr =[1,2,3]
router.get("/",async (ctx)=>{
    await ctx.render("a",{
        title:"123",
        arr
    })
})

app.use(router.routes())   /* 启动路由 */
app.use(router.allowedMethods())

app.listen(3000,()=>{
    console.log("服务器启动了");
})