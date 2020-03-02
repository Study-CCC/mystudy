import React from 'react'
import Home from './Home'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

function Dom1(){
    return <h1>dom1</h1>
}
function Dom2(){
    return <h1>dom2</h1>
}
class AppRouter extends React.Component{
    constructor(props){
        super(props)
        // this.props.history.push('/home/')
    }
    render(){
        return (<Router>
            {/* <Redirect to="/home/"></Redirect> */}
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            <Route path="/" exact component={Dom1}></Route>
            <Route path="/list/" component={Dom2}></Route>
            <Route path="/home/" component={Home}></Route>
        </Router>)
    }
}

export default AppRouter;