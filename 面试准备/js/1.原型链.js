function Per(){}
// prototype  
// 它的作用就是包含可以由特定类型的所有实例共享的属性和方法，也就是让该函数所实例化的对象们都可以找到公用的属性和方法
//   prototype为每个函数都有的属性,prototype为指向该构造函数创建的实例的原型
//   原型是一个js对象在创建时与之相关联的另一个对象,每一个对象都会从原型中'继承'属性
    Per.prototype.name = 'aaa'
    const per = new Per()
    // 在per中并不存在name属性,因此查找name的时候会到与对象相关联的原型上去查找,在原型中找不到就去原型的原则中查找，一直找到最顶层为止
    console.log(per.name)   // 'aaa'

    // __proto__
    //  __proto__为每个对象都有的属性,该属性指向的是该对象的原型
    // __proto__的作用是访问对象中的某个属性或方法时，如果对象内存中不存在这个方法，就会沿着__proto__一直寻找,一直找到__proto__的终点null为止
    console.log(per.__proto__==Per.prototype)   //true

// constructor
//  每个原型都有个constructor属性指向其关联的构造函数 
// constructor的含义是指向该对象的构造函数,所以函数的最终构造函数都是function
console.log(Per.prototype.constructor==Per)
