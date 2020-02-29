import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Component'
import { Provider } from 'react-redux'
import store from './store'
const App = (
    <Provider store={store}>     {/*可以让包裹的组件均获得store*/}
        <Comp />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));