// map是es6的一种数据结构,传统js对象中键名只能是对象,但是map中键名可以是各种类型的值包括对象
// map中有size,set,get,foreach方法
let map1 = new Map([[1,2],[3,4]])
map1.set(4,1)
let o = {'a':1}
map1.set(o,'2')
console.log(map1);