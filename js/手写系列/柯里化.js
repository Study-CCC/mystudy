function Curry(fn, args) {
  let len = fn.length;
  args = args || []
  return function () {
    args = args.concat(...arguments)
    if (args.length >= len) return fn.apply(this, args)
    return Curry.call(this,fn,args)
  }
}