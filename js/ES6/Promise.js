// promise 作用
// 1. 解决回调地狱,方便代码的维护
// 2. 解决异步的问题,本身不能说promise是异步的


// Promoise 一旦新建便会立即执行
// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('1');
//         // reject("aa")
//         resolve()
//     }, 0)
// })
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("2");
//     }, 30)
// })
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("3");
//     }, 20)
// })

// 所以可以通过函数返回值来创建promise
var fn1 = function(){
    return new Promise((resovle,reject)=>{
        setTimeout(()=>{
            console.log(1);
            resovle()
        },10)
    })
}
var fn2 = function(){
    return new Promise((resovle,reject)=>{
        setTimeout(()=>{
            console.log(2);
            resovle()
        },40)
    })
}
var fn3 = function(){
    return new Promise((resovle,reject)=>{
        setTimeout(()=>{
            console.log(3);
        },20)
    })
}
fn1().then(fn2).then(fn3)
// p1.then(() => {
//     console.log(2);
//     throw Error("aa")
// }, (err) => {
//     console.log(3);
//     console.log(err);
// }).then(() => { console.log(4) },()=>{console.log(5);
// }
// )