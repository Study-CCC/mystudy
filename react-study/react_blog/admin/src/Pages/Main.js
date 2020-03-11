import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex'
import { Route } from "react-router-dom";
import AddArticle from './AddArticle'
function Main() {
    return (
        <Router>
            <Route path="/login/" exact component={Login} />
            <Route path="/index/" exact component={AdminIndex} />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div>
                    <Route path="/index/" exact component={AddArticle} />
                </div>
            </div>
        </Router>
    )
}
export default Main