Function.prototype.call1 = function (context) {
    // 第一步添加fn进对象中
    var context = context || window
    context.fn = this
    // 第二部执行fn
    
    // ES3写法
    let arr = []
    for (let i = 1, len = arguments.length; i < len; i++) {
        arr.push(`arguments[${i}]`)
    }
    // 在eval中，这里的arr会自动调用toString方法
    let res = eval(`context.fn(${arr})`)

    // ES6写法
    /*let arr = []
    for (let i = 1, len = arguments.length; i < len; i++) {
        arr.push(arguments[i])
    }
    let res = context.fn(...arr)*/

    // 第三步删除context中的fn
    delete context.fn
    return res
}
var obj = {
    a: 1,
    b: function (name, age) {
        console.log(this.a, name, age)
    }
}
var obj1 = {
    a: 2
}
obj.b.call1(obj1, 'aa', 'b')