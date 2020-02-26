// 判断类型 Object.prototype.toString.call()
function isType(type, a) {
    return function (obj) {
        return Object.prototype.toString.call(obj).includes(type)
    }
}

// 包装成一个高阶函数,批量生成函数
let types = ['String','Object','Array','Null','Undefined','Boolean']
let fns = {}
types.forEach(type=>{
    fns['is'+type] = isType(type)
})
let a = 'das';
console.log(fns.isString(a));
