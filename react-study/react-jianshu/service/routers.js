var router = require('koa-router')()
var db = require('./api/databaseApi')

router.get('/login',async (ctx,next)=>{
    const user = ctx.query
    console.log("访问了post")
    console.log(user);
    
})
module.exports = router