// CSDN文档链接：https://blog.csdn.net/itcast_cn/article/details/82887895
// 隐式转换介绍
/*在js中，当运算符在运算时，如果两边数据不统一，CPU就无法计算，这时我们编译器
会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算*/

// 隐式转换规则
// 1. 转成string类型： +（字符串连接符） 
// 2..转成number类型：++/--(自增自减运算符) + - * / %(算术运算符) > < >= <= == != === !=== (关系运算符)
// 3. 转成boolean类型：!（逻辑非运算符）
// 坑一：字符串连接符与算术运算符隐式转换规则混淆
function trap1() {
    console.log(1 + true)
    console.log(1 + "true")
    console.log(1 + undefined)
    console.log(1 + null)
}
// 坑二：关系运算符：会把其他数据类型转换成number之后再比较关系
function trap2() {
    console.log("2" > 10)
    console.log(Number("v"))
    console.log(2 == "2")
    console.log("2" > "10")  //str.charCodeAt()默认返回第一个字符的编码,如果想要查第二个要传入下标参数
    console.log("abc" > "a")
    console.log("abc" > "aab")
    console.log(NaN === NaN)
    console.log(undefined == null)
}
// 坑三：复杂数据类型在隐式转换时会先转成String，然后再转成Number运算
// 复杂数据类型转化为number类型顺序为先用valueOf()获取原始值,再用toString()方法转化为string类型，再将string转化number
function trap3() {
    var a = {
        i:0,
        valueOf:function(){
            return ++a.i;
        }
    }
    if(a==1&&a==2&&a==3){
           console.log(true) 
    }
}
// 坑四：逻辑非隐式转换与关系运算符隐式转换搞混淆
// 逻辑非:将其他数据类型使用Boolean()转化为布尔类型
// 以下8种情况转化会得false，其他情况都转化为true：0、-0、NaN、undefined、null、"（空字符串）"、false、document.all()
function trap4(){
    console.log(![]==[])
    console.log([]==[]) //引用类型数据存储在堆中，栈中存储的是地址
    console.log({}==!{})
    console.log({}=={})
}
trap4()
