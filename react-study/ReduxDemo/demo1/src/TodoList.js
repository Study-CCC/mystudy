import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'       //默认导入store里面的index.js
import { CHANGE_INPUT,ADD_DATA,DELETE} from './store/actionType'
class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.addStore = this.addStore.bind(this)
       store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div>
                <Input value={this.state.inputValue} placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}} onChange={(e)=>{this.changeInputValue(e)}}></Input>
                <Button onClick={this.addStore}>增加</Button>
                <List
                bordered  
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>{this.deleteData(item,index)}}>
                        {item}
                    </List.Item>
                  )}></List>
            </div>
         );
    }
    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e){
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }
    addStore(){
        const action = {
            type:ADD_DATA,
        }
        store.dispatch(action)
    }
    deleteData(item,index){
        // console.log(item,index);
        const action = {
            type:DELETE,
            index:index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;