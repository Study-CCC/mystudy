// 类数组是拥有length属性和若干索引的对象
// 类数组转化为数组方法
{
    let arrObj = {0:'a',1:'b',2:'c',length:3}
    Array.from(arrObj)
    Array.prototype.slice.call(arrObj)
    Array.prototype.splice.call(arrObj,0)
    Array.prototype.concat.call(arrObj,[])
}
// 引用
// 参数不定长
// 函数柯里化