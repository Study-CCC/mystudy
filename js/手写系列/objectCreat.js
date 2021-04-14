function create(obj) {
  let Fn = function () { }
  Fn.prototype = obj
  return new Fn()
}