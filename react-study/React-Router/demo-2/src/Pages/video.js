import React from 'react'
import { Route ,Link} from 'react-router-dom'
import Vue from './video/Vue'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'


function Video() {
    return (
        <div>
            <div className="topNav">
            <ul>
                <li><Link to="/video/vue">vue教程</Link></li>
                <li><Link to="/video/react">react教程</Link></li>
                <li><Link to="/video/flutter">flutter教程</Link></li>
                </ul>
        </div>
            <div className="videoContent">
                <h3>视频教程</h3>
                <Route path="/video/vue" component={Vue}></Route>
                <Route path="/video/react" component={ReactPage}></Route>
                <Route path="/video/flutter" component={Flutter}></Route>
            </div>
        </div>
    )
}

export default Video