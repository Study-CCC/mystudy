import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'react-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(                //只接受两个参数,要使用多个中间件要使用增强函数
    reducer,        
    enhancer
    )
export default store