// 函数记忆就是用来缓存已经计算过的结果,下次再进行相同的计算就直接返回值
function memorize(f) {
    var cache = {};
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        console.log(key);
        if (key in cache) {
            return cache[key]
        }
        else return cache[key] = f.apply(this, arguments)
    }
}
var add = function(a, b, c) {
    return a + b + c
  }
  
  var memoizedAdd = memorize(add)
  memoizedAdd(1,2,3)