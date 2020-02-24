import React, { Component } from 'react';
import ReactDom from 'react-dom'

class DataDom extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: 'abc'
        }
    }
    bindData(e) {
        // console.log(e.target.value);
        // console.log(this);
        
        this.setState({
            msg: this.refs.abc.value
        })

    }
    render() {
        return <input value={this.state.msg} ref='abc' onChange={e => { this.bindData(e) }}></input>
    }
}