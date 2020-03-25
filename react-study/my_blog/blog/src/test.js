const axios = require('axios')
axios.get("https://www.jianshu.com/users/recommended?seen_ids=&count=5&only_unfollowed=true").then(res=>{
    console.log(res)
})