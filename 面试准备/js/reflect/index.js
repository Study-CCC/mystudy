// Reflect是ES6为操作对象提供的API
// 作用: 1. 修改某些object方法的返回结果，Object.defineProperty(obj,name,desc)无法定义属性会报错，
//          Reflect.defineProperty(obj,name,desc)则会返回false
//       2. 让函数的操作都变成函数行为，如: name in obj 可以用Reflect.has(obj,name)