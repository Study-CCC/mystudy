const path = require('path')

// basename 获取路径下的文件,默认包含扩展名
console.log(path.basename("c:/a/c/b.html"));
console.log(path.basename("c:/a/c/b.html",".html"));

// join 拼接路径,无论/是否多了,都拼接为一个
console.log(path.join("a/"+"/b/"+"/c"));
console.log(path.join(__dirname,"./a/"));  //__dirname 为当前文件目录位置

// dirname 获取一个路径中的目录部分
console.log(path.dirname("c:/a/v/c"));

// extname  获取文件扩展名部分
console.log(path.extname("c:/a/v/c.html"));

// isAbsolute 判断一个路径是否为绝对路径
console.log(path.isAbsolute("/a/v/c"));
console.log(path.isAbsolute("./a/v/c"));

// parse 将路径转化为对象,输出 root base dir extname 
console.log(path.parse("c:/a/v/c"));
