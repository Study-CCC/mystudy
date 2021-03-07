Array.prototype.myMap = function () {
  let arr = this
  let res = []
  let [fn,thisValue] = Array.prototype.slice.apply(arguments)
  for (let i = 0; i < arr.length; i++){
    res.push(fn.call(thisValue,arr[i],i,arr))
  }
  return res
}