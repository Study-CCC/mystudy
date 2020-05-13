// function bar(){
//     var a = 0
//     baz()
// }
// function baz(){
//     var a = 1
//     var b = 5
//     console.log(this.a)
//     foo()
// }
// function foo(){
//   var b =6
//     console.log(this.b)
// }
// var a = 2;
// var b =3;
// bar()

// node里没有window对象,所以使用this以浏览器的结果为主
// function test(){
//     console.log(this.a)
// }
// var obj2 = {
//     a: 4,
//     test:test
// }
// var obj1 = {
//     a:200,
//     obj2:obj2
// }
// var bar = obj2.test.bind(obj2)
// bar()
// var bar1  = obj2.test.call(obj2)
// bar1()

function foo(a,b){
    console.log(this)
    this.val = a + b
    console.log(this.val)
}
var bar =foo.bind(null,1,2)
bar()   // 