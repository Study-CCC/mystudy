import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import routeConfig from './config/routeConfig'
const AppRouter=()=>(
    <Router>
       {routeConfig.map((item,index)=>{
          return <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
       })}
    </Router>
)
export default AppRouter