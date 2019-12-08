{
    var a = 10;
}
console.log(a);         //js中不存在块级作用域

function f1(){
    //隐式全局变量
    num = 100
}
f1()
console.log(num)

// 全局变量是不能被删除的，隐式全局变量是可以被删除的
var n = 10;
n2=100;
delete n;
delete n2;
console.log(n);
// console.log(n2); 报错，n2 is not defined