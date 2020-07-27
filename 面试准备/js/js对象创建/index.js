// 创建对象的多种方式
// 1. 使用字面量创建
 {
     let person = {
        name:'cc',
        age:21,
        getName:function(){
        console.log(this.name)
        }
     }
    //  person.getName()
 }
 // 优点:1.代码简单易读
//  缺点:1.每次创建都需要写大量代码，比较麻烦

//2. 使用工厂模式创建
{
    function createPerson(name,age){
        let obj = {}
        obj.name = name
        obj.age = age
        obj.getName = function(){
            console.log(this.name)
        }
        return obj
    }
    let person = createPerson('cc',21)
    // person.getName()
}
// 缺点: 1.创建的对象都指向一个原型，不能识别对象

//3. 构造函数模式
{
    function CreatePerson(name,age){
        this.name = name
        this.age = age
        this.getName = function(){
            console.log(this.name)
        }
    }
    let person = new CreatePerson('cc',21)
    person.getName()
    console.log(person instanceof CreatePerson)
}
// 优点: 1.可以识别对象为一个特定的类型
// 缺点: 1.每次创建都需要创建一个getName方法,因为在js中每个方法都是一个对象，每创建一个方法都相当于创建了一个不同的对象

//4. 原型模式
{
    function CreatePerson(name){}
    CreatePerson.prototype.name = 'cc'
    CreatePerson.prototype.age = 21
    CreatePerson.prototype.getName = function(){
        this.name
    }
}
// 优点: 1. 方法不需要重新构建
// 缺点: 1. 不能初始化参数  2. 所有创建对象都共享方法属性

//5. 原型构造组合
{
    function CreatePerson(name,age){
        this.name = name
        this.age  =age
    }
    CreatePerson.prototype.getName=function(){
        console.log(this.name)
    }
}
// 优点: 1. 方法不需要重新构建而且可以初始化参数