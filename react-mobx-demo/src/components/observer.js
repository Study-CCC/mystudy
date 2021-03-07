import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

class Todo {
  id = Math.random()
  @observable title = '';
  @observable finished = false;

  constructor(title) {
    this.title = title
  }
}

class Store {
  @observable todos = []
}
var store = new Store();
@observer
class TodoList extends React.Component{
  render(){
    return <div></div>
  }
}
export default TodoList;