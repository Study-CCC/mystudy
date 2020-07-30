// ES5创建对象的多种方式
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

// ES6的class
// es6的class其实是一个语法糖,绝大功能可以通过es5实现,封装性更强
// class中与es5不同点有class不能变量提升,这点是为了确保class在子类前就被定义
// class中必须要有constructor,如果没有写,则会默认被加一个空的上去
// class中的方法不能被枚举,即通过Object.keys(Point.prototype)枚举到,所有方法都可以通过Object.getOwnPropertyNames(Point.prototype)访问到
// class中还有静态方法,是不可以让实例继承的,可以直接通过class类访问,也可以通过子类继承
// class中的方法都是定义在prototype上的
class Point {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  
  }
  
  var point = new Point(2, 3);
  
  point.toString() // (2, 3)
  
  point.hasOwnProperty('x') // true
  point.hasOwnProperty('y') // true
  point.hasOwnProperty('toString') // false
  point.__proto__.hasOwnProperty('toString') // true