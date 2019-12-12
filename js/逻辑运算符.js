//对于非布尔类型的数进行布尔运算，先转换为布尔值运算,再返回原值
/*var result = 2 && 1
var result1 = 1 && 2
// 与运算，若两个值都为true，则返回后面的
console.log(result)
console.log(result1)*/


/*var false1 = NaN && 0;
var false2 = 0 && NaN;
//若两个中存在false,则返回前面的false
console.log(false1)
console.log(false2)

// 如果第一个为true 则一定返回第二个值
// 如果第一个为false 则一定返回第一个值*/

// 或运算中若第一个为false则直接返回第二个
var result3 = NaN || 1
var result4 = NaN || 0 
console.log(result3)
console.log(result4)
