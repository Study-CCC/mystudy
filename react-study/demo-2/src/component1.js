import React, { Component } from 'react';

class Cmp1 extends Component {
    constructor(){
        super()
        this.state = { 
            a:123
         }
    }
   
    render() { 
        console.log("render");
        return ( 
            <div>
                <input type="text" value={this.state.a} onChange={this.dataChange.bind(this)}></input>    {/**onChange中使用箭头函数包裹函数则不需要绑定this */}
            </div>
         );
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    shouldComponentUpdate(){                          {/*应该有返回值,返回true则为继续更新,返回false为停止更新*/}
        console.log("shouldComponentUpdate");
        return true
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    dataChange(e){
        // console.log(this);
        
        this.setState({
            a:e.target.value
        })
    }
}
 
export default Cmp1;