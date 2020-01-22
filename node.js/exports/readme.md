在 node 的模板系统中内部默认有一个module对象,module对象下面有个属性为exports默认为空
默认在代码的最后一句return module.exports,不是exports
所以给exports重新赋值不管用了
exports=“123” //exports不再指向module.exports，即导出结果没有123了
module.exports.foo="abc"
module={
    exports:{
        foo:"abc"
    }
}
由于module.exports.xxx写起来太麻烦
node将exports=module.exports,即exports===module.exports //true
导出多个成员:exports.xxx=xxx 或者 module.exports={}
导出单个成员：module.exports=xxx