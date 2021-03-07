function new1() {
  let obj = {}
  let fn = Array.shift.call(arguments)
  obj.__proto__ = fn.prototype
  let ret = fn.apply(obj, arguments)
  return typeof ret === 'object'?ret:obj
}