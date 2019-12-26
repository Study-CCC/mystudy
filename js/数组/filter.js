// arr.filter((item,index,arr)=>{})
// 1.创建一个数组，判断数组中是否存在某个值
var newarr = [
    { num: 1, val: 'ceshi', flag: 'aa' },
    { num: 2, val: 'ceshi2', flag: 'aa2'  }
  ]
//   console.log(newarr.filter(item => item.num===2 ))
//   2.去掉空数组空字符串、undefined、null
var arr = ['1','2',undefined, '3.jpg',null,22,""]
// console.log(arr.filter(item=>item))
// 3.去掉数组中不符合项
var arr1 = [20,30,50, 96,50]
var newArr = arr1.filter(item => item>40)  
console.log(newArr)
// 4.数组去重
var arr2 = [2,1,4,55,5,5,5,2]
var result = arr2.filter((a,b,c)=>c.indexOf(a)===b)
console.log(result)