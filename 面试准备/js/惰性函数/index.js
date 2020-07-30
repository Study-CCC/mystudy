// 惰性函数为了解决在环境相同的情况下每次运行函数都要进行一次判断的情况
// 例如每次执行函数都返回第一次调用函数时创建的时间
// 通过改写函数的方法,在第一次执行函数后函数就被改写了
function foo(){
    let t = new Date()
    foo = function(){
        return t
    }
    return foo()
}