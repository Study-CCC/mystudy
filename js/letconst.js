// 暂时性死区
var a;
{
    // console.log(a)      //报错，let a将块作用域绑定了，无法再访问外部的a,let const 都不存在变量提升
    // let a=3;
}
// 不允许重复声明,因此也不能在函数内部重新声明参数
function a(){
    let b;
    var b;                   // 报错
}
function b(c){
    let c;                  //报错
}
// 块级作用域
// 第一种场景，内层变量可能会覆盖外层变量。
var d = 11;
function c(){
    console.log(d)     //undefinde,if代码块内的d变量提升内部覆盖了外部的d
    if(true){
        var d = 12;
    }
}
c()
console.log(d)
// 第二种场景，用来计数的循环变量泄露为全局变量。
var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5


