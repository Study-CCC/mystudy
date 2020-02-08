var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'chat'
});
 
// 2.连接数据库
connection.connect();
 
// 3.执行数据库操作
// 查找
connection.query('SELECT * FROM user_info', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
// 添加
// connection.query('INSERT INTO user_info VALUES(2,2,3)',(error,results,fie)=>
// {
//   if (error) throw error;
//   console.log(results);
// })
// 修改
// connection.query('UPDATE user_info SET name = "aaa" WHERE Id = 1', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
// 删除
// connection.query('DELETE FROM user_info WHERE Id =1', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
// 4.关闭连接
connection.end();