import React, { Component } from 'react';
import ReactDom from "react-dom"

// 创建的第一种方式
function Hello(props){
return <div>123456---{props.a}---{props.b}</div>
}
const data = {
    a:111,
    b:222
}
ReactDom.render(<Hello {...data}></Hello>,document.getElementById("app"))