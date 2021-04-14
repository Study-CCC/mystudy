function new (fn){
  let newObj = {}
  let args = Array.prototype.slice.call(arguments,1)
  newObj.__proto__ = fn.prototype
  let ret = fn.apply(newObj, args)
  return typeof ret === 'object' ? ret : newObj
}