var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a);  
console.log(b);  
console.log(a.x); 
console.log(b.x);　
//https://www.cnblogs.com/qiujianmei/p/7135428.html
