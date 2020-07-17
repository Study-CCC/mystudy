var obj = {
    a:1,
    b:2
}
var obj1 = {
    a:1,
    b:2,
    c:function(){

    },
    d:{
        e:1
    }
}
var arr = [1,2,3,4]
// 实现浅拷贝方法
// 1. = 直接赋值
 var copyObj = obj
 //2. Object.assign()
 var copyObj1 = Object.assign(obj)
// 实现深拷贝方法
// 1. 递归
function deepClone(obj){
    let cloneObj = Array.isArray(obj)?[]:{}
    if(obj&&typeof obj ==='object'){
    for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(typeof obj[key]=='object'){
                    cloneObj[key] = deepClone(obj[key])
                }else{
                    cloneObj[key]=obj[key]
                }
            }}
    }
    return cloneObj
}
// 2. JSON方法,当obj下有属性值为方法时,无法打印该属性
    var copyObj2 = JSON.parse(JSON.stringify(obj))