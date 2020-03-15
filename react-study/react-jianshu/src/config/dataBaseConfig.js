var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'react_blog'
});
exports.search = (user, callback) => {
    connection.query(`SELECT ${user} FROM users`, function (error, results, fields) {
        if (error) return callback(error);
        callback(null, results)
    });
}
exports.register = (user, callback) => {
    connection.query(`INSERT INTO users ${user}`, (error, results, fie) => {
        if (error) return callback(error);
    })
}
exports.isLogin = (user, callback) => {
    connection.query(`SELECT ${user} FROM users`, function (error, results, fields) {
        if (error) return callback(error);
        callback(null, results.isLogin)
    });
}
exports.login = (user,callback)=>{
    connection.query(`UPDATE users SET isLogin="1" WHERE userName = ${user.userName}`, function (error, results, fields) {
        if (error) return callback(error);
        callback(null)
    });
}
exports.exit = (user,callback)=>{
    connection.query(`UPDATE users SET isLogin="0" WHERE userName = ${user.userName}`, function (error, results, fields) {
        if (error) return callback(error);
    });
}