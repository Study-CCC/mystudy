// 函数组合就是将一个复杂的需求分成多个函数然后组合起来

function compose(){
    let args = arguments
    let length =  args.length
    return function(){
        let i = length - 1
        let res = args[i].apply(this,arguments)
        while(i--){
            res = args[i].call(this,res)
        }
        return res
    }
}
var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { return 'HELLO, ' + x; };

console.log(compose(hello,toUpperCase)('ccc'))