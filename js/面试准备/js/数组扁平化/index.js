// 数组扁平化就是将有多层嵌套的数组转化为只有一层的数组
var arr = [1,2,3,4,[5,6,[7,8]],true] 

// 方法1:递归
function flatten(arr){
    let res = []
    for(let i=0,len=arr.length;i<len;i++){
      res = res.concat(Array.isArray(arr[i])?flatten(arr[i]):arr[i])
    }
    return res
}

// 方法2:toString 适用于元素都是数字
arr.toString().split(',').map(item=>{
    return +item
})

// 方法3:ES6的flat(deep)
// arr.flat(Infinity)

// 方法4: reduce方法,本质也是递归
function reduceFlat(arr){
    return arr.reduce((prev,cur)=>prev.concat(Array.isArray(cur)?reduceFlat(cur):cur),[])
}

// 方法5: ES6的扩展运算符
function es6Flat(arr){
    while(arr.some(item=>Array.isArray(item))){
        console.log(arr)
        arr = [].concat(...arr)
    }
    return arr;
}
console.log(es6Flat(arr));