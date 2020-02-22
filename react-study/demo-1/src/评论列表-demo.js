import React, { Component } from 'react';
import ReactDom from 'react-dom'

function CmtItem(props) {
    return 
    <div>
        <p>评论人id:{props.id}</p>
        评论人姓名:{props.user}
        评论内容:{props.content}
        </div>
}

class Cmt extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentsList: [
                { id: 1, user: '张三',content:'abc'},
                { id: 2, user: '李四',content:'efd' },
                { id: 3, user: '王五',content:'fasfas' }
            ]
        }
    }
    render() {
        return 
        <div>
            <p>这是评论列表</p>
            {this.state.CommentsList.map(item=><CmtItem {...item}></CmtItem>)}
        </div>
    }

}