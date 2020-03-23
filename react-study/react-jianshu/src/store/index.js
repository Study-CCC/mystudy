import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
import thunk from 'redux-thunk'        // 使用redux-thunk后action可以不止是对象还可以是函数

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?          
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose            

const enhancer = composeEnhancers(applyMiddleware(thunk))          //同时使用redux devtools插件跟redux-thunk

const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去
