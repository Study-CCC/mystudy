import React from 'react'
import { Input, Button, List } from 'antd'
import { connect } from 'react-redux'
function Comp(props) {
    let {inputChange,inputValue,addItem,list,deleteItem} = props
    return (
        <div>
            <Input onChange={inputChange} value={inputValue} style={{ width: '250px', marginRight: '10px' }}></Input>
            <Button onClick={addItem}>增加</Button>
            <List
                bordered
                dataSource={list}
                renderItem={(item, index) => (
                    <List.Item onClick={()=>{deleteItem(index)}}>
                        {item}
                    </List.Item>
                )}></List>
        </div>
    )
}
const stateProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value    
            }
            dispatch(action)
        },
        addItem(){
            let action = {
                type:'add_item'
            }
            dispatch(action)
        },
        deleteItem(index){
            let action = {
                type: 'delete_item',
                index:index
            }
            dispatch(action)
        }
    }
}
export default connect(stateProps, dispatchToProps)(Comp)