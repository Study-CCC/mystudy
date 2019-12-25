// 1.数组的操作
var arr = [1,2,3,4,5]
const [s,...n]=arr;
// console.log("this is s "+s+" this is n "+n)


// 2.返回查找值
function obj(){
    const a=1,b=2,c=3,d=4;
    return{a,b,c,d}
}
const {a,c}=obj()
// console.log(a,c)

//3.交换变量的值
let x = 1;
let y = 2;
[x,y] = [y,x];
// console.log(x,y);  //x = 2,y = 1;