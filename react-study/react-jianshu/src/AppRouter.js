import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Article from './pages/Article'
const AppRouter=()=>(
    <Router>
        <Route path="/" exact component = {Home} />
        <Route path="/login" component = {Login} />
        <Route path="/register" component = {Register} />
        <Route path="/article/:id" component = {Article} />
    </Router>
)
export default AppRouter