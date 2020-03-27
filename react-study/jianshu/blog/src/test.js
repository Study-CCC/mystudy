const axios = require('axios')
axios.get("http://api.avatardata.cn/TouTiao/Query").then(res=>{
    console.log(res)
})