function flat(arr,count) {
  if (count === 0) return arr;
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      res = res.concat(flat(arr[i],count-1))
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

console.log(flat([1, 2, [3, [4]]], 1))
