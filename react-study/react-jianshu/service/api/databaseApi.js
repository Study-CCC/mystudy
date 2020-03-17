const mysql =require('mysql')
const mysqlConfig =require( '../config/mysql_config')
const pool = mysql.createPool(mysqlConfig)

const query = (sql,val)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err) {reject(err)}
            else {
                connection.query(sql,val,(err,results)=>{
                    if(err) reject(err)
                    else resolve(results)
                     //释放连接，需要注意的是连接释放需要在此处释放，而不是在查询回调里面释放
                    connection.release()
                })
            }
        })
    })
}
const search = (user)=>{query(`SELECT * FROM users where ${user}`,null).then((res)=>{
    console.log(res)
})}
const register = (user)=>{query(`INSERT INTO users ${user}`)}
const isLogin = (user)=>{query(`SELECT ${user} FROM users`).then((res)=>(user.isLogin==0?false:true))}
const login = (user)=>{query(`UPDATE users SET isLogin=1 WHERE userName = ${user.userName}`)}
const exit = (user)=>{query(`UPDATE users SET isLogin="0" WHERE userName = ${user.userName}`)}
module.exports={
    search,
    register,
    isLogin,
    login,
    exit
}
// exports.search = (user, callback) => {
//     connection.query(`SELECT * FROM users where ${user}`, function (error, results, fields) {
//         if (error) return callback(error);
//         callback(null, results)
//     });
// }
// exports.register = (user, callback) => {
//     connection.query(`INSERT INTO users ${user}`, (error, results, fie) => {
//         if (error) return callback(error);
//     })
// }
// exports.isLogin = (user, callback) => {
//     connection.query(`SELECT ${user} FROM users`, function (error, results, fields) {
//         if (error) return callback(error);
//         callback(null, results.isLogin)
//     });
// }
// exports.login = (user,callback)=>{
//     connection.query(`UPDATE users SET isLogin="1" WHERE userName = ${user.userName}`, function (error, results, fields) {
//         if (error) return callback(error);
//         callback(null)
//     });
// }
// exports.exit = (user,callback)=>{
//     connection.query(`UPDATE users SET isLogin="0" WHERE userName = ${user.userName}`, function (error, results, fields) {
//         if (error) return callback(error);
//     });
// }