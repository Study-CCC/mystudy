// 如果是加分,加法两边存在字符串的话,会转化为字符串进行相加,如果没有就会转化为数字相加
// 如果是减法,两边都会转化为数字进行相加
// 复杂类型转number顺序为 先使用valueOf获取原始值,如果不是number就然后调用toString转化为string,再将string转化为number
// 关系运算符将其他类型转化为数字
// 逻辑非将其他运算符转化为布尔类型,除了null,undefined,0,'',NaN,document.all(),false转化为false外都为true
console.log([] == 0)  // true  []转化为字符'',然后空字符转化为0
console.log(![] == 0)  // true  ![]转化为布尔型false,然后转化为0
console.log([] == ![])  // true  ![]转化为布尔false,然后转化为0,[]转为0
console.log([] == [])   // false  同类型比较不转化,储存在堆中,比较的是地址
console.log({} == !{})  // false   !{}转化为布尔false,然后转化为0,{}转化为字符[object Object]然后转化为NaN
console.log({} == {})   // false    同类型比较不转化,储存在堆中,比较的是地址'
console.log({} + {})   // "[object Object][object Object]" 调用toString转为字符串相加
console.log([1,2,3]+[]) // '1,2,3' 转化为字符串相加
console.log([]+{})   // "[object Object]" 转化为字符串相加

// 在进行对象字面量(这里说的是JSON格式的对象字面量)运算时要注意，若运算符两边都是字面量，则将它们都视为
// 对象字面量进行类型转换； 若只有一个字面量时要注意，当这个字面量在首位时，会被当做一个块看待。
console.log({}+[])   // 0 {}被当作了一个块,相当于执行了({},+[])
console.log({q:1} + []) // 0  {q:1}被当作了一个块,相当于执行了({q:1},+[])