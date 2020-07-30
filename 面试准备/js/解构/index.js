// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。比如arguments
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo,bar,baz);//1,2,3

let [a,...reset] = [1,2,3,4,5];
console.log(a,reset);//1,[2,3,4,5]