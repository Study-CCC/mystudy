Function.prototype.call1 = function (obj) {
  obj = obj || window;
  obj.fn = this;
  let arg  =Array.from(arguments).slice(1)
  let res = obj.fn(...arg)
  delete obj.fn;
  return res;
}

Function.prototype.apply1 = function (obj) {
  obj = obj || window;
  obj.fn = this;
  let arg = Array.from(arguments)[1]
  let res = obj.fn(...arg)
  delete obj.fn
  return res;
}

Function.prototype.bind1 = function (obj) {
  let fn = this
  let arg = Array.from(arguments).slice(1)
  let fn1 = function () {
    let allArg = arg.concat(Array.from(arguments))
    return fn.apply(obj,allArg)
  }
  return fn1
}