import React, { Component } from 'react';
import ReactDom from "react-dom"

// 创建的第一种方式   通过构造函数创造  只有props,不可改, 无私有state 无生命周期  React中这种方式性能更快
function Hello(props){
return <div>123456---{props.a}---{props.b}</div>
}
// 创建的第二种方式  通过class构造 有 state 有 生命周期
class Abc extends React.Component{
    constructor(){
        super()}
        render(){
            return <div>12</div>
        }
}
const data = {
    a:111,
    b:222
}
// ReactDom.render(<Hello {...data}></Hello>,do(cument.getElementById("app"))
ReactDom.render(<Abc></Abc>,document.getElementById("app"))