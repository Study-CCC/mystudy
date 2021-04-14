// 1. 递归
function flat(arr, depth) {
  if (depth === 0) return arr;
  let res = []
  for (let item of arr) {
     res = res.concat(Array.isArray(item)?flat(item,depth-1):item)
  }
  return res;
}

// 2. toString
// arr.toString().split(',').map(item => +item)

// 3. Array.flat
// arr.flat(Infinity)

// 4. ES6扩展运算符
function es6Flat(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(es6Flat([1,2,[3,[5]]]))