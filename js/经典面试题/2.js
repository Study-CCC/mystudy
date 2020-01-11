function fn(f){
    var x = 10;
    f()         //不能访问fn中的变量
}
var x =20;
function f(){
    console.log(x);
}
fn(f)