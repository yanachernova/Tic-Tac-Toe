import React from 'react';
import ReactDOM from 'react-dom';
import TicTac from './App';
import * as serviceWorker from './serviceWorker';
 // Add css files
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
 import './index.css';
 // Add js files
 import 'jquery';
 import 'popper.js';
 import 'bootstrap';





ReactDOM.render(<TicTac />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
