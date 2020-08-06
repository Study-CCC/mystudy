// symbol是ES6引入的一个新特性,它的功能类似于唯一识别的ID
// symbol也是一种基础数据类型
let s1 = Symbol()
let s2 = Symbol('another symbol')
let s3 = Symbol('another symbol')

s1 === s2 // false
s2 === s3 // false

// symbol类型通过Object.keys和for...in 是枚举不出的
// 需要通过Reflect.ownKeys()和Object.getOwnPropertySymbols()来获取
// 使用场景: 1.使用symbol代替常量
//           2. 使用symbol作为对象属性名
//           3. 注册和获取全局Symbol
let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol

gs1 === gs2  // true