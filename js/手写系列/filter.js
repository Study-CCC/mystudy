Array.prototype.filter1 = function () {
  let arr = this
  let [fn, thisValue] = Array.prototype.slice.apply(arguments)
  let res = []
  for (let i = 0; i < arr.length; i++){
    if (fn.call(thisValue, arr[i], i, arr)) {
      res.push(arr[i])
    }
  }
  return res
}