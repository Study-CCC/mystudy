import React from "react"
import ReactDom from "react-dom"

// 参数1: 元素类型
// 参数2: 元素属性对象
// 参数3: 子节点或者文本信息
// 参数n: 其他子节点
let h2 = React.createElement("a", { id: "abc" }, "abc")
let h = React.createElement('h1', null, "this is a h1", h2)

// 在js中默认不能写html语言,要使用babel来转换这些js中的标签
// 这种 在 JS 中，混合写入类似于 HTML 的语法，叫做 JSX 语法； 符合 XML 规范的 JS ；
//  JSX 语法的本质，还是 在运行的时候，被转换成了 React.createElement 形式来执行的；
let hm = <div>123</div>
// ReactDom.render(hm,document.getElementById("app"))
function Hello(props) {
    return <div>123456---{props.a}---{props.b}</div>
}
const data = {
    a: 111,
    b: 222
}
ReactDom.render(<Hello {...data}></Hello>, document.getElementById("app"))