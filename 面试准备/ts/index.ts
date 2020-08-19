let str:string = "你好ts"

let str1:string = "你好typescript"

// 定义数组
let arr:number[] = [2,1,3]

let arr1:Array<Number> = [12,312,1]

// 元组类型
let arr2:[string,boolean,number]=["12",true,12]

// 枚举类型 enum
enum Flag {success=1,error=2}  
var f:Flag = Flag.success
//若是没有赋值则默认为索引值
enum Color {red,blue=5,origin}
var red:Color = Color.origin  // origin 为上一值+1


// 定义未赋值
var num:number|undefined;
console.log(num)

// never类型，代表不会出现的值
var a:never;
// a=(()=>{
//     throw('123')
// })()



// 函数定义
function func(num:number,str:string):number{
    return num+parseInt(str)
}
// str为可选参数，可填可不填
function func1(num:number,str?:string):void{}

// 剩余参数
function func2(...res:Array<Number>):void{}


// 接口
interface FullName{
    firstName:string;
    secondName:string;
}

// 必须包含firstName和secondName
function printName(name:FullName){
    return name.firstName+name.secondName
}
var obj = {
    age:12,
    firstName:'c',
    secondName:'c'
}
console.log(printName(obj))


// 加密的函数类型接口
interface encrypt{
    (key:string,value:string):string;
}
var md5:encrypt=function(key:string,value:string):string{
    return key + value
}

// 数组的约束
interface UserArr{
    [index:number]:string
}

var arr3:UserArr=['1233','123']

// 对象的约束
interface UserObj {
    [index:string]:string
}
var obj1:UserObj = {a:'123'}

// 类类型接口
interface UserClass{
    name:string,
    eat(str:string):void
}
class Dog implements UserClass{
    name:string
    constructor(name:string){
        this.name=name
    }
    eat(str:string){
        console.log(str)
    }
}