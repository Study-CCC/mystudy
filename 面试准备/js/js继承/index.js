// 1. 原型链继承
{
    function Parent(){
        this.names = ['a','b']
    }
    function Child(){}
    Child.prototype = new Parent()
    let chili1 = new Child()
    let chili2 = new Child()
    chili1.names.push('c')
    // console.log(chili2.names)
}
// 优点: 1. 创建实例时不用每次都创建方法
// 缺点: 1.通过这种方式继承，所有实例共享属性
//       2. 不能向parent穿参

// 2. 构造函数继承
{
    function Parent(age){
        this.names = ['a','b']
        this.age = age
    }
    function Child(age){
        Parent.call(this,age)
    }
    let chili1 = new Child(19)
    let chili2 = new Child(20)
    // console.log(chili1)
}
// 优点: 1. 可以向parent传参
//       2. 避免了属性共享
// 缺点: 1. 方法在构造函数中定义时,每次创建实例都会创建一次方法

// 3. 组合继承
{
    function Parent(age){
        this.names = ['a','b']
        this.age = age
    }
    Child.prototype.getName = function(){
        console.log(this.names)
    }
    function Child(age){
        Parent.call(this,age)
    }
}
// 优点: 1. 融合了构造函数和原型链继承的优点
