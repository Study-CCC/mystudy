// weakSet和set相似,都是不重复的值的集合,但是weakSet里面只能是对象,而且weakSet不能遍历,weakSet里面都是弱引用
// weaKSet有delete,add,has属性
let obj = { a: 1 }
let obj1 = { b: 1 }
let weakSet = new WeakSet([obj, obj1])
weakSet.add({ c: 1 })

// weakSet 确保Foo上的方法只能在Foo实例上引用,而且使用weakSet不会增加实例的引用,也不会出现内存泄漏
{
    const foos = new WeakSet();
    class Foo {
        constructor() {
            foos.add(this);
        }
        method() {
            if (!foos.has(this)) throw new Error("Invalid access");
            console.log(11)
            // do work
        }
    }
    // 例如
    let foo1 = new Foo()
    foo1.method()  //11

    let foo2 = {}
    foo2.__proto__ = foo1
    foo2.method()  // "Invalid access"
}

//  如果使用set
{
    const foos = new Set()
    class Foo {
        constructor() {
            foos.add(this)
        }
        method() {
            if (!foos.has(this)) { return new Error("Invalid access") }
            console.log(11)
        }
    }
    let foo1 = new Foo()
    foo1.method()  //11

    let foo2 = {}
    foo2.__proto__ = foo1
    foo2.method()  // "Invalid access"
    // 但是此时将foo1删除的话
    foo1 = {}
    // foo1还存在foos中,引用不为0,即不会被内存回收
}