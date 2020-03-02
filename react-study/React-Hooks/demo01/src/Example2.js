import  React,{ useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function dom1() {
    return (
        <div>
            dom1
        </div>
    )
}
function dom2() {
    return (
        <div>
            dom2
        </div>
    )
}
function Example2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`you click ${count}次`);
        return () => { console.log("1231243") }
    })
    return (
        <Router>
        <div>
            <div><p>当前次数为{count}</p>
                <button onClick={() => { setCount(count + 1) }}>点击增加</button></div>
            <Link to="/">dom1</Link>
            <Link to="/dom">dom2</Link>
            <Route path="/" exact component={dom1} />
            <Route path="/dom" component={dom2} />
        </div></Router>
    )
}
export default Example2