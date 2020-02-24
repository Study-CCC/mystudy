import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cmt from "./component1"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Cmt />, document.getElementById('root'));

serviceWorker.unregister();