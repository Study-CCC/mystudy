import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'       //默认导入store里面的index.js
class TodoList extends Component {
    constructor(props){
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
    }
    render() { 
        return ( 
            <div>
                <Input placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}}></Input>
                <Button>增加</Button>
                <List
                bordered  
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                  )}></List>
            </div>
         );
    }
}
 
export default TodoList;