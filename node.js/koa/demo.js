var Koa = require("koa")
var router = require("koa-router")()
var app = new Koa()

router.get("/",async (ctx,next)=>{
    ctx.body="首页"
    // console.log(ctx);
    console.log(ctx.query);  // 获取传递的参数,以对象的形式
})
router.get("/news",async (ctx,next)=>{
    ctx.body="新闻"
})
// 动态路由
router.get("/abc/:aid",async (ctx)=>{
    ctx.body="abc"
    console.log(ctx.params);   // 获取动态路径
    
})
app.use(router.routes())   /* 启动路由 */
app.use(router.allowedMethods());
app.listen(3000,()=>{
    console.log("服务器启动成功");      
})