//https://blog.csdn.net/Web_J/article/details/88870515
var arr =[ 1,2,4,5]
arr.reduce((a,b,c)=>{
//    console.log(a,b,c)
},0)
arr.reduce((a,b,c)=>{
    // console.log(a,b,c)
 })
let result;
result = arr.reduce((a,b)=>{
    return a+b;
})
// console.log(result)
// reduce的高级用法
// 1.计算数组中元素重复次数
var arr1 = [1,2,41,1,1,4,2,5,24,5,4,65]
var result1;
result1 = arr1.reduce((a,b)=>{
    if(b in a)
    a[b]++
    else
    a[b]=1
    return a
},{})
// console.log(result1)
// 2.数组去重
var result2;
result2 = arr1.reduce((a,b)=>{
    if(!a.includes(b))
    a.push(b)
    return a
},[])
// console.log(result2)
// 3.二维数组转化为一维
var doubleArr = [[1,2],[3,4,5],[6,7]]
var result3;
result3=doubleArr.reduce((a,b)=>{
    return a.concat(b)
},[])
console.log(result3)