var router = require('koa-router')()
var db = require('./api/databaseApi')

router.get("/getlist",async (ctx,next)=>{
    const list =await db.getList()
    ctx.body=list
})
router.get("/recommend",async (ctx,next)=>{
    const list =await db.getRecommend()
    ctx.body=list
})
router.post('/login',async (ctx,next)=>{
    const user = ctx.request.body.params
    // console.log(user)
    const data = await db.login(user)
    ctx.body=data.affectedRows?true:false
})
router.post('/register',async (ctx,next)=>{
    const user = ctx.request.body.params
    const flag = await db.search(user)
    // console.log(flag)
    if(flag.toString()){
        ctx.body=false
    }
    else{
        const id = await db.searchAll()
        user.id=id.length
        user.isLogin=0
        console.log(user)
        db.register(user)
        ctx.body = true
    } 
    // const data = await db.login(user)
    // ctx.body=data.affectedRows?true:false
})
module.exports = router