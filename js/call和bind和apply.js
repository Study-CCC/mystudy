var obj = {
    age:20,
    name: 'c'
}
var arr = [2,4,51,234,4]
function fn(){
    console.log(this.age+' '+this.name)
}
// fn.call(obj)
// console.log(Math.max.apply(Math,arr));// apply第二项为数组
function fn1(a,b,c){
    console.log(a,b,c)
    console.log(this.age+' '+this.name)
}
fn1.call(obj,1,2,3)
fn1.apply(obj,[1,2,3])
   