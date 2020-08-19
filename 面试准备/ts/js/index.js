"use strict";
var str = "你好ts";
var str1 = "你好typescript";
// 定义数组
var arr = [2, 1, 3];
var arr1 = [12, 312, 1];
// 元组类型
var arr2 = ["12", true, 12];
// 枚举类型 enum
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
//若是没有赋值则默认为索引值
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["origin"] = 6] = "origin";
})(Color || (Color = {}));
var red = Color.origin; // origin 为上一值+1
// 定义未赋值
var num;
console.log(num);
// never类型，代表不会出现的值
var a;
// a=(()=>{
//     throw('123')
// })()
// 函数定义
function func(num, str) {
    return num + parseInt(str);
}
// str为可选参数，可填可不填
function func1(num, str) { }
// 剩余参数
function func2() {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
}
// 必须包含firstName和secondName
function printName(name) {
    return name.firstName + name.secondName;
}
var obj = {
    age: 12,
    firstName: 'c',
    secondName: 'c'
};
console.log(printName(obj));
var md5 = function (key, value) {
    return key + value;
};
var arr3 = ['1233', '123'];
var obj1 = { a: '123' };
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        console.log(str);
    };
    return Dog;
}());
