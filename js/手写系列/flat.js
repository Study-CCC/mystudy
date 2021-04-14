function flat(arr, depth) {
  if (depth === 0) return arr;
  let res = []
  for (let item of arr) {
     res = res.concat(item instanceof Array?flat(item,depth-1):item)
  }
  return res;
}

console.log(flat([1, 2, [3, [4]]], 3))
