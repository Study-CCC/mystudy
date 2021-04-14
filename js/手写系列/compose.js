function compose() {
  let arg = arguments
  return function () {
    let res = arg[0].apply(this,arguments);
    for (let i = 1; i < arg.length; i++){
      res = arg[i].call(this,res)
    }
    return res
  }
}

var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { return 'HELLO, ' + x; };

console.log(compose(hello, toUpperCase)('ccc'))

