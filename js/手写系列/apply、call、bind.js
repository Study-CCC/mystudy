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

// bind 当使用new的时候会忽略传入的对象，将原函数作为构造器
Function.prototype.bind1 = function (obj) {
  let context = this;
  let args = Array.from(arguments).slice(1)
  let fn = function () {
    let allArgs = args.concat(...arguments)
    return context.apply(this instanceof fn?this:obj,allArgs)
  }
  let newFn = function(){}
  newFn.prototype = context.prototype
  fn.prototype = new newFn()
  return fn;
}
