import React from "react"
import ReactDom from "react-dom"

// 参数1: 元素类型
// 参数2: 元素属性对象
// 参数3: 子节点或者文本信息
// 参数n: 其他子节点
let h2= React.createElement("a",{id:"abc"},"abc")
let h = React.createElement('h1',null,"this is a h1",h2)
ReactDom.render(h,document.getElementById("app"))