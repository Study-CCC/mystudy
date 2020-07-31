// set是es6的一种数据结构,类似于数据,不过每个元素都是唯一的
// set是一种构造函数,可以用来生成set类型的数据结构
// set中有size,delete,add,clear,foreach,keys,has,values方法
// 在set中NaN和NaN是相等的,{}和{}是不相等的
// set一般可以用于数组去重,求交集并集差集
let set1 = new Set([1,2,3,4,5,5,5])
console.log(set1);
set1.add(6)
set1.delete(1)
console.log(set1);