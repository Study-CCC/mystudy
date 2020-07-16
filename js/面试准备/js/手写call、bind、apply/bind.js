Function.prototype.bind1 = function (context) {
    let self = this
    let arg1 = Array.prototype.slice.call(arguments, 1)
    let fn = function () { }
    let fn1 = function () {
        // slice除了切割数组,还能将一个类对象转换为数组
        let arg2 = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fn ? this : context, arg1.concat(arg2))
    }
    fn.prototype = this.prototype
    fn1.prototype = new fn()
    return fn1
}
var obj = {
    a: 1,
    b: function (a, b) {
        console.log(this.a, a, b)
    }
}
var b = {
    a: 2
}
var s = obj.b.bind1(b, 2)
s(1, 2)