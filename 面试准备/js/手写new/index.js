// 什么是new
// new是将用户自定的构造函数或者内置的构造函数进行实例化
// new的过程
// 1. 创建一个新对象
// 2. 将构造函数内部的作用域赋予给这个新对象,因此this就指向了新对象(这一步用了实例可以访问__proto__中的属性)
// 3. 执行构造函数中的代码，即给新对象添加属性
// 4. 返回新对象

function objectFactory() {
    let obj = {}
    let Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    let res = Constructor.apply(obj, arguments)
    return typeof res == 'object' ? res : obj
}
function Cc(name,age){
    this.age = 22
    this.name = age
    return {
        name:name,
        age:14
    }
}
let person = objectFactory(Cc,11,13)
console.log(person)

function a(){
}
