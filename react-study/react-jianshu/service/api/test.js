const db = require('./databaseApi')
// // db.search().then((res)=>{
// //     console.log(res)
// // }).catch(()=>{console.log("error")})
const a = async ()=>{
   const data = await db.getList()
   console.log(data)
}
a()

// if([]){console.log(123)}
// else console.log(456)